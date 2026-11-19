const copy = {
  de: { nav: "Weihnachten", title: "Weihnachten mit Rom Lee", lead: "Von den Kindern in Havanna bis zu den Tänzern am Piccadilly Circus. Hier findet ihr meine Weihnachtslieder, ihre Geschichten und die Texte zum Mitsingen.", lyrics: "Vollständiger Liedtext", story: "Die Geschichte zum Lied", album: "Zum Albumbeitrag", originals: "We Are the Angels in vier Sprachen" },
  en: { nav: "Christmas", title: "Christmas with Rom Lee", lead: "From the children in Havana to the dancers at Piccadilly Circus. Here are my Christmas songs, the stories behind them and the words to sing along.", lyrics: "Full lyrics", story: "The story behind the song", album: "Read about the album", originals: "We Are the Angels in four languages" },
  pl: { nav: "Święta", title: "Święta z Rom Lee", lead: "Od dzieci w Hawanie po tancerzy na Piccadilly Circus. Oto moje świąteczne piosenki, ich historie i teksty do wspólnego śpiewania.", lyrics: "Pełny tekst piosenki", story: "Historia piosenki", album: "O albumie", originals: "We Are the Angels w czterech językach" },
  es: { nav: "Navidad", title: "Navidad con Rom Lee", lead: "Desde los niños de La Habana hasta quienes bailan en Piccadilly Circus. Aquí están mis canciones de Navidad, sus historias y las letras para cantar juntos.", lyrics: "Letra completa", story: "La historia de la canción", album: "Sobre el álbum", originals: "We Are the Angels en cuatro idiomas" },
};
export function christmasCopy(locale: string) {
  return copy[locale as keyof typeof copy] ?? copy.en;
}
export const danceClips = [
  { id: "KlvjPdkS8xs", title: "London · I See Angels in Your Face (Dance)" },
  { id: "a1K-o6DXN78", title: "Warszawa · Jesteśmy Aniołami (Dance Version)" },
  { id: "nK8ASrLCSis", title: "Palma de Mallorca · Tú Eres el Ángel (Dance)" },
  { id: "kwd6l5JNUZc", title: "Köln · Wir sind die Engel selbst (Short)" },
  { id: "eNLWMLCXAeg", title: "Coming Home (Afro House) · Norway" },
];
export const angelsClips = [
  { id: "sqXEEGy_UdI", title: "English · Christmas – We Are the Angels" },
  { id: "Bw3US7uj4t4", title: "Deutsch · Weihnachten – Wir sind die Engel" },
  { id: "yk9NZ-6HfX8", title: "Español · Navidad – Somos Ángeles" },
  { id: "9qwsuxEq8-M", title: "Polski · Święta – To my jesteśmy aniołami" },
];
