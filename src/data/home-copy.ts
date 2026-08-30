import type { Locale } from "@/lib/locale";

type HomeCopy = {
  newRelease: string;
  newSong: string;
  listenSpotify: string;
  loveLead: string;
};

const de: HomeCopy = {
  newRelease: "Neuerscheinung",
  newSong: "neues Lied",
  listenSpotify: "Auf Spotify hören",
  loveLead:
    "Mit Video und Short ist „Love and Peace“ fast zu einem weltweiten Lied für den Frieden geworden. {video} Aufrufe im Video, {short} im Short — zusammen rund sieben Millionen.",
};

const en: HomeCopy = {
  newRelease: "New release",
  newSong: "new song",
  listenSpotify: "Listen on Spotify",
  loveLead:
    "With the video and the Short, “Love and Peace” has become almost a worldwide song for peace. {video} views on the video, {short} on the Short — about seven million together.",
};

const pl: HomeCopy = {
  newRelease: "Nowa płyta",
  newSong: "nowy utwór",
  listenSpotify: "Słuchaj na Spotify",
  loveLead:
    "Dzięki teledyskowi i Shortowi „Love and Peace” stało się niemal światową piosenką o pokoju. {video} wyświetleń teledysku, {short} Shorta — razem około siedmiu milionów.",
};

const es: HomeCopy = {
  newRelease: "Novedad",
  newSong: "canción nueva",
  listenSpotify: "Escuchar en Spotify",
  loveLead:
    "Con el vídeo y el Short, “Love and Peace” se ha convertido casi en una canción mundial por la paz. {video} reproducciones del vídeo, {short} del Short — unos siete millones en total.",
};

const fr: HomeCopy = {
  newRelease: "Nouveauté",
  newSong: "nouvelle chanson",
  listenSpotify: "Écouter sur Spotify",
  loveLead:
    "Avec la vidéo et le Short, « Love and Peace » est presque devenue une chanson mondiale pour la paix. {video} vues sur la vidéo, {short} sur le Short — environ sept millions au total.",
};

const MAP: Partial<Record<Locale, HomeCopy>> = { de, en, pl, es, fr };

export function homeCopy(locale: Locale): HomeCopy {
  return MAP[locale] ?? en;
}
