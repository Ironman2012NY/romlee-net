import { SITE } from "@/data/site";

const VIDEO_ID = "isW24Vr4lhk";
const WATCH = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
const THUMB = `https://i.ytimg.com/vi/${VIDEO_ID}/sddefault.jpg`;

const DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MusicGroup",
      name: SITE.name,
      alternateName: ["Rom Lee", SITE.alsoAs],
      url: SITE.original,
      sameAs: [SITE.youtube.url, SITE.spotify.url],
    },
    {
      "@type": "MusicRecording",
      name: "Water (Keep it for tomorrow)",
      alternateName: ["Drink the Water", "Drink, drink the water"],
      isrcCode: undefined,
      byArtist: {
        "@type": "MusicGroup",
        name: SITE.name,
        alternateName: SITE.alsoAs,
        url: SITE.original,
        sameAs: [SITE.youtube.url, SITE.spotify.url],
      },
      inLanguage: ["en", "es", "pl"],
      duration: "PT3M5S",
      datePublished: "2026-08-28",
      genre: ["Pop", "World"],
      keywords:
        "Water, Keep it for tomorrow, Drink the Water, Rom Lee, environment, drinking water, water conservation, Portocolom",
      url: `${SITE.original}/blog/water-keep-it-for-tomorrow`,
      sameAs: [WATCH, `https://www.youtube.com/shorts/${VIDEO_ID}`],
      recordedAs: {
        "@type": "VideoObject",
        name: "Water (Keep it for tomorrow) – Rom Lee Music",
        description:
          "Water (Keep it for tomorrow) by Rom Lee. Drink, drink the water. It's cool. Keep it for tomorrow. Song in English, Spanish and Polish about childhood by a stream and protecting water.",
        thumbnailUrl: THUMB,
        embedUrl: `https://www.youtube-nocookie.com/embed/${VIDEO_ID}`,
        contentUrl: WATCH,
        uploadDate: "2026-08-28",
        duration: "PT3M5S",
        publisher: { "@type": "Organization", name: SITE.name, url: SITE.original },
      },
    },
  ],
};

export function WaterSeo() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(DATA) }}
    />
  );
}

export const WATER_SEO = {
  title: "Water (Keep it for tomorrow) | Rom Lee | Drink the Water",
  description:
    "Water (Keep it for tomorrow) by Rom Lee — Drink, drink the water. It's cool. Keep it for tomorrow. Official video: English, Spanish and Polish. New song about water, childhood and tomorrow.",
  keywords:
    "Water Keep it for tomorrow, Drink the Water, Drink drink the water, Rom Lee, Rom Lee Music, water song, drinking water, environment, water conservation, Portocolom, it's cool, English Spanish Polish",
};
