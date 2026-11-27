import { createFileRoute, Link } from "@tanstack/react-router";
import { LANG_LABEL, tracksByLang, type Lang } from "@/data/tracks";
import { PageHead, SiteShell } from "@/components/site-shell";
import { TrackRow } from "@/components/track-row";
import { useT } from "@/components/lang-switch";

export const Route = createFileRoute("/songs")({ component: SongsPage });

const ORDER: Lang[] = ["de", "en", "es", "pl"];

function SongsPage() {
  const copy = useT();
  return (
    <SiteShell>
      <PageHead kicker={copy.songsKicker} title={copy.songsTitle} lead={copy.songsLead} />
      <div className="mx-auto max-w-6xl space-y-14 px-4 pb-20 sm:px-6">
        <Link
          to="/songtexte"
          className="grid overflow-hidden rounded-xl border border-border bg-surface sm:grid-cols-[16rem_1fr]"
        >
          <img
            src="/images/fotos/reserve.jpg"
            alt=""
            className="aspect-[4/3] h-full w-full object-cover object-[50%_22%] sm:aspect-auto"
          />
          <div className="flex flex-col justify-center p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-accent">YouTube</p>
            <h2 className="mt-2 font-display text-2xl tracking-tight text-fg">{copy.lyricsTitle}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {copy.lyricsLead}
            </p>
            <span className="mt-4 text-sm text-fg">{copy.toLyrics}</span>
          </div>
        </Link>

        {ORDER.map((lang) => {
          const list = tracksByLang(lang);
          if (!list.length) return null;
          return (
            <section key={lang}>
              <h2 className="mb-4 font-display text-2xl tracking-tight text-fg">
                {LANG_LABEL[lang]}
              </h2>
              <div className="divide-y divide-border rounded-xl border border-border bg-surface p-2">
                {list.map((t) => (
                  <TrackRow key={t.id} track={t} />
                ))}
              </div>
            </section>
          );
        })}

      </div>
    </SiteShell>
  );
}
