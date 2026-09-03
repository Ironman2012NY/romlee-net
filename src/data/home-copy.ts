import type { Locale } from "@/lib/locale";

type HomeCopy = {
  newRelease: string;
  newSong: string;
  listenSpotify: string;
  loveLead: string;
  waterLead1: string;
  waterLead2: string;
  standUpLead: string;
};

const de: HomeCopy = {
  newRelease: "Neuerscheinung",
  newSong: "neues Lied",
  listenSpotify: "Auf Spotify hören",
  standUpLead:
    "All religions wish for peace. Whatever the reasons behind a conflict — political, historical, territorial or religious — people of every faith can stand together. Different beliefs. One humanity. One hope. Stand Up for Peace. Christianity, Islam, Judaism and Buddhism may speak in different languages and tell different stories, but again and again they return to the same human values: compassion, mercy, forgiveness and peace.",
  loveLead:
    "Mit Video und Short ist „Love and Peace“ fast zu einem weltweiten Lied für den Frieden geworden. {video} Aufrufe im Video, {short} im Short — zusammen rund sieben Millionen.",
  waterLead1:
    "WARUM ICH DIESES LIED SCHRIEB… Meine spanischen Freunde aus Portocolom — vor allem Rosa — haben mich gebeten, ein Lied über Wasser zu schreiben. Wasser wird in Madrid, Valencia und Andalusien knapper, ebenso auf Mallorca und hier in Portocolom. „Drink the Water“ erzählt von einer Kindheit auf dem Land, an einem klaren Bach beim Haus der Großmutter — darin geschwommen, daraus mit den Händen getrunken, davon hat der ganze Haushalt gelebt. Das Video verbindet diese Erinnerung mit einer einfachen Botschaft: Wasser gibt uns Leben, deshalb müssen wir es schützen und für morgen bewahren.",
  waterLead2:
    "Wir wollten kein Lied mit erhobenem Zeigefinger. Ein rhythmisches Lied, auch leicht: trink Wasser. English, Español, Polski. Die zentrale Botschaft ist einfach: Wasser gibt uns Leben, und wir müssen es für morgen bewahren.",
};

const en: HomeCopy = {
  newRelease: "New release",
  newSong: "new song",
  listenSpotify: "Listen on Spotify",
  standUpLead:
    "All religions wish for peace. Whatever the reasons behind a conflict — political, historical, territorial or religious — people of every faith can stand together. Different beliefs. One humanity. One hope. Stand Up for Peace. Christianity, Islam, Judaism and Buddhism may speak in different languages and tell different stories, but again and again they return to the same human values: compassion, mercy, forgiveness and peace.",
  loveLead:
    "With the video and the Short, “Love and Peace” has become almost a worldwide song for peace. {video} views on the video, {short} on the Short — about seven million together.",
  waterLead1:
    "WHY I WROTE THIS SONG… My Spanish friends from Portocolom—especially Rosa—asked me to write a song about water. Water is becoming increasingly scarce in Madrid, Valencia and Andalusia, as well as on Mallorca and here in Portocolom. “Drink the Water” tells the story of a childhood in the countryside, beside a clear stream near the grandmother’s house—a stream where he swam, drank the water from his hands, and which provided water for the whole household. The video connects this memory with a simple message: water gives us life, so we must protect it and preserve it for tomorrow.",
  waterLead2:
    "We did not want a song that points an accusing finger. A rhythmic song, also light-hearted: drink water. English, Español, Polski. The central message is simple: water gives us life, and we must preserve it for tomorrow.",
};

const pl: HomeCopy = {
  newRelease: "Nowa płyta",
  newSong: "nowy utwór",
  listenSpotify: "Słuchaj na Spotify",
  standUpLead:
    "All religions wish for peace. Whatever the reasons behind a conflict — political, historical, territorial or religious — people of every faith can stand together. Different beliefs. One humanity. One hope. Stand Up for Peace. Christianity, Islam, Judaism and Buddhism may speak in different languages and tell different stories, but again and again they return to the same human values: compassion, mercy, forgiveness and peace.",
  loveLead:
    "Dzięki teledyskowi i Shortowi „Love and Peace” stało się niemal światową piosenką o pokoju. {video} wyświetleń teledysku, {short} Shorta — razem około siedmiu milionów.",
  waterLead1:
    "DLACZEGO NAPISAŁEM TĘ PIOSENKĘ… Hiszpańscy przyjaciele z Portocolom — zwłaszcza Rosa — poprosili mnie o piosenkę o wodzie. W Madrycie, Walencji i Andaluzji, na Majorce i tutaj w Portocolom wody ubywa. „Drink the Water” opowiada o dzieciństwie na wsi, przy czystej rzeczce koło domu babci — w niej pływał, z niej pił wodę z rąk, nią żył cały dom. Teledysk łączy to wspomnienie z prostym przesłaniem: woda daje życie, więc chrońmy ją na jutro.",
  waterLead2:
    "Nie chcieliśmy piosenki z uniesionym palcem. Rytmiczny utwór, też lekki: pij wodę. English, Español, Polski. Centralne przesłanie jest proste: woda daje życie i musimy zachować ją na jutro.",
};

const es: HomeCopy = {
  newRelease: "Novedad",
  newSong: "canción nueva",
  listenSpotify: "Escuchar en Spotify",
  standUpLead:
    "All religions wish for peace. Whatever the reasons behind a conflict — political, historical, territorial or religious — people of every faith can stand together. Different beliefs. One humanity. One hope. Stand Up for Peace. Christianity, Islam, Judaism and Buddhism may speak in different languages and tell different stories, but again and again they return to the same human values: compassion, mercy, forgiveness and peace.",
  loveLead:
    "Con el vídeo y el Short, “Love and Peace” se ha convertido casi en una canción mundial por la paz. {video} reproducciones del vídeo, {short} del Short — unos siete millones en total.",
  waterLead1:
    "POR QUÉ ESCRIBÍ ESTA CANCIÓN… Mis amigos españoles de Portocolom —sobre todo Rosa— me pidieron una canción sobre el agua. El agua escasea en Madrid, Valencia y Andalucía, también en Mallorca y aquí en Portocolom. “Drink the Water” cuenta una infancia en el campo, junto a un arroyo claro cerca de la casa de la abuela: nadaba, bebía el agua con las manos, y esa agua daba de vivir a toda la casa. El vídeo une ese recuerdo con un mensaje simple: el agua nos da vida, hay que protegerla y guardarla para mañana.",
  waterLead2:
    "No queríamos una canción con el dedo acusador. Un tema rítmico, también ligero: bebe agua. English, Español, Polski. El mensaje central es simple: el agua nos da vida, y debemos conservarla para mañana.",
};

const fr: HomeCopy = {
  newRelease: "Nouveauté",
  newSong: "nouvelle chanson",
  listenSpotify: "Écouter sur Spotify",
  standUpLead:
    "All religions wish for peace. Whatever the reasons behind a conflict — political, historical, territorial or religious — people of every faith can stand together. Different beliefs. One humanity. One hope. Stand Up for Peace. Christianity, Islam, Judaism and Buddhism may speak in different languages and tell different stories, but again and again they return to the same human values: compassion, mercy, forgiveness and peace.",
  loveLead:
    "Avec la vidéo et le Short, « Love and Peace » est presque devenue une chanson mondiale pour la paix. {video} vues sur la vidéo, {short} sur le Short — environ sept millions au total.",
  waterLead1:
    "POURQUOI J’AI ÉCRIT CETTE CHANSON… Mes amis espagnols de Portocolom — surtout Rosa — m’ont demandé une chanson sur l’eau. L’eau se raréfie à Madrid, Valence et en Andalousie, ainsi qu’à Majorque et ici à Portocolom. « Drink the Water » raconte une enfance à la campagne, près d’un ruisseau clair chez la grand-mère : on y nageait, on buvait l’eau dans les mains, toute la maison en vivait. La vidéo relie ce souvenir à un message simple : l’eau nous donne la vie, il faut la protéger pour demain.",
  waterLead2:
    "Nous ne voulions pas d’une chanson au doigt levé. Un titre rythmé, aussi léger : bois de l’eau. English, Español, Polski. Le message central est simple : l’eau nous donne la vie, et nous devons la garder pour demain.",
};

const it: HomeCopy = {
  newRelease: "Novità",
  newSong: "canzone nuova",
  listenSpotify: "Ascolta su Spotify",
  standUpLead:
    "All religions wish for peace. Whatever the reasons behind a conflict — political, historical, territorial or religious — people of every faith can stand together. Different beliefs. One humanity. One hope. Stand Up for Peace. Christianity, Islam, Judaism and Buddhism may speak in different languages and tell different stories, but again and again they return to the same human values: compassion, mercy, forgiveness and peace.",
  loveLead:
    "Con il video e lo Short, “Love and Peace” è quasi diventata una canzone mondiale per la pace. {video} visualizzazioni del video, {short} dello Short — circa sette milioni in tutto.",
  waterLead1:
    "PERCHÉ HO SCRITTO QUESTA CANZONE… Gli amici spagnoli di Portocolom — soprattutto Rosa — mi hanno chiesto una canzone sull’acqua. L’acqua scarseggia a Madrid, Valencia e in Andalusia, anche a Maiorca e qui a Portocolom. “Drink the Water” racconta un’infanzia in campagna, presso un ruscello limpido vicino a casa della nonna: ci nuotava, beveva l’acqua con le mani, e quell’acqua dava da vivere a tutta la casa. Il video unisce questo ricordo a un messaggio semplice: l’acqua ci dà la vita, va protetta per domani.",
  waterLead2:
    "Non volevamo una canzone con il dito puntato. Un brano ritmico, anche leggero: bevi acqua. English, Español, Polski. Il messaggio centrale è semplice: l’acqua ci dà la vita e dobbiamo conservarla per domani.",
};

const pt: HomeCopy = {
  newRelease: "Novidade",
  newSong: "canção nova",
  listenSpotify: "Ouvir no Spotify",
  standUpLead:
    "All religions wish for peace. Whatever the reasons behind a conflict — political, historical, territorial or religious — people of every faith can stand together. Different beliefs. One humanity. One hope. Stand Up for Peace. Christianity, Islam, Judaism and Buddhism may speak in different languages and tell different stories, but again and again they return to the same human values: compassion, mercy, forgiveness and peace.",
  loveLead:
    "Com o vídeo e o Short, “Love and Peace” tornou-se quase uma canção mundial pela paz. {video} visualizações do vídeo, {short} do Short — cerca de sete milhões no total.",
  waterLead1:
    "PORQUE ESCREVI ESTA CANÇÃO… Os amigos espanhóis de Portocolom — sobretudo a Rosa — pediram-me uma canção sobre a água. A água escasseia em Madrid, Valência e Andaluzia, também em Maiorca e aqui em Portocolom. “Drink the Water” conta uma infância no campo, junto a um ribeiro claro junto à casa da avó: nadava, bebia a água com as mãos, e essa água dava de viver a toda a casa. O vídeo liga essa memória a uma mensagem simples: a água dá-nos vida, temos de a proteger para amanhã.",
  waterLead2:
    "Não queríamos uma canção de dedo em riste. Um tema rítmico, também leve: bebe água. English, Español, Polski. A mensagem central é simples: a água dá-nos vida e devemos conservá-la para amanhã.",
};

const no: HomeCopy = {
  newRelease: "Ny utgivelse",
  newSong: "ny sang",
  listenSpotify: "Hør på Spotify",
  standUpLead:
    "All religions wish for peace. Whatever the reasons behind a conflict — political, historical, territorial or religious — people of every faith can stand together. Different beliefs. One humanity. One hope. Stand Up for Peace. Christianity, Islam, Judaism and Buddhism may speak in different languages and tell different stories, but again and again they return to the same human values: compassion, mercy, forgiveness and peace.",
  loveLead:
    "Med videoen og Shorten har «Love and Peace» nesten blitt en verdensomspennende sang for freden. {video} visninger på videoen, {short} på Shorten — rundt sju millioner til sammen.",
  waterLead1:
    "HVORFOR JEG SKREV DENNE SANGEN… Spanske venner fra Portocolom — særlig Rosa — ba meg skrive en sang om vann. Vann blir knappere i Madrid, Valencia og Andalusia, også på Mallorca og her i Portocolom. «Drink the Water» forteller om en barndom på landet, ved en klar bekk ved bestemors hus: han svømte der, drakk vannet fra hendene, og hele huset levde av det. Videoen knytter minnet til et enkelt budskap: vann gir oss liv, vi må verne det for i morgen.",
  waterLead2:
    "Vi ville ikke ha en sang med pekefinger. En rytmisk sang, også lett: drikk vann. English, Español, Polski. Budskapet er enkelt: vann gir oss liv, og vi må ta vare på det for i morgen.",
};

const tr: HomeCopy = {
  newRelease: "Yeni çıkan",
  newSong: "yeni şarkı",
  listenSpotify: "Spotify’da dinle",
  standUpLead:
    "All religions wish for peace. Whatever the reasons behind a conflict — political, historical, territorial or religious — people of every faith can stand together. Different beliefs. One humanity. One hope. Stand Up for Peace. Christianity, Islam, Judaism and Buddhism may speak in different languages and tell different stories, but again and again they return to the same human values: compassion, mercy, forgiveness and peace.",
  loveLead:
    "Video ve Short ile “Love and Peace” neredeyse dünya çapında bir barış şarkısı oldu. Videoda {video} izlenme, Short’ta {short} — birlikte yaklaşık yedi milyon.",
  waterLead1:
    "BU ŞARKIYI NEDEN YAZDIM… Portocolom’daki İspanyol arkadaşlarım — özellikle Rosa — benden su üzerine bir şarkı istedi. Madrid, Valensiya ve Endülüs’te, Mallorca’da ve burada Portocolom’da su azalıyor. “Drink the Water” büyükanne evinin yanındaki duru bir dereyle köy çocukluğunu anlatır: orada yüzer, suyu avuçlarıyla içer, bütün ev o sudan yaşardı. Video bu anıyı yalın bir mesaja bağlar: su bize hayat verir, onu yarın için korumalıyız.",
  waterLead2:
    "İşaret parmağı kaldıran bir şarkı istemedik. Ritimli, hafif de alınabilecek bir parça: su iç. English, Español, Polski. Merkez mesaj yalın: su hayat verir ve onu yarın için saklamalıyız.",
};

const ru: HomeCopy = {
  newRelease: "Новинка",
  newSong: "новая песня",
  listenSpotify: "Слушать в Spotify",
  standUpLead:
    "All religions wish for peace. Whatever the reasons behind a conflict — political, historical, territorial or religious — people of every faith can stand together. Different beliefs. One humanity. One hope. Stand Up for Peace. Christianity, Islam, Judaism and Buddhism may speak in different languages and tell different stories, but again and again they return to the same human values: compassion, mercy, forgiveness and peace.",
  loveLead:
    "С клипом и Short «Love and Peace» почти стала всемирной песней о мире. {video} просмотров у клипа, {short} у Short — вместе около семи миллионов.",
  waterLead1:
    "ПОЧЕМУ Я НАПИСАЛ ЭТУ ПЕСНЮ… Испанские друзья из Портоколома — особенно Роса — попросили песню о воде. Воды всё меньше в Мадриде, Валенсии и Андалусии, на Мальорке и здесь, в Портоколоме. «Drink the Water» — о детстве в деревне у чистого ручья у дома бабушки: там плавал, пил воду с ладоней, ею жил весь дом. Клип связывает эту память с простым посланием: вода даёт жизнь, её надо беречь на завтра.",
  waterLead2:
    "Мы не хотели песню с указующим пальцем. Ритмичную, ещё и лёгкую: пей воду. English, Español, Polski. Главное просто: вода даёт жизнь, и мы должны сохранить её на завтра.",
};

const uk: HomeCopy = {
  newRelease: "Новинка",
  newSong: "нова пісня",
  listenSpotify: "Слухати у Spotify",
  standUpLead:
    "All religions wish for peace. Whatever the reasons behind a conflict — political, historical, territorial or religious — people of every faith can stand together. Different beliefs. One humanity. One hope. Stand Up for Peace. Christianity, Islam, Judaism and Buddhism may speak in different languages and tell different stories, but again and again they return to the same human values: compassion, mercy, forgiveness and peace.",
  loveLead:
    "З кліпом і Short «Love and Peace» майже стала всесвітньою піснею про мир. {video} переглядів кліпу, {short} Short — разом близько семи мільйонів.",
  waterLead1:
    "ЧОМУ Я НАПИСАВ ЦЮ ПІСНЮ… Іспанські друзі з Портоколома — особливо Роса — попросили пісню про воду. Води бракує в Мадриді, Валенсії й Андалусії, на Мальорці й тут, у Портоколомі. «Drink the Water» — про дитинство на селі біля чистої річечки біля хати бабусі: там плавав, пив воду з долонь, нею жив увесь дім. Кліп єднає цей спогад із простою звісткою: вода дає життя, її треба берегти на завтра.",
  waterLead2:
    "Ми не хотіли пісні з піднятим пальцем. Ритмічну, ще й легку: пий воду. English, Español, Polski. Головне просто: вода дає життя, і ми маємо зберегти її на завтра.",
};

const ar: HomeCopy = {
  newRelease: "إصدار جديد",
  newSong: "أغنية جديدة",
  listenSpotify: "استمع على Spotify",
  standUpLead:
    "All religions wish for peace. Whatever the reasons behind a conflict — political, historical, territorial or religious — people of every faith can stand together. Different beliefs. One humanity. One hope. Stand Up for Peace. Christianity, Islam, Judaism and Buddhism may speak in different languages and tell different stories, but again and again they return to the same human values: compassion, mercy, forgiveness and peace.",
  loveLead:
    "مع الفيديو والـ Short أصبحت «Love and Peace» شبه أغنية سلام عالمية. {video} مشاهدة للفيديو و{short} للـ Short — نحو سبعة ملايين معاً.",
  waterLead1:
    "لماذا كتبت هذه الأغنية… أصدقائي الإسبان من بورتوكولوم — وخاصة روزا — طلبوا أغنية عن الماء. الماء يقلّ في مدريد وفالنسيا والأندلس، وعلى مايوركا وهنا في بورتوكولوم. «Drink the Water» تروي طفولة في الريف عند جدول صافٍ قرب بيت الجدة: سبح فيه وشرب الماء بيديه وعاش البيت كله منه. يربط الفيديو هذه الذكرى برسالة بسيطة: الماء يعطينا الحياة، فعلينا حمايته لغدٍ.",
  waterLead2:
    "لم نُرد أغنية بإصبع اتهام. أغنية إيقاعية، خفيفة أيضاً: اشرب ماء. English, Español, Polski. الرسالة المركزية بسيطة: الماء يعطي الحياة وعلينا حفظه للغد.",
};

const he: HomeCopy = {
  newRelease: "יציאה חדשה",
  newSong: "שיר חדש",
  listenSpotify: "האזן ב-Spotify",
  standUpLead:
    "All religions wish for peace. Whatever the reasons behind a conflict — political, historical, territorial or religious — people of every faith can stand together. Different beliefs. One humanity. One hope. Stand Up for Peace. Christianity, Islam, Judaism and Buddhism may speak in different languages and tell different stories, but again and again they return to the same human values: compassion, mercy, forgiveness and peace.",
  loveLead:
    "עם הווידאו וה-Short כמעט הפך “Love and Peace” לשיר עולמי לשלום. {video} צפיות בווידאו, {short} ב-Short — יחד כשבעה מיליון.",
  waterLead1:
    "למה כתבתי את השיר… חברים ספרדים מפורטוקולום — בעיקר רוסה — ביקשו שיר על מים. המים מתמעטים במדריד, ולנסיה ואנדלוסיה, גם במלורקה וכאן בפורטוקולום. “Drink the Water” מספר על ילדות בכפר ליד נחל צלול ליד בית הסבתא: שחה בו, שתה מים מהידיים, וכל הבית חי מהם. הסרטון מחבר את הזיכרון למסר פשוט: מים נותנים חיים, צריך לשמור אותם למחר.",
  waterLead2:
    "לא רצינו שיר עם אצבע מאשימה. שיר קצבי, גם קליל: שתה מים. English, Español, Polski. המסר המרכזי פשוט: מים נותנים חיים, ועלינו לשמור אותם למחר.",
};

const hi: HomeCopy = {
  newRelease: "नई रिलीज़",
  newSong: "नया गीत",
  listenSpotify: "Spotify पर सुनें",
  standUpLead:
    "All religions wish for peace. Whatever the reasons behind a conflict — political, historical, territorial or religious — people of every faith can stand together. Different beliefs. One humanity. One hope. Stand Up for Peace. Christianity, Islam, Judaism and Buddhism may speak in different languages and tell different stories, but again and again they return to the same human values: compassion, mercy, forgiveness and peace.",
  loveLead:
    "वीडियो और Short के साथ “Love and Peace” लगभग विश्वव्यापी शांति गीत बन गया है। वीडियो पर {video} व्यू, Short पर {short} — साथ लगभग सात मिलियन।",
  waterLead1:
    "यह गीत मैंने क्यों लिखा… पोर्टोकोलम के स्पेनिश मित्रों — खासकर रोसा — ने पानी पर गीत माँगा। मैड्रिड, वैलेंसिया और अंडालूसिया में, मायोर्का और यहाँ पोर्टोकोलम में पानी कम होता जा रहा है। “Drink the Water” दादी के घर के पास साफ़ नाले के पास गाँव की बचपन की कहानी है: उसमें तैरना, हाथों से पानी पीना, उसी पानी से पूरा घर जीना। वीडियो इस याद को सरल संदेश से जोड़ता है: पानी जीवन देता है, इसे कल के लिए बचाना है।",
  waterLead2:
    "हम आरोप लगाने वाली उंगली वाला गीत नहीं चाहते थे। लयबद्ध, हल्का भी: पानी पियो। English, Español, Polski. केंद्रीय संदेश सरल है: पानी जीवन देता है, और हमें इसे कल के लिए रखना है।",
};

const th: HomeCopy = {
  newRelease: "ออกใหม่",
  newSong: "เพลงใหม่",
  listenSpotify: "ฟังบน Spotify",
  standUpLead:
    "All religions wish for peace. Whatever the reasons behind a conflict — political, historical, territorial or religious — people of every faith can stand together. Different beliefs. One humanity. One hope. Stand Up for Peace. Christianity, Islam, Judaism and Buddhism may speak in different languages and tell different stories, but again and again they return to the same human values: compassion, mercy, forgiveness and peace.",
  loveLead:
    "ด้วยวิดีโอและ Short “Love and Peace” เกือบเป็นเพลงสันติภาพระดับโลก {video} วิวที่วิดีโอ {short} ที่ Short — รวมราวเจ็ดล้าน",
  waterLead1:
    "ทำไมผมเขียนเพลงนี้… เพื่อนชาวสเปนจาก Portocolom โดยเฉพาะ Rosa ขอเพลงเรื่องน้ำ น้ำขาดแคลนในมาดริด บาเลนเซีย และอันดาลูเซีย รวมทั้งมายอร์กาและที่นี่ Portocolom “Drink the Water” เล่าวัยเด็กชนบทข้างลำธารใสใกล้บ้านย่า — ว่ายน้ำ ดื่มน้ำด้วยมือ ทั้งบ้านอาศัยน้ำนั้น วิดีโอเชื่อมความทรงจำนี้กับสารง่าย ๆ: น้ำให้ชีวิต เราต้องปกป้องไว้สำหรับพรุ่งนี้",
  waterLead2:
    "เราไม่ต้องการเพลงชี้หน้ากล่าวโทษ เพลงมีจังหวะ เบาด้วย: ดื่มน้ำ English, Español, Polski สารหลักง่าย: น้ำให้ชีวิต และเราต้องเก็บไว้สำหรับพรุ่งนี้",
};

const ja: HomeCopy = {
  newRelease: "新作",
  newSong: "新曲",
  listenSpotify: "Spotifyで聴く",
  standUpLead:
    "All religions wish for peace. Whatever the reasons behind a conflict — political, historical, territorial or religious — people of every faith can stand together. Different beliefs. One humanity. One hope. Stand Up for Peace. Christianity, Islam, Judaism and Buddhism may speak in different languages and tell different stories, but again and again they return to the same human values: compassion, mercy, forgiveness and peace.",
  loveLead:
    "動画とショートで「Love and Peace」はほぼ世界的な平和の歌になりました。動画 {video} 回、ショート {short} 回 — 合わせて約700万回。",
  waterLead1:
    "なぜこの曲を書いたか… ポルトコロンのスペイン人の友人たち、とくにローザが水の歌を頼んできました。マドリード、バレンシア、アンダルシア、マヨルカ、ここポルトコロンでも水が減っています。「Drink the Water」は祖母の家のそばの澄んだ小川での田舎の幼少期の話です。そこで泳ぎ、手で水を飲み、家中がその水で生きていました。映像はこの記憶をシンプルなメッセージにつなぎます。水は命を与える。明日のために守らねばならない。",
  waterLead2:
    "指を立てて責める歌にはしたくありませんでした。リズムのある、軽くも聴ける曲。水を飲め。English, Español, Polski。中心のメッセージは単純です。水は命を与える。明日のために残さねばならない。",
};

const ko: HomeCopy = {
  newRelease: "신작",
  newSong: "새 노래",
  listenSpotify: "Spotify에서 듣기",
  standUpLead:
    "All religions wish for peace. Whatever the reasons behind a conflict — political, historical, territorial or religious — people of every faith can stand together. Different beliefs. One humanity. One hope. Stand Up for Peace. Christianity, Islam, Judaism and Buddhism may speak in different languages and tell different stories, but again and again they return to the same human values: compassion, mercy, forgiveness and peace.",
  loveLead:
    "영상과 쇼츠로 “Love and Peace”는 거의 세계적인 평화의 노래가 되었습니다. 영상 {video}회, 쇼츠 {short}회 — 합쳐 약 700만.",
  waterLead1:
    "이 노래를 쓴 이유… 포르토콜롬의 스페인 친구들, 특히 로사가 물에 대한 노래를 부탁했습니다. 마드리드, 발렌시아, 안달루시아, 마요르카, 여기 포르토콜롬에서도 물이 줄어듭니다. “Drink the Water”는 할머니 집 옆 맑은 시냇가 시골 어린 시절입니다. 거기서 헤엄치고 손으로 물을 마셨고 온 집이 그 물로 살았습니다. 영상은 이 기억을 단순한 메시지와 잇습니다. 물은 생명을 줍니다. 내일을 위해 지켜야 합니다.",
  waterLead2:
    "손가락질하는 노래는 원하지 않았습니다. 리듬 있는, 가벼운 노래: 물을 마시라. English, Español, Polski. 중심 메시지는 단순합니다. 물은 생명을 주고, 내일을 위해 남겨야 합니다.",
};

const id: HomeCopy = {
  newRelease: "Rilis baru",
  newSong: "lagu baru",
  listenSpotify: "Dengar di Spotify",
  standUpLead:
    "All religions wish for peace. Whatever the reasons behind a conflict — political, historical, territorial or religious — people of every faith can stand together. Different beliefs. One humanity. One hope. Stand Up for Peace. Christianity, Islam, Judaism and Buddhism may speak in different languages and tell different stories, but again and again they return to the same human values: compassion, mercy, forgiveness and peace.",
  loveLead:
    "Dengan video dan Short, “Love and Peace” hampir menjadi lagu damai sedunia. {video} tayangan di video, {short} di Short — bersama sekitar tujuh juta.",
  waterLead1:
    "MENGAPA SAYA MENULIS LAGU INI… Teman-teman Spanyol dari Portocolom — terutama Rosa — meminta lagu tentang air. Air semakin langka di Madrid, Valencia, dan Andalusia, juga di Mallorca dan di sini di Portocolom. “Drink the Water” menceritakan masa kanak-kanak di desa, di tepi sungai jernih dekat rumah nenek: berenang, minum air dengan tangan, dan seluruh rumah hidup dari air itu. Video menghubungkan kenangan ini dengan pesan sederhana: air memberi hidup, kita harus menjaganya untuk esok.",
  waterLead2:
    "Kami tidak ingin lagu yang menuding. Lagu berirama, juga ringan: minumlah air. English, Español, Polski. Pesan pusatnya sederhana: air memberi hidup, dan kita harus menyimpannya untuk esok.",
};

const MAP: Record<Locale, HomeCopy> = {
  de,
  en,
  pl,
  es,
  fr,
  it,
  pt,
  no,
  tr,
  ru,
  uk,
  ar,
  he,
  hi,
  th,
  ja,
  ko,
  id,
};

export function homeCopy(locale: Locale): HomeCopy {
  return MAP[locale] ?? en;
}
