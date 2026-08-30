import { useEffect, useState } from "react";
import { loadYoutubeStats, mergeYoutubeStats, type YtStats } from "@/lib/youtube";
import { formatNumber, formatViews, cn } from "@/lib/utils";
import { useT } from "@/components/lang-switch";

const POLL_MS = 60_000;
const STORE_KEY = "romlee-yt-floor";

function readStored(): YtStats | null {
  try {
    const raw = sessionStorage.getItem(STORE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as YtStats;
  } catch {
    return null;
  }
}

function writeStored(stats: YtStats) {
  try {
    sessionStorage.setItem(STORE_KEY, JSON.stringify(stats));
  } catch {
    /* ignore */
  }
}

export function useLiveYoutube(initial: YtStats): YtStats {
  const [stats, setStats] = useState(initial);

  useEffect(() => {
    const stored = readStored();
    setStats((prev) => mergeYoutubeStats(stored ?? prev, initial));
  }, [initial]);

  useEffect(() => {
    let cancelled = false;
    const refresh = async () => {
      try {
        const next = await loadYoutubeStats();
        if (cancelled) return;
        setStats((prev) => {
          const merged = mergeYoutubeStats(prev, next);
          writeStored(merged);
          return merged;
        });
      } catch {
        /* keep last good snapshot */
      }
    };
    const onVisible = () => {
      if (document.visibilityState === "visible") void refresh();
    };
    const id = window.setInterval(refresh, POLL_MS);
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      cancelled = true;
      window.clearInterval(id);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  return stats;
}

export function YoutubeLiveStats({
  stats,
  variant = "hero",
}: {
  stats: YtStats;
  variant?: "hero" | "panel";
}) {
  const copy = useT();
  const items = [
    { value: formatViews(stats.subscribers), label: copy.subs, exact: stats.subscribers },
    { value: formatViews(stats.totalViews), label: copy.viewsTotal, exact: stats.totalViews },
    { value: formatViews(stats.views365), label: copy.views365, exact: stats.views365 },
    { value: formatNumber(stats.videoCount), label: copy.videos, exact: stats.videoCount },
  ];

  return (
    <div>
      <div
        className={cn(
          variant === "panel"
            ? "grid gap-6 rounded-xl border border-border bg-surface p-6 sm:grid-cols-2 lg:grid-cols-4"
            : "flex flex-wrap gap-8",
        )}
      >
        {items.map((item) => (
          <div key={item.label} title={formatNumber(item.exact)}>
            <p
              className={cn(
                "font-display tabular-nums leading-none text-fg",
                variant === "panel" ? "text-3xl" : "text-3xl sm:text-4xl",
              )}
            >
              {item.value}
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted">{item.label}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-subtle">
        <span className="inline-block size-1.5 rounded-full bg-accent" aria-hidden="true" />
        {copy.liveFrom}
        {stats.joined ? ` · ${copy.channelSince} ${formatJoined(stats.joined)}` : ""} ·{" "}
        {formatNumber(stats.totalViews)} {copy.viewsWord} · {copy.asOf} {formatClock(stats.fetchedAt)}
      </p>
    </div>
  );
}

function formatClock(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" });
}

function formatJoined(isoDate: string) {
  const d = new Date(`${isoDate}T00:00:00`);
  if (Number.isNaN(d.getTime())) return isoDate;
  return d.toLocaleDateString("de-DE", { month: "long", year: "numeric" });
}
