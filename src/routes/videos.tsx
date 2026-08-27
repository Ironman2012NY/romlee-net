import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/data/site";
import { FEATURED_VIDEOS } from "@/data/videos";
import { VIDEO_AI_NOTE } from "@/data/content";
import { PageHead, SiteShell } from "@/components/site-shell";
import { YoutubeEmbed } from "@/components/youtube-embed";
import { useLiveYoutube, YoutubeLiveStats } from "@/components/youtube-live-stats";
import { PlaylistTiles } from "@/components/playlist-tiles";
import { fetchYoutubeStats, viewsFor, type YtStats } from "@/lib/youtube";
import { formatNumber } from "@/lib/utils";
import { useT } from "@/components/lang-switch";

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

        <h2 className="mb-4 font-display text-2xl tracking-tight text-fg">Playlists</h2>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-muted">
          German Songs, Polish Songs, English / Español, Beliebte Videos, Fan Shorts und My Favorite —
          Anhören auf YouTube.
        </p>
        <div className="mb-14">
          <PlaylistTiles />
        </div>

        {love ? (
          <p className="mb-8 text-sm text-muted">
            „Love and Peace“: {formatNumber(love)} Aufrufe auf YouTube — mit dem Video fast ein weltweites
            Lied für den Frieden. Video und Short zusammen fast sieben Millionen.
          </p>
        ) : null}

        <h2 className="mb-4 font-display text-2xl tracking-tight text-fg">Neueste Uploads</h2>
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

        <h2 className="mb-4 font-display text-2xl tracking-tight text-fg">Aus der Mediathek</h2>
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
          {VIDEO_AI_NOTE}
        </p>
        <a
          href={SITE.youtube.url}
          className="mt-6 inline-flex min-h-11 items-center text-sm text-fg underline underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          {SITE.youtube.handle} auf YouTube anhören
        </a>
      </div>
    </SiteShell>
  );
}
