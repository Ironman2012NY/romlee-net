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
  joined: string | null;
  fetchedAt: string;
  channelStatsAt: string;
  live: boolean;
};

const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36";

/** Public channel snapshot. These are all-time channel figures, not Studio analytics. */
export const YT_SNAPSHOT_DATE = "2026-11-27";
export const YT_FLOOR = {
  subscribers: 709_000,
  videoCount: 149,
  totalViews: 20_913_094,
  viewsById: {
    KBXOvQr3bAY: 7_305_701,
    YTefIyKLBQA: 1_502_374,
    sd_elh2GVhE: 1_911_040,
  } as Record<string, number>,
};

/** Artist-confirmed YouTube Studio screenshot, 27 November 2026. */
export const YT_STUDIO = {
  date: "2026-11-27",
  periodEnd: "2026-11-26",
  subscribers: 709_548,
  views365: 21_100_000,
  watchHours: 337_227.3,
  uniqueViewers: 9_600_000,
  views48: 723_098,
} as const;

// Existing named exports remain available to other pages.
export const YT_WATCH_HOURS = YT_STUDIO.watchHours;
export const YT_STUDIO_VIEWS_365 = YT_STUDIO.views365;
export const YT_STUDIO_DATE = YT_STUDIO.periodEnd;

function validCount(n: number, fallback: number) {
  return Number.isFinite(n) && n >= 0 ? n : fallback;
}

export function applyYoutubeFallbacks(stats: YtStats): YtStats {
  const viewsById = { ...YT_FLOOR.viewsById };
  for (const e of stats.entries) {
    viewsById[e.id] = validCount(e.views, viewsById[e.id] ?? 0);
  }
  return {
    ...stats,
    subscribers: validCount(stats.subscribers, YT_FLOOR.subscribers),
    videoCount: validCount(stats.videoCount, YT_FLOOR.videoCount),
    totalViews: validCount(stats.totalViews, YT_FLOOR.totalViews),
    channelStatsAt: stats.channelStatsAt || YT_SNAPSHOT_DATE,
    entries: stats.entries.map((e) => ({ ...e, views: viewsById[e.id] ?? e.views })),
  };
}

export function mergeYoutubeStats(prev: YtStats, next: YtStats): YtStats {
  const a = applyYoutubeFallbacks(prev);
  const b = applyYoutubeFallbacks(next);
  const byId = new Map<string, YtEntry>();
  for (const e of [...a.entries, ...b.entries]) {
    const old = byId.get(e.id);
    // A missing feed entry can be a fallback; a fetched entry is authoritative.
    byId.set(e.id, old && !e.published ? old : e);
  }
  // Keep the last dated channel snapshot if a refresh fails. Counts may decrease
  // after YouTube corrections, so never replace a fresh result with a maximum.
  const channel = b.live || Date.parse(b.channelStatsAt) >= Date.parse(a.channelStatsAt) ? b : a;
  return {
    ...b,
    subscribers: channel.subscribers,
    videoCount: channel.videoCount,
    totalViews: channel.totalViews,
    channelStatsAt: channel.channelStatsAt,
    entries: [...byId.values()],
    live: b.live,
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

  const parsedSubscribers =
    firstNumber(html, [
      /"subscriberCountText":"([^"]+)"/,
      /"subscriberCountText":\{"simpleText":"([^"]+)"/,
      /"subscriberCountText":\{"runs":\[\{"text":"([^"]+)"/,
      /"subscriberCount":"(\d+)"/,
    ]);

  const parsedTotalViews =
    firstNumber(html, [
      /"viewCountText":"([^"]+)"/,
      /"viewCountText":\{"simpleText":"([^"]+)"/,
      /"viewCountText":\{"runs":\[\{"text":"([^"]+)"/,
    ]);

  const parsedVideoCount = firstNumber(html, [
    /"videoCountText":"([^"]+)"/,
    /"videosCountText":"([^"]+)"/,
    /"videoCountText":\{"simpleText":"([^"]+)"/,
    /"videosCountText":\{"runs":\[\{"text":"([^"]+)"/,
  ]);

  const live = parsedSubscribers != null && parsedTotalViews != null && parsedVideoCount != null;
  const subscribers = live ? parsedSubscribers : YT_FLOOR.subscribers;
  const totalViews = live ? parsedTotalViews : YT_FLOOR.totalViews;
  const videoCount = live ? parsedVideoCount : YT_FLOOR.videoCount;

  const joined = parseJoined(html) ?? "2026-07-03";

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

  return applyYoutubeFallbacks({
    entries,
    subscribers,
    videoCount,
    totalViews,
    joined,
    fetchedAt,
    channelStatsAt: live ? fetchedAt : YT_SNAPSHOT_DATE,
    live,
  });
}

export const loadYoutubeStats = createServerFn({ method: "GET" }).handler(async () => {
  return fetchYoutubeStats();
});

export function viewsFor(stats: YtStats | undefined, id: string): number | undefined {
  const live = stats?.entries.find((e) => e.id === id)?.views;
  if (live != null && Number.isFinite(live) && live >= 0) return live;
  return YT_FLOOR.viewsById[id];
}
