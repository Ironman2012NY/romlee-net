import { useEffect, useState } from "react";
import { loadYoutubeStats, mergeYoutubeStats, YT_WATCH_HOURS, type YtStats } from "@/lib/youtube";
import { formatNumber, cn } from "@/lib/utils";
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
    { value: formatNumber(stats.subscribers), label: copy.subs, exact: stats.subscribers },
    { value: formatNumber(stats.totalViews), label: copy.viewsTotal, exact: stats.totalViews },
    {
      value: new Intl.NumberFormat("de-DE", {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
      }).format(YT_WATCH_HOURS),
      label: `${copy.watchHours} (Studio)`,
      exact: YT_WATCH_HOURS,
    },
    { value: formatNumber(stats.videoCount), label: copy.videos, exact: stats.videoCount },
  ];

  return (
    <div>
      <div
        className={cn(
          variant === "panel"
            ? "grid w-full grid-cols-2 gap-x-6 gap-y-8 rounded-xl border border-border bg-surface p-5 sm:p-6 xl:grid-cols-4"
            : "grid w-full grid-cols-2 gap-3 rounded-xl border border-white/20 bg-bg/80 p-4 backdrop-blur-sm sm:p-5 lg:grid-cols-4",
        )}
      >
        {items.map((item) => (
          <div key={item.label} className="min-w-0" title={formatNumber(item.exact)}>
            <p className="font-sans text-[clamp(1.05rem,3vw,2rem)] font-semibold leading-tight tabular-nums text-fg">
              {item.value}
            </p>
            <p className="mt-1 text-xs leading-snug text-fg/80">{item.label}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-subtle">
        <span className="inline-block size-1.5 rounded-full bg-accent" aria-hidden="true" />
        YouTube
        {stats.joined ? ` · ${copy.channelSince} ${formatJoined(stats.joined)}` : ""} ·{" "}
        {formatNumber(stats.totalViews)} {copy.viewsWord}
      </p>
    </div>
  );
}


function formatJoined(isoDate: string) {
  const d = new Date(`${isoDate}T00:00:00`);
  if (Number.isNaN(d.getTime())) return isoDate;
  return d.toLocaleDateString("de-DE", { month: "long", year: "numeric" });
}
