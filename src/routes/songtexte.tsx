import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ExternalLink } from "lucide-react";
import { SONG_TEXTS } from "@/data/lyrics";
import { LANG_LABEL, TRACKS, type Lang } from "@/data/tracks";
import { PageHead, SiteShell } from "@/components/site-shell";
import { useT } from "@/components/lang-switch";

export const Route = createFileRoute("/songtexte")({ component: SongtextePage });

const FILTERS: { id: "all" | Lang }[] = [
  { id: "all" },
  { id: "de" },
  { id: "pl" },
  { id: "en" },
  { id: "es" },
];

function SongtextePage() {
  const [filter, setFilter] = useState<"all" | Lang>("all");
  const copy = useT();
  const list = useMemo(
    () => (filter === "all" ? SONG_TEXTS : SONG_TEXTS.filter((s) => s.lang === filter)),
    [filter],
  );

  return (
    <SiteShell>
      <PageHead kicker={copy.lyricsKicker} title={copy.lyricsTitle} lead={copy.lyricsLead} />

      <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="mb-12 overflow-hidden rounded-xl border border-border">
          <img
            src="/images/fotos/reserve.jpg"
            alt="Rom Lee auf dem Boot vor der Küste"
            className="aspect-[16/10] w-full object-cover object-[50%_20%] sm:aspect-[2.2/1]"
          />
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={
                filter === f.id
                  ? "min-h-11 rounded-md bg-fg px-4 text-sm font-medium text-accent-fg"
                  : "min-h-11 rounded-md border border-border px-4 text-sm text-muted hover:text-fg"
              }
            >
              {f.id === "all" ? copy.allFilter : f.id === "de" ? "Deutsch" : LANG_LABEL[f.id]}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {list.map((song) => {
            const track = TRACKS.find((t) => t.youtubeId === song.youtubeId);
            return (
            <details
              key={song.slug}
              id={song.slug}
              className="group rounded-xl border border-border bg-surface open:bg-elevated"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 [&::-webkit-details-marker]:hidden">
                <span className="flex min-w-0 items-center gap-3">
                  <img
                    src={track?.cover ?? "/images/fotos/reserve.jpg"}
                    alt=""
                    className="aspect-video w-20 shrink-0 rounded-sm object-cover"
                  />
                  <span>
                    <span className="font-display text-xl text-fg">{song.title}</span>
                    <span className="ml-3 text-xs uppercase tracking-[0.14em] text-muted">
                      {LANG_LABEL[song.lang]}
                    </span>
                  </span>
                </span>
                <span className="text-xs text-subtle group-open:hidden">öffnen</span>
              </summary>
              <div className="border-t border-border px-5 py-5">
                {track?.localVideo ? (
                  <video
                    src={track.localVideo}
                    poster={track.cover}
                    controls
                    playsInline
                    preload="metadata"
                    className="mb-6 mx-auto max-h-[28rem] w-full max-w-sm rounded-lg object-cover"
                  />
                ) : null}
                <p className="whitespace-pre-line text-sm leading-relaxed text-muted">{song.text}</p>
                <a
                  href={`https://www.youtube.com/watch?v=${song.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm text-fg underline underline-offset-4"
                >
                  Auf YouTube ansehen
                  <ExternalLink className="size-3.5" />
                </a>
              </div>
            </details>
            );
          })}
        </div>

        <p className="mt-10 text-xs leading-relaxed text-subtle">
          Quelle: YouTube-Beschreibungen des Kanals Rom Lee Music.{" "}
          <Link to="/songs" className="underline underline-offset-4">
            Zur Songübersicht
          </Link>
          .
        </p>
      </div>
    </SiteShell>
  );
}
