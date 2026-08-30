import type { Locale } from "@/lib/locale";
import type { BlogPost } from "@/data/blog";

export type BlogText = {
  title?: string;
  subtitle?: string;
  excerpt?: string;
  dateLabel?: string;
  coverCaption?: string;
  paragraphs?: string[];
  extra?: { heading: string; body: string }[];
};

const KI: Partial<Record<Locale, BlogText>> = {
  en: {
    title:
      "“AI does not replace reality here. It lets me make thoughts visible for which, in the real world, there is sometimes no camera at all.”",
    subtitle: "AI as a visual language",
    excerpt:
      "My videos are often about things that cannot be filmed in a sensible, responsible or even possible way.",
    dateLabel: "August 2026",
    coverCaption: "Example AI image “Gaza Strip”. In reality it is even worse.",
    paragraphs: [
      "My videos are often about things that cannot really be filmed in a sensible, responsible or even possible way: destroyed cities, war, past and present, large crowds, oil fields, polluted water, dried-out landscapes, or symbolic images of hope, peace and a new beginning.",
      "That is why I deliberately chose an artificially created visual world. For me, AI is not only a production tool, but a visual language for situations, memories, thoughts and ideas that could not be filmed in reality, or only with enormous effort.",
      "It lets me show contrasts: destruction and reconstruction, darkness and light, polluted water and a landscape alive again, fear and hope. I can show developments that span years or decades, connect past and future, or create images that in real life would need large film crews, expensive travel and heavy production.",
      "At the same time I do not want to simply use real people for my stories. I do not have to film people in crisis zones, instrumentalise strangers’ fates for a music video, or make bystanders part of a story without asking. Permits, personality rights, data protection and possible harm to others also matter in real shoots.",
      "The images are made technically with the help of AI. But the story, the idea, the choice of scenes, their order, their meaning and the message behind them do not come from the AI. I decide which image is needed, what it should express, what is discarded, and how a coherent story is built in the end.",
      "For me it is similar to music. New technology has always expanded what artists can do: recorders, synthesizers, drum machines, sequencers, digital studios, software, editing, tuning and mastering. Technology changes the tools — it does not decide what a person wants to tell, or why.",
      "So for me AI replaces neither creativity nor reality. It widens the space in which I can shape an idea.",
    ],
  },
  pl: {
    title:
      "„SI nie zastępuje tu rzeczywistości. Pozwala mi uczynić widocznymi myśli, dla których w rzeczywistości czasem w ogóle nie ma kamery.”",
    subtitle: "SI jako język obrazu",
    excerpt: "Moje teledyski często dotyczą rzeczy, których nie da się sfilmować w sposób rozsądny i odpowiedzialny.",
    dateLabel: "sierpień 2026",
    coverCaption: "Przykładowy obraz SI „Strefa Gazy”. W rzeczywistości jest jeszcze gorzej.",
    paragraphs: [
      "Moje teledyski często dotyczą rzeczy, których niemal nie da się sfilmować rozsądnie, odpowiedzialnie albo w ogóle: zniszczone miasta, wojna, przeszłość i teraźniejszość, wielkie tłumy, pola naftowe, zanieczyszczona woda, wyschnięte krajobrazy albo symboliczne obrazy nadziei, pokoju i nowego początku.",
      "Dlatego świadomie wybrałem sztucznie stworzony świat obrazu. SI nie jest dla mnie tylko narzędziem produkcji, lecz językiem obrazu dla sytuacji, wspomnień, myśli i wyobrażeń, których w rzeczywistości nie da się sfilmować — albo tylko ogromnym nakładem.",
      "Mogę pokazać przeciwieństwa: zniszczenie i odbudowę, ciemność i światło, zanieczyszczoną wodę i znów żywy krajobraz, lęk i nadzieję. Mogę pokazać procesy trwające lata i dziesięciolecia, połączyć przeszłość z przyszłością albo stworzyć obrazy, które w realnym filmie wymagałyby wielkich ekip, podróży i środków.",
      "Zarazem nie chcę po prostu używać prawdziwych ludzi do moich historii. Nie muszę filmować osób w strefach kryzysu, wykorzystywać cudzych losów do teledysku ani wciągać przypadkowych ludzi do opowieści bez pytania. Przy prawdziwych zdjęciach liczą się też zgody, dobra osobiste, ochrona danych i możliwe szkody dla innych.",
      "Obrazy powstają technicznie z pomocą SI. Ale historia, pomysł, dobór scen, ich kolejność, znaczenie i przesłanie nie pochodzą od SI. Ja decyduję, który obraz jest potrzebny, co ma wyrazić, co odrzucamy i jak z tego powstaje spójna opowieść.",
      "Dla mnie jest to podobne do muzyki. Nowa technika od zawsze poszerzała możliwości artystów: magnetofony, syntezatory, automaty perkusyjne, sekwencery, cyfrowe studia, oprogramowanie, montaż, tuning i mastering. Technika zmienia narzędzia — nie decyduje, co człowiek chce opowiedzieć i dlaczego.",
      "Dlatego SI nie zastępuje u mnie ani kreatywności, ani rzeczywistości. Poszerza przestrzeń, w której mogę kształtować ideę.",
    ],
  },
  es: {
    title:
      "“La IA no sustituye aquí la realidad. Me permite hacer visibles pensamientos para los que, en la realidad, a veces no hay ninguna cámara.”",
    subtitle: "La IA como lenguaje visual",
    excerpt: "Mis vídeos tratan a menudo de cosas que no se pueden filmar de forma razonable ni responsable.",
    dateLabel: "agosto de 2026",
    coverCaption: "Imagen de IA de ejemplo «Franja de Gaza». En la realidad es aún peor.",
    paragraphs: [
      "Mis vídeos tratan a menudo de cosas que apenas se pueden filmar de forma razonable, responsable o siquiera posible: ciudades destruidas, guerra, pasado y presente, grandes muchedumbres, campos petrolíferos, agua contaminada, paisajes secos o imágenes simbólicas de esperanza, paz y un nuevo comienzo.",
      "Por eso elegí a propósito un mundo visual creado artificialmente. Para mí la IA no es solo una herramienta de producción, sino un lenguaje de imágenes para situaciones, recuerdos, pensamientos e ideas que en la realidad no se podrían filmar, o solo con un esfuerzo enorme.",
      "Así puedo mostrar contrastes: destrucción y reconstrucción, oscuridad y luz, agua sucia y un paisaje vivo de nuevo, miedo y esperanza. Puedo mostrar procesos de años o décadas, unir pasado y futuro, o crear imágenes que en la vida real exigirían grandes equipos, viajes y medios.",
      "Al mismo tiempo no quiero usar simplemente a personas reales para mis historias. No tengo que filmar a nadie en zonas de crisis, instrumentalizar destinos ajenos para un videoclip ni meter a extraños en una historia sin preguntar. En un rodaje real también importan permisos, derechos de la personalidad, protección de datos y el posible daño a otros.",
      "Las imágenes se crean técnicamente con ayuda de la IA. Pero la historia, la idea, la elección de escenas, su orden, su sentido y el mensaje no salen de la IA. Yo decido qué imagen hace falta, qué debe expresar, qué se descarta y cómo se convierte al final en una historia coherente.",
      "Para mí es parecido a la música. La técnica nueva siempre ha ampliado lo que puede hacer un artista: grabadoras, sintetizadores, cajas de ritmos, secuenciadores, estudios digitales, software, montaje, afinación y mastering. La técnica cambia las herramientas — no decide qué quiere contar una persona ni por qué.",
      "Por eso, para mí la IA no sustituye ni la creatividad ni la realidad. Amplía el espacio en el que puedo dar forma a una idea.",
    ],
  },
  fr: {
    title:
      "« L’IA ne remplace pas ici la réalité. Elle me permet de rendre visibles des pensées pour lesquelles, dans le réel, il n’y a parfois aucune caméra. »",
    subtitle: "L’IA comme langage visuel",
    dateLabel: "août 2026",
    coverCaption: "Image IA d’exemple « bande de Gaza ». Dans la réalité, c’est encore pire.",
    excerpt: "Mes clips parlent souvent de choses qu’on ne peut pas filmer de façon raisonnable ni responsable.",
    paragraphs: [
      "Mes clips parlent souvent de choses qu’on ne peut guère filmer de façon raisonnable, responsable, ou tout simplement : villes détruites, guerre, passé et présent, foules, champs de pétrole, eau polluée, paysages asséchés, ou images symboliques d’espoir, de paix et de recommencement.",
      "C’est pourquoi j’ai choisi sciemment un monde visuel créé artificiellement. Pour moi, l’IA n’est pas seulement un outil de production, mais un langage d’images pour des situations, des souvenirs, des pensées et des idées que le réel ne permettrait pas de filmer, ou seulement à grand frais.",
      "Je peux montrer des contraires : destruction et reconstruction, obscurité et lumière, eau souillée et un paysage à nouveau vivant, peur et espoir. Je peux montrer des évolutions sur des années ou des décennies, relier passé et futur, ou créer des images qui, dans la vraie vie, exigeraient de grandes équipes, des voyages et des moyens importants.",
      "En même temps, je ne veux pas simplement utiliser de vraies personnes pour mes histoires. Je n’ai pas à filmer des gens dans des zones de crise, à instrumentaliser des destins étrangers pour un clip, ni à faire entrer des passants dans une histoire sans leur demander. Permis, droits de la personnalité, protection des données et éventuels préjudices comptent aussi lors d’un vrai tournage.",
      "Les images naissent techniquement avec l’aide de l’IA. Mais l’histoire, l’idée, le choix des scènes, leur ordre, leur sens et le message ne viennent pas de l’IA. C’est moi qui décide de l’image nécessaire, de ce qu’elle doit dire, de ce qu’on écarte, et de la façon dont une histoire cohérente se construit.",
      "Pour moi, c’est comme en musique. La technique nouvelle a toujours élargi les possibilités des artistes : enregistreurs, synthétiseurs, boîtes à rythmes, séquenceurs, studios numériques, logiciels, montage, tuning et mastering. La technique change les outils — elle ne décide pas ce qu’un être humain veut raconter, ni pourquoi.",
      "L’IA ne remplace donc chez moi ni la créativité ni la réalité. Elle élargit l’espace où je peux façonner une idée.",
    ],
  },
  it: {
    title:
      "“L’IA qui non sostituisce la realtà. Mi permette di rendere visibili pensieri per i quali, nella realtà, a volte non esiste alcuna telecamera.”",
    subtitle: "L’IA come linguaggio visivo",
    dateLabel: "agosto 2026",
    coverCaption: "Immagine IA di esempio “Striscia di Gaza”. Nella realtà è ancora peggio.",
    excerpt: "I miei video parlano spesso di cose che non si possono filmare in modo ragionevole e responsabile.",
    paragraphs: [
      "I miei video parlano spesso di cose che quasi non si possono filmare in modo ragionevole, responsabile o addirittura possibile: città distrutte, guerra, passato e presente, grandi folle, campi petroliferi, acqua inquinata, paesaggi riarsi o immagini simboliche di speranza, pace e un nuovo inizio.",
      "Per questo ho scelto consapevolmente un mondo visivo creato artificialmente. Per me l’IA non è solo uno strumento di produzione, ma un linguaggio di immagini per situazioni, ricordi, pensieri e idee che nella realtà non si potrebbero filmare, o solo con uno sforzo enorme.",
      "Posso mostrare contrasti: distruzione e ricostruzione, buio e luce, acqua sporca e un paesaggio di nuovo vivo, paura e speranza. Posso mostrare sviluppi di anni o decenni, unire passato e futuro, o creare immagini che nella vita reale richiederebbero grandi troupe, viaggi e mezzi.",
      "Allo stesso tempo non voglio usare semplicemente persone reali per le mie storie. Non devo filmare persone in zone di crisi, strumentalizzare destini altrui per un videoclip né far entrare estranei in una storia senza chiedere. Nei set reali contano anche permessi, diritti della personalità, privacy e il possibile danno ad altri.",
      "Le immagini nascono tecnicamente con l’aiuto dell’IA. Ma la storia, l’idea, la scelta delle scene, il loro ordine, il significato e il messaggio non vengono dall’IA. Decido io quale immagine serve, cosa deve esprimere, cosa si scarta e come alla fine nasce una storia coerente.",
      "Per me è simile alla musica. La tecnica nuova ha sempre allargato ciò che un artista può fare: registratori, sintetizzatori, drum machine, sequencer, studi digitali, software, montaggio, tuning e mastering. La tecnica cambia gli strumenti — non decide cosa una persona vuole raccontare, né perché.",
      "Perciò per me l’IA non sostituisce né la creatività né la realtà. Allarga lo spazio in cui posso dare forma a un’idea.",
    ],
  },
  pt: {
    title:
      "“A IA não substitui aqui a realidade. Permite-me tornar visíveis pensamentos para os quais, no mundo real, por vezes não há câmara nenhuma.”",
    subtitle: "A IA como linguagem visual",
    dateLabel: "agosto de 2026",
    coverCaption: "Imagem de IA de exemplo “Faixa de Gaza”. Na realidade é ainda pior.",
    excerpt: "Os meus vídeos falam muitas vezes de coisas que não se podem filmar de forma razoável nem responsável.",
    paragraphs: [
      "Os meus vídeos falam muitas vezes de coisas que quase não se podem filmar de forma razoável, responsável ou sequer possível: cidades destruídas, guerra, passado e presente, grandes multidões, campos de petróleo, água poluída, paisagens secas ou imagens simbólicas de esperança, paz e um novo começo.",
      "Por isso escolhi de propósito um mundo visual criado artificialmente. Para mim a IA não é só uma ferramenta de produção, mas uma linguagem de imagens para situações, memórias, pensamentos e ideias que na realidade não se filmariam, ou só com enorme esforço.",
      "Posso mostrar contrastes: destruição e reconstrução, escuridão e luz, água suja e uma paisagem outra vez viva, medo e esperança. Posso mostrar evoluções de anos ou décadas, ligar passado e futuro, ou criar imagens que na vida real exigiriam grandes equipas, viagens e meios.",
      "Ao mesmo tempo não quero simplesmente usar pessoas reais nas minhas histórias. Não tenho de filmar pessoas em zonas de crise, instrumentalizar destinos alheios para um videoclipe nem meter desconhecidos numa história sem perguntar. Numa rodagem real também importam autorizações, direitos de personalidade, proteção de dados e possíveis prejuízos para outros.",
      "As imagens nascem tecnicamente com a ajuda da IA. Mas a história, a ideia, a escolha das cenas, a ordem, o sentido e a mensagem não vêm da IA. Eu decido de que imagem se precisa, o que deve exprimir, o que se deita fora e como no fim nasce uma história coerente.",
      "Para mim é parecido com a música. A técnica nova sempre alargou o que um artista pode fazer: gravadores, sintetizadores, caixas de ritmos, sequenciadores, estúdios digitais, software, montagem, afinação e mastering. A técnica muda as ferramentas — não decide o que uma pessoa quer contar, nem porquê.",
      "Por isso, para mim a IA não substitui nem a criatividade nem a realidade. Alarga o espaço em que posso dar forma a uma ideia.",
    ],
  },
  ru: {
    title:
      "«ИИ здесь не подменяет реальность. Он позволяет сделать видимыми мысли, для которых в действительности порой нет никакой камеры.»",
    subtitle: "ИИ как язык образов",
    dateLabel: "август 2026",
    coverCaption: "Пример изображения ИИ «сектор Газа». В реальности ещё хуже.",
    excerpt: "Мои клипы часто о том, что нельзя снять разумно и ответственно.",
    paragraphs: [
      "Мои клипы часто о вещах, которые почти нельзя снять разумно, ответственно или вообще: разрушенные города, война, прошлое и настоящее, толпы, нефтяные поля, грязная вода, высохшие пейзажи или символы надежды, мира и нового начала.",
      "Поэтому я сознательно выбрал искусственно созданный зрительный мир. Для меня ИИ — не только инструмент производства, но язык образов для ситуаций, воспоминаний, мыслей и представлений, которые в реальности не снять, или лишь ценой огромных усилий.",
      "Я могу показать противоположности: разрушение и восстановление, тьму и свет, грязную воду и снова живой пейзаж, страх и надежду. Могу показать процессы лет и десятилетий, связать прошлое и будущее или создать кадры, которые в жизни потребовали бы больших съёмочных групп, поездок и средств.",
      "При этом я не хочу просто использовать живых людей для своих историй. Мне не нужно снимать людей в зонах кризиса, обращать чужие судьбы в клип и делать случайных людей частью истории без спроса. На настоящих съёмках важны разрешения, личные права, защита данных и возможный вред другим.",
      "Картинки технически возникают с помощью ИИ. Но история, идея, выбор сцен, порядок, смысл и послание — не от ИИ. Я решаю, какой кадр нужен, что он должен сказать, что отбросить и как в итоге складывается цельная история.",
      "Для меня это похоже на музыку. Новая техника всегда расширяла возможности художника: магнитофоны, синтезаторы, драм-машины, секвенсоры, цифровые студии, программы, монтаж, тюнинг и мастеринг. Техника меняет инструменты — она не решает, что человек хочет рассказать и зачем.",
      "Поэтому ИИ у меня не заменяет ни творчество, ни реальность. Он расширяет пространство, в котором я могу оформить идею.",
    ],
  },
  uk: {
    title:
      "«ШІ тут не замінює дійсність. Він дає змогу зробити видимими думки, для яких у реальності іноді немає жодної камери.»",
    subtitle: "ШІ як мова образів",
    dateLabel: "серпень 2026",
    coverCaption: "Приклад зображення ШІ «Сектор Газа». У реальності ще гірше.",
    excerpt: "Мої кліпи часто про те, що не можна зняти розумно й відповідально.",
    paragraphs: [
      "Мої кліпи часто про речі, які майже неможливо зняти розумно, відповідально чи взагалі: зруйновані міста, війна, минуле й сучасність, натовпи, нафтові поля, брудна вода, висохлі краєвиди або символічні образи надії, миру й нового початку.",
      "Тому я свідомо обрав штучно створений візуальний світ. Для мене ШІ — не лише інструмент продакшену, а мова образів для ситуацій, спогадів, думок і уявлень, які в реальності не зняти, або лише величезним коштом.",
      "Я можу показати протилежності: руйнування й відбудову, темряву й світло, брудну воду й знову живий краєвид, страх і надію. Можу показати процеси років і десятиліть, поєднати минуле й майбутнє або створити кадри, які в житті потребували б великих груп, подорожей і коштів.",
      "Водночас я не хочу просто використовувати живих людей для своїх історій. Мені не треба знімати людей у кризових зонах, робити чужі долі матеріалом кліпу чи втягувати випадкових людей в історію без згоди. На справжніх зйомках важливі дозволи, особисті права, захист даних і можлива шкода іншим.",
      "Зображення технічно виникають за допомогою ШІ. Але історія, ідея, вибір сцен, їхній порядок, сенс і послання не від ШІ. Я вирішую, який кадр потрібен, що він має сказати, що відкидаємо і як зрештою складається цілісна історія.",
      "Для мене це схоже на музику. Нова техніка завжди розширювала можливості митця: магнітофони, синтезатори, драм-машини, секвенсери, цифрові студії, програми, монтаж, тюнінг і мастеринг. Техніка змінює інструменти — вона не вирішує, що людина хоче розповісти і навіщо.",
      "Тому ШІ в мене не замінює ні творчість, ні дійсність. Він розширює простір, у якому я можу оформити ідею.",
    ],
  },
  tr: {
    title:
      "“YZ burada gerçeğin yerini almaz. Gerçekte bazen hiç kamera olmayan düşünceleri görünür kılmamı sağlar.”",
    subtitle: "Görsel dil olarak YZ",
    dateLabel: "Ağustos 2026",
    coverCaption: "Örnek YZ görüntüsü “Gazze Şeridi”. Gerçekte daha da kötü.",
    excerpt: "Videolarım çoğu zaman makul ve sorumlu biçimde çekilemeyecek şeyler üzerinedir.",
    paragraphs: [
      "Videolarım çoğu zaman makul, sorumlu ya da hiç çekilemeyecek şeyler üzerinedir: yıkık kentler, savaş, geçmiş ve şimdi, kalabalıklar, petrol sahaları, kirli su, kurumuş peyzajlar ya da umut, barış ve yeni bir başlangıcın simgeleri.",
      "Bu yüzden bilinçli olarak yapay bir görüntü dünyası seçtim. YZ benim için yalnızca üretim aracı değil; gerçekte hiç ya da ancak büyük çabayla çekilebilecek durumlar, anılar, düşünceler ve tasarılar için bir görüntü dilidir.",
      "Karşıtları gösterebilirim: yıkım ve yeniden yapım, karanlık ve ışık, kirli su ve yeniden canlı bir peyzaj, korku ve umut. Yıllara, on yıllara yayılan gelişmeleri, geçmişi ve geleceği birleştirebilir ya da gerçek hayatta büyük ekipler, yolculuklar ve bütçe isteyen görüntüler yaratabilirim.",
      "Aynı zamanda hikâyelerim için gerçek insanları öylece kullanmak istemem. Kriz bölgelerinde insan çekmek, başkalarının kaderini klip için araç yapmak ya da rastgele insanları sormadan hikâyeye katmak zorunda değilim. Gerçek çekimde izinler, kişilik hakları, veri koruma ve başkalarına zarar da önemlidir.",
      "Görüntüler teknik olarak YZ yardımıyla oluşur. Ama hikâye, fikir, sahne seçimi, sıra, anlam ve mesaj YZ’den gelmez. Hangi görüntünün gerektiğine, ne söyleyeceğine, neyin atılacağına ve sonunda nasıl tutarlı bir hikâye olacağına ben karar veririm.",
      "Benim için müziğe benzer. Yeni teknik sanatçının imkânını hep genişletti: kayıt cihazları, sentezleyiciler, ritim makineleri, sequencer’lar, dijital stüdyolar, yazılım, kurgu, tuning ve mastering. Teknik araçları değiştirir — bir insanın ne anlatmak istediğine ve nedenine karar vermez.",
      "Bu yüzden YZ bende ne yaratıcılığın ne gerçeğin yerini alır. Bir fikri biçimlendirebileceğim alanı genişletir.",
    ],
  },
  no: {
    title:
      "«KI erstatter ikke virkeligheten her. Den lar meg gjøre tanker synlige som det i virkeligheten noen ganger ikke finnes noe kamera for.»",
    subtitle: "KI som bildespråk",
    dateLabel: "august 2026",
    coverCaption: "Eksempel på KI-bilde «Gazastripen». I virkeligheten er det verre.",
    excerpt: "Videoene mine handler ofte om ting som ikke kan filmes på en fornuftig og ansvarlig måte.",
    paragraphs: [
      "Videoene mine handler ofte om ting som knapt kan filmes fornuftig, ansvarlig eller i det hele tatt: ødelagte byer, krig, fortid og nåtid, store folkemengder, oljefelt, forurenset vann, uttørkede landskap eller symbolske bilder av håp, fred og en ny start.",
      "Derfor valgte jeg bevisst en kunstig skapt bildeverden. For meg er KI ikke bare et produksjonsverktøy, men et bildespråk for situasjoner, minner, tanker og forestillinger som i virkeligheten ikke kan filmes, eller bare med enorm innsats.",
      "Jeg kan vise motsetninger: ødeleggelse og gjenoppbygging, mørke og lys, skittent vann og et landskap som lever igjen, frykt og håp. Jeg kan vise utvikling over år og tiår, knytte fortid og fremtid, eller skape bilder som i det virkelige liv ville krevd store team, reiser og midler.",
      "Samtidig vil jeg ikke bare bruke ekte mennesker i historiene mine. Jeg trenger ikke filme folk i kriseområder, bruke andres skjebner i en musikkvideo eller gjøre tilfeldige mennesker til del av en historie uten å spørre. På ekte opptak betyr også tillatelser, personvern og mulig skade for andre.",
      "Bildene oppstår teknisk med hjelp av KI. Men historien, ideen, valg av scener, rekkefølge, betydning og budskap kommer ikke fra KI. Jeg bestemmer hvilket bilde som trengs, hva det skal uttrykke, hva som forkastes, og hvordan det til slutt blir en sammenhengende historie.",
      "For meg ligner det musikken. Ny teknikk har alltid utvidet kunstneres muligheter: opptakere, synthesizere, trommemaskiner, sequencere, digitale studioer, programvare, klipp, tuning og mastering. Teknikken endrer verktøyene — den bestemmer ikke hva et menneske vil fortelle, eller hvorfor.",
      "Derfor erstatter KI hos meg verken kreativitet eller virkelighet. Den utvider rommet der jeg kan forme en idé.",
    ],
  },
  ar: {
    title:
      "«الذكاء الاصطناعي لا يحل هنا محل الواقع. إنه يتيح لي أن أجعل أفكاراً مرئية، قد لا توجد لها في الواقع أي كاميرا.»",
    subtitle: "الذكاء الاصطناعي كلغة بصرية",
    dateLabel: "أغسطس 2026",
    coverCaption: "صورة ذكاء اصطناعي كمثال «قطاع غزة». في الواقع الأمر أسوأ.",
    excerpt: "غالباً ما تتناول فيديوهاتي أموراً لا يمكن تصويرها بشكل معقول أو مسؤول.",
    paragraphs: [
      "غالباً ما تتناول فيديوهاتي أموراً يصعب تصويرها بعقل ومسؤولية أو حتى أصلاً: مدن مدمّرة، حرب، ماضٍ وحاضر، حشود كبيرة، حقول نفط، مياه ملوثة، مناظر جافة، أو صور رمزية للأمل والسلام وبداية جديدة.",
      "لذلك اخترت عمداً عالماً بصرياً مصنوعاً. الذكاء الاصطناعي ليس عندي مجرد أداة إنتاج، بل لغة صور لحالات وذكريات وأفكار وتصوّرات لا يمكن تصويرها في الواقع، أو إلا بجهد هائل.",
      "أستطيع إظهار الأضداد: الدمار وإعادة البناء، الظلام والنور، الماء الوسخ ومنظر حيّ من جديد، الخوف والأمل. أستطيع إظهار تطوّرات على مدى سنوات وعقود، وربط الماضي بالمستقبل، أو خلق صور كانت في الحياة تتطلب فرقاً كبيرة وسفراً وموارد.",
      "وفي الوقت نفسه لا أريد أن أستخدم أناساً حقيقيين هكذا لقصصي. لست مضطراً لتصوير أشخاص في مناطق أزمة، ولا لاستغلال مصائر الآخرين لكليب، ولا لإدخال غرباء في قصة دون سؤال. في التصوير الحقيقي تهمّ أيضاً التصاريح وحقوق الشخصية وحماية البيانات وإمكانية الإضرار بالآخرين.",
      "الصور تُصنع تقنياً بمساعدة الذكاء الاصطناعي. أما القصة والفكرة واختيار المشاهد وترتيبها ومعناها والرسالة فلا تأتي منه. أنا من يقرر أي صورة نحتاج، وماذا تقول، وما يُستبعد، وكيف تُبنى في النهاية قصة متماسكة.",
      "هذا يشبه عندي الموسيقى. التقنية الجديدة وسّعت دائماً إمكانات الفنان: أجهزة التسجيل، السنثسيزر، آلات الإيقاع، السيكوانسر، الاستوديوهات الرقمية، البرمجيات، المونتاج، الضبط والماسترنغ. التقنية تغيّر الأدوات — لا تقرر ماذا يريد الإنسان أن يروي ولماذا.",
      "لذلك لا يحل الذكاء الاصطناعي عندي محل الإبداع ولا محل الواقع. إنه يوسّع المجال الذي أشكّل فيه فكرة.",
    ],
  },
  he: {
    title:
      "«הבינה המלאכותית אינה מחליפה כאן את המציאות. היא מאפשרת לי להפוך לגלויים מחשבות שלעתים אין להן במציאות שום מצלמה.»",
    subtitle: "בינה מלאכותית כלשון דימויים",
    dateLabel: "אוגוסט 2026",
    coverCaption: "תמונת AI לדוגמה «רצועת עזה». במציאות זה גרוע יותר.",
    excerpt: "הסרטונים שלי עוסקים לעיתים בדברים שאי אפשר לצלם באחריות.",
    paragraphs: [
      "הסרטונים שלי עוסקים לעיתים קרובות בדברים שכמעט אי אפשר לצלם באופן סביר, אחראי או בכלל: ערים הרוסות, מלחמה, עבר והווה, המונים, שדות נפט, מים מזוהמים, נופים יבשים או דימויים סמליים של תקווה, שלום והתחלה חדשה.",
      "לכן בחרתי במודע בעולם דימויים שנוצר באופן מלאכותי. בשבילי AI אינה רק כלי הפקה אלא שפת תמונה למצבים, זיכרונות, מחשבות ורעיונות שאי אפשר לצלם במציאות, או רק במאמץ עצום.",
      "אני יכול להראות ניגודים: הרס ושיקום, חושך ואור, מים מלוכלכים ונוף חי שוב, פחד ותקווה. אני יכול להראות התפתחויות של שנים ועשורים, לחבר עבר ועתיד, או ליצור תמונות שבחיים האמיתיים היו דורשות צוותים גדולים, נסיעות ואמצעים.",
      "במקביל אינני רוצה פשוט להשתמש באנשים אמיתיים לסיפורים. איני חייב לצלם אנשים באזורי משבר, לנצל גורלות זרים לקליפ או להכניס זרים לסיפור בלי לשאול. בצילום אמיתי חשובים גם אישורים, זכויות אישיות, פרטיות ונזק אפשרי לאחרים.",
      "התמונות נוצרות טכנית בעזרת AI. אבל הסיפור, הרעיון, בחירת הסצנות, הסדר, המשמעות והמסר אינם באים ממנה. אני מחליט איזו תמונה נחוצה, מה היא צריכה לומר, מה נזרק, וכיצד בסוף נבנה סיפור שלם.",
      "בשבילי זה דומה למוזיקה. טכניקה חדשה תמיד הרחיבה מה אמן יכול: מכשירי הקלטה, סינתיסייזרים, מכונות תופים, סקוונסרים, אולפנים דיגיטליים, תוכנה, עריכה, כיוון ומאסטרינג. הטכניקה משנה כלים — היא לא מחליטה מה אדם רוצה לספר ולמה.",
      "לכן AI אצלי אינה מחליפה יצירתיות וגם לא מציאות. היא מרחיבה את המרחב שבו אני יכול לעצב רעיון.",
    ],
  },
  hi: {
    title:
      "“एआई यहाँ वास्तविकता की जगह नहीं लेती। वह मुझे वे विचार दिखाने देती है जिनके लिए असल दुनिया में कभी-कभी कोई कैमरा ही नहीं होता।”",
    subtitle: "दृश्य भाषा के रूप में एआई",
    dateLabel: "अगस्त 2026",
    coverCaption: "उदाहरण एआई चित्र «गाज़ा पट्टी»। असलियत में और बुरा है।",
    excerpt: "मेरे वीडियो अक्सर ऐसी चीज़ों पर हैं जिन्हें जिम्मेदारी से फिल्माया नहीं जा सकता।",
    paragraphs: [
      "मेरे वीडियो अक्सर ऐसी चीज़ों पर हैं जिन्हें समझदारी, ज़िम्मेदारी या बिल्कुल भी फिल्माना मुश्किल है: उजड़े शहर, युद्ध, अतीत और वर्तमान, भीड़, तेल के खेत, प्रदूषित पानी, सूखे परिदृश्य, या आशा, शांति और नई शुरुआत की प्रतीकात्मक छवियाँ।",
      "इसलिए मैंने जानबूझकर कृत्रिम चित्र-संसार चुना। मेरे लिए एआई केवल प्रोडक्शन औज़ार नहीं, बल्कि उन स्थितियों, स्मृतियों, विचारों और कल्पनाओं की चित्र-भाषा है जिन्हें असल में फिल्माना संभव नहीं, या बहुत भारी लागत से ही।",
      "मैं विपरीत दिखा सकता हूँ: विनाश और पुनर्निर्माण, अंधकार और प्रकाश, गंदा पानी और फिर जीवित परिदृश्य, भय और आशा। वर्षों-दशकों के विकास, अतीत और भविष्य को जोड़ सकता हूँ, या ऐसी छवियाँ बना सकता हूँ जिनके लिए असल जीवन में बड़ी टीमें, यात्राएँ और साधन चाहिए।",
      "साथ ही मैं अपनी कहानियों के लिए वास्तविक लोगों का यूँ इस्तेमाल नहीं करना चाहता। संकट क्षेत्रों में लोगों को फिल्माने, दूसरों की नियति को म्यूज़िक वीडियो का साधन बनाने या अनजान लोगों को बिना पूछे कहानी में घसीटने की ज़रूरत नहीं। असली शूटिंग में अनुमति, व्यक्तित्व अधिकार, डेटा संरक्षण और दूसरों को नुकसान भी मायने रखते हैं।",
      "चित्र तकनीकी रूप से एआई की मदद से बनते हैं। लेकिन कहानी, विचार, दृश्यों का चुनाव, क्रम, अर्थ और संदेश एआई से नहीं आते। मैं तय करता हूँ कौन-सा चित्र चाहिए, वह क्या कहे, क्या छोड़ें, और अंत में कैसे एक जुड़ी कहानी बने।",
      "मेरे लिए यह संगीत जैसा है। नई तकनीक ने कलाकार की संभावनाएँ हमेशा बढ़ाईं: रिकॉर्डर, सिंथेसाइज़र, ड्रम मशीन, सीक्वेंसर, डिजिटल स्टूडियो, सॉफ्टवेयर, संपादन, ट्यूनिंग और मास्टरिंग। तकनीक औज़ार बदलती है — यह तय नहीं करती कि इंसान क्या कहना चाहता है और क्यों।",
      "इसलिए मेरे यहाँ एआई न रचनात्मकता की जगह लेती है न वास्तविकता की। वह उस जगह को बढ़ाती है जहाँ मैं एक विचार गढ़ सकता हूँ।",
    ],
  },
  th: {
    title:
      "“เอไอที่นี่ไม่ได้แทนที่ความจริง มันทำให้ความคิดที่ในโลกจริงบางครั้งไม่มีกล้องให้เห็นได้”",
    subtitle: "เอไอในฐานะภาษภาพ",
    dateLabel: "สิงหาคม 2026",
    coverCaption: "ภาพเอไอตัวอย่าง «ฉนวนกาซา» ในความจริงเลวยิ่งกว่า",
    excerpt: "วิดีโอของผมมักเกี่ยวกับสิ่งที่ถ่ายอย่างรับผิดชอบแทบไม่ได้",
    paragraphs: [
      "วิดีโอของผมมักเกี่ยวกับสิ่งที่แทบถ่ายอย่างสมเหตุสมผล รับผิดชอบ หรือแม้แต่ถ่ายไม่ได้: เมืองพัง, สงคราม, อดีตและปัจจุบัน, ฝูงชน, แหล่งน้ำมัน, น้ำเสีย, ทิวทัศน์แห้ง หรือภาพสัญลักษณ์ของความหวัง สันติภาพ และการเริ่มต้นใหม่",
      "ผมจึงเลือกโลกภาพที่สร้างขึ้นอย่างจงใจ เอไอสำหรับผมไม่ใช่แค่เครื่องมือผลิต แต่เป็นภาษภาพสำหรับสถานการณ์ ความทรงจำ ความคิด และจินตนาการที่ในความจริงถ่ายไม่ได้ หรือต้องใช้แรงมหาศาล",
      "ผมแสดงความตรงข้ามได้: การทำลายกับการสร้างใหม่ ความมืดกับแสง น้ำสกปรกกับทิวทัศน์ที่มีชีวิตอีกครั้ง ความกลัวกับความหวัง แสดงพัฒนาการเป็นปีเป็นทศวรรษ เชื่อมอดีตกับอนาคต หรือสร้างภาพที่ในชีวิตจริงต้องใช้ทีมใหญ่ การเดินทาง และทุน",
      "ขณะเดียวกันผมไม่อยากใช้คนจริง ๆ ในเรื่องของผมโดยง่าย ไม่ต้องถ่ายคนในเขตวิกฤต ไม่ใช้ชะตากรรมคนอื่นเป็นคลิป และไม่ดึงคนแปลกหน้าเข้าเรื่องโดยไม่ถาม ในการถ่ายจริง ใบอนุญาต สิทธิส่วนบุคคล การคุ้มครองข้อมูล และความเสียหายต่อผู้อื่นก็สำคัญ",
      "ภาพเกิดทางเทคนิคด้วยเอไอ แต่เรื่อง ไอเดีย การเลือกฉาก ลำดับ ความหมาย และสาร ไม่ได้มาจากเอไอ ผมตัดสินใจว่าภาพไหนต้องใช้ มันควรสื่ออะไร อะไรทิ้ง และสุดท้ายเรื่องจะต่อกันอย่างไร",
      "สำหรับผมคล้ายดนตรี เทคโนโลยีใหม่ขยายสิ่งที่ศิลปินทำได้เสมอ: เครื่องอัด ซินธิไซเซอร์ กลองไฟฟ้า ซีเควนเซอร์ สตูดิโอดิจิทัล ซอฟต์แวร์ ตัดต่อ จูน และมาสเตอริง เทคโนโลยีเปลี่ยนเครื่องมือ — ไม่ได้ตัดสินว่ามนุษย์อยากเล่าอะไรและทำไม",
      "ดังนั้นเอไอของผมไม่แทนที่ความคิดสร้างสรรค์หรือความจริง มันขยายพื้นที่ที่ผมจะปั้นไอเดียได้",
    ],
  },
  ja: {
    title:
      "「AIはここで現実の代わりにはならない。現実にはカメラが存在しないような思考を、見えるようにしてくれる。」",
    subtitle: "視覚言語としてのAI",
    dateLabel: "2026年8月",
    coverCaption: "AI画像の例「ガザ地区」。現実はさらに過酷です。",
    excerpt: "私の映像は、責任を持って撮影できないことを扱うことが多い。",
    paragraphs: [
      "私の映像は、まともに、責任を持って、あるいはそもそも撮影できないことを扱うことが多い。壊れた都市、戦争、過去と現在、大群衆、油田、汚れた水、乾いた風景、希望・平和・再出発の象徴的なイメージ。",
      "だから私は意図して、人工的に作られた映像世界を選んだ。私にとってAIは制作ツールであるだけでなく、現実では撮れない、あるいは莫大な手間でしか撮れない状況・記憶・思考・構想のための視覚言語だ。",
      "対比を見せられる。破壊と再建、闇と光、汚れた水と再び生きる風景、恐れと希望。何年何十年もの変化、過去と未来をつなぐこと、現実なら大人数のチームと旅と予算が必要な絵を作ることができる。",
      "同時に、物語のために実在の人を安易に使いたくない。危機地域で人を撮る必要もないし、他人の運命をPVの材料にすることも、見知らぬ人を断りなく物語に入れることもない。本物の撮影では許可、人格権、個人情報、他者への害も問題になる。",
      "画像は技術的にはAIの助けで生まれる。しかし物語、アイデア、場面の選択、順序、意味、メッセージはAIから来ない。どの絵が必要か、何を表すか、何を捨てるか、最後にどう一つの話にするかは私が決める。",
      "音楽と同じだと思う。新しい技術はいつも表現の幅を広げてきた。レコーダー、シンセ、ドラムマシン、シーケンサー、デジタルスタジオ、ソフト、編集、チューニング、マスタリング。技術は道具を変える。人が何を語りたいか、なぜ語るかは決めない。",
      "だから私にとってAIは創造性も現実も置き換えない。アイデアを形にできる空間を広げるだけだ。",
    ],
  },
  ko: {
    title:
      "“AI는 여기서 현실을 대체하지 않습니다. 현실에는 카메라가 없을 생각을 보이게 해 줄 뿐입니다.”",
    subtitle: "시각 언어로서의 AI",
    dateLabel: "2026년 8월",
    coverCaption: "AI 이미지 예시 «가자 지구». 현실은 더 가혹합니다.",
    excerpt: "제 영상은 책임 있게 촬영할 수 없는 것을 다루는 경우가 많습니다.",
    paragraphs: [
      "제 영상은 합리적으로, 책임 있게, 혹은 아예 촬영할 수 없는 것을 다루는 경우가 많습니다. 파괴된 도시, 전쟁, 과거와 현재, 군중, 유전, 오염된 물, 마른 풍경, 희망과 평화와 새로운 시작의 상징.",
      "그래서 일부러 인공적으로 만든 영상 세계를 골랐습니다. 저에게 AI는 제작 도구일 뿐 아니라, 현실에서는 찍을 수 없거나 엄청난 수고로만 찍을 수 있는 상황, 기억, 생각, 구상을 위한 시각 언어입니다.",
      "대비를 보여줄 수 있습니다. 파괴와 재건, 어둠과 빛, 더러운 물과 다시 살아난 풍경, 두려움과 희망. 수년 수십 년의 변화, 과거와 미래를 잇거나, 현실에서는 큰 팀과 여행과 비용이 필요한 그림을 만들 수 있습니다.",
      "동시에 이야기를 위해 실제 사람을 함부로 쓰고 싶지 않습니다. 위기 지역에서 사람을 찍을 필요도, 남의 운명을 뮤비의 재료로 삼을 필요도, 모르는 사람을 묻지 않고 이야기에 넣을 필요도 없습니다. 실제 촬영에서는 허가, 인격권, 개인정보, 타인에 대한 해도 중요합니다.",
      "이미지는 기술적으로 AI의 도움으로 만들어집니다. 그러나 이야기, 아이디어, 장면 선택, 순서, 의미, 메시지는 AI에서 오지 않습니다. 어떤 그림이 필요한지, 무엇을 말할지, 무엇을 버릴지, 마지막에 어떻게 하나의 이야기가 될지는 제가 정합니다.",
      "저에게는 음악과 같습니다. 새 기술은 언제나 예술가의 가능성을 넓혔습니다. 녹음기, 신시사이저, 드럼머신, 시퀀서, 디지털 스튜디오, 소프트웨어, 편집, 튜닝, 마스터링. 기술은 도구를 바꿉니다. 사람이 무엇을, 왜 말하려는지는 정하지 않습니다.",
      "그래서 제게 AI는 창의성도 현실도 대체하지 않습니다. 아이디어를 빚을 수 있는 공간을 넓혀 줄 뿐입니다.",
    ],
  },
  id: {
    title:
      "“AI di sini tidak menggantikan kenyataan. Ia memungkinkan saya menampakkan pikiran yang di dunia nyata kadang tidak ada kameranya sama sekali.”",
    subtitle: "AI sebagai bahasa gambar",
    dateLabel: "Agustus 2026",
    coverCaption: "Contoh gambar AI “Jalur Gaza”. Di kenyataan lebih parah.",
    excerpt: "Video saya sering tentang hal yang tidak bisa difilmkan secara wajar dan bertanggung jawab.",
    paragraphs: [
      "Video saya sering tentang hal yang hampir tidak bisa difilmkan secara wajar, bertanggung jawab, atau sama sekali: kota hancur, perang, masa lalu dan kini, kerumunan, ladang minyak, air tercemar, lanskap kering, atau gambar simbol harapan, damai, dan awal baru.",
      "Karena itu saya sengaja memilih dunia gambar yang dibuat secara buatan. Bagi saya AI bukan hanya alat produksi, melainkan bahasa gambar untuk situasi, ingatan, pikiran, dan gagasan yang di kenyataan tidak bisa difilmkan, atau hanya dengan usaha sangat besar.",
      "Saya bisa menunjukkan lawan: kehancuran dan pembangunan kembali, gelap dan terang, air kotor dan lanskap yang hidup lagi, takut dan harap. Saya bisa menunjukkan perkembangan bertahun-tahun, menghubungkan masa lalu dan masa depan, atau membuat gambar yang di kehidupan nyata butuh kru besar, perjalanan, dan dana.",
      "Pada saat yang sama saya tidak ingin begitu saja memakai orang nyata untuk cerita. Saya tidak harus memfilmkan orang di zona krisis, memakai nasib orang lain untuk klip, atau memasukkan orang asing ke cerita tanpa bertanya. Dalam syuting nyata izin, hak kepribadian, perlindungan data, dan kemungkinan merugikan orang lain juga penting.",
      "Gambar secara teknis lahir dengan bantuan AI. Tetapi cerita, gagasan, pilihan adegan, urutan, makna, dan pesan tidak datang dari AI. Saya yang memutuskan gambar mana yang perlu, apa yang harus diungkapkannya, apa yang dibuang, dan bagaimana akhirnya menjadi cerita yang utuh.",
      "Bagi saya ini mirip musik. Teknik baru selalu memperluas apa yang bisa dilakukan seniman: perekam, synthesizer, drum machine, sequencer, studio digital, perangkat lunak, suntingan, tuning, dan mastering. Teknik mengubah alat — tidak memutuskan apa yang ingin diceritakan manusia, dan mengapa.",
      "Karena itu bagi saya AI tidak menggantikan kreativitas maupun kenyataan. Ia memperluas ruang tempat saya membentuk sebuah gagasan.",
    ],
  },
};

const WATER_EN_PARAS = [
  "WHY I WROTE THIS SONG...You may be wondering why I wrote this song. My Spanish friends from Portocolom—especially Rosa—asked me to write a song about water. As you probably know, water is becoming increasingly scarce in Madrid, Valencia and Andalusia, as well as on Mallorca and here in Portocolom. “Drink the Water” tells the story of a childhood in the countryside, beside a clear stream near the singer’s grandmother’s house—a stream where he swam, drank the water from his hands, and which provided water for the whole household. The video connects this beautiful memory with an important message: water gives us life, so we must protect it and preserve it for tomorrow.",
  "At the same time, pollution in rivers and oceans around the world is increasing dramatically. Everyone is aware of this, but sometimes we do not talk about it enough.",
  "We did not want to write a song that points an accusing finger or lectures people about where the water is particularly bad. We simply wanted to create a rhythmic song that can also be understood in a light-hearted way: drink water instead of wine or vodka.",
  "However, the video is also intended to show that rivers and water supplies are under increasing pressure. Many regions suffer from water shortages—whether in war zones, which I do not want to list because there are currently conflicts almost everywhere, or across large parts of Africa. In agricultural areas, many crops also receive too little water. With this song, we simply wanted to remind people—without preaching—that we all need to care for water, use it carefully and avoid wasting it. Especially in tourist regions and industrialized countries, water is not always treated as carefully as it should be.",
  "Fracking, oil extraction and the cooling of nuclear power plants all consume large amounts of water and other resources. In major manufacturing countries such as India and China, enormous quantities of water are also used in the production of textiles, clothing and leather products.",
  "I have personally treated a patient who had been in India and was exposed to mercury through contaminated drinking water. This song therefore has a very real background. Some of my patients have become ill because of dirty or contaminated water. At the same time, water is becoming increasingly scarce here in Spain, in Portocolom and in rural areas.",
  "That is why we should all use water carefully, sparingly and responsibly. The message is deliberately not stated too directly in the song itself, but I can explain it more clearly here in the accompanying YouTube text.",
  "The central message is simple: water gives us life, and we must preserve it for tomorrow.",
  "The song is performed in English, Spanish, and Polish. The song is now available to stream or download.",
];

const WATER: Partial<Record<Locale, BlogText>> = {
  en: {
    excerpt: "WHY I WROTE THIS SONG… Friends in Portocolom asked for a song about water.",
    dateLabel: "August 2026",
    paragraphs: WATER_EN_PARAS,
  },
  de: {
    excerpt: "WARUM ICH DIESES LIED SCHRIEB… Freunde in Portocolom baten um ein Lied über Wasser.",
    dateLabel: "August 2026",
    paragraphs: [
      "WARUM ICH DIESES LIED SCHRIEB… Vielleicht fragen Sie sich, warum ich dieses Lied geschrieben habe. Meine spanischen Freunde aus Portocolom — vor allem Rosa — haben mich gebeten, ein Lied über Wasser zu schreiben. Wasser wird in Madrid, Valencia und Andalusien knapper, ebenso auf Mallorca und hier in Portocolom. „Drink the Water“ erzählt von einer Kindheit auf dem Land, an einem klaren Bach beim Haus der Großmutter — darin geschwommen, daraus mit den Händen getrunken, davon hat der ganze Haushalt gelebt. Das Video verbindet diese Erinnerung mit einer einfachen Botschaft: Wasser gibt uns Leben, deshalb müssen wir es schützen und für morgen bewahren.",
      "Zugleich nimmt die Verschmutzung von Flüssen und Meeren weltweit dramatisch zu. Das weiß jeder, aber oft sprechen wir zu wenig darüber.",
      "Wir wollten kein Lied mit erhobenem Zeigefinger, das predigen, wo das Wasser besonders schlecht ist. Wir wollten ein rhythmisches Lied, das man auch leicht verstehen kann: trink Wasser statt Wein oder Wodka.",
      "Das Video soll aber auch zeigen, dass Flüsse und Wasserversorgung unter Druck stehen. Viele Regionen haben Wassermangel — in Kriegsgebieten, die ich nicht aufzählen will, weil es derzeit fast überall Konflikte gibt, und in großen Teilen Afrikas. In der Landwirtschaft bekommen viele Pflanzen zu wenig Wasser. Mit diesem Lied wollten wir erinnern — ohne zu predigen —, dass wir alle Wasser achten, sparsam nutzen und nicht verschwenden sollen. Gerade in Touristenregionen und Industrieländern wird Wasser nicht immer so vorsichtig behandelt, wie es nötig wäre.",
      "Fracking, Ölgewinnung und die Kühlung von Atomkraftwerken verbrauchen große Mengen Wasser und andere Ressourcen. In großen Produktionsländern wie Indien und China gehen enorme Wassermengen in Textilien, Kleidung und Leder.",
      "Ich habe selbst einen Patienten behandelt, der in Indien war und über verunreinigtes Trinkwasser Quecksilber ausgesetzt war. Dieses Lied hat einen sehr realen Hintergrund. Manche meiner Patienten sind durch schmutziges oder verunreinigtes Wasser krank geworden. Gleichzeitig wird Wasser hier in Spanien, in Portocolom und auf dem Land knapper.",
      "Deshalb sollten wir alle Wasser achtsam, sparsam und verantwortungsvoll nutzen. Die Botschaft steht im Lied bewusst nicht zu direkt — hier im YouTube-Text kann ich sie klarer sagen.",
      "Die zentrale Botschaft ist einfach: Wasser gibt uns Leben, und wir müssen es für morgen bewahren.",
      "Das Lied ist auf Englisch, Spanisch und Polnisch. Es ist zum Streamen und Download da.",
    ],
  },
  pl: {
    excerpt: "DLACZEGO NAPISAŁEM TĘ PIOSENKĘ… Przyjaciele z Portocolom prosili o utwór o wodzie.",
    dateLabel: "sierpień 2026",
    paragraphs: [
      "DLACZEGO NAPISAŁEM TĘ PIOSENKĘ… Hiszpańscy przyjaciele z Portocolom — zwłaszcza Rosa — poprosili mnie o piosenkę o wodzie. W Madrycie, Walencji i Andaluzji, na Majorce i tutaj w Portocolom wody ubywa. „Drink the Water” opowiada o dzieciństwie na wsi, przy czystej rzeczce koło domu babci — w niej pływał, z niej pił wodę z rąk, nią żył cały dom. Teledysk łączy to wspomnienie z prostym przesłaniem: woda daje życie, więc chrońmy ją na jutro.",
      "Jednocześnie zanieczyszczenie rzek i oceanów na świecie dramatycznie rośnie. Wszyscy o tym wiedzą, ale za mało o tym mówimy.",
      "Nie chcieliśmy piosenki z uniesionym palcem. Chcieliśmy rytmicznego utworu, który można też wziąć lekko: pij wodę zamiast wina czy wódki.",
      "Teledysk ma też pokazać, że rzeki i zaopatrzenie w wodę są pod presją. Wiele regionów ma jej za mało — w strefach wojny, których nie chcę wymieniać, i w dużej części Afryki. W rolnictwie wiele upraw dostaje za mało wody. Chcieliśmy przypomnieć — bez kazania — że wszyscy musimy dbać o wodę, używać jej ostrożnie i nie marnować. Szczególnie w regionach turystycznych i krajach przemysłowych woda nie zawsze jest traktowana tak ostrożnie, jak powinna.",
      "Fracking, wydobycie ropy i chłodzenie elektrowni jądrowych zużywają ogromne ilości wody. W wielkich krajach produkcyjnych, jak Indie i Chiny, ogromne ilości wody idą na tekstylia, odzież i skórę.",
      "Leczyłem pacjenta, który był w Indiach i przez zanieczyszczoną wodę pitną zetknął się z rtęcią. Ta piosenka ma bardzo realne tło. Część moich pacjentów zachorowała przez brudną wodę. Jednocześnie wody ubywa w Hiszpanii, w Portocolom i na wsi.",
      "Dlatego wszyscy powinniśmy używać wody ostrożnie, oszczędnie i odpowiedzialnie. W samej piosence przesłanie nie jest zbyt bezpośrednie — tutaj, w tekście YouTube, mogę powiedzieć je jaśniej.",
      "Centralne przesłanie jest proste: woda daje życie i musimy zachować ją na jutro.",
      "Piosenka jest po angielsku, hiszpańsku i polsku. Jest dostępna do streamingu i pobrania.",
    ],
  },
  es: {
    excerpt: "POR QUÉ ESCRIBÍ ESTA CANCIÓN… Amigos de Portocolom pidieron una canción sobre el agua.",
    dateLabel: "agosto de 2026",
    paragraphs: [
      "POR QUÉ ESCRIBÍ ESTA CANCIÓN… Mis amigos españoles de Portocolom —sobre todo Rosa— me pidieron una canción sobre el agua. El agua escasea en Madrid, Valencia y Andalucía, también en Mallorca y aquí en Portocolom. “Drink the Water” cuenta una infancia en el campo, junto a un arroyo claro cerca de la casa de la abuela: nadaba, bebía el agua con las manos, y esa agua daba de vivir a toda la casa. El vídeo une ese recuerdo con un mensaje simple: el agua nos da vida, hay que protegerla y guardarla para mañana.",
      "Al mismo tiempo la contaminación de ríos y océanos crece de forma dramática. Todos lo sabemos, pero a veces no hablamos bastante.",
      "No queríamos una canción con el dedo acusador. Queríamos un tema rítmico, también ligero: bebe agua en vez de vino o vodka.",
      "El vídeo también quiere mostrar que ríos y suministros están bajo presión. Muchas regiones sufren falta de agua — en zonas de guerra, que no quiero enumerar, y en gran parte de África. En la agricultura muchos cultivos reciben demasiado poco. Queríamos recordar —sin sermón— que todos debemos cuidar el agua, usarla con tiento y no desperdiciarla. Sobre todo en zonas turísticas y países industriales el agua no siempre se trata con el cuidado que merece.",
      "El fracking, la extracción de petróleo y la refrigeración de centrales nucleares consumen mucha agua. En grandes países de fabricación como India y China se usa muchísima agua en textiles, ropa y cuero.",
      "He tratado a un paciente que estuvo en la India y se expuso al mercurio por agua potable contaminada. Esta canción tiene un fondo muy real. Algunos pacientes se han enfermado por agua sucia. Y el agua escasea aquí en España, en Portocolom y en el campo.",
      "Por eso todos deberíamos usar el agua con cuidado, con mesura y con responsabilidad. En la canción el mensaje no está demasiado directo a propósito; aquí, en el texto de YouTube, puedo decirlo más claro.",
      "El mensaje central es simple: el agua nos da vida, y debemos conservarla para mañana.",
      "La canción está en inglés, español y polaco. Ya se puede escuchar y descargar.",
    ],
  },
};

const LOVE: Partial<Record<Locale, BlogText>> = {
  en: {
    excerpt:
      "With video and Short almost a worldwide song for peace: courage, hope, humanity — and an idea that cannot be silenced.",
    dateLabel: "August 2026",
  },
  de: {
    excerpt:
      "Mit Video und Short fast ein weltweites Lied für den Frieden: Mut, Hoffnung, Menschlichkeit — und eine Idee, die sich nicht zum Schweigen bringen lässt.",
    dateLabel: "August 2026",
    paragraphs: [
      "„Love and Peace“ ist ein Lied über Mut, Hoffnung, Menschlichkeit und die Kraft einer Idee, die man nicht zum Schweigen bringen kann. Mit Video und Short ist es fast zu einem weltweiten Lied für den Frieden geworden. Im Video erscheint der Sänger als Erzähler. Er führt durch die Worte und Botschaften von sechs außergewöhnlichen Männern, die Generationen zum Glauben an den Frieden bewegt haben:",
      "Martin Luther King Jr. sprach davon, Hass durch Liebe zu überwinden. Mahatma Gandhi zeigte die Kraft der Gewaltlosigkeit. Nelson Mandela erinnerte daran, dass niemand als Hassender geboren wird. Pablo Neruda steht für Hoffnung, die weiterwächst, auch wenn man sie zerstören will. Bob Marley trug die Botschaft von One Love. John Lennon bat die Welt, dem Frieden eine Chance zu geben.",
      "Der Erzähler verbindet ihre Stimmen mit der Gegenwart und stellt eine einfache Frage: Nach Hass, Kriegen und Mauern — ist es endlich Zeit für einen anderen Weg?",
      "Der Refrain trägt die Botschaft: Make peace, try to love. Make peace and choose to love. Make peace and learn to love. You can’t stop the people when they rise for love. Man kann ein Lied eine Weile stoppen. Aber man kann eine Idee, deren Zeit gekommen ist, nicht stoppen.",
      "„Man kann alle Blumen abschneiden, aber man kann den Frühling nicht aufhalten.“ Wir haben Hass versucht. Wir haben Krieg versucht. Wir haben Mauern versucht. Vielleicht ist es Zeit, Love and Peace zu versuchen.",
      "Text, Komposition und Erzählung: Rom Lee.",
    ],
  },
  pl: {
    excerpt:
      "Z teledyskiem i Shortem niemal światowa piosenka o pokoju: odwaga, nadzieja, człowieczeństwo — i idea, której nie da się uciszyć.",
    dateLabel: "sierpień 2026",
    paragraphs: [
      "„Love and Peace” to piosenka o odwadze, nadziei, człowieczeństwie i sile idei, której nie da się uciszyć. Z teledyskiem i Shortem stała się niemal światową pieśnią pokoju. W teledysku piosenkarz jest narratorem. Prowadzi przez słowa sześciu niezwykłych mężczyzn, którzy inspirowali pokolenia do wiary w pokój:",
      "Martin Luther King Jr. mówił o pokonywaniu nienawiści miłością. Mahatma Gandhi pokazał siłę non-violence. Nelson Mandela przypominał, że nikt nie rodzi się nienawidząc. Pablo Neruda to nadzieja, która rośnie, nawet gdy chcą ją zniszczyć. Bob Marley niósł One Love. John Lennon prosił świat, by dać szansę pokojowi.",
      "Narrator łączy ich głosy z teraźniejszością i pyta prosto: po nienawiści, wojnach i murach — czy czas wybrać inną drogę?",
      "Refren niesie przesłanie: Make peace, try to love. Piosenkę można na chwilę zatrzymać. Idei, której czas nadszedł, nie.",
      "„Można ściąć wszystkie kwiaty, ale wiosny nie zatrzymasz.” Próbowaliśmy nienawiści, wojny, murów. Może czas spróbować Love and Peace.",
      "Tekst, kompozycja i narracja: Rom Lee.",
    ],
  },
  es: {
    excerpt:
      "Con vídeo y Short, casi una canción mundial por la paz: valor, esperanza, humanidad — y una idea que no se puede callar.",
    dateLabel: "agosto de 2026",
    paragraphs: [
      "“Love and Peace” es una canción sobre valor, esperanza, humanidad y el poder de una idea que no se puede silenciar. Con el vídeo y el Short se ha vuelto casi una canción mundial por la paz. En el vídeo el cantante es narrador. Guía por las palabras de seis hombres extraordinarios que inspiraron a generaciones a creer en la paz:",
      "Martin Luther King Jr. habló de vencer el odio con amor. Mahatma Gandhi mostró la fuerza de la no violencia. Nelson Mandela recordó que nadie nace odiando. Pablo Neruda es la esperanza que sigue creciendo aunque quieran destruirla. Bob Marley llevó One Love. John Lennon pidió al mundo dar una oportunidad a la paz.",
      "El narrador une sus voces con el presente y pregunta: después del odio, las guerras y los muros, ¿es hora de otro camino?",
      "El estribillo lleva el mensaje: Make peace, try to love. Se puede parar una canción un rato. No se puede parar una idea cuyo tiempo ha llegado.",
      "“Se pueden cortar todas las flores, pero no se puede detener la primavera.” Hemos probado el odio, la guerra, los muros. Quizá es hora de probar Love and Peace.",
      "Letra, composición y narración: Rom Lee.",
    ],
  },
};

const HOSPIZ: Partial<Record<Locale, BlogText>> = {
  en: {
    title: "Why German and Polish? We donate everything to the children’s hospice in Kraków",
    excerpt:
      "At 13 from Poland via Friedland. Today songs in two languages — and all proceeds go to the children’s hospice in Kraków.",
    dateLabel: "July 2026",
    paragraphs: [
      "I came with my mother from Poland via Friedland at the age of 13 (my mother fled about 50 years ago) — that was what she wanted. Old history: Silesia was German-Polish, and so on. We were Protestant, mixed through the old wars, and my mother wanted to go home. I try to work through my Polish roots and write songs in two languages.",
      "Right now we have a good 2,500 listeners in Poland, and the number is growing — with only two songs, over 5,000 streams. We have also been invited to go over and sing. And so that I mention it: everything we do is charitable; we donate everything to:",
      "Public-benefit institution — Krakowskie Hospicjum dla Dzieci im. ks. Józefa Tischnera, KRS 0000203313. Email: kontakt@hospicjumtischnera.org · Phone: +48 12 269 86 20 · IBAN: 98 1240 1444 1111 0010 1566 6214 · SWIFT: PKOPPLPW",
    ],
  },
  pl: {
    title: "Dlaczego niemiecki i polski? Wszystko przekazujemy hospicjum dziecięcemu w Krakowie",
    excerpt:
      "W wieku 13 lat z Polski przez Friedland. Dziś piosenki w dwóch językach — a cały dochód idzie na hospicjum dziecięce w Krakowie.",
    dateLabel: "lipiec 2026",
  },
  es: {
    title: "¿Por qué alemán y polaco? Donamos todo al hospicio infantil de Cracovia",
    excerpt:
      "A los 13 años desde Polonia por Friedland. Hoy canciones en dos lenguas — y todos los ingresos van al hospicio infantil de Cracovia.",
    dateLabel: "julio de 2026",
    paragraphs: [
      "Llegué con mi madre de Polonia por Friedland a los 13 años (ella huyó hace unos 50 años) — eso era lo que ella quería. Historia antigua: Silesia era germano-polaca. Éramos protestantes, mezclados por las guerras viejas, y ella quería volver a su tierra. Intento trabajar mis raíces polacas y escribir canciones en dos idiomas.",
      "Ahora tenemos unos 2500 oyentes en Polonia, y crece — con solo dos canciones, más de 5000 streams. También nos han invitado a ir a cantar. Y para que lo diga: todo lo que hacemos es benéfico; donamos todo a:",
      "Institución de utilidad pública — Krakowskie Hospicjum dla Dzieci im. ks. Józefa Tischnera, KRS 0000203313. Correo: kontakt@hospicjumtischnera.org · Teléfono: +48 12 269 86 20 · IBAN: 98 1240 1444 1111 0010 1566 6214 · SWIFT: PKOPPLPW",
    ],
  },
  fr: {
    title: "Pourquoi l’allemand et le polonais ? Nous donnons tout à l’hospice pour enfants de Cracovie",
    excerpt:
      "À 13 ans, de Pologne via Friedland. Aujourd’hui des chansons en deux langues — et tous les revenus vont à l’hospice pour enfants de Cracovie.",
    dateLabel: "juillet 2026",
  },
};

const WELCOME: Partial<Record<Locale, BlogText>> = {
  en: {
    title: "Welcome to Rom Lee",
    excerpt:
      "Life plays a thousand tricks. Behind every song is a fate — my own story, patients, sailing, summer.",
    dateLabel: "July 2026",
    paragraphs: [
      "Life plays a thousand tricks. At some point you have had enough, and after a pause from music you write lyrics and music again. And suddenly others find it good and beautiful and want more. So I write, and we see where the journey goes. The lyrics matter especially to me. I am grateful to the musician and producer Hanno di Rosa. Thanks to my patients: behind every song there is a fate.",
      "“Steh auf”: that is my own story. “Tanze so lange es geht”: that is my patient S. in a wheelchair, after an accident with paraplegia. “Du bist 45”: the fate of a woman patient, as with many women.",
      "“Lebe den Sommer” is meant to bring joy. It is also a protest against the present mood and the general depression, especially in Germany. In Spain, where I also spend about six months a year, that mood is rare — but the Spanish also play better football.",
      "By profession I am a cardiologist (Roman Leischik) and I have only reduced my working hours. I still care for seriously ill patients, with joy, at a high scientific level, but without a “white-coat syndrome”. With 40 years of clinical and scientific experience I do not need the white coat as a nimbus and a wall.",
      "I chose the artist name because music should stay private for me — not a career wish. I actually wanted music for myself, my joy and my patients, that is simply good and fun. My friend Michael, with whom I often sail, wanted good music for sailing, and now we have it.",
      "Spotify and music have always been companions: Glashaus, Xavier, Söhne Mannheims, Grönemeyer, Reamonn. Coldplay (my favourite band) and Crowded House were often lifesavers. In a year I surely listen to up to 3,000 songs. Fifteen years of training and Ironman races worldwide would not have been possible without music. Music is fun and life.",
      "At school I had a band, sang in a choir and played at campfires. Also often in church at youth services and leaving ceremonies. Then from 18 to 20 at the Spinne in Hagen for free drinks — that was the songwriter time. After surviving serious illness, when I already felt I was on the other side, I am grateful for every day. That is why the lyrics matter, but also music for fun without frills, to dance to.",
      "The mix of music, rhythm and text is meant for the car, at home in the morning, or in the garden. The main motive was to write good music for everyone. In every song everyone should find something that touches them, that they like, that is also fun. You can dance, sing along, work, or just listen.",
      "I and our troupe (we call it Rom Lee Music Group) dance to it and have fun. I wish you much love and joy in the lyrics and the music. Thanks to Palma Music Studios. You are great.",
    ],
  },
  pl: {
    title: "Witamy u Rom Lee",
    excerpt: "Życie płata 1000 figlów. Za każdą piosenką stoi los — własna historia, pacjenci, żagle, lato.",
    dateLabel: "lipiec 2026",
  },
  es: {
    title: "Bienvenida a Rom Lee",
    excerpt:
      "La vida juega mil trucos. Detrás de cada canción hay un destino: historia propia, pacientes, vela, verano.",
    dateLabel: "julio de 2026",
  },
  fr: {
    title: "Bienvenue chez Rom Lee",
    excerpt:
      "La vie joue mille tours. Derrière chaque chanson il y a un destin — histoire personnelle, patients, voile, été.",
    dateLabel: "juillet 2026",
  },
};

const SCIENCE: Partial<Record<Locale, BlogText>> = {
  en: {
    dateLabel: "Scientific article",
    excerpt:
      "Music is not only something we hear. We feel rhythm with the body — a scientific paper by E. R. Gasenzer and R. Leischik.",
  },
  de: {
    dateLabel: "Wissenschaftlicher Artikel",
    excerpt:
      "Musik ist nicht nur etwas, das wir hören. Wir spüren Rhythmus mit dem Körper – eine wissenschaftliche Arbeit von E. R. Gasenzer und R. Leischik.",
    paragraphs: [
      "Musik ist nicht nur etwas, das wir hören. Wir spüren Rhythmus mit dem Körper, verbinden Melodien mit Erinnerungen und Emotionen und reagieren physiologisch auf Tempo, Harmonie und Klang. Jahre bevor Rom Lee ein Musikprojekt wurde, war diese Verbindung von Musik, Herz und körperlicher Leistung bereits Gegenstand wissenschaftlicher Arbeit.",
      "In der medizinischen Übersichtsarbeit „Music, Pulse, Heart and Sport“ untersuchten E. R. Gasenzer und R. Leischik, wie Musik Herz-Kreislauf-System, Training, Rehabilitation, Motivation und Erholung beeinflussen kann. Die darin besprochene Forschung zeigt Wirkungen auf Herzfrequenz, Leistungsfähigkeit, Motivation und Erholung nach dem Sport.",
      "Zugleich ist die Wirkung von Musik höchst individuell: Rhythmus, Tempo, emotionale Bedeutung, persönliche Vorliebe, körperliche Aktivität und Grunderkrankung spielen alle eine Rolle.",
      "Herz. 2018 Feb;43(1):43-52. doi: 10.1007/s00059-016-4520-7. PMID: 28116463.",
      "Den vollständigen Artikel gibt es als PDF und bei PubMed.",
    ],
  },
  pl: {
    dateLabel: "Artykuł naukowy",
    excerpt:
      "Muzyka to nie tylko to, co słyszymy. Rytm czujemy ciałem — praca naukowa E. R. Gasenzer i R. Leischika.",
  },
  es: {
    dateLabel: "Artículo científico",
    excerpt:
      "La música no es solo algo que oímos. Sentimos el ritmo con el cuerpo — un trabajo científico de E. R. Gasenzer y R. Leischik.",
  },
  fr: {
    dateLabel: "Article scientifique",
    excerpt:
      "La musique n’est pas seulement ce que nous entendons. Nous sentons le rythme avec le corps — un article scientifique de E. R. Gasenzer et R. Leischik.",
  },
};

const TANZE: Partial<Record<Locale, BlogText>> = {
  en: {
    excerpt:
      "A positive song for wheelchair users — inspired by a patient after an accident with paraplegia.",
    dateLabel: "July 2026",
    paragraphs: [
      "The song “Tanze so lange es geht”: this is what my patient wrote after the song was finished:",
      "“What a brilliant song. Many thanks dear Professor! I am very moved. Warm regards, I am glad and I love to sail along. Warm regards and many thanks.”",
      "For the Polish version there are messages: “The song will be an anthem.” By the way: I know of no positive song worldwide for wheelchair users, and they are all brave.",
    ],
  },
  pl: {
    excerpt:
      "Pozytywna piosenka dla osób na wózku — zainspirowana pacjentem po wypadku z porażeniem.",
    dateLabel: "lipiec 2026",
  },
  es: {
    excerpt:
      "Una canción positiva para personas en silla de ruedas — inspirada por un paciente tras un accidente con paraplejia.",
    dateLabel: "julio de 2026",
  },
  fr: {
    excerpt:
      "Une chanson positive pour les personnes en fauteuil — inspirée par un patient après un accident avec paraplégie.",
    dateLabel: "juillet 2026",
  },
};

const TY: Partial<Record<Locale, BlogText>> = {
  en: {
    title: "Ty tylko ty – Polish children’s song",
    excerpt: "A song for everyone that I used to sing at the campfire. An adapted children’s song — a memory of roots.",
    dateLabel: "July 2026",
  },
  pl: {
    dateLabel: "lipiec 2026",
  },
  es: {
    title: "Ty tylko ty – canción infantil polaca",
    excerpt: "Una canción para todos que cantaba en la hoguera. Canción infantil adaptada — memoria de las raíces.",
    dateLabel: "julio de 2026",
  },
};

const JAK: Partial<Record<Locale, BlogText>> = {
  en: {
    excerpt:
      "A deeply personal journey through childhood, Polish history, literature, love and national identity.",
    dateLabel: "July 2026",
  },
  pl: {
    excerpt:
      "Głęboko osobista podróż przez dzieciństwo, polską historię, literaturę, miłość i tożsamość narodową.",
    dateLabel: "lipiec 2026",
  },
  es: {
    excerpt:
      "Un viaje muy personal por la infancia, la historia polaca, la literatura, el amor y la identidad nacional.",
    dateLabel: "julio de 2026",
  },
};

export const BLOG_I18N: Record<string, Partial<Record<Locale, BlogText>>> = {
  "ki-als-bildsprache": KI,
  "water-keep-it-for-tomorrow": WATER,
  "love-and-peace": LOVE,
  "warum-deutsch-polnisch": HOSPIZ,
  "willkommen-bei-rom-lee": WELCOME,
  "musik-puls-herz-sport": SCIENCE,
  "tanze-so-lange-es-geht": TANZE,
  "ty-tylko-ty": TY,
  "als-du-klein-warst-jak-byles-maly": JAK,
};

export function localizePost(post: BlogPost, locale: Locale): BlogPost {
  const pack = BLOG_I18N[post.slug];
  const t = pack?.[locale] ?? (locale === "de" ? undefined : pack?.en);
  if (!t) return post;
  return {
    ...post,
    title: t.title ?? post.title,
    subtitle: t.subtitle ?? post.subtitle,
    excerpt: t.excerpt ?? post.excerpt,
    dateLabel: t.dateLabel ?? post.dateLabel,
    coverCaption: t.coverCaption ?? post.coverCaption,
    paragraphs: t.paragraphs ?? post.paragraphs,
    extra: t.extra ?? post.extra,
  };
}
