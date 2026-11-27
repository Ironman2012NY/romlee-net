const copy = {
  zh: {"nav":"圣诞节","title":"与 Rom Lee 共度圣诞节","lead":"从哈瓦那的孩子到皮卡迪利广场的舞者，这里有我的圣诞歌曲、歌曲背后的故事以及可以一起唱的歌词。","lyrics":"完整歌词","story":"歌曲背后的故事","album":"阅读专辑介绍","originals":"四种语言的 We Are the Angels"},
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
