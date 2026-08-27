export type LegalBlock = {
  heading?: string;
  sub?: string;
  paragraphs: string[];
  list?: string[];
};

export const IMPRESSUM: LegalBlock[] = [
  {
    heading: "Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)",
    sub: "Diensteanbieter und Betreiber der Website",
    paragraphs: [
      "Prof. Dr. Roman Leischik Medconsulting e. K.",
      "Geschäftsbereich und Marke: Romlee Music",
      "58135 Hagen",
      "Nordrhein-Westfalen",
      "Deutschland",
    ],
  },
  {
    sub: "Inhaber und Vertretungsberechtigter",
    paragraphs: ["Prof. Dr. med. Roman Leischik"],
  },
  {
    sub: "Kontakt",
    paragraphs: ["E-Mail: info@romlee.net", "Tel: 02331 402230"],
  },
  {
    sub: "Handelsregister",
    paragraphs: [
      "Eingetragen im Handelsregister des Amtsgerichts Hagen",
      "Registergericht: Amtsgericht Hagen",
      "Handelsregisternummer: HRA 6625",
    ],
  },
  {
    sub: "Tätigkeitsbereiche",
    paragraphs: [
      "Medien, Medizin, Podcasts, Musik und Publikationen sowie Beratung in den Bereichen Medizin, Medien und Musik.",
    ],
  },
  {
    sub: "Verantwortlich für journalistisch-redaktionelle Inhalte gemäß § 18 Abs. 2 Medienstaatsvertrag",
    paragraphs: [
      "Prof. Dr. med. Roman Leischik",
      "58135 Hagen",
      "Deutschland",
    ],
  },
  {
    heading: "Kontaktstelle nach dem Digitale-Dienste-Gesetz / Digital Services Act",
    paragraphs: [
      "Für Behörden, Nutzerinnen und Nutzer sowie die Europäische Kommission ist die zentrale Kontaktstelle:",
      "E-Mail: info@romlee.net",
      "Sprache: Deutsch und Englisch.",
      "Diese Website ist ein künstlerischer Informationsauftritt und keine Online-Plattform im Sinne der Vermittlung zwischen einer großen Zahl von Nutzern. Es werden keine Nutzerkonten angeboten und keine fremden Inhalte Dritter zum öffentlichen Austausch bereitgestellt.",
    ],
  },
  {
    heading: "Verbraucherstreitbeilegung",
    paragraphs: [
      "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/",
      "Unsere E-Mail-Adresse finden Sie oben im Impressum.",
      "Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
    ],
  },
  {
    heading: "Haftung für Inhalte und Links",
    paragraphs: [
      "Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
      "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben unberührt.",
      "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.",
    ],
  },
  {
    heading: "Urheberrecht",
    paragraphs: [
      "Die durch den Betreiber erstellten Inhalte, Texte, Fotos, Grafiken und Musik auf dieser Website unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung oder Verbreitung außerhalb der Grenzen des Urheberrechts bedarf der schriftlichen Zustimmung des jeweiligen Rechteinhabers.",
    ],
  },
  {
    heading: "Medizinischer Hinweis",
    paragraphs: [
      "Diese Website ist ein künstlerisches Musikangebot. Sie enthält keine individuelle medizinische Beratung, keine Diagnose und keine Behandlungsempfehlung im Sinne einer Arzt-Patienten-Beziehung.",
      "Der wissenschaftliche Beitrag „Music, Pulse, Heart and Sport“ dient ausschließlich der Information. Bei gesundheitlichen Beschwerden wenden Sie sich bitte an eine Ärztin oder einen Arzt. In Notfällen wählen Sie 112.",
      "Heilmittelwerberecht: Es werden keine Arzneimittel beworben und keine Fernbehandlung angeboten.",
    ],
  },
];

export const DATENSCHUTZ: LegalBlock[] = [
  {
    heading: "1. Datenschutz auf einen Blick",
    sub: "Allgemeine Hinweise",
    paragraphs: [
      "Der Schutz Ihrer persönlichen Daten ist uns wichtig. Die folgenden Hinweise geben einen Überblick darüber, was mit Ihren personenbezogenen Daten geschieht, wenn Sie die Website romlee.net besuchen.",
      "Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können, beispielsweise Ihre IP-Adresse, Ihre E-Mail-Adresse oder Daten, die Sie uns im Rahmen einer Kontaktaufnahme mitteilen.",
    ],
  },
  {
    heading: "2. Verantwortlicher",
    paragraphs: [
      "Verantwortlicher für die Datenverarbeitung auf dieser Website ist:",
      "Prof. Dr. Roman Leischik Medconsulting e. K.",
      "Geschäftsbereich und Marke: Romlee Music",
      "58135 Hagen",
      "Nordrhein-Westfalen",
      "Deutschland",
      "Telefon: 02331 40 2230",
      "E-Mail: info@romlee.net",
      "Verantwortlicher und vertretungsberechtigter Inhaber: Prof. Dr. med. Roman Leischik",
    ],
  },
  {
    heading: "3. Hosting und Website-Anbieter Vercel",
    paragraphs: [
      "Diese Website wird nach dem Wechsel von Bandzoogle über den Hosting-Dienstleister Vercel Inc. bereitgestellt und gehostet (Vercel Inc., Vereinigte Staaten). Vercel verarbeitet dabei als Auftragsverarbeiter technische Daten, die für den Betrieb der Website erforderlich sind.",
      "Beim Aufruf dieser Website können durch den Hostinganbieter technische Daten verarbeitet werden. Dazu können insbesondere gehören:",
    ],
    list: [
      "IP-Adresse des aufrufenden Gerätes",
      "Datum und Uhrzeit des Zugriffs",
      "aufgerufene Seite oder Datei",
      "übertragene Datenmenge",
      "verwendeter Browser und Browserversion",
      "verwendetes Betriebssystem",
      "Referrer-URL",
      "Geräteinformationen sowie",
      "technische Fehler- und Sicherheitsdaten",
    ],
  },
  {
    paragraphs: [
      "Die Verarbeitung erfolgt, soweit sie zur sicheren und fehlerfreien Bereitstellung der Website erforderlich ist, auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der sicheren, stabilen und nutzerfreundlichen Bereitstellung unseres Internetauftritts.",
      "Soweit für bestimmte Datenverarbeitungen oder das Setzen nicht notwendiger Cookies eine Einwilligung eingeholt wird, erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Eine erteilte Einwilligung kann jederzeit über die Cookie-Einstellungen mit Wirkung für die Zukunft widerrufen werden.",
      "Da Vercel Inc. ihren Sitz in den USA hat, können personenbezogene Daten in den Vereinigten Staaten verarbeitet werden. Die Übermittlung stützt sich auf den Angemessenheitsbeschluss der Europäischen Kommission zum EU-US Data Privacy Framework, soweit Vercel zertifiziert ist, sowie auf Standardvertragsklauseln nach Art. 46 DSGVO im Rahmen der Data Processing Addendum von Vercel.",
      "Weitere Einzelheiten ergeben sich aus der Datenschutzerklärung von Vercel: https://vercel.com/legal/privacy-policy",
      "Die Domain romlee.net kann weiterhin über Bandzoogle / Sitezoogle verwaltet werden (DNS). Solange Besucher über Bandzoogle umgeleitet werden, kann auch Bandzoogle technische Zugriffsdaten verarbeiten. E-Mail an info@romlee.net wird über den bisherigen E-Mail-Dienst (mx1.emailsrvr.com / Rackspace) zugestellt.",
    ],
  },
  {
    heading: "4. SSL- beziehungsweise TLS-Verschlüsselung",
    paragraphs: [
      "Diese Website verwendet aus Sicherheitsgründen eine SSL- beziehungsweise TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie insbesondere daran, dass die Adresszeile des Browsers mit „https://“ beginnt.",
      "Durch die Verschlüsselung sollen Daten, die Sie an diese Website übermitteln, vor dem unbefugten Zugriff Dritter geschützt werden.",
    ],
  },
  {
    heading: "5. Kontaktaufnahme per E-Mail oder Telefon",
    paragraphs: [
      "Wenn Sie uns per E-Mail oder telefonisch kontaktieren, werden die von Ihnen mitgeteilten Daten zur Bearbeitung Ihrer Anfrage und für mögliche Anschlussfragen verarbeitet.",
      "Hierzu können insbesondere gehören:",
    ],
    list: [
      "Name",
      "E-Mail-Adresse",
      "Telefonnummer",
      "Inhalt der Anfrage sowie",
      "sonstige freiwillig mitgeteilte Angaben",
    ],
  },
  {
    paragraphs: [
      "Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage mit der Anbahnung oder Durchführung eines Vertrags zusammenhängt. In anderen Fällen erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse besteht in der sachgerechten Bearbeitung der an uns gerichteten Anfrage.",
      "Soweit Sie ausdrücklich in eine weitergehende Verarbeitung eingewilligt haben, ist Art. 6 Abs. 1 lit. a DSGVO die Rechtsgrundlage.",
      "Die Daten werden gelöscht, sobald sie für die Bearbeitung Ihrer Anfrage nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten oder sonstigen berechtigten Gründe für eine weitere Speicherung bestehen.",
      "Bitte übermitteln Sie über die allgemeine E-Mail-Adresse info@romlee.net keine vertraulichen medizinischen Unterlagen oder besonders sensiblen Gesundheitsdaten.",
    ],
  },
  {
    heading: "6. Cookies und ähnliche Technologien",
    paragraphs: [
      "Diese Website kann Cookies und vergleichbare Technologien verwenden. Cookies sind kleine Dateien, die auf Ihrem Endgerät gespeichert werden oder Informationen aus Ihrem Endgerät auslesen können.",
    ],
  },
  {
    sub: "Technisch notwendige Cookies",
    paragraphs: ["Technisch notwendige Cookies dienen insbesondere dazu,"],
    list: [
      "die Website technisch bereitzustellen",
      "Sicherheitsfunktionen zu ermöglichen",
      "Cookie-Einstellungen zu speichern",
      "die Darstellung der Website sicherzustellen oder",
      "die Nutzung technisch erforderlicher Funktionen zu ermöglichen",
    ],
  },
  {
    paragraphs: [
      "Soweit diese Cookies zwingend erforderlich sind, erfolgt ihre Verwendung auf Grundlage von § 25 Abs. 2 TDDDG. Die anschließende Verarbeitung personenbezogener Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.",
    ],
  },
  {
    sub: "Funktionale und externe Cookies",
    paragraphs: [
      "Funktionale Cookies können beispielsweise Spracheinstellungen oder andere vom Nutzer vorgenommene Einstellungen speichern.",
      "Cookies oder vergleichbare Technologien von Spotify, YouTube oder anderen externen Medienanbietern können insbesondere dann eingesetzt werden, wenn eingebettete Musik, Videos oder sonstige externe Inhalte geladen oder abgespielt werden.",
      "Soweit diese Technologien nicht technisch notwendig sind, dürfen sie grundsätzlich erst nach Ihrer Einwilligung aktiviert werden. Die Rechtsgrundlagen sind Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG.",
      "Sie können eine erteilte Einwilligung jederzeit über die Cookie-Einstellungen der Website widerrufen oder ändern.",
      "Die konkrete Anzahl und Art der Cookies kann sich aufgrund technischer Änderungen der Plattform oder der eingebundenen Dienste ändern. Maßgeblich sind die jeweils im Cookie-Banner beziehungsweise in den Cookie-Einstellungen angezeigten Informationen.",
    ],
  },
  {
    heading: "7a Keine bewusst eingesetzte eigene Besucheranalyse",
    paragraphs: [
      "Der Betreiber dieser Website setzt bewusst kein eigenes Google Analytics und kein vergleichbares eigenes Analysewerkzeug zur Erstellung persönlicher Besucherprofile ein.",
      "Es kann jedoch nicht ausgeschlossen werden, dass der Hostinganbieter Vercel im Rahmen der Bereitstellung der Plattform technische Nutzungsdaten verarbeitet oder eigene Analyse- und Sicherheitsverfahren einsetzt.",
      "Ebenso können eingebundene Drittanbieter wie Spotify oder YouTube Daten über die Nutzung ihrer Inhalte verarbeiten.",
    ],
  },
  {
    heading: "7b Generelles zu den folgenden Links (Spotify/YouTube etc.)",
    sub: "Externe Inhalte von Spotify und YouTube",
    paragraphs: [
      "Auf dieser Website können externe Inhalte von Spotify und YouTube eingebunden sein. Diese Inhalte werden nach Möglichkeit erst geladen, wenn der Nutzer sie aktiv freigibt, anklickt oder abspielt.",
      "Mit der aktiven Freigabe oder dem Aufruf eines solchen externen Inhalts erklärt sich der Nutzer damit einverstanden, dass eine Verbindung zu den Servern des jeweiligen Anbieters hergestellt wird und dabei personenbezogene Daten, insbesondere die IP-Adresse sowie Browser-, Geräte- und Nutzungsdaten, an Spotify beziehungsweise Google/YouTube übermittelt werden können.",
      "Der Nutzer nimmt zur Kenntnis, dass die weitere Verarbeitung dieser Daten durch den jeweiligen Drittanbieter nach dessen eigenen Datenschutzbestimmungen erfolgt. Ist der Nutzer bei dem jeweiligen Anbieter angemeldet, kann der Anbieter den Besuch oder die Nutzung möglicherweise dem dortigen Benutzerkonto zuordnen.",
      "Die Einwilligung bezieht sich ausschließlich auf den jeweils aktivierten externen Inhalt und kann für die Zukunft über die Cookie- oder Datenschutzeinstellungen widerrufen werden.",
      "Reine Links zu Spotify oder YouTube übertragen grundsätzlich erst dann Daten an den jeweiligen Anbieter, wenn der Nutzer den Link anklickt und die externe Website aufruft.",
    ],
  },
  {
    sub: "External Content from Spotify and YouTube",
    paragraphs: [
      "This website may contain external content provided by Spotify and YouTube. Wherever technically possible, such content will only be loaded after the user actively enables, clicks or plays it.",
      "By actively enabling or accessing such external content, the user agrees that a connection may be established with the servers of the respective provider and that personal data, particularly the user’s IP address and browser, device and usage data, may be transmitted to Spotify or Google/YouTube.",
      "The user acknowledges that any subsequent processing of such data by the respective third-party provider is governed by that provider’s own privacy policy. Where the user is logged into an account held with the respective provider, the provider may be able to associate the visit or use of the content with that user account.",
      "Consent applies only to the external content actively enabled by the user and may be withdrawn for the future through the website’s cookie or privacy settings.",
      "Standard links to Spotify or YouTube generally transmit data to the respective provider only after the user clicks the link and accesses the external website.",
    ],
  },
  {
    heading: "8. Spotify",
    paragraphs: [
      "Auf dieser Website können Musikstücke, Alben, Wiedergabelisten oder Künstlerprofile von Spotify eingebunden oder verlinkt sein.",
      "Anbieter des Dienstes ist Spotify AB mit Sitz in Stockholm, Schweden.",
    ],
  },
  {
    sub: "Eingebettete Spotify-Player",
    paragraphs: [
      "Bei einem eingebetteten Spotify-Player wird eine Verbindung zu Servern von Spotify hergestellt. Dabei können insbesondere folgende Daten an Spotify übermittelt werden:",
    ],
    list: [
      "IP-Adresse",
      "Browser- und Geräteinformationen",
      "aufgerufene Seite",
      "Datum und Uhrzeit des Zugriffs",
      "Informationen über die Nutzung des Players sowie",
      "gegebenenfalls Informationen aus einem bestehenden Spotify-Konto",
    ],
  },
  {
    paragraphs: [
      "Sind Sie bei Spotify angemeldet, kann Spotify die Nutzung möglicherweise Ihrem Spotify-Konto zuordnen.",
      "Soweit der Spotify-Player erst nach Ihrer Einwilligung geladen wird, erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung kann jederzeit über die Cookie-Einstellungen widerrufen werden.",
    ],
  },
  {
    sub: "Reine Spotify-Links",
    paragraphs: [
      "Soweit auf dieser Website lediglich ein Link zu Spotify bereitgestellt wird, werden durch das bloße Anzeigen des Links grundsätzlich noch keine Daten an Spotify übertragen. Erst wenn Sie den Link anklicken, verlassen Sie diese Website und es gelten die Datenschutzbestimmungen von Spotify.",
      "Weitere Informationen zur Datenverarbeitung finden Sie in der Datenschutzerklärung und Cookie-Richtlinie von Spotify.",
    ],
  },
  {
    heading: "9. YouTube",
    paragraphs: [
      "Auf dieser Website können Videos der Plattform YouTube eingebunden oder verlinkt sein.",
      "YouTube wird von Google betrieben. Verantwortlicher Anbieter für Nutzer im Europäischen Wirtschaftsraum ist grundsätzlich Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.",
    ],
  },
  {
    sub: "Eingebettete YouTube-Videos",
    paragraphs: [
      "Beim Laden oder Abspielen eines eingebetteten YouTube-Videos kann eine Verbindung zu Servern von Google beziehungsweise YouTube hergestellt werden. Dabei können insbesondere folgende Informationen verarbeitet werden:",
    ],
    list: [
      "IP-Adresse",
      "Browser- und Geräteinformationen",
      "aufgerufene Unterseite",
      "Datum und Uhrzeit des Zugriffs",
      "Angaben zur Wiedergabe des Videos",
      "Cookie- und Identifikationsdaten sowie",
      "gegebenenfalls Informationen aus einem angemeldeten Google-Konto",
    ],
  },
  {
    paragraphs: [
      "Wenn Sie gleichzeitig bei Google oder YouTube angemeldet sind, kann Google den Besuch beziehungsweise die Wiedergabe möglicherweise Ihrem Benutzerkonto zuordnen.",
      "Soweit das Video erst nach Ihrer Einwilligung geladen wird, erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Ihre Einwilligung können Sie jederzeit über die Cookie-Einstellungen widerrufen.",
      "Eine Übermittlung personenbezogener Daten an Unternehmen oder Server in den USA und anderen Drittländern kann nicht vollständig ausgeschlossen werden.",
    ],
  },
  {
    sub: "Reine YouTube-Links",
    paragraphs: [
      "Bei einer bloßen Verlinkung zu YouTube werden durch das Anzeigen des Links grundsätzlich noch keine Daten an YouTube übermittelt. Eine Datenverarbeitung durch YouTube beginnt regelmäßig erst, wenn Sie den Link anklicken oder externe Inhalte aktivieren.",
      "Weitere Informationen finden Sie in der Datenschutzerklärung von Google und YouTube.",
    ],
  },
  {
    heading: "10. Links zu sozialen Netzwerken",
    paragraphs: [
      "Diese Website verlinkt nicht auf Instagram, Facebook oder TikTok. Offizielle Musikvideos von Rom Lee erscheinen ausschließlich auf YouTube. Die Lieder können zusätzlich auf Spotify gestreamt werden, dort auch mit Canvas-Clips, jedoch ohne vollständiges Musikvideo. Kopien oder Bearbeitungen auf anderen Plattformen stammen nicht vom Betreiber.",
      "Soweit in älteren Texten noch Hinweise auf soziale Netzwerke stehen, gelten sie nicht als Einbindung dieser Dienste auf dieser Website.",
    ],
  },
  {
    heading: "11. Externe Links",
    paragraphs: [
      "Diese Website enthält möglicherweise Links zu Internetseiten anderer Anbieter. Für die Datenverarbeitung auf diesen externen Internetseiten ist der jeweilige Anbieter verantwortlich.",
      "Wir haben keinen Einfluss darauf, welche Daten nach dem Anklicken eines externen Links durch den jeweiligen Anbieter verarbeitet werden.",
    ],
  },
  {
    heading: "12. Speicherdauer",
    paragraphs: [
      "Personenbezogene Daten werden nur so lange gespeichert, wie dies für den jeweiligen Verarbeitungszweck erforderlich ist.",
      "Eine längere Speicherung kann erfolgen, wenn gesetzliche Aufbewahrungspflichten bestehen, die Daten zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigt werden oder eine Einwilligung für eine weitergehende Speicherung erteilt wurde.",
      "Nach Wegfall des Verarbeitungszwecks und Ablauf gesetzlicher Aufbewahrungsfristen werden die Daten gelöscht oder anonymisiert.",
    ],
  },
  {
    heading: "13. Empfänger personenbezogener Daten",
    paragraphs: [
      "Personenbezogene Daten können im erforderlichen Umfang insbesondere an folgende Empfänger beziehungsweise Kategorien von Empfängern übermittelt werden:",
    ],
    list: [
      "Website- und Hostinganbieter",
      "IT- und technische Dienstleister",
      "Spotify",
      "Google beziehungsweise YouTube",
      "E-Mail- und Telekommunikationsanbieter",
      "Behörden, soweit eine gesetzliche Verpflichtung besteht, sowie",
      "Rechts- oder Steuerberater, soweit dies erforderlich ist",
    ],
  },
  {
    paragraphs: [
      "Eine Weitergabe zu anderen Zwecken findet nur statt, wenn hierfür eine gesetzliche Grundlage oder eine wirksame Einwilligung besteht.",
    ],
  },
  {
    heading: "14. Ihre Rechte",
    paragraphs: ["Sie haben im Rahmen der gesetzlichen Voraussetzungen insbesondere folgende Rechte:"],
    list: [
      "Recht auf Auskunft gemäß Art. 15 DSGVO",
      "Recht auf Berichtigung gemäß Art. 16 DSGVO",
      "Recht auf Löschung gemäß Art. 17 DSGVO",
      "Recht auf Einschränkung der Verarbeitung gemäß Art. 18 DSGVO",
      "Recht auf Datenübertragbarkeit gemäß Art. 20 DSGVO",
      "Recht auf Widerspruch gemäß Art. 21 DSGVO sowie",
      "Recht auf Widerruf einer erteilten Einwilligung gemäß Art. 7 Abs. 3 DSGVO",
    ],
  },
  {
    paragraphs: [
      "Der Widerruf einer Einwilligung gilt für die Zukunft. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt unberührt.",
      "Zur Ausübung Ihrer Rechte können Sie sich an folgende Adresse wenden: info@romlee.net",
    ],
  },
  {
    heading: "15. Widerspruchsrecht",
    paragraphs: [
      "Werden personenbezogene Daten auf Grundlage von Art. 6 Abs. 1 lit. e oder lit. f DSGVO verarbeitet, haben Sie das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Widerspruch einzulegen.",
      "Werden personenbezogene Daten für Direktwerbung verarbeitet, können Sie dieser Verarbeitung jederzeit ohne Angabe besonderer Gründe widersprechen.",
    ],
  },
  {
    heading: "16. Beschwerderecht bei einer Aufsichtsbehörde",
    paragraphs: [
      "Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren, wenn Sie der Auffassung sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen datenschutzrechtliche Vorschriften verstößt. Dieses Recht besteht gegenüber jeder Aufsichtsbehörde in der Europäischen Union, insbesondere in Ihrem gewöhnlichen Aufenthaltsmitgliedstaat.",
      "Für Nordrhein-Westfalen ist insbesondere folgende Aufsichtsbehörde zuständig:",
      "Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen",
      "Kavalleriestraße 2–4",
      "40213 Düsseldorf",
    ],
  },
  {
    heading: "17. Automatisierte Entscheidungen",
    paragraphs: [
      "Eine automatisierte Entscheidungsfindung einschließlich Profiling im Sinne von Art. 22 DSGVO findet durch den Betreiber dieser Website nicht statt.",
    ],
  },
  {
    heading: "18. Änderung dieser Datenschutzerklärung",
    paragraphs: [
      "Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn sich die Website, die eingesetzten Dienste oder die rechtlichen Anforderungen ändern.",
      "Es gilt die jeweils auf dieser Website veröffentlichte Fassung.",
      "Stand: 27. August 2026",
    ],
  },
  {
    heading: "19. Übermittlung in Drittländer",
    paragraphs: [
      "Einige der eingesetzten Dienstleister können personenbezogene Daten in Staaten außerhalb der Europäischen Union und des Europäischen Wirtschaftsraums verarbeiten, insbesondere in den USA (zum Beispiel Google/YouTube und Vercel Inc.).",
      "Eine solche Übermittlung erfolgt nur, soweit die Voraussetzungen der Art. 44 ff. DSGVO erfüllt sind. Das kann insbesondere sein:",
    ],
    list: [
      "ein Angemessenheitsbeschluss der Europäischen Kommission, etwa das EU-US Data Privacy Framework, soweit der Empfänger zertifiziert ist",
      "Standardvertragsklauseln der Europäischen Kommission nach Art. 46 DSGVO",
      "eine ausdrückliche Einwilligung nach Art. 49 Abs. 1 lit. a DSGVO, soweit Sie externe Inhalte wie YouTube oder Spotify aktiv freigeben",
    ],
  },
  {
    paragraphs: [
      "Bitte beachten Sie, dass in den USA Behörden unter bestimmten Voraussetzungen auf Daten zugreifen können und Betroffenenrechte dort nicht in gleichem Umfang durchsetzbar sein können wie in der EU.",
    ],
  },
  {
    heading: "20. Speicherung Ihrer Cookie-Entscheidung",
    paragraphs: [
      "Ihre Auswahl im Cookie-Banner (Einwilligung oder Ablehnung nicht notwendiger Inhalte) wird ausschließlich lokal in Ihrem Browser gespeichert, damit die Website Ihre Entscheidung merken kann. Diese Speicherung ist technisch erforderlich gemäß § 25 Abs. 2 TDDDG und Art. 6 Abs. 1 lit. f DSGVO.",
      "Es werden keine Werbecookies, keine Tracking-Pixel und kein eigenes Google Analytics gesetzt.",
    ],
  },
  {
    heading: "21. Transparenz nach der KI-Verordnung (AI Act)",
    paragraphs: [
      "Für die Gestaltung einzelner Musikvideos werden KI-gestützte Werkzeuge eingesetzt. Texte, Komposition, Originalaufnahmen und die künstlerische Leitung stammen von Rom Lee. Die Bilder der Videos sind keine rein automatisch erzeugten Werke, sondern das Ergebnis menschlicher Vorgaben und KI-gestützter Bildgestaltung.",
      "Soweit synthetische oder KI-gestützt erzeugte Bildinhalte veröffentlicht werden, weisen wir darauf gemäß den Transparenzvorgaben der Verordnung (EU) 2024/1689 (KI-Verordnung) hin. Eine Kennzeichnung finden Sie auf den Seiten Songs, Videos und im Impressum.",
      "Es werden keine biometrischen Fernidentifizierungssysteme, kein Social Scoring und keine verbotenen KI-Praktiken eingesetzt.",
    ],
  },
  {
    heading: "22. Digitale-Dienste-Gesetz und Digital Services Act",
    paragraphs: [
      "Diese Website unterliegt dem Digitale-Dienste-Gesetz, mit dem unter anderem der Digital Services Act in Deutschland umgesetzt wird. Die Angaben zum Diensteanbieter und zur Kontaktstelle stehen im Impressum.",
      "Illegale Inhalte können per E-Mail an info@romlee.net gemeldet werden. Wir prüfen Hinweise und entfernen rechtswidrige eigene Inhalte unverzüglich, sobald uns konkrete Kenntnis davon vorliegt.",
    ],
  },
  {
    heading: "23. Barrierefreiheit",
    paragraphs: [
      "Diese Website ist ein künstlerischer Informationsauftritt. Das Barrierefreiheitsstärkungsgesetz (BFSG) gilt vor allem für bestimmte Produkte und Dienstleistungen im elektronischen Geschäftsverkehr, nicht automatisch für jede private Künstlerseite.",
      "Gleichwohl ist die Seite auf Lesbarkeit, Tastaturbedienung, ausreichende Kontraste und mobile Nutzung ausgelegt. Hinweise zur Verbesserung der Barrierefreiheit senden Sie bitte an info@romlee.net.",
    ],
  },
  {
    heading: "24. Kinder und Jugendliche",
    paragraphs: [
      "Dieses Angebot richtet sich nicht gezielt an Kinder unter 16 Jahren. Wir fordern wissentlich keine personenbezogenen Daten von Minderjährigen an. YouTube- und Spotify-Inhalte unterliegen den Altersgrenzen der jeweiligen Anbieter.",
    ],
  },
  {
    heading: "25. Lokale Schriftarten — kein Google Fonts",
    paragraphs: [
      "Die auf dieser Website verwendeten Schriftarten (Alumni Sans und Figtree) werden ausschließlich von unserem eigenen Server geladen. Es besteht keine Verbindung zu fonts.googleapis.com oder fonts.gstatic.com. Dadurch findet beim bloßen Aufruf der Seite keine Übermittlung der IP-Adresse an Google zum Zweck der Schriftdarstellung statt.",
    ],
  },
  {
    heading: "26. Server-Logfiles",
    paragraphs: [
      "Der Hostinganbieter erhebt bei jedem Zugriff automatisch Daten, die Ihr Browser übermittelt (Server-Logfiles). Dazu können IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Referrer, Browser und Betriebssystem gehören.",
      "Die Speicherung erfolgt zur Sicherstellung des technischen Betriebs, zur Missbrauchsabwehr und zur Gewährleistung der IT-Sicherheit auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Eine Zusammenführung mit anderen Datenquellen findet durch uns nicht statt. Logfiles werden in der Regel nach kurzer Frist gelöscht, soweit keine Sicherheitsgründe eine längere Aufbewahrung erfordern.",
    ],
  },
];

