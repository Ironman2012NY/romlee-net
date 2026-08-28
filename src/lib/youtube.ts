import { createServerFn } from "@tanstack/react-start";
import { SITE } from "@/data/site";

export type YtEntry = {
  id: string;
  title: string;
  views: number;
  published: string;
  isShort: boolean;
};

export type YtStats = {
  entries: YtEntry[];
  subscribers: number;
  videoCount: number;
  totalViews: number;
  views365: number;
  joined: string | null;
  fetchedAt: string;
  live: boolean;
};

const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36";

/** Never show numbers below this floor. Live values only raise it. */
export const YT_FLOOR = {
  subscribers: 112_000,
  videoCount: 49,
  totalViews: 11_000_000,
  views365: 11_000_000,
  viewsById: {
    KBXOvQr3bAY: 5_622_361,
    YTefIyKLBQA: 1_394_966,
  } as Record<string, number>,
};

function floorNum(n: number, min: number) {
  return Number.isFinite(n) && n > 0 ? Math.max(n, min) : min;
}

export function applyYoutubeFloor(stats: YtStats): YtStats {
  const viewsById = { ...YT_FLOOR.viewsById };
  for (const e of stats.entries) {
    viewsById[e.id] = floorNum(e.views, viewsById[e.id] ?? 0);
  }
  return {
    ...stats,
    subscribers: floorNum(stats.subscribers, YT_FLOOR.subscribers),
    videoCount: floorNum(stats.videoCount, YT_FLOOR.videoCount),
    totalViews: floorNum(stats.totalViews, YT_FLOOR.totalViews),
    views365: floorNum(stats.views365, YT_FLOOR.views365),
    entries: stats.entries.map((e) => ({ ...e, views: viewsById[e.id] ?? e.views })),
  };
}

export function mergeYoutubeStats(prev: YtStats, next: YtStats): YtStats {
  const a = applyYoutubeFloor(prev);
  const b = applyYoutubeFloor(next);
  const byId = new Map<string, YtEntry>();
  for (const e of [...a.entries, ...b.entries]) {
    const old = byId.get(e.id);
    byId.set(e.id, old ? { ...e, views: Math.max(old.views, e.views) } : e);
  }
  return {
    ...b,
    subscribers: Math.max(a.subscribers, b.subscribers),
    videoCount: Math.max(a.videoCount, b.videoCount),
    totalViews: Math.max(a.totalViews, b.totalViews),
    views365: Math.max(a.views365, b.views365),
    entries: [...byId.values()],
    live: a.live || b.live,
  };
}

function parseCompactNumber(raw: string): number | null {
  const cleaned = raw.replace(/\u00a0/g, " ").trim();
  const compact = cleaned.match(/^([\d.,]+)\s*([KMBTkmbt])\b/);
  if (compact) {
    const n = Number(compact[1].replace(",", "."));
    if (!Number.isFinite(n)) return null;
    const mul: Record<string, number> = {
      k: 1_000,
      m: 1_000_000,
      b: 1_000_000_000,
      t: 1_000_000_000_000,
    };
    return Math.round(n * mul[compact[2].toLowerCase()]);
  }
  const digits = cleaned.replace(/[^\d]/g, "");
  if (!digits) return null;
  const n = Number(digits);
  return Number.isFinite(n) ? n : null;
}

function firstNumber(html: string, patterns: RegExp[]): number | null {
  for (const pat of patterns) {
    const m = html.match(pat);
    if (m?.[1]) {
      const n = parseCompactNumber(m[1]);
      if (n != null) return n;
    }
  }
  return null;
}

function parseRss(xml: string): YtEntry[] {
  const entries: YtEntry[] = [];
  const blocks = xml.split("<entry>").slice(1);
  for (const block of blocks) {
    const id = block.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1];
    const title = block.match(/<title>([^<]+)<\/title>/)?.[1];
    const published = block.match(/<published>([^<]+)<\/published>/)?.[1] ?? "";
    const views = Number(block.match(/views="(\d+)"/)?.[1] ?? 0);
    const link = block.match(/<link rel="alternate" href="([^"]+)"/)?.[1] ?? "";
    if (!id || !title) continue;
    entries.push({
      id,
      title: title.replace(/<!\[CDATA\[|\]\]>/g, "").trim(),
      views,
      published,
      isShort: link.includes("/shorts/"),
    });
  }
  return entries;
}

async function fetchText(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": UA, "Accept-Language": "en-US,en;q=0.9,de;q=0.8" },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  }
}

function parseJoined(html: string): string | null {
  const m =
    html.match(/"joinedDateText":\{"content":"Joined ([^"]+)"/) ??
    html.match(/Beigetreten am ([^"<]+)/);
  if (!m?.[1]) return null;
  const d = new Date(m[1]);
  return Number.isNaN(d.getTime()) ? null : d.toISOString().slice(0, 10);
}

export async function fetchYoutubeStats(): Promise<YtStats> {
  const fetchedAt = new Date().toISOString();
  const [rssXml, aboutHtml] = await Promise.all([
    fetchText(`https://www.youtube.com/feeds/videos.xml?channel_id=${SITE.youtube.channelId}`),
    fetchText(`https://www.youtube.com/@RomLeeMusic/about`),
  ]);

  const entries = rssXml ? parseRss(rssXml) : [];
  const html = aboutHtml ?? "";

  const subscribers =
    firstNumber(html, [
      /"subscriberCountText":"([^"]+)"/,
      /"subscriberCountText":\{"simpleText":"([^"]+)"/,
      /"subscriberCount":"(\d+)"/,
    ]) ?? YT_FLOOR.subscribers;

  const totalViews =
    firstNumber(html, [
      /"viewCountText":"([^"]+)"/,
      /"viewCountText":\{"simpleText":"([^"]+)"/,
      /"viewCount":"(\d+)"/,
    ]) ?? YT_FLOOR.totalViews;

  const videoCount =
    firstNumber(html, [/"videoCountText":"([^"]+)"/, /"videosCountText":"([^"]+)"/]) ??
    YT_FLOOR.videoCount;

  const joined = parseJoined(html) ?? "2026-07-03";
  const cutoff = Date.now() - 365 * 24 * 60 * 60 * 1000;
  const joinedMs = joined ? Date.parse(`${joined}T00:00:00Z`) : NaN;
  const rss365 = entries.reduce((sum, e) => {
    const t = Date.parse(e.published);
    return Number.isNaN(t) || t < cutoff ? sum : sum + e.views;
  }, 0);
  const views365 = !Number.isNaN(joinedMs) && joinedMs >= cutoff ? totalViews : rss365 || totalViews;

  const known = new Set(entries.map((e) => e.id));
  for (const [id, views] of Object.entries(YT_FLOOR.viewsById)) {
    if (!known.has(id)) {
      entries.push({
        id,
        title: id,
        views,
        published: "",
        isShort: id === "YTefIyKLBQA",
      });
    }
  }

  return applyYoutubeFloor({
    entries,
    subscribers,
    videoCount,
    totalViews,
    views365,
    joined,
    fetchedAt,
    live: Boolean(aboutHtml || rssXml),
  });
}

export const loadYoutubeStats = createServerFn({ method: "GET" }).handler(async () => {
  return fetchYoutubeStats();
});

export function viewsFor(stats: YtStats | undefined, id: string): number | undefined {
  const live = stats?.entries.find((e) => e.id === id)?.views;
  const floor = YT_FLOOR.viewsById[id];
  if (live && floor) return Math.max(live, floor);
  if (live) return live;
  if (floor) return floor;
  return undefined;
}
