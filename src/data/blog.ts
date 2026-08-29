export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  dateLabel: string;
  cover?: string;
  coverContain?: boolean;
  coverCaption?: string;
  subtitle?: string;
  paragraphs: string[];
  extra?: { heading: string; body: string }[];
};

export const POSTS: BlogPost[] = [
  {
    slug: "ki-als-bildsprache",
    title:
      "„KI ersetzt hier nicht die Wirklichkeit. Sie ermöglicht mir, Gedanken sichtbar zu machen, für die es in der Wirklichkeit manchmal gar keine Kamera geben kann.“",
    dateLabel: "August 2026",
    subtitle: "KI als Bildsprache",
    cover: "/images/blog/ki-gaza.jpg",
    coverCaption:
      "Beispiel-KI-Bild „Gaza-Streifen“. In der Wirklichkeit noch schlimmer.",
    excerpt:
      "Bei meinen Videos geht es oft um Dinge, die sich real kaum sinnvoll, verantwortungsvoll oder überhaupt filmen lassen.",
    paragraphs: [
      "Bei meinen Videos geht es oft um Dinge, die sich real kaum sinnvoll, verantwortungsvoll oder überhaupt filmen lassen: zerstörte Städte, Krieg, Vergangenheit und Gegenwart, große Menschenmengen, Ölfelder, verschmutztes Wasser, ausgetrocknete Landschaften oder symbolische Bilder von Hoffnung, Frieden und Neubeginn.",
      "Ich habe mich deshalb bewusst für eine künstlich erzeugte Bildwelt entschieden. KI ist für mich nicht nur ein Produktionswerkzeug, sondern eine Bildsprache für Situationen, Erinnerungen, Gedanken und Vorstellungen, die real gar nicht oder nur mit enormem Aufwand filmbar wären.",
      "Damit kann ich Gegensätze sichtbar machen: Zerstörung und Wiederaufbau, Dunkelheit und Licht, verschmutztes Wasser und eine wieder lebendige Landschaft, Angst und Hoffnung. Ich kann Entwicklungen zeigen, die sich über Jahre oder Jahrzehnte erstrecken, Vergangenheit und Zukunft miteinander verbinden oder Bilder erschaffen, die in der Realität nur mit großen Filmteams, aufwendigen Reisen und erheblichen Produktionsmitteln möglich wären.",
      "Gleichzeitig möchte ich für meine Geschichten nicht einfach reale Menschen benutzen. Ich muss keine Personen in Krisengebieten filmen, keine fremden Schicksale für ein Musikvideo instrumentalisieren und keine zufällig anwesenden Menschen ungefragt Teil einer Geschichte werden lassen. Auch Genehmigungen, Persönlichkeitsrechte, Datenschutz und mögliche Beeinträchtigungen anderer Menschen spielen bei realen Dreharbeiten eine Rolle.",
      "Die Bilder entstehen technisch mit Hilfe von KI. Aber die Geschichte, die Idee, die Auswahl der Szenen, ihre Reihenfolge, ihre Bedeutung und die Botschaft dahinter entstehen nicht durch die KI. Ich entscheide, welches Bild gebraucht wird, was es ausdrücken soll, was verworfen wird und wie daraus am Ende eine zusammenhängende Geschichte entsteht.",
      "Für mich ist das ähnlich wie bei der Musik. Neue Technik hat die Möglichkeiten von Künstlern schon immer erweitert: Aufnahmegeräte, Synthesizer, Drumcomputer, Sequencer, digitale Studios, Software, Schnitt, Tuning und Mastering. Die Technik verändert die Werkzeuge – aber sie entscheidet nicht, was ein Mensch erzählen möchte und warum er es erzählt.",
      "KI ersetzt für mich deshalb weder Kreativität noch Wirklichkeit. Sie erweitert den Raum, in dem ich eine Idee gestalten kann.",
    ],
  },
  {
    slug: "water-keep-it-for-tomorrow",
    title: "Water (Keep it for tomorrow)",
    dateLabel: "August 2026",
    cover: "/images/blog/thumb-water.jpg",
    excerpt:
      "WHY I WROTE THIS SONG… Friends in Portocolom asked for a song about water. Childhood by a stream — keep it for tomorrow.",
    paragraphs: [
      "WHY I WROTE THIS SONG...You may be wondering why I wrote this song. My Spanish friends from Portocolom—especially Rosa—asked me to write a song about water. As you probably know, water is becoming increasingly scarce in Madrid, Valencia and Andalusia, as well as on Mallorca and here in Portocolom. “Drink the Water” tells the story of a childhood in the countryside, beside a clear stream near the singer’s grandmother’s house—a stream where he swam, drank the water from his hands, and which provided water for the whole household. The video connects this beautiful memory with an important message: water gives us life, so we must protect it and preserve it for tomorrow.",
      "At the same time, pollution in rivers and oceans around the world is increasing dramatically. Everyone is aware of this, but sometimes we do not talk about it enough.",
      "We did not want to write a song that points an accusing finger or lectures people about where the water is particularly bad. We simply wanted to create a rhythmic song that can also be understood in a light-hearted way: drink water instead of wine or vodka.",
      "However, the video is also intended to show that rivers and water supplies are under increasing pressure. Many regions suffer from water shortages—whether in war zones, which I do not want to list because there are currently conflicts almost everywhere, or across large parts of Africa. In agricultural areas, many crops also receive too little water. With this song, we simply wanted to remind people—without preaching—that we all need to care for water, use it carefully and avoid wasting it. Especially in tourist regions and industrialized countries, water is not always treated as carefully as it should be.",
      "Fracking, oil extraction and the cooling of nuclear power plants all consume large amounts of water and other resources. In major manufacturing countries such as India and China, enormous quantities of water are also used in the production of textiles, clothing and leather products.",
      "I have personally treated a patient who had been in India and was exposed to mercury through contaminated drinking water. This song therefore has a very real background. Some of my patients have become ill because of dirty or contaminated water. At the same time, water is becoming increasingly scarce here in Spain, in Portocolom and in rural areas.",
      "That is why we should all use water carefully, sparingly and responsibly. The message is deliberately not stated too directly in the song itself, but I can explain it more clearly here in the accompanying YouTube text.",
      "The central message is simple: water gives us life, and we must preserve it for tomorrow.",
      "The song is performed in English, Spanish, and Polish. The song is now available to stream or download.",
    ],
  },
  {
    slug: "love-and-peace",
    title: "Love and Peace",
    dateLabel: "August 2026",
    cover: "/images/blog/thumb-love-and-peace.jpg",
    excerpt:
      "Mit Video und Short fast ein weltweites Lied für den Frieden: Mut, Hoffnung, Menschlichkeit — und eine Idee, die sich nicht zum Schweigen bringen lässt.",
    paragraphs: [
      "“Love and Peace” is a song about courage, hope, humanity, and the power of an idea that cannot be silenced. With the video and the Short it has become almost a worldwide song for peace. In the video, the singer appears as a narrator. He guides the audience through the words and messages of six extraordinary men who inspired generations to believe in peace:",
      "Martin Luther King Jr. spoke about overcoming hatred through love. Mahatma Gandhi showed the strength of nonviolence. Nelson Mandela reminded us that no one is born hating another person. Pablo Neruda represents hope that continues to grow even when people try to destroy it. Bob Marley carried the message of One Love. John Lennon asked the world to give peace a chance.",
      "The narrator connects their voices with the present and asks a simple question: After hatred, wars, and walls, is it finally time to choose another way?",
      "The refrain carries the central message: Make peace, try to love. Make peace and choose to love. Make peace and learn to love. You can’t stop the people when they rise for love. You can stop a song for a while. But you cannot stop an idea whose time has come.",
      "“You can cut all the flowers, but you cannot stop the spring.” We have tried hate. We have tried war. We have tried walls. Maybe it is time to try love and peace.",
      "Written, composed and narrated by Rom Lee.",
    ],
  },
  {
    slug: "als-du-klein-warst-jak-byles-maly",
    title: "Als du klein warst – Jak byłeś mały",
    dateLabel: "Juli 2026",
    cover: "/images/blog/thumb-jak-byles-maly.jpg",
    excerpt:
      "Eine zutiefst persönliche Reise durch Kindheit, polnische Geschichte, Literatur, Liebe und nationale Identität.",
    paragraphs: [
      "„Jak byłeś mały“ ist eine zutiefst persönliche Reise durch Kindheit, polnische Geschichte, Literatur, Liebe und nationale Identität. Das Lied porträtiert einen Jungen, der die Geschichte Polens durch seine Fantasie erlebt. Er wird zu Janosik und Kościuszko, kämpft bei Tannenberg, schließt sich den polnischen Aufständischen an und teilt das Schicksal der Jungen aus „Die Jungen von der Paulstraße“.",
      "In den Büchern von Henryk Sienkiewicz reist er durch Wüsten und Wälder, liebt wie Wołodyjowski, kämpft gegen die Tataren und reitet als polnischer Lanzenreiter, der noch immer an Napoleon glaubt, nach Moskau. Die von Adam Mickiewicz inspirierten Worte „O Litauen, mein Heimatland“ eröffnen eine schmerzlichere Dimension: den Verlust der Heimat, den Wechsel von Namen und Identität und das Aufwachsen zwischen verschiedenen Kulturen und Geschichtserzählungen.",
      "Das Bild eines Jungen, der sich in einen Panzer verwandelt und wie ein Leopard marschiert, verbindet kindliche Fantasie mit der harten Realität der europäischen Geschichte. Das Lied blickt auch auf das Leben unter dem kommunistischen System zurück und verweist auf Gomułka und das bewusst erfundene, satirische Wort „Chruszcze“. Trotz politischen Drucks, Krieges und Vertreibung bleibt die zentrale Botschaft die des Überlebens: Glaube an dich selbst, liebe von ganzem Herzen und verliere niemals die Hoffnung.",
      "Neben den großen Ereignissen der Geschichte bewahrt das Lied intime Erinnerungen – eine erste Liebe namens Kasia, Küsse vor einem Aufzug in der Stawowa-Straße und spielerische Kämpfe wie ein Ritter auf der Wiese in Gliwice. In den letzten Strophen verlagert sich die Geschichte in die polnischen Berge. Der Junge besteigt den Kasprowy Wierch in Zakopane, rast auf Skiern die Hänge hinab und begegnet in Poronin symbolisch Lenin und dem Dichter Jan Kasprowicz. Geschichte, Poesie und Erinnerung verschmelzen, bis die Poesie beinahe „durch die Ohren getrunken“ werden kann.",
      "„Jak byłeś mały“ ist ein Lied über einen Jungen, der Polen in sich trägt. Es erzählt von den Helden, die er bewunderte, den Büchern, die ihn prägten, den Menschen, die er liebte, und der Geschichte, die ihn sein Leben lang begleitete. Es ist zugleich eine Hommage an die polnische Kultur und eine emotionale Suche nach den eigenen Wurzeln.",
    ],
    extra: [
      {
        heading: "Polski",
        body: "„Jak byłeś mały” to głęboko osobista podróż przez dzieciństwo, polską historię, literaturę, miłość i tożsamość narodową. Piosenka opowiada o chłopcu, który przeżywa historię Polski poprzez własną wyobraźnię. Staje się Janosikiem i Kościuszką, walczy pod Grunwaldem, przyłącza się do polskich powstańców i dzieli los bohaterów „Chłopców z Placu Broni”. W książkach Henryka Sienkiewicza przemierza pustynie i puszcze, kocha jak Wołodyjowski, walczy z Tatarami i jako polski ułan, który wciąż wierzy w Napoleona, wyrusza na Moskwę. Zainspirowane Adamem Mickiewiczem słowa „O Litwo, ojczyzno moja” otwierają bardziej bolesny wymiar: utratę ojczyzny, zmianę nazwiska i tożsamości oraz dorastanie pomiędzy różnymi kulturami i odmiennymi narracjami historycznymi. Obraz chłopca, który przemienia się w czołg i maszeruje niczym Leopard, łączy dziecięcą fantazję z brutalną rzeczywistością europejskiej historii. Piosenka powraca również do życia w systemie komunistycznym, przywołując Gomułkę oraz świadomie wymyślone, satyryczne słowo „Chruszcze”. Pomimo politycznej presji, wojny i przesiedlenia jej głównym przesłaniem pozostaje przetrwanie: wierz w siebie, kochaj całym sercem i nigdy nie trać nadziei. Obok wielkich wydarzeń historycznych utwór zachowuje także intymne wspomnienia — pierwszą miłość o imieniu Kasia, pocałunki przed windą przy ulicy Stawowej oraz pełne zabawy walki na trawie w Gliwicach, prowadzone niczym przez rycerza. W ostatnich zwrotkach opowieść przenosi się w polskie góry. Chłopiec wchodzi na Kasprowy Wierch w Zakopanem, pędzi na nartach w dół zbocza, a w Poroninie symbolicznie spotyka Lenina i poetę Jana Kasprowicza. Historia, poezja i pamięć łączą się ze sobą, aż poezję można niemal „pić uszami”. „Jak byłeś mały” to piosenka o chłopcu, który nosi Polskę w sobie. Opowiada o bohaterach, których podziwiał, książkach, które go ukształtowały, ludziach, których kochał, oraz historii, która towarzyszyła mu przez całe życie. Jest jednocześnie hołdem dla polskiej kultury i emocjonalnym poszukiwaniem własnych korzeni.",
      },
    ],
  },
  {
    slug: "warum-deutsch-polnisch",
    title: "Warum Deutsch und Polnisch? Wir spenden alles an das Kinderhospiz in Krakau",
    dateLabel: "Juli 2026",
    cover: "/images/hospiz/visite.png",
    coverContain: true,
    excerpt:
      "Mit 13 aus Polen über Friedland. Heute Lieder in zwei Sprachen – und alle Einnahmen gehen an das Kinderhospiz in Krakau.",
    paragraphs: [
      "Ich bin mit meiner Mutter mit 13 Jahren aus Polen über Friedland gekommen (meine Mutter ist vor 50 Jahren geflüchtet) — das wollte meine Mutter. Alte Geschichte: Schlesien war deutsch-polnisch usw. Wir waren evangelisch und durch die alten Kriege gemischt, und meine Mutter wollte in ihre Heimat. Ich versuche, meine polnischen Wurzeln aufzuarbeiten und Lieder in zwei Sprachen zu schreiben.",
      "Zurzeit haben wir gut 2500 Zuhörer in Polen, und die Zahl wächst — bei nur zwei Liedern über 5000 Streams. Zusätzlich haben wir eine Einladung bekommen, rüberzufahren und dort zu singen. Und damit ich es erwähne: Alles, was wir tun, ist charitativ; wir spenden alles an:",
      "Gemeinnützige Anstalt — Krakowskie Hospicjum dla Dzieci im. ks. Józefa Tischnera, KRS 0000203313. E-Mail: kontakt@hospicjumtischnera.org · Telefon: +48 12 269 86 20 · IBAN: 98 1240 1444 1111 0010 1566 6214 · SWIFT: PKOPPLPW",
    ],
    extra: [
      {
        heading: "Polski",
        body: "Przyjechałem z mamą do Niemiec z Polski przez Friedland, gdy miałem 13 lat. Moja mama uciekła z Polski około 50 lat temu. To było jej wielkie marzenie – wrócić do swojej ojczyzny. Historia naszej rodziny jest skomplikowana. Śląsk przez wieki był zarówno niemiecki, jak i polski, a losy wielu rodzin zostały naznaczone przez wojny, przesiedlenia i zmieniające się granice. Byliśmy rodziną ewangelicką i, jak wiele osób w naszym regionie, nosimy w sobie zarówno polskie, jak i niemieckie korzenie. Dziś próbuję na nowo odkrywać i pielęgnować swoje polskie korzenie. Dlatego piszę i wykonuję piosenki w dwóch językach – po polsku i po niemiecku – aby muzyką budować mosty między ludźmi i kulturami. Obecnie nasze utwory mają już około 2500 słuchaczy w Polsce oraz ponad 5000 odtworzeń, mimo że opublikowaliśmy dopiero dwie piosenki. Liczba słuchaczy stale rośnie. Otrzymaliśmy również zaproszenie do Polski, aby tam wystąpić i zaśpiewać, co jest dla nas ogromnym wyróżnieniem. Chciałbym również podkreślić, że wszystko, co robimy w ramach tego projektu muzycznego, ma charakter charytatywny. Całość dochodów przeznaczamy na Hospicjum im. Ks. Józefa Tischnera w Krakowie.",
      },
    ],
  },
  {
    slug: "ty-tylko-ty",
    title: "Ty tylko ty – polnisches Kinderlied",
    dateLabel: "Juli 2026",
    cover: "/images/blog/thumb-ty-tylko-ty.jpg",
    excerpt:
      "Piosenka dla wszystkich, którą śpiewałam przy ognisku. Ein Kinderlied, adaptiert – Erinnerung an die Wurzeln.",
    paragraphs: [
      "TY, TYLKO TY. Piosenka dla wszystkich, którą śpiewałam przy ognisku. Nie myślałem o iskrze, która wiele obiecuje, a potem gaśnie, ale zawsze o kobiecie, która wiele obiecuje, a potem nagle znika (i bajka się kończy).",
      "Lied für alle, das ich am Lagerfeuer gesungen habe. Dabei dachte ich nicht an den Funken, der viel verspricht und dann ausgeht, sondern immer an eine Frau, die viel verspricht und dann plötzlich verschwindet (und das Märchen ist zu Ende). Das ist das polnische Lied — ein adaptiertes Kinderlied —, das mich an meine Wurzeln erinnert.",
      "Rom Lee – Akkorde zur Studioaufnahme: A-Moll · ca. 108 BPM · 4/4. Hauptakkorde: Am · E7 · Dm · G · C. Refrain: Dm – G – C – Am.",
      "Zwrotka 1: Na Wojtusia z popielnika / Iskiereczka mruga: / „Chodź, opowiem ci bajeczkę, / Bajka będzie długa”. / Była sobie raz królewna, / Pokochała grajka, / Obiecała mi królestwo, / A skończyła się nagle bajka.",
      "Refren: Ty, tylko ty jesteś tą królewną, / Ty, tylko ty umiesz kłamać cudnie. / Ty, tylko ty jesteś tą królewną.",
      "Zwrotka 2: Była sobie ta królewna, / Miała główkę cudną, / A w tej główce same dziwy — / Psst, iskierka zgasła. / Patrzy Wojtuś, patrzy długo, / Łzami zaszły oczęta. / „Czemu mnie oszukałaś?” / Wojtuś zapamięta.",
      "Zwrotka 3: Już ci nigdy nie uwierzę, / Ty królewno mała. / Najpierw błyśniesz, potem zgaśniesz — / Ot, i bajka cała.",
    ],
  },
  {
    slug: "tanze-so-lange-es-geht",
    title: "Tanze so lange es geht",
    dateLabel: "Juli 2026",
    cover: "/images/blog/thumb-tanze.jpg",
    excerpt:
      "Ein positives Lied für Rollstuhlfahrer – inspiriert von einem Patienten nach einem Unfall mit Querschnittslähmung.",
    paragraphs: [
      "Das Lied „Tanze so lange es geht“: das hat mein Patient geschrieben, nachdem der Song fertig war:",
      "„Was für ein geiler Song. Vielen lieben Dank lieber Professor! Ich bin sehr berührt. Ganz liebe Grüße, ich freue mich und segel gerne mit. Ganz liebe Grüße und vielen lieben Dank.“",
      "Bei der polnischen Version gibt es Zuschriften: „Das Lied wird eine Hymne.“ Übrigens: Ich kenne weltweit keinen positiven Song für Rollstuhlfahrer, und die sind alle tapfer.",
    ],
  },
  {
    slug: "willkommen-bei-rom-lee",
    title: "Willkommen bei Rom Lee",
    dateLabel: "Juli 2026",
    cover: "/images/logo.png",
    excerpt:
      "Das Leben spielt 1000 Streiche. Hinter jedem Lied steckt ein Schicksal — eigene Geschichte, Patienten, Segeln, Sommer.",
    paragraphs: [
      "Das Leben spielt 1000 Streiche. Irgendwann hat man genug, und nach der Musikpause schreibt man wieder Texte und Musik. Und plötzlich finden die anderen es gut und schön und wollen mehr. Also schreibe ich, und wir schauen, wohin die Reise geht. Die Texte sind mir besonders wichtig. Dankbar bin ich dem Musiker und Produzenten Hanno di Rosa. Danke an meine Patienten: Hinter jedem Lied steckt ein Schicksal.",
      "„Steh auf“: das ist meine eigene Geschichte. „Tanze so lange es geht“: das ist mein Patient S. im Rollstuhl, nach einem Unfall mit Querschnittslähmung. „Du bist 45“: das Schicksal einer Patientin, wie bei vielen Frauen.",
      "„Lebe den Sommer“ soll Freude und Spaß vermitteln. Es ist auch der Protest gegen die aktuelle Zeit und gegen die allgemeine Depression, vor allem in Deutschland. In Spanien, wo ich auch etwa sechs Monate im Jahr bin, ist diese Stimmung selten — aber die Spanier spielen auch besser Fußball.",
      "Beruflich bin ich Kardiologe (Roman Leischik) und habe nur die Arbeitszeit reduziert. Ich betreue weiter auch schwerkranke Patienten, aber mit Spaß, auf einem hohen wissenschaftlichen Niveau, jedoch ohne „Weißkittel-Syndrom“. Mit 40 Jahren klinischer und wissenschaftlicher Erfahrung brauche ich den „Weißkittel“ nicht als Nimbus und Abgrenzung.",
      "Den Künstlernamen habe ich gewählt, weil Musik für mich privat ist und bleiben soll — kein Karrierewunsch. Eigentlich wollte ich Musik für mich, meine Freude und meine Patienten, die einfach gut ist und Spaß macht. Mein Freund Michael, mit dem ich oft segeln gehe, wollte gute Musik zum Segeln, und jetzt haben wir das.",
      "Spotify und Musik waren immer Lebensbegleiter: Glashaus, Xavier, Söhne Mannheims, Grönemeyer, Reamonn. Coldplay (meine Lieblingsband) und Crowded House waren oft Lebensretter. Im Jahr höre ich bestimmt bis zu 3000 Lieder. 15 Jahre Training und die Teilnahme an Ironman-Wettkämpfen weltweit wären ohne Musik nicht möglich gewesen. Musik ist Spaß und Leben.",
      "In der Schule hatte ich eine Band, sang im Chor und spielte am Lagerfeuer. Aber auch oft in der Kirche bei Jugendgottesdiensten und bei Abschlussfeiern. Dann noch mit 18 bis 20 Jahren in der Spinne in Hagen gegen freie Getränke — das war die Liedermacherzeit. Nach überstandenen schweren Erkrankungen, als ich mich schon im Jenseits fühlte, bin ich dankbar für jeden Tag. Deshalb sind mir die Texte wichtig, aber auch die Musik zum Spaßhaben ohne Schnörkel und zum Abtanzen.",
      "Die Kombination von Musik, Rhythmus und Text ist gedacht zum Hören im Auto, morgens zu Hause nach dem Aufstehen oder im Garten. Die Hauptmotivation war, gute Musik für alle zu schreiben. In jedem Lied sollte jeder etwas finden, was ihn berührt, ihm gefällt und auch Spaß macht. Man kann zu den Liedern tanzen, mitsingen, arbeiten oder auch einfach nur zuhören.",
      "Ich und unsere Truppe (wir nennen sie Rom Lee Music Group) tanzen dazu und haben Spaß. Euch wünsche ich viel Liebe und Spaß an den Texten und an der Musik. Danke an die Palma Music Studios. Ihr seid großartig.",
    ],
  },
  {
    slug: "musik-puls-herz-sport",
    title: "Music, Pulse, Heart and Sport",
    dateLabel: "Wissenschaftlicher Artikel",
    cover: "/images/blog/musik-puls-herz-pubmed.png",
    coverContain: true,
    excerpt:
      "Musik ist nicht nur etwas, das wir hören. Wir spüren Rhythmus mit dem Körper – eine wissenschaftliche Arbeit von E. R. Gasenzer und R. Leischik.",
    paragraphs: [
      "Music is not only something we hear. We feel rhythm with our bodies, associate melodies with memories and emotions, and respond physiologically to tempo, harmony, and sound. Years before Rom Lee became a music project, this connection between music, the heart, and physical performance was already the subject of scientific work.",
      "In the medical review “Music, Pulse, Heart and Sport,” E. R. Gasenzer and R. Leischik examined how music can influence the cardiovascular system, exercise, rehabilitation, motivation, and recovery. Research discussed in the article shows that music can affect heart rate, exercise performance, motivation, and post-exercise recovery.",
      "At the same time, the effect of music is highly individual: rhythm, tempo, emotional meaning, personal preference, physical activity, and underlying disease all matter.",
      "Herz. 2018 Feb;43(1):43-52. doi: 10.1007/s00059-016-4520-7. PMID: 28116463.",
      "Den vollständigen Artikel gibt es als PDF und bei PubMed.",
    ],
  },
];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
