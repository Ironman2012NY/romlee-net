import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileText, Youtube } from "lucide-react";
import { POSTS, localizePost } from "@/data/blog";
import { NAV, SITE } from "@/data/site";
import { TRACKS } from "@/data/tracks";
import { SiteShell } from "@/components/site-shell";
import { TrackRow } from "@/components/track-row";
import { YoutubeEmbed } from "@/components/youtube-embed";
import { useLiveYoutube, YoutubeLiveStats } from "@/components/youtube-live-stats";
import { PlaylistTiles } from "@/components/playlist-tiles";
import { useT } from "@/components/lang-switch";
import { useLocale } from "@/lib/locale";
import { homeCopy } from "@/data/home-copy";
import { fetchYoutubeStats, viewsFor, YT_FLOOR, type YtStats } from "@/lib/youtube";
import { formatNumber } from "@/lib/utils";
import { WaterSeo, WATER_SEO } from "@/components/water-seo";

export const Route = createFileRoute("/")({
  loader: async () => ({ yt: await fetchYoutubeStats() }),
  staleTime: 0,
  head: () => ({
    meta: [
      { title: WATER_SEO.title },
      { name: "description", content: WATER_SEO.description },
      { name: "keywords", content: WATER_SEO.keywords },
      { property: "og:title", content: WATER_SEO.title },
      { property: "og:description", content: WATER_SEO.description },
      { property: "og:type", content: "music.song" },
      { property: "og:url", content: "https://romlee.net/" },
      { property: "og:image", content: "https://i.ytimg.com/vi/isW24Vr4lhk/sddefault.jpg" },
      { property: "og:video", content: "https://www.youtube.com/watch?v=isW24Vr4lhk" },
    ],
  }),
  component: Home,
});

function Home() {
  const { yt: initial } = Route.useLoaderData() as { yt: YtStats };
  const yt = useLiveYoutube(initial);
  const loveViews = viewsFor(yt, "KBXOvQr3bAY") ?? YT_FLOOR.viewsById.KBXOvQr3bAY;
  const shortViews = viewsFor(yt, "YTefIyKLBQA") ?? YT_FLOOR.viewsById.YTefIyKLBQA;
  const featured = TRACKS.filter((t) => t.featured);
  const latest = TRACKS.slice(0, 8);
  const copy = useT();
  const locale = useLocale((s) => s.locale);
  const home = homeCopy(locale);

  return (
    <SiteShell solidHeader>
      <WaterSeo />
      <section className="relative min-h-[92dvh] overflow-hidden">
        <img
          src="/images/fotos/foto-15.jpeg"
          alt=""
          className="pointer-events-none absolute inset-0 size-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/30" />
        <div className="relative mx-auto flex min-h-[92dvh] max-w-6xl flex-col justify-end px-4 pb-16 pt-32 sm:px-6 sm:pb-20">
          <p className="text-xs uppercase tracking-[0.22em] text-accent">{SITE.brand}</p>
          <h1 className="mt-3 font-display text-3xl leading-[0.9] tracking-tight text-fg sm:text-6xl">
            {SITE.name}
          </h1>
          <p className="mt-3 font-display text-3xl leading-[0.9] tracking-tight text-fg sm:text-6xl">
            ({SITE.alsoAs})
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-fg/90 sm:text-lg">
            {SITE.tagline}
          </p>
          <div className="mt-8">
            <YoutubeLiveStats stats={yt} variant="hero" />
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/videos"
              className="inline-flex min-h-11 items-center gap-2 rounded-md bg-fg px-5 text-sm font-medium text-accent-fg"
            >
              {copy.watchVideos}
              <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/songs"
              className="inline-flex min-h-11 items-center rounded-md border border-border-strong px-5 text-sm text-fg"
            >
              {copy.nav["/songs"]}
            </Link>
            <a
              href={SITE.youtube.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-md border border-border-strong px-5 text-sm text-fg"
            >
              {copy.youtubeChannel}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <p className="text-xs uppercase tracking-[0.18em] text-accent">{copy.pages}</p>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {NAV.filter((item) => item.to !== "/").map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="flex min-h-14 items-center justify-center rounded-lg border border-border bg-surface px-3 text-sm text-fg hover:border-border-strong"
            >
              {copy.nav[item.to]}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-xs uppercase tracking-[0.18em] text-accent">{home.newRelease}</p>
        <h2 className="mt-2 font-display text-3xl tracking-tight text-fg">
          Water (Keep it for tomorrow)
        </h2>
        <p className="mt-1 text-sm text-accent">Drink the Water · Rom Lee · {home.newSong}</p>
        <p className="mt-3 mb-4 max-w-2xl text-sm leading-relaxed text-muted">
          {home.waterLead1}
        </p>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-muted">
          {home.waterLead2}
        </p>
        <div className="max-w-2xl">
          <YoutubeEmbed videoId="isW24Vr4lhk" title="Water (Keep it for tomorrow)" />
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://www.youtube.com/watch?v=isW24Vr4lhk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center rounded-md bg-fg px-5 text-sm font-medium text-accent-fg"
          >
            YouTube
          </a>
          <a
            href={SITE.spotify.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center rounded-md border border-border-strong px-5 text-sm text-fg"
          >
            {home.listenSpotify}
          </a>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-accent">{copy.mostViewed}</p>
          <h2 className="mt-2 font-display text-3xl tracking-tight text-fg">Love and Peace</h2>
          <p className="mt-3 mb-6 max-w-xl text-sm leading-relaxed text-muted">
            {home.loveLead
              .replace("{video}", formatNumber(loveViews))
              .replace("{short}", formatNumber(shortViews))}
          </p>
          <div className="grid gap-4 sm:grid-cols-[1fr_11rem] sm:items-start">
            <YoutubeEmbed videoId="KBXOvQr3bAY" title="Love and Peace" views={loveViews} />
            <YoutubeEmbed
              videoId="YTefIyKLBQA"
              title="Love and Peace (Short)"
              views={shortViews}
              short
            />
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-accent">{copy.current}</p>
          <h2 className="mt-2 font-display text-3xl tracking-tight text-fg">{copy.newTracks}</h2>
          <div className="mt-6 space-y-1">
            {featured.map((t, i) => (
              <TrackRow key={t.id} track={t} index={i + 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-accent">YouTube</p>
            <h2 className="mt-2 font-display text-3xl tracking-tight text-fg">{copy.playlists}</h2>
          </div>
          <a
            href={SITE.youtube.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-fg"
          >
            {copy.listenYoutube}
          </a>
        </div>
        <div className="mt-8">
          <PlaylistTiles />
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2">
          <img
            src="/images/fotos/reserve.jpg"
            alt="Rom Lee Music"
            className="aspect-square w-full max-w-md justify-self-center rounded-xl object-cover object-[50%_12%]"
          />
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-accent">{copy.aboutSongs}</p>
            <h2 className="mt-2 font-display text-3xl tracking-tight text-fg">
              {copy.stories}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">{copy.aboutText}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{copy.policy}</p>
            <Link
              to="/songs"
              className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm text-fg"
            >
              {copy.moreSongs}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-accent">{copy.nav["/musik"]}</p>
            <h2 className="mt-2 font-display text-3xl tracking-tight text-fg">{copy.playlists}</h2>
          </div>
          <Link to="/musik" className="text-sm text-muted hover:text-fg">
            {copy.allTracks}
          </Link>
        </div>
        <div className="mt-6 divide-y divide-border">
          {latest.map((t, i) => (
            <TrackRow key={t.id} track={t} index={i + 1} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="grid gap-4 md:grid-cols-3">
          <Link
            to="/videos"
            className="flex flex-col rounded-xl border border-border bg-elevated p-6 transition-colors hover:border-border-strong"
          >
            <span className="text-accent">
              <Youtube className="size-5" />
            </span>
            <h3 className="mt-3 font-display text-2xl text-fg">YouTube</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
              {formatNumber(yt.subscribers)} {copy.subs} · {formatNumber(yt.videoCount)} {copy.videos} ·{" "}
              {formatNumber(yt.totalViews)} {copy.viewsTotal}, {copy.liveFrom}.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm text-fg">
              {copy.toChannel}
              <ArrowRight className="size-4" />
            </span>
          </Link>
          <Link
            to="/blog/$slug"
            params={{ slug: "warum-deutsch-polnisch" }}
            className="flex flex-col overflow-hidden rounded-xl border border-border bg-elevated transition-colors hover:border-border-strong"
          >
            <img
              src="/images/hospiz/visite.png"
              alt={SITE.hospice.name}
              className="w-full object-contain bg-fg"
            />
            <div className="p-6">
              <h3 className="font-display text-2xl text-fg">{copy.charity}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{copy.charityLead}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm text-fg">
                {copy.more}
                <ArrowRight className="size-4" />
              </span>
            </div>
          </Link>
          <a
            href={SITE.pdf}
            className="flex flex-col rounded-xl border border-border bg-elevated p-6 transition-colors hover:border-border-strong"
          >
            <span className="text-accent">
              <FileText className="size-5" />
            </span>
            <h3 className="mt-3 font-display text-2xl text-fg">{copy.science}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
              {copy.scienceLead}
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm text-fg">
              {copy.readPdf}
              <ArrowRight className="size-4" />
            </span>
          </a>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-3xl tracking-tight text-fg">{copy.blogTitle}</h2>
            <Link to="/blog" className="text-sm text-muted hover:text-fg">
              {copy.allPosts}
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {POSTS.slice(0, 3).map((raw) => {
              const post = localizePost(raw, locale);
              return (
              <Link
                key={post.slug}
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="group overflow-hidden rounded-xl border border-border bg-elevated"
              >
                {post.cover ? (
                  <img
                    src={post.cover}
                    alt=""
                    className={
                      post.coverContain
                        ? "aspect-[4/3] w-full object-contain bg-elevated p-4"
                        : "aspect-[4/3] w-full object-cover"
                    }
                  />
                ) : null}
                <div className="p-5">
                  <p className="text-xs text-subtle">{post.dateLabel}</p>
                  <h3 className="mt-1 font-display text-xl leading-tight text-fg group-hover:text-accent">
                    {post.title}
                  </h3>
                  {post.subtitle ? (
                    <p className="mt-1 text-sm text-accent">{post.subtitle}</p>
                  ) : null}
                  <p className="mt-2 line-clamp-3 text-sm text-muted">{post.excerpt}</p>
                </div>
              </Link>
              );
            })}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
