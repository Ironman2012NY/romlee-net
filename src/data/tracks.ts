import { videosByViews } from "@/data/youtube-order";

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
  releaseUrl?: string;
};

export const TRACKS: Track[] = [
  {
    id: "stand-up-for-peace",
    title: "Stand Up for Peace",
    duration: "Video",
    slug: "stand-up-for-peace",
    cover: "/images/blog/thumb-stand-up-for-peace.jpg",
    youtubeId: "FDxctULaTKI",
    lang: "en",
    featured: true,
  },
  {
    id: "water-keep-it",
    title: "Water (Keep it for tomorrow)",
    duration: "3:06",
    slug: "water-keep-it-for-tomorrow",
    cover: "/images/blog/water-keep-it.jpg",
    youtubeId: "isW24Vr4lhk",
    lang: "en",
    featured: true,
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
    title: "Pierwszy raz (First Love)",
    duration: "5:30",
    slug: "pierwszy-raz",
    audio: "https://romlee.net/player/3937082/tracks/4941708.mp3",
    cover: "/images/covers/yt-first-love.jpg",
    youtubeId: "W9Tp8sZBRNA",
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
  {
    id: "wir-sind-der-ozean",
    title: "We Are the Ocean",
    duration: "Video",
    slug: "wir-sind-der-ozean",
    cover: "/api/yt-thumb/XxG2R3tZfp8",
    youtubeId: "XxG2R3tZfp8",
    lang: "en",
  },
  {
    id: "weihnachten-engel",
    title: "Christmas – We Are the Angels",
    duration: "Video",
    slug: "weihnachten-wir-sind-die-engel",
    cover: "/api/yt-thumb/sqXEEGy_UdI",
    youtubeId: "sqXEEGy_UdI",
    lang: "en",
  },
  {
    id: "mister-krawatte",
    title: "Mister Krawatte",
    duration: "Video",
    slug: "mister-krawatte",
    cover: "/api/yt-thumb/s0XOukcXpuQ",
    youtubeId: "s0XOukcXpuQ",
    lang: "de",
  },
  {
    id: "wir-danken",
    title: "Wir danken",
    duration: "Video",
    slug: "wir-danken",
    cover: "/api/yt-thumb/k894z2QzuEc",
    youtubeId: "k894z2QzuEc",
    lang: "de",
  },
  {
    id: "liebe",
    title: "Liebe",
    duration: "Video",
    slug: "liebe",
    cover: "/api/yt-thumb/xb3k8jNFN4U",
    youtubeId: "xb3k8jNFN4U",
    lang: "de",
  },
  {
    id: "christmas-for-all",
    title: "Christmas for All",
    duration: "Video",
    slug: "christmas-for-all",
    cover: "/api/yt-thumb/sd_elh2GVhE",
    youtubeId: "sd_elh2GVhE",
    lang: "en",
  },
  {
    id: "we-are-the-ocean",
    title: "We Are the Ocean",
    duration: "Short",
    slug: "we-are-the-ocean",
    cover: "/api/yt-thumb/wNhwBXmauU0",
    youtubeId: "wNhwBXmauU0",
    lang: "en",
  },
  {
    id: "dance-love-and-peace",
    title: "Dance – Love and Peace",
    duration: "Video",
    slug: "dance-love-and-peace",
    cover: "/api/yt-thumb/nodyNStPtxs",
    youtubeId: "nodyNStPtxs",
    lang: "en",
  },
  {
    id: "stand-up-deep-house",
    title: "Stand Up for Peace (Deep House)",
    duration: "Video",
    slug: "stand-up-for-peace-deep-house",
    cover: "/api/yt-thumb/AJMoFm3F4A0",
    youtubeId: "AJMoFm3F4A0",
    lang: "en",
  },
  {
    id: "revolution",
    title: "Revolution – How to live?",
    duration: "Video",
    slug: "revolution",
    cover: "/api/yt-thumb/1RyKKsTsqcQ",
    youtubeId: "1RyKKsTsqcQ",
    lang: "en",
  },
  {
    id: "navidad-somos-angeles",
    title: "Navidad – Somos Ángeles",
    duration: "Video",
    slug: "navidad-somos-angeles",
    cover: "/api/yt-thumb/yk9NZ-6HfX8",
    youtubeId: "yk9NZ-6HfX8",
    lang: "es",
  },
  {
    id: "gracias",
    title: "Dance – Thank You, Gracias",
    duration: "Video",
    slug: "gracias",
    cover: "/api/yt-thumb/CfYmpaBKOc8",
    youtubeId: "CfYmpaBKOc8",
    lang: "es",
  },
  {
    id: "corka",
    title: "Córka",
    duration: "Video",
    slug: "corka",
    cover: "/api/yt-thumb/a16PCeDdBj4",
    youtubeId: "a16PCeDdBj4",
    lang: "pl",
  },
  {
    id: "swieta-aniolami",
    title: "Święta – To my jesteśmy aniołami",
    duration: "Video",
    slug: "swieta-aniolami",
    cover: "/api/yt-thumb/9qwsuxEq8-M",
    youtubeId: "9qwsuxEq8-M",
    lang: "pl",
  },
  {
    id: "gwiazdka",
    title: "Gwiazdka z nieba",
    duration: "5:32",
    releaseUrl: "https://distrokid.com/hyperfollow/romlee/gwiazdka-z-nieba",
    slug: "gwiazdka-z-nieba",
    cover: "/api/yt-thumb/JRFkofdFLnE",
    youtubeId: "JRFkofdFLnE",
    lang: "pl",
  },
  {
    id: "i-see-angels-dance",
    title: "I See Angels in Your Face (Dance)",
    duration: "3:58",
    slug: "i-see-angels-dance",
    cover: "/api/yt-thumb/KlvjPdkS8xs",
    youtubeId: "KlvjPdkS8xs",
    lang: "en",
  },
  {
    id: "coming-home-afro-house",
    title: "Coming Home (Afro House)",
    duration: "3:36",
    slug: "coming-home-afro-house",
    cover: "/api/yt-thumb/eNLWMLCXAeg",
    youtubeId: "eNLWMLCXAeg",
    lang: "en",
  },
  {
    id: "jestesmy-aniolami-dance",
    title: "Jesteśmy Aniołami (Dance Version)",
    duration: "3:13",
    slug: "jestesmy-aniolami-dance",
    cover: "/api/yt-thumb/a1K-o6DXN78",
    youtubeId: "a1K-o6DXN78",
    lang: "pl",
  },
  {
    id: "tu-eres-el-angel-dance",
    title: "Tú Eres el Ángel (Dance)",
    duration: "3:54",
    slug: "tu-eres-el-angel-dance",
    cover: "/api/yt-thumb/nK8ASrLCSis",
    youtubeId: "nK8ASrLCSis",
    lang: "es",
  },
  {
    id: "wir-sind-die-engel-koeln",
    title: "Weihnachten – Wir sind die Engel",
    duration: "5:03",
    slug: "wir-sind-die-engel-koeln",
    cover: "/api/yt-thumb/Bw3US7uj4t4",
    youtubeId: "Bw3US7uj4t4",
    lang: "de",
  },
];

export const LANG_LABEL: Record<Lang, string> = {
  de: "Deutsch",
  pl: "Polski",
  en: "English",
  es: "Español",
};

const VIEWS = new Map(videosByViews.map((video) => [video.id, video.views]));

export function tracksByLang(lang: Lang) {
  return TRACKS.filter((t) => t.lang === lang).sort(
    (a, b) => (VIEWS.get(b.youtubeId) ?? 0) - (VIEWS.get(a.youtubeId) ?? 0),
  );
}

export function coverForYoutubeId(id: string): string {
  const hit = TRACKS.find((t) => t.youtubeId === id);
  if (hit) return hit.cover.split("?")[0];
  const extras: Record<string, string> = {
    YTefIyKLBQA: "/images/covers/yt-love-and-peace.jpg",
    T8oDDO3b4Zk: "/images/covers/yt-lato-to-raj-z5.jpg",
    "xcS-9lsdajg": "/images/covers/yt-lato-jest-raj.jpg",
    W9Tp8sZBRNA: "/images/covers/yt-first-love.jpg",
    GLYQEV6DPic: "/images/covers/yt-pierwszy-raz.jpg",
  };
  return extras[id] ?? `/api/yt-thumb/${id}`;
}

export function localVideoForYoutubeId(id: string): string | undefined {
  return TRACKS.find((t) => t.youtubeId === id)?.localVideo;
}

export function trackUrl(track: Track) {
  if (track.releaseUrl) return track.releaseUrl;
  if (track.localVideo) return track.localVideo;
  return `https://www.youtube.com/watch?v=${track.youtubeId}`;
}


// Display translations; release titles and song metadata remain unchanged.
const TITLE_TRANSLATIONS: Record<string, [string, string, string]> = {
  "45": [
    "45",
    "٤٥",
    "45"
  ],
  "stand-up-for-peace": [
    "Stand Up for Peace",
    "انهض من أجل السلام",
    "为和平挺身而出"
  ],
  "water-keep-it-for-tomorrow": [
    "Water (Keep It for Tomorrow)",
    "الماء (حافظ عليه للغد)",
    "水（留给明天）"
  ],
  "love-and-peace": [
    "Love and Peace",
    "الحب والسلام",
    "爱与和平"
  ],
  "thank-you": [
    "Thank You",
    "شكراً",
    "谢谢"
  ],
  "wilki-i-slonce": [
    "Wolves and the Sun",
    "الذئاب والشمس",
    "狼与太阳"
  ],
  "sonne-wind-und-wellen": [
    "Sun, Wind and Waves",
    "الشمس والرياح والأمواج",
    "阳光、风与海浪"
  ],
  "naechte-und-woelfe": [
    "Nights and Wolves (Darkness and Light)",
    "الليالي والذئاب (الظلام والنور)",
    "夜晚与狼（黑暗与光明）"
  ],
  "ich-habe-dich-gesehen": [
    "I Saw You",
    "رأيتك",
    "我看见了你"
  ],
  "du-bist-das-licht": [
    "You Are the Light",
    "أنت النور",
    "你是光"
  ],
  "immer-schon-hab-ich-gewollt": [
    "I Wanted You",
    "أردتك",
    "我渴望你"
  ],
  "lebe-den-sommer": [
    "Live the Summer",
    "عش الصيف",
    "享受夏日"
  ],
  "steh-auf": [
    "Stand Up",
    "انهض",
    "站起来"
  ],
  "tanze-so-lange-es-geht": [
    "Dance as Long as You Can",
    "ارقص ما دمت تستطيع",
    "尽情跳舞"
  ],
  "tancz-dopoki-sie-da": [
    "Dance as Long as You Can",
    "ارقص ما دمت تستطيع",
    "尽情跳舞"
  ],
  "du-bist-45": [
    "You Are 45",
    "عمرك خمسة وأربعون",
    "你45岁了"
  ],
  "ty-tylko-ty-feat-janina-porazinska": [
    "You, Only You (feat. Janina Porazinska)",
    "أنت، أنت وحدك (مع Janina Porazinska)",
    "你，只有你（与 Janina Porazinska 合作）"
  ],
  "ty-tylko-ty": [
    "You, Only You",
    "أنت، أنت وحدك",
    "你，只有你"
  ],
  "summer-is-fun": [
    "Summer Is Fun",
    "الصيف ممتع",
    "夏日乐趣"
  ],
  "jak-byles-maly": [
    "When You Were Little",
    "عندما كنت صغيراً",
    "当你年幼时"
  ],
  "lato-jest-raj-wersja-taneczna": [
    "Summer Is Paradise (Dance Version)",
    "الصيف جنة (نسخة راقصة)",
    "夏日天堂（舞曲版）"
  ],
  "lato-jest-raj": [
    "Summer Is Paradise",
    "الصيف جنة",
    "夏日天堂"
  ],
  "lato-to-raj-radio-edit": [
    "Summer Is Paradise (Radio Edit)",
    "الصيف جنة (نسخة إذاعية)",
    "夏日天堂（电台版）"
  ],
  "lato-to-raj": [
    "Summer Is Paradise",
    "الصيف جنة",
    "夏日天堂"
  ],
  "ty-umiesz-kochac": [
    "You Know How to Love",
    "أنت تعرف كيف تحب",
    "你懂得如何去爱"
  ],
  "pierwszy-raz": [
    "First Love",
    "الحب الأول",
    "初恋"
  ],
  "tu-sabes-amar-feat-marga-nicolau": [
    "You Know How to Love (feat. Marga Nicolau)",
    "أنت تعرف كيف تحب (مع Marga Nicolau)",
    "你懂得如何去爱（与 Marga Nicolau 合作）"
  ],
  "tu-sabes-amar": [
    "You Know How to Love",
    "أنت تعرف كيف تحب",
    "你懂得如何去爱"
  ],
  "generation-95": [
    "Generation ’95",
    "جيل ٩٥",
    "95一代"
  ],
  "durny-sen": [
    "A Foolish Dream",
    "حلم أحمق",
    "一场傻梦"
  ],
  "gosia-gosia": [
    "Gosia Gosia",
    "غوشا غوشا",
    "戈西亚 戈西亚"
  ],
  "wir-sind-der-ozean": [
    "We Are the Ocean",
    "نحن المحيط",
    "我们是海洋"
  ],
  "we-are-the-ocean": [
    "We Are the Ocean",
    "نحن المحيط",
    "我们是海洋"
  ],
  "weihnachten-wir-sind-die-engel": [
    "Christmas – We Are the Angels",
    "عيد الميلاد – نحن الملائكة",
    "圣诞节——我们是天使"
  ],
  "mister-krawatte": [
    "Mr. Tie",
    "السيد ربطة العنق",
    "领带先生"
  ],
  "wir-danken": [
    "Thank You",
    "شكراً لكم",
    "我们感谢你们"
  ],
  "liebe": [
    "Love",
    "الحب",
    "爱"
  ],
  "christmas-for-all": [
    "Christmas for All",
    "عيد الميلاد للجميع",
    "属于所有人的圣诞节"
  ],
  "dance-love-and-peace": [
    "Dance – Love and Peace",
    "رقص – الحب والسلام",
    "舞曲——爱与和平"
  ],
  "stand-up-for-peace-deep-house": [
    "Stand Up for Peace (Deep House)",
    "انهض من أجل السلام (ديب هاوس)",
    "为和平挺身而出（Deep House）"
  ],
  "revolution": [
    "Revolution – How to Live?",
    "الثورة – كيف نعيش؟",
    "革命——如何生活？"
  ],
  "navidad-somos-angeles": [
    "Christmas – We Are the Angels",
    "عيد الميلاد – نحن الملائكة",
    "圣诞节——我们是天使"
  ],
  "gracias": [
    "Dance – Thank You",
    "رقص – شكراً",
    "舞曲——谢谢"
  ],
  "corka": [
    "Daughter",
    "ابنة",
    "女儿"
  ],
  "swieta-aniolami": [
    "Christmas – We Are the Angels",
    "عيد الميلاد – نحن الملائكة",
    "圣诞节——我们是天使"
  ],
  "gwiazdka-z-nieba": [
    "A Star from the Sky",
    "نجمة من السماء",
    "来自天空的星星"
  ],
  "i-see-angels-dance": [
    "I See Angels in Your Face (Dance)",
    "أرى الملائكة في وجهك (رقص)",
    "我在你脸上看见天使（舞曲）"
  ],
  "coming-home-afro-house": [
    "Coming Home (Afro House)",
    "العودة إلى الوطن (أفرو هاوس)",
    "回家（Afro House）"
  ],
  "jestesmy-aniolami-dance": [
    "We Are the Angels (Dance Version)",
    "نحن الملائكة (نسخة راقصة)",
    "我们是天使（舞曲版）"
  ],
  "tu-eres-el-angel-dance": [
    "You Are the Angel (Dance)",
    "أنت الملاك (رقص)",
    "你是天使（舞曲）"
  ],
  "wir-sind-die-engel-koeln": [
    "Christmas – We Are the Angels",
    "عيد الميلاد – نحن الملائكة",
    "圣诞节——我们是天使"
  ],
  "bo-ty-jestes-bez-konca": [
    "Because You Are Infinite",
    "لأنك بلا نهاية",
    "因为你无穷无尽"
  ],
  "thank-you-to-those-in-power": [
    "Thank You (To Those in Power)",
    "شكراً (لأصحاب السلطة)",
    "谢谢（致掌权者）"
  ]
};

export function displaySongTitle(song: Pick<Track, "slug" | "title" | "lang">, locale: string): string {
  if (locale === song.lang) return song.title;
  const translation = TITLE_TRANSLATIONS[song.slug];
  if (!translation) return song.title;
  return translation[locale === "ar" ? 1 : locale === "zh" ? 2 : 0];
}
