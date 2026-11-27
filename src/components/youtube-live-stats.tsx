import { useEffect, useState } from "react";
import { loadYoutubeStats, mergeYoutubeStats, YT_WATCH_HOURS, YT_STUDIO_VIEWS_365, YT_STUDIO_DATE, type YtStats } from "@/lib/youtube";
import { cn } from "@/lib/utils";
import { useT } from "@/components/lang-switch";
import { useLocale } from "@/lib/locale";

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
  const locale = useLocale(s => s.locale);
  const compact = (value: number) => new Intl.NumberFormat(locale, { notation: "compact", maximumFractionDigits: 1 }).format(value);
  const exactNumber = (value: number) => new Intl.NumberFormat(locale, { maximumFractionDigits: 1 }).format(value);
  const labels = locale === "de" ? ["Einzelne Zuschauer", "Aufrufe in 48 Std."] : locale === "pl" ? ["Unikalni widzowie", "Wyświetlenia w 48 godz."] : locale === "es" ? ["Espectadores únicos", "Vistas en 48 h"] : locale === "ar" ? ["المشاهدون الفريدون", "المشاهدات خلال 48 ساعة"] : locale === "zh" ? ["独立观众", "48小时观看次数"] : ["Unique viewers", "Views in 48h"];
  const items = [
    { value: exactNumber(stats.subscribers), label: copy.subs, exact: exactNumber(stats.subscribers) },
    { value: "≈ " + compact(YT_STUDIO_VIEWS_365), label: `${copy.views365} (Studio)`, exact: "≈ " + compact(YT_STUDIO_VIEWS_365) },
    {
      value: new Intl.NumberFormat(locale, {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
      }).format(YT_WATCH_HOURS),
      label: `${copy.watchHours} (Studio)`,
      exact: exactNumber(YT_WATCH_HOURS),
    },
    { value: exactNumber(stats.videoCount), label: copy.videos, exact: exactNumber(stats.videoCount) },
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
          <div key={item.label} className="min-w-0" title={item.exact}>
            <p className="font-sans text-[clamp(1.05rem,3vw,2rem)] font-semibold leading-tight tabular-nums text-fg">
              {item.value}
            </p>
            <p className="mt-1 text-xs leading-snug text-fg/80">{item.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3 text-fg sm:max-w-xl"><div className="rounded-md bg-bg/80 px-3 py-2"><strong className="font-semibold tabular-nums">≈ {compact(9_600_000)}</strong><span className="ml-2 text-xs text-fg/80">{labels[0]} (365d)</span></div><div className="rounded-md bg-bg/80 px-3 py-2"><strong className="font-semibold tabular-nums">{exactNumber(723_098)}</strong><span className="ml-2 text-xs text-fg/80">{labels[1]}</span></div></div>
      <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-fg/80">
        <span className="inline-block size-1.5 rounded-full bg-accent" aria-hidden="true" />
        YouTube
        {stats.joined ? ` · ${copy.channelSince} ${formatJoined(stats.joined)}` : ""} ·{" "}
        YouTube Studio · {copy.asOf} {new Intl.DateTimeFormat(locale, { dateStyle: "medium", timeZone: "UTC" }).format(new Date(YT_STUDIO_DATE + "T00:00:00Z"))}
      </p>
    </div>
  );
}


function formatJoined(isoDate: string) {
  const d = new Date(`${isoDate}T00:00:00`);
  if (Number.isNaN(d.getTime())) return isoDate;
  return d.toLocaleDateString("de-DE", { month: "long", year: "numeric" });
}
