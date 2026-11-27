import { createFileRoute, Link } from "@tanstack/react-router";
import { LANG_LABEL, tracksByLang, type Lang } from "@/data/tracks";
import { PageHead, SiteShell } from "@/components/site-shell";
import { TrackRow } from "@/components/track-row";
import { useT } from "@/components/lang-switch";
import { useLocale } from "@/lib/locale";

export const Route = createFileRoute("/songs")({ component: SongsPage });

const ORDER: Lang[] = ["de", "en", "es", "pl"];

const RELEASES = [
  {
    "title": "Christmas For You and Me (4 Languages)",
    "count": 15,
    "url": "https://www.youtube.com/watch?v=OeDaUG1m9Sw&list=OLAK5uy_meZvH_gA2PLU0Gmtw3aRrMxI8U8y_nkpI",
    "id": "OeDaUG1m9Sw",
    "english": "Christmas For You and Me (4 Languages)"
  },
  {
    "title": "We are the Ocean",
    "count": 11,
    "url": "https://www.youtube.com/watch?v=XxG2R3tZfp8&list=OLAK5uy_mNG--Vma4V0Y15VgWM-6P4CVtgV2wN4jY",
    "id": "XxG2R3tZfp8",
    "english": "We are the Ocean"
  },
  {
    "title": "Christmas Dance",
    "count": 7,
    "url": "https://www.youtube.com/watch?v=eNLWMLCXAeg&list=OLAK5uy_kZwDtHKjFkVGhTfj0QhkkFwcpJP7hzn_8",
    "id": "eNLWMLCXAeg",
    "english": "Christmas Dance"
  },
  {
    "title": "Roman",
    "count": 12,
    "url": "https://www.youtube.com/watch?v=sBOya-Lz9bg&list=OLAK5uy_lKpPWYFkgTBf7IO6XYaIej7K6yJtEpDIw",
    "id": "sBOya-Lz9bg",
    "english": "Roman"
  },
  {
    "title": "Dance for Peace",
    "count": 13,
    "url": "https://www.youtube.com/watch?v=nodyNStPtxs&list=OLAK5uy_nGD70q-gW4pQzjMKM0VQ1hjj12lbeAdus",
    "id": "nodyNStPtxs",
    "english": "Dance for Peace"
  },
  {
    "title": "Leszek",
    "count": 10,
    "url": "https://www.youtube.com/watch?v=NO6A7xxpyAw&list=OLAK5uy_k2wIN1HxdmLYuNgMIcGMlwSANtu4M0CK8",
    "id": "NO6A7xxpyAw",
    "english": "Leszek"
  },
  {
    "title": "Christmas for All (Acoustic)",
    "count": 1,
    "url": "https://www.youtube.com/watch?v=66t5vdeQAkw&list=OLAK5uy_mFl6msJ4CRgqc4Z0q4MHaeYvc6lalRFP0",
    "id": "66t5vdeQAkw",
    "english": "Christmas for All (Acoustic)"
  },
  {
    "title": "Thank You (To Those in Power)",
    "count": 1,
    "url": "https://www.youtube.com/watch?v=v8qF3tQo_ew&list=OLAK5uy_myvkTQWbZgJnjWBQia9bKsrkKzW10DnAw",
    "id": "v8qF3tQo_ew",
    "english": "Thank You (To Those in Power)"
  },
  {
    "title": "Dziękujemy",
    "count": 1,
    "url": "https://www.youtube.com/watch?v=k894z2QzuEc&list=OLAK5uy_kOPkwmFIqI_qwg3SOVeyR57X1auLonwa4",
    "id": "k894z2QzuEc",
    "english": "Thank You"
  },
  {
    "title": "Christmas for us all (Intimate)",
    "count": 1,
    "url": "https://www.youtube.com/watch?v=fklubAC-n2Q&list=OLAK5uy_muJzjWLQrGq2PmZ0GS05xwFkawBcItARg",
    "id": "fklubAC-n2Q",
    "english": "Christmas for us all (Intimate)"
  },
  {
    "title": "Gwiazdka z nieba",
    "count": 1,
    "url": "https://www.youtube.com/watch?v=2BuIXXIyvfs&list=OLAK5uy_mEcHiBcB9lDa6HFWvEi4YV5JYPAkRbXsM",
    "id": "2BuIXXIyvfs",
    "english": "A Star from the Sky"
  },
  {
    "title": "Ty Jesteś Bez Końca",
    "count": 1,
    "url": "https://www.youtube.com/watch?v=SYwGFYltbwU&list=OLAK5uy_nUQARjdOAkJhj92HYyOB_S8WykNkN2j6E",
    "id": "SYwGFYltbwU",
    "english": "You Are Infinite"
  },
  {
    "title": "Du bist so unendlich",
    "count": 1,
    "url": "https://www.youtube.com/watch?v=BzgQ179ZO0s&list=OLAK5uy_lA3hlCgTRHz0QmytaXNR8-fVN-d_Wj_oU",
    "id": "BzgQ179ZO0s",
    "english": "You Are So Infinite"
  },
  {
    "title": "Revolution (How to live)",
    "count": 1,
    "url": "https://www.youtube.com/watch?v=1RyKKsTsqcQ&list=OLAK5uy_ktnTvnej928RlxbNZh5w_cOhiEtlFhnr8",
    "id": "1RyKKsTsqcQ",
    "english": "Revolution (How to live)"
  },
  {
    "title": "Navidad - Somos Ángeles",
    "count": 1,
    "url": "https://www.youtube.com/watch?v=yk9NZ-6HfX8&list=OLAK5uy_ns8onnDYpbAeCd-7WyXrEhHwEqAGZaA-E",
    "id": "yk9NZ-6HfX8",
    "english": "Christmas – We Are the Angels"
  },
  {
    "title": "Święta – Aniołami jesteśmy My",
    "count": 1,
    "url": "https://www.youtube.com/watch?v=ti_g65JzWfU&list=OLAK5uy_m1x4pu9T7fim0aItosx8DqCn__HMx1T1o",
    "id": "ti_g65JzWfU",
    "english": "Christmas – We Are the Angels"
  },
  {
    "title": "Weihnachten - Wir sind die Engel",
    "count": 1,
    "url": "https://www.youtube.com/watch?v=Bw3US7uj4t4&list=OLAK5uy_mEOtXFzd79rYCggEbIHIdHDFl1tIAnlyU",
    "id": "Bw3US7uj4t4",
    "english": "Christmas – We Are the Angels"
  },
  {
    "title": "Christmas - We Are The Angels",
    "count": 1,
    "url": "https://www.youtube.com/watch?v=sqXEEGy_UdI&list=OLAK5uy_mzZSo2p7fDb5WF8AadagMQBv6KzIBE2II",
    "id": "sqXEEGy_UdI",
    "english": "Christmas - We Are The Angels"
  },
  {
    "title": "Jak to żyć ?",
    "count": 1,
    "url": "https://www.youtube.com/watch?v=GuuiHXe3ACA&list=OLAK5uy_kyFTmQdcZ9ssyRgX5JMVJ42anQ4pBRsaU",
    "id": "GuuiHXe3ACA",
    "english": "How to Live?"
  },
  {
    "title": "Ganz Normaler Tag",
    "count": 1,
    "url": "https://www.youtube.com/watch?v=bJ87OzJjdwE&list=OLAK5uy_k_8RpAfgpBcJv3nBTN6JLYQiSlp-0i6gs",
    "id": "bJ87OzJjdwE",
    "english": "An Ordinary Day"
  },
  {
    "title": "Córka",
    "count": 1,
    "url": "https://www.youtube.com/watch?v=41iV8tOQZuM&list=OLAK5uy_knhRAsLo7CqBCvUCKzljB6wt_pweWcLOY",
    "id": "41iV8tOQZuM",
    "english": "Daughter"
  },
  {
    "title": "Liebe",
    "count": 1,
    "url": "https://www.youtube.com/watch?v=TytkBA-0_LA&list=OLAK5uy_n4yqCogU1B4TdrdiMBuXacKnYiK9ekMbY",
    "id": "TytkBA-0_LA",
    "english": "Love"
  },
  {
    "title": "Mr. Tie",
    "count": 1,
    "url": "https://www.youtube.com/watch?v=YAUGpe3slNw&list=OLAK5uy_mBlgd7A4U_oV2hfOZUVIH6wH9ycSFJwUU",
    "id": "YAUGpe3slNw",
    "english": "Mr. Tie"
  },
  {
    "title": "Miłość",
    "count": 1,
    "url": "https://www.youtube.com/watch?v=r9ORk5ZI9RI&list=OLAK5uy_kpMMyDDLuUp701df8PmoaO-blv1Ndpdw8",
    "id": "r9ORk5ZI9RI",
    "english": "Love"
  },
  {
    "title": "Stand up for Peace",
    "count": 1,
    "url": "https://www.youtube.com/watch?v=FDxctULaTKI&list=OLAK5uy_mmG5bn_Z5SOEiunUMnvY2d7zaej4m-6Gk",
    "id": "FDxctULaTKI",
    "english": "Stand up for Peace"
  },
  {
    "title": "Water (Keep It for Tomorrow)",
    "count": 1,
    "url": "https://www.youtube.com/watch?v=isW24Vr4lhk&list=OLAK5uy_nfOoFXkCcvAbgGxiiZsXW0ZkJF2Tx3kbA",
    "id": "isW24Vr4lhk",
    "english": "Water (Keep It for Tomorrow)"
  },
  {
    "title": "Thank you, Gracias, Dziękuję, Dankeschön",
    "count": 1,
    "url": "https://www.youtube.com/watch?v=0ETU6yQmT7I&list=OLAK5uy_lPq0lvvwlEtDhheJMAD6wOBzovUHW2scc",
    "id": "0ETU6yQmT7I",
    "english": "Thank you, Gracias, Dziękuję, Dankeschön"
  },
  {
    "title": "Nächte und Wölfe",
    "count": 1,
    "url": "https://www.youtube.com/watch?v=rdO9T2OTzSA&list=OLAK5uy_kwunc0uHWREJsmVmB3wYGj2DAEfQ2XCh0",
    "id": "rdO9T2OTzSA",
    "english": "Nights and Wolves"
  },
  {
    "title": "Wilki i Słońce",
    "count": 1,
    "url": "https://www.youtube.com/watch?v=1OFQv2WZh24&list=OLAK5uy_kgMON_kBI4QUrlVwuLAp7w_umUEcY41M4",
    "id": "1OFQv2WZh24",
    "english": "Wolves and the Sun"
  },
  {
    "title": "Love and Peace",
    "count": 1,
    "url": "https://www.youtube.com/watch?v=KBXOvQr3bAY&list=OLAK5uy_lYtfOX5VXS3vBGUawv_IITeK_bZfJlOZ4",
    "id": "KBXOvQr3bAY",
    "english": "Love and Peace"
  }
] as const;
const RELEASE_LABELS: Record<string, [string,string,string,string,string,string]> = {
  "de": [
    "Veröffentlichungen",
    "Alben",
    "Singles",
    "Titel",
    "Alle Veröffentlichungen auf YouTube",
    "Songübersicht nach Sprache"
  ],
  "en": [
    "Releases",
    "Albums",
    "Singles",
    "tracks",
    "All releases on YouTube",
    "Songs by original language"
  ],
  "pl": [
    "Wydania",
    "Albumy",
    "Single",
    "utworów",
    "Wszystkie wydania na YouTube",
    "Utwory według języka"
  ],
  "es": [
    "Lanzamientos",
    "Álbumes",
    "Sencillos",
    "canciones",
    "Todos los lanzamientos en YouTube",
    "Canciones por idioma"
  ],
  "fr": [
    "Sorties",
    "Albums",
    "Singles",
    "titres",
    "Toutes les sorties sur YouTube",
    "Chansons par langue"
  ],
  "it": [
    "Pubblicazioni",
    "Album",
    "Singoli",
    "brani",
    "Tutte le pubblicazioni su YouTube",
    "Brani per lingua"
  ],
  "pt": [
    "Lançamentos",
    "Álbuns",
    "Singles",
    "faixas",
    "Todos os lançamentos no YouTube",
    "Canções por idioma"
  ],
  "no": [
    "Utgivelser",
    "Album",
    "Singler",
    "spor",
    "Alle utgivelser på YouTube",
    "Sanger etter språk"
  ],
  "tr": [
    "Yayınlar",
    "Albümler",
    "Single’lar",
    "parça",
    "YouTube’daki tüm yayınlar",
    "Dile göre şarkılar"
  ],
  "ru": [
    "Релизы",
    "Альбомы",
    "Синглы",
    "треков",
    "Все релизы на YouTube",
    "Песни по языкам"
  ],
  "uk": [
    "Релізи",
    "Альбоми",
    "Сингли",
    "треків",
    "Усі релізи на YouTube",
    "Пісні за мовами"
  ],
  "ar": [
    "الإصدارات",
    "الألبومات",
    "الأغاني المنفردة",
    "مقاطع",
    "كل الإصدارات على YouTube",
    "الأغاني حسب اللغة"
  ],
  "he": [
    "מהדורות",
    "אלבומים",
    "סינגלים",
    "שירים",
    "כל המהדורות ב-YouTube",
    "שירים לפי שפה"
  ],
  "hi": [
    "रिलीज़",
    "एल्बम",
    "सिंगल",
    "गीत",
    "YouTube पर सभी रिलीज़",
    "मूल भाषा के अनुसार गीत"
  ],
  "th": [
    "ผลงานที่เผยแพร่",
    "อัลบั้ม",
    "ซิงเกิล",
    "เพลง",
    "ผลงานทั้งหมดบน YouTube",
    "เพลงตามภาษา"
  ],
  "zh": [
    "音乐发行",
    "专辑",
    "单曲",
    "首歌曲",
    "在 YouTube 查看全部发行",
    "按原始语言浏览歌曲"
  ],
  "ja": [
    "リリース",
    "アルバム",
    "シングル",
    "曲",
    "YouTubeの全リリース",
    "言語別の曲"
  ],
  "ko": [
    "발매작",
    "앨범",
    "싱글",
    "곡",
    "YouTube의 모든 발매작",
    "언어별 곡"
  ],
  "id": [
    "Rilis",
    "Album",
    "Singel",
    "lagu",
    "Semua rilis di YouTube",
    "Lagu menurut bahasa"
  ]
};

function ReleaseGallery() {
  const locale = useLocale(s => s.locale);
  const [releases, albums, singles, tracks, all] = RELEASE_LABELS[locale] ?? RELEASE_LABELS.en;
  return <section aria-label={releases} className="space-y-8">
    <div className="flex flex-wrap items-center justify-between gap-4"><h2 className="font-display text-3xl text-fg">{releases}</h2><a href="https://www.youtube.com/@RomLeeMusic/releases" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-accent hover:underline">{all} ↗</a></div>
    {[[albums, RELEASES.filter(r => r.count > 1)], [singles, RELEASES.filter(r => r.count === 1)]].map(([heading, rows]) => <section key={heading as string}><h3 className="mb-4 font-display text-2xl text-fg">{heading as string}</h3><div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">{(rows as readonly (typeof RELEASES)[number][]).map(r => {const title = locale === "en" ? r.english : r.title; return <a key={r.url} href={r.url} target="_blank" rel="noopener noreferrer" className="group overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-accent"><img src={"/api/yt-thumb/" + r.id} alt="" loading="lazy" className="aspect-square w-full object-cover"/><div className="p-3"><p className="font-medium leading-snug text-fg group-hover:text-accent">{title}</p>{title !== r.title && <p className="mt-1 text-xs text-muted">{r.title}</p>}<p className="mt-2 text-xs text-muted">Rom Lee · {r.count > 1 ? r.count + " " + tracks : "Single"} · YouTube</p></div></a>;})}</div></section>)}
    <p className="text-xs text-muted">YouTube · 2026-11-27</p>
  </section>;
}

function SongsPage() {
  const copy = useT();
  const locale = useLocale(s => s.locale);
  const releaseLabels = RELEASE_LABELS[locale] ?? RELEASE_LABELS.en;
  return (
    <SiteShell>
      <PageHead kicker={copy.songsKicker} title={copy.songsTitle} lead={copy.songsLead} />
      <div className="mx-auto max-w-6xl space-y-14 px-4 pb-20 sm:px-6">
        <ReleaseGallery />
        <Link
          to="/songtexte"
          className="grid overflow-hidden rounded-xl border border-border bg-surface sm:grid-cols-[16rem_1fr]"
        >
          <img
            src="/images/fotos/reserve.jpg"
            alt=""
            className="aspect-[4/3] h-full w-full object-cover object-[50%_22%] sm:aspect-auto"
          />
          <div className="flex flex-col justify-center p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-accent">YouTube</p>
            <h2 className="mt-2 font-display text-2xl tracking-tight text-fg">{copy.lyricsTitle}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {copy.lyricsLead}
            </p>
            <span className="mt-4 text-sm text-fg">{copy.toLyrics}</span>
          </div>
        </Link>

        <h2 className="font-display text-3xl text-fg">{releaseLabels[5]}</h2>
        {ORDER.map((lang) => {
          const list = tracksByLang(lang);
          if (!list.length) return null;
          return (
            <section key={lang}>
              <h2 className="mb-4 font-display text-2xl tracking-tight text-fg">
                {LANG_LABEL[lang]}
              </h2>
              <div className="divide-y divide-border rounded-xl border border-border bg-surface p-2">
                {list.map((t) => (
                  <TrackRow key={t.id} track={t} />
                ))}
              </div>
            </section>
          );
        })}

      </div>
    </SiteShell>
  );
}
