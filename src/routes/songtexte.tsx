import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import { SONG_TEXTS } from "@/data/lyrics";
import { ORIGINAL_LYRICS } from "@/data/original-lyrics";
import { LANG_LABEL, TRACKS, displaySongTitle, trackUrl, type Lang } from "@/data/tracks";
import { PageHead, SiteShell } from "@/components/site-shell";
import { useT } from "@/components/lang-switch";
import { useLocale } from "@/lib/locale";

export const Route = createFileRoute("/songtexte")({ component: SongtextePage });
const LANGUAGES: Lang[] = ["de", "pl", "en", "es"];
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
const allLyrics = [...new Map([...extraLyrics, ...ORIGINAL_LYRICS].map(song => [song.slug, song])).values()];

// The complete catalog remains visible, even when an authorized lyric is not yet available.
const normalizeTitle = (value: string) => value.toLocaleLowerCase().replace(/[^\p{L}\p{N}]/gu, "");
const pendingTracks = TRACKS.filter((track, index) => !allLyrics.some(song => song.lang === track.lang && (song.slug === track.slug || song.youtubeId === track.youtubeId || normalizeTitle(song.title) === normalizeTitle(track.title))) && TRACKS.findIndex(other => other.lang === track.lang && normalizeTitle(other.title) === normalizeTitle(track.title)) === index);
const catalog = [...allLyrics.map(song => ({ ...song, available: true })), ...pendingTracks.map(track => ({ ...track, text: "", available: false }))];

function NumberedLyrics({ text, lang }: { text: string; lang: Lang }) {
  let lineNumber = 0;
  const heading = /^(?:verse|strophe|chorus|refrain|zwrotka|refren|verso|estribillo|coro|intro|outro|bridge|puente|finale|zwrotka|estrofa)(?:$|\s+\d|\s*[:/—–-]|\s+(?:final|końcowy|ending))/i;
  return <div lang={lang} dir="ltr" className="mx-auto max-w-2xl rounded-lg border border-border bg-bg/50 px-4 py-5 sm:px-7">
    {text.split(/\r?\n/).map((line, index) => {
      if (!line.trim()) return <div key={index} className="h-4" aria-hidden="true" />;
      if (heading.test(line.trim()) || /^(?:Strophe|Refrain) (?:eins|zwei|drei|vier|fünf)$|^Estrofa (?:uno|dos|tres|cuatro|cinco)$|^(?:Finaler Refrain|Final Chorus)$/i.test(line.trim())) return <h3 key={index} className="mb-2 mt-5 text-base font-semibold tracking-wide text-accent first:mt-0">{line}</h3>;
      lineNumber++;
      return <div key={index} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3 py-0.5 text-base leading-relaxed text-fg"><span className="text-right text-xs leading-7 tabular-nums text-muted select-none" aria-hidden="true">{lineNumber}</span><span className="whitespace-pre-wrap break-words">{line}</span></div>;
    })}
  </div>;
}

function SongtextePage() {
  const [filter, setFilter] = useState<"all" | Lang>("all");
  useEffect(() => {
    const openLinkedLyrics = () => {
      const target = document.getElementById(window.location.hash.slice(1));
      if (target instanceof HTMLDetailsElement) {
        target.open = true;
        target.scrollIntoView({ block: "start" });
      }
    };
    openLinkedLyrics();
    window.addEventListener("hashchange", openLinkedLyrics);
    return () => window.removeEventListener("hashchange", openLinkedLyrics);
  }, []);
  const copy = useT();
  const locale = useLocale(s => s.locale);
  const labels = locale === "de" ? { lead: "Originaltexte nach Sprache, mit Strophen, Refrains und nummerierten Zeilen.", songList: "Zur Songübersicht" } : locale === "pl" ? { lead: "Oryginalne teksty według języka, ze zwrotkami, refrenami i numerami wierszy.", songList: "Lista utworów" } : locale === "es" ? { lead: "Letras originales por idioma, con estrofas, estribillos y líneas numeradas.", songList: "Ver canciones" } : locale === "ar" ? { lead: "كلمات الأغاني الأصلية مرتبة حسب اللغة، مع المقاطع واللازمات والأسطر المرقمة.", songList: "قائمة الأغاني" } : String(locale) === "zh" ? { lead: "原版歌词按语言分类，保留主歌、副歌与行号。", songList: "查看歌曲" } : { lead: "Original lyrics by language, with verses, choruses and numbered lines.", songList: "View all songs" };
  return <SiteShell>
    <PageHead kicker="Rom Lee" title="Lyrics" lead={labels.lead} />
    <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map(id => <button key={id} type="button" onClick={() => setFilter(id)} aria-pressed={filter === id} className={filter === id ? "min-h-11 rounded-md bg-fg px-4 text-sm font-medium text-accent-fg" : "min-h-11 rounded-md border border-border px-4 text-sm text-muted hover:text-fg"}>{id === "all" ? copy.allFilter : LANG_LABEL[id]}</button>)}
      </div>
      <div className="grid items-start gap-5 md:grid-cols-2">
        {LANGUAGES.filter(lang => filter === "all" || filter === lang).map(lang => {
          const list = catalog.filter(song => song.lang === lang);
          if (!list.length) return null;
          const pending = locale === "de" ? "Text folgt" : locale === "pl" ? "Tekst w przygotowaniu" : locale === "es" ? "Letra pendiente" : locale === "ar" ? "الكلمات قيد الإعداد" : locale === "zh" ? "歌词待补充" : "Lyrics pending";
          const ready = locale === "de" ? "Text lesen" : locale === "pl" ? "Czytaj tekst" : locale === "es" ? "Leer letra" : locale === "ar" ? "اقرأ الكلمات" : locale === "zh" ? "查看歌词" : "Read lyrics";
          return <section key={lang} className="rounded-xl border border-border bg-surface px-4 py-5 sm:px-6">
            <h2 className="mb-3 font-display text-2xl text-accent">{LANG_LABEL[lang]}</h2>
            <ul className="divide-y divide-border border-t border-border">
              {list.map(song => { const title = displaySongTitle(song, locale); const track = TRACKS.find(t => t.youtubeId === song.youtubeId); return <li key={song.slug}>
                {song.available ? <details id={song.slug} className="group scroll-mt-36 sm:scroll-mt-40">
                  <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 py-3 [&::-webkit-details-marker]:hidden">
                    <span className="min-w-0"><span className="block text-base text-fg">{title}</span>{title !== song.title && <span className="block text-xs text-muted" lang={song.lang}>{song.title}</span>}</span>
                    <span className="shrink-0 text-xs text-accent">{ready} <span aria-hidden="true" className="inline-block group-open:rotate-180">⌄</span></span>
                  </summary>
                  <div className="pb-4"><NumberedLyrics text={song.text} lang={song.lang} />{song.youtubeId && <a href={track ? trackUrl(track) : "https://www.youtube.com/watch?v=" + song.youtubeId} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm text-accent underline underline-offset-4">{copy.watchVideos}<ExternalLink className="size-3.5" /></a>}</div>
                </details> : <div className="flex min-h-12 items-center justify-between gap-3 py-3"><span className="min-w-0"><span className="block text-base text-fg">{title}</span>{title !== song.title && <span className="block text-xs text-muted" lang={song.lang}>{song.title}</span>}</span><span className="shrink-0 text-xs text-muted">{pending}</span></div>}
              </li>; })}
            </ul>
          </section>;
        })}
      </div>
      <Link to="/songs" className="mt-10 inline-flex text-sm text-accent underline underline-offset-4">{labels.songList}</Link>
    </div>
  </SiteShell>;
}
