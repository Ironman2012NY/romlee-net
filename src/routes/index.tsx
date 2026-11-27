import { christmasCopy } from "@/data/christmas";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileText, Youtube } from "lucide-react";
import { POSTS, localizePost } from "@/data/blog";
import { NAV, SITE } from "@/data/site";
import { LANG_LABEL, TRACKS, coverForYoutubeId } from "@/data/tracks";
import { SiteShell } from "@/components/site-shell";
import { TrackRow } from "@/components/track-row";
import { YoutubeEmbed } from "@/components/youtube-embed";
import { useLiveYoutube, YoutubeLiveStats } from "@/components/youtube-live-stats";
import { PlaylistTiles } from "@/components/playlist-tiles";
import { useT } from "@/components/lang-switch";
import { useLocale } from "@/lib/locale";
import { homeCopy } from "@/data/home-copy";
import { fetchYoutubeStats, viewsFor, YT_FLOOR, type YtStats } from "@/lib/youtube";
import { formatNumber, formatViews } from "@/lib/utils";
import { WaterSeo, WATER_SEO } from "@/components/water-seo";

export const Route = createFileRoute("/")({
  loader: async () => ({ yt: await fetchYoutubeStats() }),
  staleTime: 0,
  head: () => ({
    meta: [
      { title: SITE.shareText },
      { name: "description", content: SITE.shareText },
    ],
  }),
  component: Home,
});

// Most recent full videos on the channel when the RSS feed is unavailable.
const recentVideoIds = ["KlvjPdkS8xs", "eNLWMLCXAeg", "a1K-o6DXN78", "nK8ASrLCSis", "k894z2QzuEc", "Bw3US7uj4t4"];

const albumCopy = {
  en: { details: "15 songs · 63 minutes · Released 26 November 2026", lead: "Christmas songs in English, German, Polish and Spanish. Intimate ballads and dance versions, brought together with a wish for peace, happiness and togetherness.", listen: "Listen to the album", videos: "Christmas videos and lyrics" },
  de: { details: "15 Titel · 63 Minuten · Veröffentlicht am 26. November 2026", lead: "Weihnachtslieder auf Englisch, Deutsch, Polnisch und Spanisch. Persönliche Balladen und Dance-Versionen, verbunden mit dem Wunsch nach Frieden, Glück und Zusammengehörigkeit.", listen: "Das Album hören", videos: "Weihnachtsvideos und Liedtexte" },
  pl: { details: "15 utworów · 63 minuty · Premiera 26 listopada 2026", lead: "Świąteczne piosenki po angielsku, niemiecku, polsku i hiszpańsku. Kameralne ballady i wersje taneczne, połączone pragnieniem pokoju, szczęścia i wspólnoty.", listen: "Posłuchaj albumu", videos: "Świąteczne teledyski i teksty" },
  es: { details: "15 canciones · 63 minutos · Publicado el 26 de noviembre de 2026", lead: "Canciones de Navidad en inglés, alemán, polaco y español. Baladas íntimas y versiones para bailar, unidas por el deseo de paz, felicidad y unión.", listen: "Escuchar el álbum", videos: "Vídeos y letras de Navidad" },
  zh: { details: "15首歌曲 · 63分钟 · 2026年11月26日发行", lead: "用英语、德语、波兰语和西班牙语演唱的圣诞歌曲。温暖的抒情曲与舞曲版本，共同传递对和平、幸福与团聚的祝愿。", listen: "收听专辑", videos: "圣诞音乐视频和歌词" },
};

function Home() {
  const { yt: initial } = Route.useLoaderData() as { yt: YtStats };
  const yt = useLiveYoutube(initial);
  const loveViews = viewsFor(yt, "KBXOvQr3bAY") ?? YT_FLOOR.viewsById.KBXOvQr3bAY;
  const shortViews = viewsFor(yt, "YTefIyKLBQA") ?? YT_FLOOR.viewsById.YTefIyKLBQA;
  const uploads = yt.entries
    .filter(entry => !entry.isShort && Number.isFinite(Date.parse(entry.published)))
    .sort((a, b) => Date.parse(b.published) - Date.parse(a.published));
  const recentIds = [...new Set([...uploads.map(entry => entry.id), ...recentVideoIds])].slice(0, 6);
  const latest = TRACKS.slice(0, 8);
  const copy = useT();
  const locale = useLocale((s) => s.locale);
  const home = homeCopy(locale);
  const album = albumCopy[locale as keyof typeof albumCopy] ?? albumCopy.en;

  return (
    <SiteShell solidHeader>
      <WaterSeo />
      <section className="relative overflow-hidden">
        <div className="relative min-h-[75dvh] overflow-hidden">
        <img
          src="/images/fotos/hero-portocolom.jpg"
          alt=""
          className="pointer-events-none absolute inset-0 size-full object-cover"
          fetchPriority="high"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/80 via-bg/25 to-transparent" />
        <div className="relative mx-auto flex min-h-[75dvh] max-w-6xl flex-col justify-end px-4 pb-12 pt-44 sm:px-6 sm:pb-16">
          <p className="text-xs uppercase tracking-[0.22em] text-accent">{SITE.brand}</p>
          <h1 className="mt-3 font-display text-5xl leading-[0.95] tracking-tight text-fg sm:text-7xl">
            {SITE.name}
          </h1>
          <p className="mt-2 text-base text-muted sm:text-lg">({SITE.alsoAs})</p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-fg/90 sm:text-lg">
            {SITE.tagline}
          </p>
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
        </div>
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
          <YoutubeLiveStats stats={yt} variant="panel" />
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-12">
          <a href="https://music.amazon.fr/albums/B0HSQHD2BX" target="_blank" rel="noopener noreferrer" className="block max-w-md overflow-hidden rounded-xl border border-border">
            <img src="/images/covers/christmas-for-you-and-me.webp" alt="Rom Lee — Christmas For You and Me (4 Languages), album cover" width={900} height={900} loading="lazy" className="aspect-square w-full object-cover" />
          </a>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">{home.newRelease}</p>
            <h2 className="mt-3 font-display text-4xl leading-tight tracking-tight text-fg sm:text-5xl">Christmas For You and Me</h2>
            <p className="mt-2 text-lg text-accent">4 Languages</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{album.details}</p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-fg/90">{album.lead}</p>
            <p className="mt-4 text-sm text-muted">English · Deutsch · Polski · Español</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="https://music.amazon.fr/albums/B0HSQHD2BX" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-md bg-fg px-5 py-3 text-sm font-medium text-accent-fg">{album.listen}<ArrowRight className="size-4" /></a>
              <Link to="/weihnachten" search={locale === "en" ? undefined : { lang: locale }} className="inline-flex min-h-11 items-center rounded-md border border-border-strong px-5 py-3 text-sm text-fg">{album.videos}</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-3xl tracking-tight text-fg">{copy.blogTitle}</h2>
            <Link to="/blog" className="text-sm text-muted hover:text-fg">
              {copy.allPosts}
            </Link>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={SITE.spotify.url} className="inline-flex min-h-11 items-center rounded-md bg-fg px-5 text-sm font-medium text-accent-fg">
              {home.listenSpotify}
            </a>
            <a href={SITE.youtube.url} className="inline-flex min-h-11 items-center rounded-md border border-border-strong px-5 text-sm text-fg">
              {copy.youtubeChannel}
            </a>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {POSTS.slice(0, 2).map((raw) => {
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
                        ? "aspect-video w-full object-contain bg-elevated p-4"
                        : "aspect-video w-full object-cover"
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
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-base text-accent">
            <Link to="/blog/$slug" params={{ slug: "thank-you-to-the-people-in-power" }} className="underline underline-offset-4">Thank You to the People in Power</Link>
            <Link to="/blog/$slug" params={{ slug: "christmas-dance" }} className="underline underline-offset-4">Christmas Dance</Link>
            <Link to="/weihnachten" className="underline underline-offset-4">{christmasCopy(locale).title}</Link>
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
        <h2 className="mt-2 font-display text-3xl tracking-tight text-fg">
          We Are the Ocean
        </h2>
        <p className="mt-3 mb-6 max-w-2xl text-sm leading-relaxed text-muted">
          I am a drop, you are a drop. More drops can become a wave.
        </p>
        <div className="grid max-w-3xl gap-4 sm:grid-cols-[1fr_11rem] sm:items-start">
          <YoutubeEmbed videoId="XxG2R3tZfp8" title="We Are the Ocean" />
          <YoutubeEmbed videoId="c72SbFOaNSI" title="Stand Up for Peace (Short)" short />
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://www.youtube.com/watch?v=XxG2R3tZfp8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center rounded-md bg-fg px-5 text-sm font-medium text-accent-fg"
          >
            YouTube
          </a>
          <Link
            to="/blog/$slug"
            params={{ slug: "we-are-the-ocean" }}
            className="inline-flex min-h-11 items-center rounded-md border border-border-strong px-5 text-sm text-fg"
          >
            {copy.blogTitle}
          </Link>
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
              .replace("{short}", formatNumber(shortViews))
              .replace("{sum}", formatViews(loveViews + shortViews))}
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
            {recentIds.map((id, index) => {
              const track = TRACKS.find(item => item.youtubeId === id);
              const entry = uploads.find(item => item.id === id);
              const title = entry?.title.split(/\s+#/)[0].trim() || track?.title || id;
              return (
                <a key={id} href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noopener noreferrer"
                  className="flex min-h-14 items-center gap-3 rounded-lg px-2 py-2 text-fg hover:bg-elevated">
                  <img src={coverForYoutubeId(id)} alt="" className="aspect-video w-20 shrink-0 rounded-sm object-cover" />
                  <span className="text-xs tabular-nums text-subtle">{String(index + 1).padStart(2, "0")}</span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium">{title}</span>
                    <span className="block text-xs text-subtle">{track ? `Rom Lee · ${LANG_LABEL[track.lang]} · ${track.duration}` : "Rom Lee · YouTube"}</span>
                  </span>
                </a>
              );
            })}
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
              <YoutubeLiveStats stats={yt} variant="summary" />
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


    </SiteShell>
  );
}
