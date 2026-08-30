import type { Locale } from "@/lib/locale";

export type PageExtra = {
  playlistsLead: string;
  latestUploads: string;
  fromLibrary: string;
  lovePeaceLine: string;
  listenOnYoutube: string;
  backToPosts: string;
  readPdfArticle: string;
  aboutSongsAi: string;
  videoProductionNote: string;
  lyricsTeaser: string;
  toLyrics: string;
  allFilter: string;
  channelSince: string;
  viewsWord: string;
  asOf: string;
  toChannel: string;
  summaryTitle: string;
  asOfSongs: string;
  currentDiscussion: string;
};

const PAGE: Record<Locale, PageExtra> = {
  de: {
    playlistsLead:
      "German Songs, Polish Songs, English / Español, Beliebte Videos, Fan Shorts und My Favorite — Anhören auf YouTube.",
    latestUploads: "Neueste Uploads",
    fromLibrary: "Aus der Mediathek",
    lovePeaceLine:
      "„Love and Peace“: mit Video und Short fast ein weltweites Lied für den Frieden — zusammen rund sieben Millionen Aufrufe ({n} im Video).",
    listenOnYoutube: "auf YouTube anhören",
    backToPosts: "Zurück zu allen Beiträgen",
    readPdfArticle: "Wissenschaftlichen Artikel als PDF lesen",
    aboutSongsAi: "Über die Lieder und künstliche Intelligenz",
    videoProductionNote: "Hinweis zur Videoproduktion",
    lyricsTeaser:
      "Hintergründe und Texte aus den Beschreibungen des YouTube-Kanals — Love and Peace, Wilki i Słońce, Durny sen und alle weiteren Songs.",
    toLyrics: "Zu den Texten →",
    allFilter: "Alle",
    channelSince: "Kanal seit",
    viewsWord: "Aufrufe",
    asOf: "Stand",
    toChannel: "Zum Kanal",
    summaryTitle: "Zusammenfassung (gilt für alle Lieder)",
    asOfSongs: "Stand: 23. Juli 2026 · {n} Songs",
    currentDiscussion: "Laufende Beiträge",
  },
  en: {
    playlistsLead:
      "German Songs, Polish Songs, English / Español, Popular Videos, Fan Shorts and My Favorite — listen on YouTube.",
    latestUploads: "Latest uploads",
    fromLibrary: "From the library",
    lovePeaceLine:
      "“Love and Peace”: with the video and the Short, almost a worldwide song for peace — about seven million views together ({n} on the video).",
    listenOnYoutube: "listen on YouTube",
    backToPosts: "Back to all posts",
    readPdfArticle: "Read the scientific article as PDF",
    aboutSongsAi: "About the songs and artificial intelligence",
    videoProductionNote: "Note on video production",
    lyricsTeaser:
      "Background and lyrics from the YouTube channel descriptions — Love and Peace, Wilki i Słońce, Durny sen and all other songs.",
    toLyrics: "To the lyrics →",
    allFilter: "All",
    channelSince: "Channel since",
    viewsWord: "views",
    asOf: "as of",
    toChannel: "To the channel",
    summaryTitle: "Summary (applies to all songs)",
    asOfSongs: "As of 23 July 2026 · {n} songs",
    currentDiscussion: "Ongoing posts",
  },
  pl: {
    playlistsLead:
      "German Songs, Polish Songs, English / Español, popularne filmy, Fan Shorts i My Favorite — słuchaj na YouTube.",
    latestUploads: "Najnowsze filmy",
    fromLibrary: "Z biblioteki",
    lovePeaceLine:
      "„Love and Peace”: z teledyskiem i Shortem niemal światowa piosenka o pokoju — razem około siedmiu milionów wyświetleń ({n} teledysku).",
    listenOnYoutube: "słuchaj na YouTube",
    backToPosts: "Powrót do wszystkich wpisów",
    readPdfArticle: "Przeczytaj artykuł naukowy jako PDF",
    aboutSongsAi: "O piosenkach i sztucznej inteligencji",
    videoProductionNote: "Uwaga o produkcji wideo",
    lyricsTeaser:
      "Tło i teksty z opisów kanału YouTube — Love and Peace, Wilki i Słońce, Durny sen i pozostałe utwory.",
    toLyrics: "Do tekstów →",
    allFilter: "Wszystkie",
    channelSince: "Kanał od",
    viewsWord: "wyświetleń",
    asOf: "stan",
    toChannel: "Do kanału",
    summaryTitle: "Podsumowanie (dotyczy wszystkich utworów)",
    asOfSongs: "Stan: 23 lipca 2026 · {n} utworów",
    currentDiscussion: "Bieżące wpisy",
  },
  es: {
    playlistsLead:
      "German Songs, Polish Songs, English / Español, vídeos populares, Fan Shorts y My Favorite — escucha en YouTube.",
    latestUploads: "Últimas subidas",
    fromLibrary: "De la mediateca",
    lovePeaceLine:
      "“Love and Peace”: con el vídeo y el Short, casi una canción mundial por la paz — unos siete millones de reproducciones ({n} en el vídeo).",
    listenOnYoutube: "escuchar en YouTube",
    backToPosts: "Volver a todas las entradas",
    readPdfArticle: "Leer el artículo científico en PDF",
    aboutSongsAi: "Sobre las canciones y la inteligencia artificial",
    videoProductionNote: "Nota sobre la producción de vídeo",
    lyricsTeaser:
      "Trasfondos y letras de las descripciones del canal de YouTube — Love and Peace, Wilki i Słońce, Durny sen y el resto.",
    toLyrics: "A las letras →",
    allFilter: "Todas",
    channelSince: "Canal desde",
    viewsWord: "reproducciones",
    asOf: "a",
    toChannel: "Al canal",
    summaryTitle: "Resumen (vale para todas las canciones)",
    asOfSongs: "A 23 de julio de 2026 · {n} canciones",
    currentDiscussion: "Entradas en curso",
  },
  fr: {
    playlistsLead:
      "German Songs, Polish Songs, English / Español, vidéos populaires, Fan Shorts et My Favorite — à écouter sur YouTube.",
    latestUploads: "Dernières mises en ligne",
    fromLibrary: "Médiathèque",
    lovePeaceLine:
      "« Love and Peace » : avec la vidéo et le Short, presque une chanson mondiale pour la paix — environ sept millions de vues ({n} sur la vidéo).",
    listenOnYoutube: "écouter sur YouTube",
    backToPosts: "Retour à tous les articles",
    readPdfArticle: "Lire l’article scientifique en PDF",
    aboutSongsAi: "À propos des chansons et de l’intelligence artificielle",
    videoProductionNote: "Note sur la production vidéo",
    lyricsTeaser:
      "Contextes et paroles issus des descriptions YouTube — Love and Peace, Wilki i Słońce, Durny sen et les autres titres.",
    toLyrics: "Vers les paroles →",
    allFilter: "Tous",
    channelSince: "Chaîne depuis",
    viewsWord: "vues",
    asOf: "au",
    toChannel: "Vers la chaîne",
    summaryTitle: "Résumé (vaut pour toutes les chansons)",
    asOfSongs: "Au 23 juillet 2026 · {n} chansons",
    currentDiscussion: "Articles en cours",
  },
  it: {
    playlistsLead:
      "German Songs, Polish Songs, English / Español, video popolari, Fan Shorts e My Favorite — ascolta su YouTube.",
    latestUploads: "Ultimi video",
    fromLibrary: "Dalla mediateca",
    lovePeaceLine:
      "“Love and Peace”: con video e Short, quasi un brano mondiale per la pace — circa sette milioni di visualizzazioni ({n} sul video).",
    listenOnYoutube: "ascolta su YouTube",
    backToPosts: "Torna a tutti gli articoli",
    readPdfArticle: "Leggi l’articolo scientifico in PDF",
    aboutSongsAi: "Sulle canzoni e l’intelligenza artificiale",
    videoProductionNote: "Nota sulla produzione video",
    lyricsTeaser:
      "Contesti e testi dalle descrizioni del canale YouTube — Love and Peace, Wilki i Słońce, Durny sen e gli altri brani.",
    toLyrics: "Ai testi →",
    allFilter: "Tutti",
    channelSince: "Canale dal",
    viewsWord: "visualizzazioni",
    asOf: "agg.",
    toChannel: "Al canale",
    summaryTitle: "Sintesi (vale per tutte le canzoni)",
    asOfSongs: "Agg. 23 luglio 2026 · {n} brani",
    currentDiscussion: "Articoli in corso",
  },
  pt: {
    playlistsLead:
      "German Songs, Polish Songs, English / Español, vídeos populares, Fan Shorts e My Favorite — ouça no YouTube.",
    latestUploads: "Uploads mais recentes",
    fromLibrary: "Da mediatica",
    lovePeaceLine:
      "“Love and Peace”: com o vídeo e o Short, quase uma canção mundial pela paz — cerca de sete milhões de visualizações ({n} no vídeo).",
    listenOnYoutube: "ouvir no YouTube",
    backToPosts: "Voltar a todos os artigos",
    readPdfArticle: "Ler o artigo científico em PDF",
    aboutSongsAi: "Sobre as canções e a inteligência artificial",
    videoProductionNote: "Nota sobre a produção de vídeo",
    lyricsTeaser:
      "Contextos e letras das descrições do canal YouTube — Love and Peace, Wilki i Słońce, Durny sen e as restantes.",
    toLyrics: "Para as letras →",
    allFilter: "Todas",
    channelSince: "Canal desde",
    viewsWord: "visualizações",
    asOf: "em",
    toChannel: "Para o canal",
    summaryTitle: "Resumo (vale para todas as canções)",
    asOfSongs: "Em 23 de julho de 2026 · {n} canções",
    currentDiscussion: "Artigos em curso",
  },
  no: {
    playlistsLead:
      "German Songs, Polish Songs, English / Español, populære videoer, Fan Shorts og My Favorite — lytt på YouTube.",
    latestUploads: "Siste opplastinger",
    fromLibrary: "Fra mediebiblioteket",
    lovePeaceLine:
      "«Love and Peace»: med video og Short nesten en verdensomspennende fredssang — rundt sju millioner visninger ({n} på videoen).",
    listenOnYoutube: "lytt på YouTube",
    backToPosts: "Tilbake til alle innlegg",
    readPdfArticle: "Les den vitenskapelige artikkelen som PDF",
    aboutSongsAi: "Om sangene og kunstig intelligens",
    videoProductionNote: "Merknad om videoproduksjon",
    lyricsTeaser:
      "Bakgrunn og tekster fra YouTube-beskrivelsene — Love and Peace, Wilki i Słońce, Durny sen og de andre sangene.",
    toLyrics: "Til tekstene →",
    allFilter: "Alle",
    channelSince: "Kanal siden",
    viewsWord: "visninger",
    asOf: "per",
    toChannel: "Til kanalen",
    summaryTitle: "Sammendrag (gjelder alle sanger)",
    asOfSongs: "Per 23. juli 2026 · {n} sanger",
    currentDiscussion: "Løpende innlegg",
  },
  tr: {
    playlistsLead:
      "German Songs, Polish Songs, English / Español, popüler videolar, Fan Shorts ve My Favorite — YouTube’da dinle.",
    latestUploads: "Son yüklenenler",
    fromLibrary: "Medya arşivinden",
    lovePeaceLine:
      "“Love and Peace”: video ve Short ile neredeyse dünya çapında bir barış şarkısı — birlikte yaklaşık yedi milyon izlenme ({n} videoda).",
    listenOnYoutube: "YouTube’da dinle",
    backToPosts: "Tüm yazılara dön",
    readPdfArticle: "Bilimsel makaleyi PDF olarak oku",
    aboutSongsAi: "Şarkılar ve yapay zekâ üzerine",
    videoProductionNote: "Video prodüksiyonu notu",
    lyricsTeaser:
      "YouTube kanal açıklamalarından arka plan ve sözler — Love and Peace, Wilki i Słońce, Durny sen ve diğer şarkılar.",
    toLyrics: "Sözlere →",
    allFilter: "Tümü",
    channelSince: "Kanal",
    viewsWord: "izlenme",
    asOf: "güncelleme",
    toChannel: "Kanala",
    summaryTitle: "Özet (tüm şarkılar için geçerli)",
    asOfSongs: "23 Temmuz 2026 · {n} şarkı",
    currentDiscussion: "Devam eden yazılar",
  },
  ru: {
    playlistsLead:
      "German Songs, Polish Songs, English / Español, популярные видео, Fan Shorts и My Favorite — слушать на YouTube.",
    latestUploads: "Последние загрузки",
    fromLibrary: "Из медиатеки",
    lovePeaceLine:
      "«Love and Peace»: с клипом и Short почти всемирная песня о мире — вместе около семи миллионов просмотров ({n} у клипа).",
    listenOnYoutube: "слушать на YouTube",
    backToPosts: "Ко всем записям",
    readPdfArticle: "Читать научную статью в PDF",
    aboutSongsAi: "О песнях и искусственном интеллекте",
    videoProductionNote: "Заметка о видеопроизводстве",
    lyricsTeaser:
      "Фон и тексты из описаний YouTube — Love and Peace, Wilki i Słońce, Durny sen и остальные песни.",
    toLyrics: "К текстам →",
    allFilter: "Все",
    channelSince: "Канал с",
    viewsWord: "просмотров",
    asOf: "на",
    toChannel: "К каналу",
    summaryTitle: "Кратко (для всех песен)",
    asOfSongs: "На 23 июля 2026 · {n} песен",
    currentDiscussion: "Текущие записи",
  },
  uk: {
    playlistsLead:
      "German Songs, Polish Songs, English / Español, популярні відео, Fan Shorts і My Favorite — слухайте на YouTube.",
    latestUploads: "Останні завантаження",
    fromLibrary: "З медіатеки",
    lovePeaceLine:
      "«Love and Peace»: з кліпом і Short майже всесвітня пісня про мир — разом близько семи мільйонів переглядів ({n} у кліпі).",
    listenOnYoutube: "слухати на YouTube",
    backToPosts: "До всіх записів",
    readPdfArticle: "Читати наукову статтю як PDF",
    aboutSongsAi: "Про пісні та штучний інтелект",
    videoProductionNote: "Примітка про відеопродакшн",
    lyricsTeaser:
      "Контекст і тексти з описів YouTube — Love and Peace, Wilki i Słońce, Durny sen та інші пісні.",
    toLyrics: "До текстів →",
    allFilter: "Усі",
    channelSince: "Канал з",
    viewsWord: "переглядів",
    asOf: "станом на",
    toChannel: "До каналу",
    summaryTitle: "Коротко (для всіх пісень)",
    asOfSongs: "Станом на 23 липня 2026 · {n} пісень",
    currentDiscussion: "Поточні записи",
  },
  ar: {
    playlistsLead:
      "German Songs وPolish Songs وEnglish / Español والفيديوهات الشائعة وFan Shorts وMy Favorite — استمع على يوتيوب.",
    latestUploads: "أحدث الرفع",
    fromLibrary: "من المكتبة",
    lovePeaceLine:
      "«Love and Peace»: مع الفيديو والـ Short أغنية سلام شبه عالمية — نحو سبعة ملايين مشاهدة ({n} للفيديو).",
    listenOnYoutube: "استمع على يوتيوب",
    backToPosts: "العودة إلى كل المقالات",
    readPdfArticle: "اقرأ المقال العلمي كملف PDF",
    aboutSongsAi: "عن الأغاني والذكاء الاصطناعي",
    videoProductionNote: "ملاحظة حول إنتاج الفيديو",
    lyricsTeaser:
      "الخلفية والكلمات من وصف قناة يوتيوب — Love and Peace وWilki i Słońce وDurny sen وبقية الأغاني.",
    toLyrics: "إلى الكلمات ←",
    allFilter: "الكل",
    channelSince: "القناة منذ",
    viewsWord: "مشاهدات",
    asOf: "حتى",
    toChannel: "إلى القناة",
    summaryTitle: "ملخص (يسري على كل الأغاني)",
    asOfSongs: "حتى 23 يوليو 2026 · {n} أغنية",
    currentDiscussion: "مقالات جارية",
  },
  he: {
    playlistsLead:
      "German Songs, Polish Songs, English / Español, סרטונים פופולריים, Fan Shorts ו-My Favorite — להאזין ביוטיוב.",
    latestUploads: "העלאות אחרונות",
    fromLibrary: "מהספרייה",
    lovePeaceLine:
      "“Love and Peace”: עם הווידאו וה-Short כמעט שיר עולמי לשלום — כשבעה מיליון צפיות ({n} בווידאו).",
    listenOnYoutube: "להאזין ביוטיוב",
    backToPosts: "חזרה לכל הרשומות",
    readPdfArticle: "לקרוא את המאמר המדעי כ-PDF",
    aboutSongsAi: "על השירים ובינה מלאכותית",
    videoProductionNote: "הערה על הפקת הווידאו",
    lyricsTeaser:
      "רקע ומילים מתיאורי ערוץ היוטיוב — Love and Peace, Wilki i Słońce, Durny sen ושאר השירים.",
    toLyrics: "למילים →",
    allFilter: "הכול",
    channelSince: "ערוץ מאז",
    viewsWord: "צפיות",
    asOf: "נכון ל",
    toChannel: "אל הערוץ",
    summaryTitle: "סיכום (חל על כל השירים)",
    asOfSongs: "נכון ל־23 ביולי 2026 · {n} שירים",
    currentDiscussion: "רשומות שוטפות",
  },
  hi: {
    playlistsLead:
      "German Songs, Polish Songs, English / Español, लोकप्रिय वीडियो, Fan Shorts और My Favorite — YouTube पर सुनें।",
    latestUploads: "नवीनतम अपलोड",
    fromLibrary: "पुस्तकालय से",
    lovePeaceLine:
      "“Love and Peace”: वीडियो और Short के साथ लगभग विश्वव्यापी शांति गीत — कुल लगभग सात मिलियन व्यू ({n} वीडियो पर)।",
    listenOnYoutube: "YouTube पर सुनें",
    backToPosts: "सभी पोस्ट पर वापस",
    readPdfArticle: "वैज्ञानिक लेख PDF में पढ़ें",
    aboutSongsAi: "गानों और कृत्रिम बुद्धिमत्ता के बारे में",
    videoProductionNote: "वीडियो निर्माण पर टिप्पणी",
    lyricsTeaser:
      "YouTube विवरण से पृष्ठभूमि और बोल — Love and Peace, Wilki i Słońce, Durny sen और अन्य गाने।",
    toLyrics: "बोलों की ओर →",
    allFilter: "सभी",
    channelSince: "चैनल",
    viewsWord: "व्यू",
    asOf: "स्थिति",
    toChannel: "चैनल पर",
    summaryTitle: "सार (सभी गानों पर लागू)",
    asOfSongs: "स्थिति: 23 जुलाई 2026 · {n} गाने",
    currentDiscussion: "चल रहे लेख",
  },
  th: {
    playlistsLead:
      "German Songs, Polish Songs, English / Español, วิดีโอยอดนิยม, Fan Shorts และ My Favorite — ฟังบน YouTube",
    latestUploads: "อัปโหลดล่าสุด",
    fromLibrary: "จากคลังสื่อ",
    lovePeaceLine:
      "“Love and Peace”: ด้วยวิดีโอและ Short เกือบเป็นเพลงสันติภาพระดับโลก — รวมราวเจ็ดล้านวิว ({n} ที่วิดีโอ)",
    listenOnYoutube: "ฟังบน YouTube",
    backToPosts: "กลับไปบทความทั้งหมด",
    readPdfArticle: "อ่านบทความวิชาการเป็น PDF",
    aboutSongsAi: "เกี่ยวกับเพลงและปัญญาประดิษฐ์",
    videoProductionNote: "หมายเหตุการผลิตวิดีโอ",
    lyricsTeaser:
      "เบื้องหลังและเนื้อเพลงจากคำอธิบายช่อง YouTube — Love and Peace, Wilki i Słońce, Durny sen และเพลงอื่น",
    toLyrics: "ไปที่เนื้อเพลง →",
    allFilter: "ทั้งหมด",
    channelSince: "ช่องตั้งแต่",
    viewsWord: "วิว",
    asOf: "ณ",
    toChannel: "ไปที่ช่อง",
    summaryTitle: "สรุป (ใช้กับทุกเพลง)",
    asOfSongs: "ณ 23 กรกฎาคม 2026 · {n} เพลง",
    currentDiscussion: "บทความต่อเนื่อง",
  },
  ja: {
    playlistsLead:
      "German Songs、Polish Songs、English / Español、人気動画、Fan Shorts、My Favorite — YouTubeで聴く。",
    latestUploads: "最新のアップロード",
    fromLibrary: "ライブラリから",
    lovePeaceLine:
      "「Love and Peace」：動画とショートで、ほぼ世界的な平和の歌に — 合計約700万回再生（動画 {n}）。",
    listenOnYoutube: "YouTubeで聴く",
    backToPosts: "すべての投稿へ戻る",
    readPdfArticle: "学術論文をPDFで読む",
    aboutSongsAi: "楽曲と人工知能について",
    videoProductionNote: "映像制作についての注記",
    lyricsTeaser:
      "YouTubeの説明文からの背景と歌詞 — Love and Peace、Wilki i Słońce、Durny sen、その他の曲。",
    toLyrics: "歌詞へ →",
    allFilter: "すべて",
    channelSince: "チャンネル開始",
    viewsWord: "回再生",
    asOf: "時点",
    toChannel: "チャンネルへ",
    summaryTitle: "要約（すべての曲に当てはまる）",
    asOfSongs: "2026年7月23日時点 · {n} 曲",
    currentDiscussion: "連載の投稿",
  },
  ko: {
    playlistsLead:
      "German Songs, Polish Songs, English / Español, 인기 영상, Fan Shorts, My Favorite — YouTube에서 듣기.",
    latestUploads: "최신 업로드",
    fromLibrary: "라이브러리에서",
    lovePeaceLine:
      "“Love and Peace”: 영상과 쇼츠로 거의 세계적인 평화의 노래 — 합쳐 약 700만 조회({n}은 영상).",
    listenOnYoutube: "YouTube에서 듣기",
    backToPosts: "모든 글로 돌아가기",
    readPdfArticle: "학술 논문 PDF로 읽기",
    aboutSongsAi: "노래와 인공지능에 관하여",
    videoProductionNote: "영상 제작 안내",
    lyricsTeaser:
      "YouTube 설명의 배경과 가사 — Love and Peace, Wilki i Słońce, Durny sen 외 곡들.",
    toLyrics: "가사로 →",
    allFilter: "전체",
    channelSince: "채널 개설",
    viewsWord: "조회",
    asOf: "기준",
    toChannel: "채널로",
    summaryTitle: "요약 (모든 노래에 해당)",
    asOfSongs: "2026년 7월 23일 기준 · {n}곡",
    currentDiscussion: "진행 중인 글",
  },
  id: {
    playlistsLead:
      "German Songs, Polish Songs, English / Español, video populer, Fan Shorts dan My Favorite — dengarkan di YouTube.",
    latestUploads: "Unggahan terbaru",
    fromLibrary: "Dari perpustakaan media",
    lovePeaceLine:
      "“Love and Peace”: dengan video dan Short hampir menjadi lagu damai sedunia — sekitar tujuh juta tayangan ({n} pada video).",
    listenOnYoutube: "dengar di YouTube",
    backToPosts: "Kembali ke semua tulisan",
    readPdfArticle: "Baca artikel ilmiah sebagai PDF",
    aboutSongsAi: "Tentang lagu dan kecerdasan buatan",
    videoProductionNote: "Catatan produksi video",
    lyricsTeaser:
      "Latar dan lirik dari deskripsi kanal YouTube — Love and Peace, Wilki i Słońce, Durny sen dan lagu lainnya.",
    toLyrics: "Ke lirik →",
    allFilter: "Semua",
    channelSince: "Kanal sejak",
    viewsWord: "tayangan",
    asOf: "per",
    toChannel: "Ke kanal",
    summaryTitle: "Ringkasan (berlaku untuk semua lagu)",
    asOfSongs: "Per 23 Juli 2026 · {n} lagu",
    currentDiscussion: "Tulisan berjalan",
  },
};

export function pageCopy(locale: Locale): PageExtra {
  return PAGE[locale] ?? PAGE.en;
}
