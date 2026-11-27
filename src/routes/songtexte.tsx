import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { SONG_TEXTS } from "@/data/lyrics";
import { ORIGINAL_LYRICS } from "@/data/original-lyrics";
import { LANG_LABEL, TRACKS, displaySongTitle, type Lang } from "@/data/tracks";
import { PageHead, SiteShell } from "@/components/site-shell";
import { useT } from "@/components/lang-switch";
import { useLocale } from "@/lib/locale";

export const Route = createFileRoute("/songtexte")({ component: SongtextePage });
const LANGUAGES: Lang[] = ["en", "de", "pl", "es"];
const filters: ("all" | Lang)[] = ["all", ...LANGUAGES];

// Keep descriptions out of Lyrics. Extract only the clearly marked original verses.
const extraLyrics = SONG_TEXTS.flatMap((song) => {
  if (["we-are-the-ocean", "christmas-for-all"].includes(song.slug)) return [song];
  if (song.slug === "love-and-peace") {
    const start = song.text.indexOf("\nLove and peace\n\nRefrain");
    if (start >= 0) return [{ ...song, text: song.text.slice(start).trim().replace(/^Love and peace\s*/, "").replace(/\n\n/g, "\n") }];
  }
  if (song.slug === "du-bist-45") {
    const start = song.text.indexOf("\nDu bist fünf und vierzig\n");
    if (start >= 0) return [{ ...song, text: song.text.slice(start).trim() }];
  }
  if (song.slug === "jak-byles-maly") {
    const start = song.text.indexOf("\nJak byłeś mały!\n");
    const end = song.text.indexOf("\n\n“Jak byłeś mały” is");
    if (start >= 0 && end > start) return [{ ...song, text: song.text.slice(start, end).trim() }];
  }
  return [];
});
const allLyrics = [...new Map([...ORIGINAL_LYRICS, ...extraLyrics].map(song => [song.slug, song])).values()];

function NumberedLyrics({ text, lang }: { text: string; lang: Lang }) {
  let lineNumber = 0;
  const heading = /^(?:verse|strophe|chorus|refrain|zwrotka|refren|verso|estribillo|coro|intro|outro|bridge|puente|finale|zwrotka|estrofa)(?:$|\s+\d|\s*[:/—–-]|\s+(?:final|końcowy|ending))/i;
  return <div lang={lang} dir="ltr" className="mx-auto max-w-2xl rounded-lg border border-border bg-bg/50 px-4 py-5 sm:px-7">
    {text.split(/\r?\n/).map((line, index) => {
      if (!line.trim()) return <div key={index} className="h-4" aria-hidden="true" />;
      if (heading.test(line.trim())) return <h3 key={index} className="mb-2 mt-5 text-base font-semibold tracking-wide text-accent first:mt-0">{line}</h3>;
      lineNumber++;
      return <div key={index} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3 py-0.5 text-base leading-relaxed text-fg"><span className="text-right text-xs leading-7 tabular-nums text-muted select-none" aria-hidden="true">{lineNumber}</span><span className="whitespace-pre-wrap break-words">{line}</span></div>;
    })}
  </div>;
}

function SongtextePage() {
  const [filter, setFilter] = useState<"all" | Lang>("all");
  const copy = useT();
  const locale = useLocale(s => s.locale);
  const labels = locale === "de" ? { lead: "Originaltexte nach Sprache, mit Strophen, Refrains und nummerierten Zeilen.", songList: "Zur Songübersicht" } : locale === "pl" ? { lead: "Oryginalne teksty według języka, ze zwrotkami, refrenami i numerami wierszy.", songList: "Lista utworów" } : locale === "es" ? { lead: "Letras originales por idioma, con estrofas, estribillos y líneas numeradas.", songList: "Ver canciones" } : locale === "ar" ? { lead: "كلمات الأغاني الأصلية مرتبة حسب اللغة، مع المقاطع واللازمات والأسطر المرقمة.", songList: "قائمة الأغاني" } : String(locale) === "zh" ? { lead: "原版歌词按语言分类，保留主歌、副歌与行号。", songList: "查看歌曲" } : { lead: "Original lyrics by language, with verses, choruses and numbered lines.", songList: "View all songs" };
  return <SiteShell>
    <PageHead kicker="Rom Lee" title="Lyrics" lead={labels.lead} />
    <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map(id => <button key={id} type="button" onClick={() => setFilter(id)} aria-pressed={filter === id} className={filter === id ? "min-h-11 rounded-md bg-fg px-4 text-sm font-medium text-accent-fg" : "min-h-11 rounded-md border border-border px-4 text-sm text-muted hover:text-fg"}>{id === "all" ? copy.allFilter : LANG_LABEL[id]}</button>)}
      </div>
      <div className="space-y-9">
        {LANGUAGES.filter(lang => filter === "all" || filter === lang).map(lang => {
          const list = allLyrics.filter(song => song.lang === lang);
          if (!list.length) return null;
          return <section key={lang}>
            <h2 className="mb-4 font-display text-2xl text-fg">{LANG_LABEL[lang]} <span className="ml-2 text-sm text-muted">{list.length}</span></h2>
            <div className="space-y-3">
              {list.map(song => { const track = TRACKS.find(t => t.youtubeId === song.youtubeId); const title = displaySongTitle(song, locale); return <details key={song.slug} id={song.slug} className="group rounded-xl border border-border bg-surface open:bg-elevated">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 sm:px-6 [&::-webkit-details-marker]:hidden">
                  <span className="flex min-w-0 items-center gap-3">
                    <img src={track?.cover ?? "/images/fotos/reserve.jpg"} alt="" className="aspect-video w-20 shrink-0 rounded-sm object-cover" />
                    <span><span className="block font-display text-xl text-fg">{title}</span>{title !== song.title && <span className="block text-xs text-muted" lang={song.lang}>{song.title}</span>}</span>
                  </span><span className="text-muted group-open:rotate-180" aria-hidden="true">⌄</span>
                </summary>
                <div className="border-t border-border px-3 py-5 sm:px-6">
                  <NumberedLyrics text={song.text} lang={song.lang} />
                  <a href={"https://www.youtube.com/watch?v=" + song.youtubeId} target="_blank" rel="noopener noreferrer" className="mx-auto mt-5 flex max-w-2xl items-center gap-2 text-sm text-fg underline underline-offset-4">{copy.watchVideos}<ExternalLink className="size-3.5" /></a>
                </div>
              </details>; })}
            </div>
          </section>;
        })}
      </div>
      <Link to="/songs" className="mt-10 inline-flex text-sm text-accent underline underline-offset-4">{labels.songList}</Link>
    </div>
  </SiteShell>;
}
