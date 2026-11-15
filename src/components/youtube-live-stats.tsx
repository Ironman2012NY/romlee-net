import { useEffect, useState } from "react";
import { loadYoutubeStats, mergeYoutubeStats, YT_WATCH_HOURS, type YtStats } from "@/lib/youtube";
import { formatNumber, formatViews, cn } from "@/lib/utils";
import { useT } from "@/components/lang-switch";

const POLL_MS = 60_000;
const STORE_KEY = "romlee-yt-floor";

function readStored(): YtStats | null {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as YtStats;
  } catch {
    return null;
  }
}

function writeStored(stats: YtStats) {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(stats));
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
    {
      value: new Intl.NumberFormat("de-DE", {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
      }).format(YT_WATCH_HOURS),
      label: copy.watchHours,
      exact: YT_WATCH_HOURS,
    },
    { value: formatNumber(stats.videoCount), label: copy.videos, exact: stats.videoCount },
  ];

  return (
    <div>
      <div
        className={cn(
          variant === "panel"
            ? "grid grid-cols-2 gap-x-4 gap-y-8 rounded-xl border border-border bg-surface p-5 sm:p-6 xl:grid-cols-4"
            : "grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4",
        )}
      >
        {items.map((item) => (
          <div key={item.label} className="min-w-0" title={formatNumber(item.exact)}>
            <p className="whitespace-nowrap font-display text-2xl leading-none tabular-nums text-fg sm:text-3xl">
              {item.value}
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted">{item.label}</p>
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
