import { useEffect, useState } from "react";
import { loadYoutubeStats, mergeYoutubeStats, YT_STUDIO, type YtStats } from "@/lib/youtube";
import { cn } from "@/lib/utils";
import { useT } from "@/components/lang-switch";
import { useLocale } from "@/lib/locale";

const POLL_MS = 60_000;
const STORE_KEY = "romlee-yt-snapshot-v2";

function readStored(): YtStats | null {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return null;
    const value = JSON.parse(raw) as YtStats;
    return Array.isArray(value.entries)
      && typeof value.channelStatsAt === "string"
      && Number.isFinite(Date.parse(value.channelStatsAt))
      && [value.subscribers, value.totalViews, value.videoCount].every(Number.isFinite)
      ? value : null;
  } catch {
    return null;
  }
}

function writeStored(stats: YtStats) {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(stats));
  } catch {
    /* Storage is optional; the current server snapshot still works. */
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
        // A failed refresh must not leave a stale snapshot marked as live.
        if (!cancelled) setStats((prev) => ({ ...prev, live: false }));
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

const labels = {
  en: { public: "Public YouTube channel", updated: "Updated", saved: "Last saved figures", studio: "YouTube Studio", snapshot: "Confirmed snapshot", views: "Views in the last 365 days", viewers: "Unique viewers", hours: "Watch hours", recent: "Views in 48 hours", subscribers: "Subscribers", approx: "approx.", period: "365 days ending {date}; subscriber total and 48-hour views shown separately" },
  de: { public: "Öffentlicher YouTube-Kanal", updated: "Aktualisiert", saved: "Letzter gespeicherter Stand", studio: "YouTube Studio", snapshot: "Bestätigter Stand", views: "Aufrufe in den letzten 365 Tagen", viewers: "Einzelne Zuschauer", hours: "Wiedergabestunden", recent: "Aufrufe in 48 Stunden", subscribers: "Abonnenten", approx: "ca.", period: "365 Tage bis {date}; Abonnentenzahl und 48-Stunden-Aufrufe separat" },
  pl: { public: "Publiczny kanał YouTube", updated: "Aktualizacja", saved: "Ostatnio zapisane dane", studio: "YouTube Studio", snapshot: "Potwierdzone dane", views: "Wyświetlenia w ostatnich 365 dniach", viewers: "Unikalni widzowie", hours: "Godziny oglądania", recent: "Wyświetlenia w 48 godzin", subscribers: "Subskrybenci", approx: "ok.", period: "365 dni do {date}; liczba subskrybentów i wyświetlenia z 48 godzin osobno" },
  es: { public: "Canal público de YouTube", updated: "Actualizado", saved: "Últimas cifras guardadas", studio: "YouTube Studio", snapshot: "Datos confirmados", views: "Visualizaciones en los últimos 365 días", viewers: "Espectadores únicos", hours: "Horas de visualización", recent: "Visualizaciones en 48 horas", subscribers: "Suscriptores", approx: "aprox.", period: "365 días hasta el {date}; suscriptores totales y vistas de 48 horas por separado" },
  zh: { public: "YouTube 公开频道", updated: "更新于", saved: "最近保存的数据", studio: "YouTube Studio", snapshot: "已确认的数据", views: "过去365天的观看次数", viewers: "独立观众", hours: "观看时长（小时）", recent: "48小时内的观看次数", subscribers: "订阅人数", approx: "约", period: "截至{date}的365天；订阅总数与48小时观看次数单独列出" },
};

export function YoutubeLiveStats({
  stats,
  variant = "hero",
}: {
  stats: YtStats;
  variant?: "hero" | "panel";
}) {
  const copy = useT();
  const locale = useLocale((s) => s.locale);
  const text = labels[locale as keyof typeof labels] ?? labels.en;
  const number = new Intl.NumberFormat(locale);
  const date = (value: string) => new Intl.DateTimeFormat(locale, {
    day: "numeric", month: "short", year: "numeric", timeZone: "Europe/Berlin",
  }).format(new Date(value.length === 10 ? `${value}T12:00:00Z` : value));
  const compact = new Intl.NumberFormat(locale, { notation: "compact", maximumFractionDigits: 1 });
  const items = [
    { value: number.format(stats.subscribers), label: copy.subs },
    { value: number.format(stats.totalViews), label: copy.viewsTotal },
    { value: number.format(stats.videoCount), label: copy.videos },
  ];
  const studioItems = [
    { value: `${text.approx} ${compact.format(YT_STUDIO.views365)}`, label: text.views },
    { value: number.format(YT_STUDIO.watchHours), label: text.hours },
    { value: `${text.approx} ${compact.format(YT_STUDIO.uniqueViewers)}`, label: text.viewers },
    { value: number.format(YT_STUDIO.subscribers), label: text.subscribers },
    { value: number.format(YT_STUDIO.views48), label: text.recent },
  ];

  return (
    <div className={cn("rounded-2xl border border-border", variant === "panel" ? "bg-surface p-5 sm:p-7" : "bg-bg/90 p-5 backdrop-blur-sm sm:p-7")}>
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">{text.public}</p>
        <p className="text-xs text-muted">
          {stats.live ? text.updated : text.saved} · <time dateTime={stats.channelStatsAt}>{date(stats.channelStatsAt)}</time>
        </p>
      </div>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {items.map((item) => (
          <div key={item.label} className="min-w-0">
            <dd className="font-sans text-3xl font-semibold leading-tight tracking-tight tabular-nums text-fg sm:text-[clamp(1.75rem,3vw,2.5rem)]">{item.value}</dd>
            <dt className="mt-1 text-sm text-muted">{item.label}</dt>
          </div>
        ))}
      </dl>
      <div className="mt-6 border-t border-border pt-5">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <p className="text-sm font-medium text-fg">{text.studio}</p>
          <p className="text-xs text-muted">{text.snapshot} · <time dateTime={YT_STUDIO.date}>{date(YT_STUDIO.date)}</time></p>
        </div>
        <p className="mt-1 text-xs text-muted">{text.period.replace("{date}", date(YT_STUDIO.periodEnd))}</p>
        <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3 lg:grid-cols-5">
          {studioItems.map((item) => (
            <div key={item.label} className="min-w-0">
              <dd className="font-sans text-xl font-semibold leading-tight tabular-nums text-fg">{item.value}</dd>
              <dt className="mt-1 text-xs leading-relaxed text-muted">{item.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
