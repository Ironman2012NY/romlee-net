export type Lang = "de" | "pl" | "en" | "es";

export type Track = {
  id: string;
  title: string;
  duration: string;
  slug: string;
  audio?: string;
  cover: string;
  youtubeId: string;
  lang: Lang;
  featured?: boolean;
  localVideo?: string;
};

export const TRACKS: Track[] = [
  {
    id: "water-keep-it",
    title: "Water (Keep it for tomorrow)",
    duration: "0:59",
    slug: "water-keep-it-for-tomorrow",
    cover: "/images/covers/yt-water.jpg",
    youtubeId: "water-keep-it",
    lang: "en",
    featured: true,
    localVideo: "/videos/the-water-59s.mp4",
  },
  {
    id: "4941713",
    title: "Love and Peace",
    duration: "3:40",
    slug: "love-and-peace",
    audio: "https://romlee.net/player/3937082/tracks/4941713.mp3",
    cover: "/images/covers/yt-love-and-peace.jpg",
    youtubeId: "KBXOvQr3bAY",
    lang: "en",
    featured: true,
  },
  {
    id: "thank-you",
    title: "Thank You",
    duration: "Short",
    slug: "thank-you",
    cover: "/images/covers/yt-thank-you-short.jpg",
    youtubeId: "zQNpTIkpGfk",
    lang: "en",
    featured: true,
  },
  {
    id: "4946102",
    title: "Wilki i Słońce",
    duration: "4:53",
    slug: "wilki-i-slonce",
    audio: "https://romlee.net/player/3937077/tracks/4946102.mp3",
    cover: "/images/covers/yt-wilki-i-slonce.jpg",
    youtubeId: "QYcW25nHvFw",
    lang: "pl",
    featured: true,
  },
  {
    id: "4906346",
    title: "Sonne, Wind und Wellen",
    duration: "3:45",
    slug: "sonne-wind-und-wellen",
    audio: "https://romlee.net/player/3937082/tracks/4906346.mp3",
    cover: "/images/covers/yt-sonne-wind-video.jpg",
    youtubeId: "99vogJyqsfU",
    lang: "de",
    featured: true,
  },
  {
    id: "naechte-und-woelfe",
    title: "Nächte und Wölfe (Darkness and Light)",
    duration: "Video",
    slug: "naechte-und-woelfe",
    cover: "/images/covers/yt-naechte-und-woelfe.jpg",
    youtubeId: "ul5DEIL8A-M",
    lang: "de",
    featured: true,
  },
  {
    id: "4871404",
    title: "Ich habe Dich gesehen",
    duration: "3:28",
    slug: "ich-habe-dich-gesehen",
    audio: "https://romlee.net/player/3937081/tracks/4871404.mp3",
    cover: "/images/covers/yt-ich-habe-dich-gesehen.jpg",
    youtubeId: "QF7i4Z4yIrY",
    lang: "de",
  },
  {
    id: "4871405",
    title: "Du bist das Licht",
    duration: "3:14",
    slug: "du-bist-das-licht",
    audio: "https://romlee.net/player/3937081/tracks/4871405.mp3",
    cover: "/images/covers/yt-du-bist-das-licht.jpg",
    youtubeId: "ujqlHtEObQY",
    lang: "de",
  },
  {
    id: "4871406",
    title: "Ich habe dich gewollt",
    duration: "3:59",
    slug: "immer-schon-hab-ich-gewollt",
    audio: "https://romlee.net/player/3937081/tracks/4871406.mp3",
    cover: "/images/covers/yt-ich-habe-dich-gewollt.jpg",
    youtubeId: "5DnsZEeOzLs",
    lang: "de",
    localVideo: "/videos/immer-schon.mp4",
  },
  {
    id: "4871407",
    title: "Lebe den Sommer",
    duration: "2:49",
    slug: "lebe-den-sommer",
    audio: "https://romlee.net/player/3937081/tracks/4871407.mp3",
    cover: "/images/covers/yt-lebe-den-sommer.jpg",
    youtubeId: "ygt6tbs7-n8",
    lang: "de",
  },
  {
    id: "4906343",
    title: "Steh auf",
    duration: "4:42",
    slug: "steh-auf",
    audio: "https://romlee.net/player/3937082/tracks/4906343.mp3",
    cover: "/images/covers/yt-steh-auf.jpg",
    youtubeId: "aOfD3XeRNcU",
    lang: "de",
  },
  {
    id: "4906347",
    title: "Tanze so lange es geht",
    duration: "4:23",
    slug: "tanze-so-lange-es-geht",
    audio: "https://romlee.net/player/3937082/tracks/4906347.mp3",
    cover: "/images/covers/yt-tanze-official.jpg",
    youtubeId: "KlzpbxOBvug",
    lang: "de",
  },
  {
    id: "4906348",
    title: "Tańcz, dopóki się da",
    duration: "4:02",
    slug: "tancz-dopoki-sie-da",
    audio: "https://romlee.net/player/3937082/tracks/4906348.mp3",
    cover: "/images/covers/yt-tancz.jpg",
    youtubeId: "D4-AHjBm5KA",
    lang: "pl",
  },
  {
    id: "4906344",
    title: "45",
    duration: "3:28",
    slug: "45",
    audio: "https://romlee.net/player/3937082/tracks/4906344.mp3",
    cover: "/images/covers/yt-45-aviw.jpg",
    youtubeId: "AViW3mllT4M",
    lang: "de",
  },
  {
    id: "4906345",
    title: "Du bist 45",
    duration: "3:38",
    slug: "du-bist-45",
    audio: "https://romlee.net/player/3937082/tracks/4906345.mp3",
    cover: "/images/covers/yt-du-bist-45.jpg",
    youtubeId: "Vqy8buH3vds",
    lang: "de",
  },
  {
    id: "4906342",
    title: "Ty tylko Ty (feat. Janina Porazinska)",
    duration: "3:14",
    slug: "ty-tylko-ty-feat-janina-porazinska",
    audio: "https://romlee.net/player/3937082/tracks/4906342.mp3",
    cover: "/images/covers/yt-ty-tylko-ty.jpg",
    youtubeId: "-hQxHSV_PI4",
    lang: "pl",
  },
  {
    id: "4879860",
    title: "Summer is fun",
    duration: "2:31",
    slug: "summer-is-fun",
    audio: "https://romlee.net/player/3937081/tracks/4879860.mp3",
    cover: "/images/covers/yt-summer-is-fun-xpw.jpg",
    youtubeId: "XpwEXF63ZE8",
    lang: "en",
  },
  {
    id: "4941704",
    title: "Jak byłeś mały",
    duration: "2:59",
    slug: "jak-byles-maly",
    audio: "https://romlee.net/player/3937082/tracks/4941704.mp3",
    cover: "/images/covers/yt-jak-byles-maly.jpg",
    youtubeId: "BmlVyZ6hTGs",
    lang: "pl",
  },
  {
    id: "4941705",
    title: "Lato jest raj (Wersja taneczna)",
    duration: "2:41",
    slug: "lato-jest-raj-wersja-taneczna",
    audio: "https://romlee.net/player/3937082/tracks/4941705.mp3",
    cover: "/images/covers/yt-lato-jest-raj.jpg",
    youtubeId: "xcS-9lsdajg",
    lang: "pl",
  },
  {
    id: "4941706",
    title: "Lato to raj (Radio Edit)",
    duration: "3:07",
    slug: "lato-to-raj-radio-edit",
    audio: "https://romlee.net/player/3937082/tracks/4941706.mp3",
    cover: "/images/covers/yt-lato-to-raj-z5.jpg?v=3",
    youtubeId: "Z5tyIzbLzPE",
    lang: "pl",
    featured: true,
  },
  {
    id: "4941707",
    title: "Ty umiesz kochać",
    duration: "4:32",
    slug: "ty-umiesz-kochac",
    audio: "https://romlee.net/player/3937082/tracks/4941707.mp3",
    cover: "/images/covers/yt-ty-umiesz-kochac.jpg",
    youtubeId: "0KRBCAbwQBU",
    lang: "pl",
  },
  {
    id: "4941708",
    title: "Pierwszy raz",
    duration: "5:30",
    slug: "pierwszy-raz",
    audio: "https://romlee.net/player/3937082/tracks/4941708.mp3",
    cover: "/images/covers/yt-pierwszy-raz.jpg",
    youtubeId: "GLYQEV6DPic",
    lang: "pl",
  },
  {
    id: "4941709",
    title: "Tu sabes amar (feat. Marga Nicolau)",
    duration: "3:08",
    slug: "tu-sabes-amar-feat-marga-nicolau",
    audio: "https://romlee.net/player/3937082/tracks/4941709.mp3",
    cover: "/images/covers/yt-tu-sabes-amar-8lw.jpg",
    youtubeId: "8lwKk-_sjXo",
    lang: "es",
  },
  {
    id: "4941710",
    title: "Generation ’95",
    duration: "4:00",
    slug: "generation-95",
    audio: "https://romlee.net/player/3937082/tracks/4941710.mp3",
    cover: "/images/covers/yt-generation-95-video.jpg",
    youtubeId: "9xtF9Y0XB0g",
    lang: "de",
  },
  {
    id: "4941711",
    title: "Durny sen",
    duration: "3:31",
    slug: "durny-sen",
    audio: "https://romlee.net/player/3937082/tracks/4941711.mp3",
    cover: "/images/covers/yt-durny-sen.jpg",
    youtubeId: "3UJvZX06lVU",
    lang: "pl",
  },
  {
    id: "4941712",
    title: "Gosia Gosia",
    duration: "5:36",
    slug: "gosia-gosia",
    audio: "https://romlee.net/player/3937082/tracks/4941712.mp3",
    cover: "/images/covers/yt-gosia-gosia.jpg",
    youtubeId: "FHUNHArNAEA",
    lang: "pl",
  },
];

export const LANG_LABEL: Record<Lang, string> = {
  de: "Deutsch",
  pl: "Polski",
  en: "English",
  es: "Español",
};

export function tracksByLang(lang: Lang) {
  return TRACKS.filter((t) => t.lang === lang);
}

export function coverForYoutubeId(id: string): string {
  const hit = TRACKS.find((t) => t.youtubeId === id);
  if (hit) return hit.cover.split("?")[0];
  const extras: Record<string, string> = {
    YTefIyKLBQA: "/images/covers/yt-love-and-peace.jpg",
    T8oDDO3b4Zk: "/images/covers/yt-lato-to-raj-z5.jpg",
    "xcS-9lsdajg": "/images/covers/yt-lato-jest-raj.jpg",
  };
  return extras[id] ?? `/api/yt-thumb/${id}`;
}

export function localVideoForYoutubeId(id: string): string | undefined {
  return TRACKS.find((t) => t.youtubeId === id)?.localVideo;
}

export function trackUrl(track: Track) {
  if (track.localVideo) return track.localVideo;
  return `https://www.youtube.com/watch?v=${track.youtubeId}`;
}
