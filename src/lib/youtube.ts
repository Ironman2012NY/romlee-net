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

const FALLBACK: Omit<YtStats, "entries" | "fetchedAt"> = {
  subscribers: 112_000,
  videoCount: 49,
  totalViews: 10_960_000,
  views365: 10_960_000,
  joined: "2026-07-03",
  live: false,
};

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
    ]) ?? FALLBACK.subscribers;

  const totalViews =
    firstNumber(html, [
      /"viewCountText":"([^"]+)"/,
      /"viewCountText":\{"simpleText":"([^"]+)"/,
      /"viewCount":"(\d+)"/,
    ]) ?? FALLBACK.totalViews;

  const videoCount =
    firstNumber(html, [/"videoCountText":"([^"]+)"/, /"videosCountText":"([^"]+)"/]) ??
    FALLBACK.videoCount;

  const joined = parseJoined(html) ?? FALLBACK.joined;
  const cutoff = Date.now() - 365 * 24 * 60 * 60 * 1000;
  const joinedMs = joined ? Date.parse(`${joined}T00:00:00Z`) : NaN;
  const rss365 = entries.reduce((sum, e) => {
    const t = Date.parse(e.published);
    return Number.isNaN(t) || t < cutoff ? sum : sum + e.views;
  }, 0);
  const views365 = !Number.isNaN(joinedMs) && joinedMs >= cutoff ? totalViews : rss365 || totalViews;

  return {
    entries,
    subscribers,
    videoCount,
    totalViews,
    views365,
    joined,
    fetchedAt,
    live: Boolean(aboutHtml || rssXml),
  };
}

export const loadYoutubeStats = createServerFn({ method: "GET" }).handler(async () => {
  return fetchYoutubeStats();
});

export function viewsFor(stats: YtStats | undefined, id: string): number | undefined {
  return stats?.entries.find((e) => e.id === id)?.views;
}
