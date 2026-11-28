import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHead, SiteShell } from "@/components/site-shell";
import { YoutubeEmbed } from "@/components/youtube-embed";
import { useLiveYoutube } from "@/components/youtube-live-stats";
import { shortsByViews, videosByViews, YOUTUBE_VIDEO_SNAPSHOT_DATE } from "@/data/youtube-order";
import { TRACKS, displaySongTitle } from "@/data/tracks";
import { useLocale } from "@/lib/locale";
import { loadYoutubeStats } from "@/lib/youtube";

export const Route = createFileRoute("/videos")({
  loader: () => loadYoutubeStats(),
  staleTime: 60_000,
  component: VideosPage,
});

const catalog = [
  ...videosByViews.map(clip => ({ ...clip, short: false })),
  ...shortsByViews.map(clip => ({ ...clip, short: true })),
];

const english = { videos: "Videos", short: "Short", shorts: "Shorts", video: "Video", views: "views", lead: "Most viewed on YouTube", snapshot: "Channel snapshot" };
const labels: Record<string, typeof english> = {
  en: english,
  de: { videos: "Videos", short: "Short", shorts: "Shorts", video: "Video", views: "Aufrufe", lead: "Am häufigsten auf YouTube angesehen", snapshot: "Kanalstand" },
  pl: { videos: "Filmy", short: "Short", shorts: "Shorts", video: "Film", views: "wyświetleń", lead: "Najczęściej oglądane na YouTube", snapshot: "Stan kanału" },
  es: { videos: "Vídeos", short: "Short", shorts: "Shorts", video: "Vídeo", views: "visualizaciones", lead: "Los más vistos en YouTube", snapshot: "Datos del canal" },
  zh: { videos: "视频", short: "短视频", shorts: "短视频", video: "视频", views: "次观看", lead: "按 YouTube 观看次数排序", snapshot: "频道数据日期" },
  ar: { videos: "الفيديوهات", short: "فيديو قصير", shorts: "الفيديوهات القصيرة", video: "فيديو", views: "مشاهدة", lead: "الأكثر مشاهدة على YouTube", snapshot: "تاريخ بيانات القناة" },
};

const tracksByVideo = new Map(TRACKS.map(track => [track.youtubeId, track]));

type Filter = "video" | "short";

function VideosPage() {
  const stats = useLiveYoutube(Route.useLoaderData());
  const locale = useLocale(state => state.locale);
  const copy = labels[locale] ?? english;
  const [filter, setFilter] = useState<Filter>("video");
  const channelCounts = new Map(stats.entries.map(entry => [entry.id, entry.views]));
  const ranked = catalog
    .filter(clip => clip.short === (filter === "short"))
    .map(clip => {
      const liveViews = channelCounts.get(clip.id) ?? 0;
      return { ...clip, views: Math.max(clip.views, liveViews), rounded: clip.rounded && liveViews < clip.views };
    })
    .sort((a, b) => b.views - a.views);

  const whole = new Intl.NumberFormat(locale);
  const compact = new Intl.NumberFormat(locale, { notation: "compact", compactDisplay: "long", maximumSignificantDigits: 3 });
  const date = new Intl.DateTimeFormat(locale, { dateStyle: "medium", timeZone: "UTC" }).format(new Date(YOUTUBE_VIDEO_SNAPSHOT_DATE + "T00:00:00Z"));
  const tabs = [["video", copy.videos], ["short", copy.shorts]] as const;
  const channel = "https://www.youtube.com/@RomLeeMusic";
  return (
    <SiteShell>
      <PageHead kicker="YouTube" title={copy.videos} lead={copy.lead} />
      <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2" role="group" aria-label={copy.videos}>
            {tabs.map(([id, label]) => (
              <button key={id} type="button" aria-pressed={filter === id} onClick={() => setFilter(id)}
                className={filter === id ? "min-h-11 rounded-md bg-accent px-4 text-sm text-accent-fg" : "min-h-11 rounded-md border border-border bg-surface px-4 text-sm text-fg"}>
                {label}
              </button>
            ))}
          </div>
          <p className="text-xs text-muted">
            <a href={channel + (filter === "short" ? "/shorts" : "/videos")} className="underline underline-offset-4">YouTube · @RomLeeMusic</a>
            {" · "}{copy.snapshot} <time dateTime={YOUTUBE_VIDEO_SNAPSHOT_DATE}>{date}</time>
          </p>
        </div>
        <ol
          className={filter === "short" ? "grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-4" : "grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3"}
          aria-label={filter === "short" ? copy.shorts : copy.videos}
        >
          {ranked.map(clip => {
            const track = tracksByVideo.get(clip.id);
            const title = track ? displaySongTitle(track, locale) : clip.title;
            return (
            <li key={clip.id}>
              <figure>
                <YoutubeEmbed videoId={clip.id} title={title} short={clip.short} />
                <figcaption className="mt-2 flex items-baseline justify-between gap-2 px-1 text-sm text-muted">
                  <span>{clip.short ? copy.short : copy.video}</span>
                  <span className="tabular-nums" data-views={clip.views}>{(clip.rounded ? compact : whole).format(clip.views)} {copy.views}</span>
                </figcaption>
              </figure>
            </li>
            );
          })}
        </ol>
      </div>
    </SiteShell>
  );
}
