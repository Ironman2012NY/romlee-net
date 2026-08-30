import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/data/site";
import { FEATURED_VIDEOS } from "@/data/videos";
import { videoAiNote } from "@/data/content-i18n";
import { PageHead, SiteShell } from "@/components/site-shell";
import { YoutubeEmbed } from "@/components/youtube-embed";
import { useLiveYoutube, YoutubeLiveStats } from "@/components/youtube-live-stats";
import { PlaylistTiles } from "@/components/playlist-tiles";
import { fetchYoutubeStats, viewsFor, type YtStats } from "@/lib/youtube";
import { formatNumber } from "@/lib/utils";
import { useT } from "@/components/lang-switch";
import { useLocale } from "@/lib/locale";

export const Route = createFileRoute("/videos")({
  loader: async () => ({ yt: await fetchYoutubeStats() }),
  staleTime: 0,
  component: VideosPage,
});

function VideosPage() {
  const { yt: initial } = Route.useLoaderData() as { yt: YtStats };
  const yt = useLiveYoutube(initial);
  const love = viewsFor(yt, "KBXOvQr3bAY");
  const copy = useT();
  const locale = useLocale((s) => s.locale);

  return (
    <SiteShell>
      <PageHead
        kicker={copy.videosKicker}
        title={copy.videosTitle}
        lead={copy.videosLead}
      />

      <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="mb-12">
          <YoutubeLiveStats stats={yt} variant="panel" />
        </div>

        <h2 className="mb-4 font-display text-2xl tracking-tight text-fg">{copy.playlists}</h2>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-muted">
          {copy.playlistsLead}
        </p>
        <div className="mb-14">
          <PlaylistTiles />
        </div>

        {love ? (
          <p className="mb-8 text-sm text-muted">
            {copy.lovePeaceLine.replace("{n}", formatNumber(love))}
          </p>
        ) : null}

        <h2 className="mb-4 font-display text-2xl tracking-tight text-fg">{copy.latestUploads}</h2>
        <div className="mb-14 grid gap-6 md:grid-cols-2">
          {yt.entries.length
            ? yt.entries.slice(0, 6).map((v) => (
                <YoutubeEmbed
                  key={v.id}
                  videoId={v.id}
                  title={v.title}
                  views={v.views}
                  short={v.isShort}
                />
              ))
            : FEATURED_VIDEOS.slice(0, 6).map((v) => (
                <YoutubeEmbed
                  key={v.id}
                  videoId={v.id}
                  title={v.title}
                  views={viewsFor(yt, v.id)}
                  short={v.kind === "short"}
                />
              ))}
        </div>

        <h2 className="mb-4 font-display text-2xl tracking-tight text-fg">{copy.fromLibrary}</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {FEATURED_VIDEOS.map((v) => (
            <YoutubeEmbed
              key={v.id}
              videoId={v.id}
              title={v.title}
              views={viewsFor(yt, v.id)}
              short={v.kind === "short"}
            />
          ))}
        </div>

        <p className="mt-10 whitespace-pre-line text-sm leading-relaxed text-subtle">
          {videoAiNote(locale)}
        </p>
        <a
          href={SITE.youtube.url}
          className="mt-6 inline-flex min-h-11 items-center text-sm text-fg underline underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          {SITE.youtube.handle} {copy.listenOnYoutube}
        </a>
      </div>
    </SiteShell>
  );
}
