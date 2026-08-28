export type Video = {
  id: string;
  title: string;
  kind: "video" | "short";
  featured?: boolean;
};

export const FEATURED_VIDEOS: Video[] = [
  {
    id: "isW24Vr4lhk",
    title: "Water (Keep it for tomorrow)",
    kind: "video",
    featured: true,
  },
  {
    id: "KBXOvQr3bAY",
    title: "Love and Peace",
    kind: "video",
    featured: true,
  },
  {
    id: "YTefIyKLBQA",
    title: "Love and Peace (Short)",
    kind: "short",
    featured: true,
  },
  {
    id: "ul5DEIL8A-M",
    title: "Nächte und Wölfe (Darkness and Light)",
    kind: "video",
  },
  {
    id: "9xtF9Y0XB0g",
    title: "Generation ’95",
    kind: "video",
  },
  {
    id: "99vogJyqsfU",
    title: "Sonne, Wind und Wellen",
    kind: "video",
  },
  {
    id: "QYcW25nHvFw",
    title: "Wilki i Słońce (Wolves and the Sun)",
    kind: "video",
  },
  {
    id: "5DnsZEeOzLs",
    title: "Ich habe dich gewollt",
    kind: "video",
  },
  {
    id: "Vqy8buH3vds",
    title: "Du bist 45",
    kind: "video",
  },
  {
    id: "ujqlHtEObQY",
    title: "Du bist das Licht",
    kind: "video",
  },
  {
    id: "ygt6tbs7-n8",
    title: "Lebe den Sommer",
    kind: "video",
  },
  {
    id: "aOfD3XeRNcU",
    title: "Steh auf",
    kind: "video",
  },
  {
    id: "XpwEXF63ZE8",
    title: "Summer is fun",
    kind: "video",
  },
  {
    id: "GLYQEV6DPic",
    title: "Pierwszy raz",
    kind: "video",
  },
  {
    id: "3UJvZX06lVU",
    title: "Durny sen",
    kind: "video",
  },
  {
    id: "KlzpbxOBvug",
    title: "Tanze so lange es geht",
    kind: "video",
  },
  {
    id: "D4-AHjBm5KA",
    title: "Tańcz, dopóki się da",
    kind: "video",
  },
  {
    id: "Z5tyIzbLzPE",
    title: "Lato to raj (Radio Edit)",
    kind: "video",
  },
  {
    id: "xcS-9lsdajg",
    title: "Lato to raj (Dance Version)",
    kind: "video",
  },
  {
    id: "T8oDDO3b4Zk",
    title: "Lato to raj (Spotify Version)",
    kind: "video",
  },
  {
    id: "-hQxHSV_PI4",
    title: "Ty tylko ty",
    kind: "video",
  },
  {
    id: "BmlVyZ6hTGs",
    title: "Jak byłeś mały",
    kind: "video",
  },
  {
    id: "FHUNHArNAEA",
    title: "Gosia Gosia",
    kind: "video",
  },
  {
    id: "8lwKk-_sjXo",
    title: "Tu sabes amar (feat. Marga Nicolau)",
    kind: "video",
  },
  {
    id: "0KRBCAbwQBU",
    title: "Ty umiesz kochać",
    kind: "video",
  },
  {
    id: "zQNpTIkpGfk",
    title: "Thank You",
    kind: "short",
  },
];

export const PLAYLISTS = [
  {
    id: "PLNtVOCJfApOA",
    title: "German Songs",
    subtitle: "Deutsche Songs",
    count: 13,
    video: "9xtF9Y0XB0g",
    cover: "/images/playlists/german.jpg",
  },
  {
    id: "PLBiEtsLwGiOk",
    title: "Polish Songs",
    subtitle: "Polnische Songs",
    count: 13,
    video: "PWJ_f_M1Nho",
    cover: "/images/playlists/polish.jpg",
  },
  {
    id: "PLGcOMPODfnXs",
    title: "English / Español",
    subtitle: "Internationale Songs",
    count: 4,
    video: "D2omSCaBiWU",
    cover: "/images/playlists/english.jpg",
  },
  {
    id: "PLODwV2EEbulA",
    title: "Beliebte Videos",
    subtitle: "Best of Rom Lee",
    count: 23,
    video: "D4-AHjBm5KA",
    cover: "/images/playlists/popular.jpg",
  },
  {
    id: "PLX7SPFnt5Mxo",
    title: "Fan Shorts",
    subtitle: "Fanshorts",
    count: 53,
    video: "YTefIyKLBQA",
    cover: "/images/playlists/shorts.jpg",
  },
  {
    id: "PLF-m6eYArnM4",
    title: "My Favorite",
    subtitle: "Meine Favoriten",
    count: 24,
    video: "KBXOvQr3bAY",
    cover: "/images/playlists/favorite.jpg",
  },
] as const;
