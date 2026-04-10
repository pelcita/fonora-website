const fs = require('fs');
const path = require('path');

// Image mapping per branch
const branchenBilder = {
  'fuer-dachdecker': 'nora-dachdecker.png',
  'fuer-solaranlagen': 'nora-dachdecker.png',
  'fuer-sanitaer': 'nora-handwerk.png',
  'fuer-heizungsbau': 'nora-handwerk.png',
  'fuer-elektrobetrieb': 'nora-handwerk.png',
  'fuer-zahnarztpraxis': 'nora-gesundheit.png',
  'fuer-immobilienmakler': 'nora-immobilien.png',
  'fuer-kfz-werkstatt': 'nora-auto.png',
  'fuer-autohaus': 'nora-auto.png',
  'fuer-malerbetrieb': 'nora-maler.png',
  'fuer-tischlerei': 'nora-tischler.png',
  'fuer-physiotherapie': 'nora-gesundheit.png',
  'fuer-steuerberater': 'nora-steuerberater.png',
  'fuer-kosmetikstudio': 'nora-beauty.png',
  'fuer-friseursalon': 'nora-beauty.png',
  'fuer-apotheke': 'nora-apotheke.png',
};

const pages = [
  // PRIO 1
  {
    slug: 'fuer-dachdecker',
    branche: 'Dachdecker',
    brancheArtikel: 'Dachdeckerbetriebe',
    title: 'KI-Telefonassistenz f\u00fcr Dachdecker',
    metaDesc: 'Nora ist die KI-Telefonassistentin f\u00fcr Dachdeckerbetriebe. 24/7 erreichbar, nimmt Anrufe an, bucht Termine und qualifiziert Anfragen \u2013 w\u00e4hrend du auf dem Dach bist. DSGVO-konform.',
    keywords: 'KI Telefonassistent Dachdecker, Telefonassistenz Dachdeckerbetrieb, Dachdecker Telefon KI, Anrufannahme Dachdecker, Dachdecker digitalisieren',
    heroLine1: 'Auf dem Dach.',
    heroLine2: 'Kein Anruf verpasst.',
    heroSmall: 'Nora nimmt ab. 24/7.',
    heroSub: 'KI-Telefonassistenz f\u00fcr deinen Dachdeckerbetrieb \u2014 nimmt Anrufe an, qualifiziert Auftr\u00e4ge und bucht Termine, w\u00e4hrend du arbeitest.',
    stats: [
      { number: '47', suffix: '%', text: 'der Dachdeckerbetriebe verlieren Auftr\u00e4ge durch verpasste Anrufe' },
      { number: '3', suffix: 'h', text: 'verbringt ein Dachdeckermeister t\u00e4glich mit Telefonaten statt auf der Baustelle' },
      { number: '100', suffix: '%', text: 'Erreichbarkeit \u2014 auch bei Sturm, Regen und auf dem Ger\u00fcst' }
    ],
    painPoints: [
      { title: 'Auf dem Dach \u2014 Telefon klingelt unten', desc: 'W\u00e4hrend du auf dem Ger\u00fcst stehst, gehen potenzielle Auftr\u00e4ge verloren. Kunden rufen einmal an \u2014 und dann beim n\u00e4chsten Dachdecker.' },
      { title: 'Sturmsch\u00e4den = Anrufflut', desc: 'Nach Unwettern klingelt das Telefon ununterbrochen. Ohne System geht die H\u00e4lfte der Anfragen unter.' },
      { title: 'Angebote ohne Vorinfos', desc: 'Kunden rufen an ohne Details \u2014 Dachfl\u00e4che, Zustand, Dringlichkeit. Dein Team muss alles nachfragen.' },
      { title: 'Abends und am Wochenende', desc: 'Hausbesitzer rufen oft nach Feierabend an, wenn sie den Schaden entdecken. Dann geht niemand ran.' }
    ],
    featureFraming: 'Nora kennt die typischen Anliegen im Dachdeckerhandwerk: Sturmsch\u00e4den, Neueindeckung, Flachdachsanierung, Dachrinnenreparatur. Sie fragt gezielt nach \u2014 und dein Team bekommt strukturierte Anfragen.',
    testimonial: {
      text: 'Seit Nora unsere Anrufe annimmt, verpassen wir keinen Auftrag mehr. Besonders nach Unwettern ist das Gold wert \u2014 fr\u00fcher sind uns da locker 5\u201310 Auftr\u00e4ge pro Sturm durchgerutscht.',
      name: 'Michael W.',
      initials: 'MW',
      role: 'Dachdeckermeister \u00b7 8 Mitarbeiter'
    },
    faqs: [
      { q: 'Kann Nora zwischen Notfall und normalem Auftrag unterscheiden?', a: 'Ja. Nora erkennt dringende Anliegen wie Sturmsch\u00e4den oder undichte D\u00e4cher und priorisiert diese automatisch. Dein Team wird sofort benachrichtigt.' },
      { q: 'Versteht Nora Fachbegriffe aus dem Dachdeckerhandwerk?', a: 'Nora wird auf deinen Betrieb trainiert und kennt Begriffe wie Flachdach, Steildach, Dachstuhl, Gauben, Dachrinne, Bitumenbahn und mehr.' },
      { q: 'Kann Nora Besichtigungstermine buchen?', a: 'Ja. Nora pr\u00fcft deinen Kalender in Echtzeit und bucht Besichtigungstermine direkt ein \u2014 mit allen relevanten Infos vorab.' },
      { q: 'Was passiert bei Anrufspitzen nach Unwettern?', a: 'Nora kann beliebig viele Anrufe parallel bearbeiten. W\u00e4hrend ein menschlicher Mitarbeiter nur einen Anruf gleichzeitig schafft, nimmt Nora alle an.' }
    ],
    relatedBranchen: ['fuer-solaranlagen', 'fuer-malerbetrieb', 'fuer-elektrobetrieb']
  },
  {
    slug: 'fuer-solaranlagen',
    branche: 'Solaranlagen',
    brancheArtikel: 'Solarteure & PV-Betriebe',
    title: 'KI-Telefonassistenz f\u00fcr Solaranlagen & Photovoltaik',
    metaDesc: 'Nora ist die KI-Telefonassistentin f\u00fcr Solarteure und PV-Betriebe. Qualifiziert Anfragen, bucht Beratungstermine und ist 24/7 erreichbar. DSGVO-konform. Made in Germany.',
    keywords: 'KI Telefonassistent Solaranlagen, Telefonassistenz Photovoltaik, Solar Telefon KI, Anrufannahme Solarteur, PV Betrieb digitalisieren',
    heroLine1: 'Jede Anfrage.',
    heroLine2: 'Jedes Dach.',
    heroSmall: 'Nora qualifiziert. 24/7.',
    heroSub: 'KI-Telefonassistenz f\u00fcr deinen Solarbetrieb \u2014 qualifiziert Anfragen, kl\u00e4rt Dachfl\u00e4che und Ausrichtung, bucht Beratungstermine.',
    stats: [
      { number: '68', suffix: '%', text: 'der PV-Anfragen kommen telefonisch \u2014 oft w\u00e4hrend du auf dem Dach montierst' },
      { number: '12', suffix: 'min', text: 'dauert ein typisches Erstgespr\u00e4ch zur Qualifizierung \u2014 Nora macht das in 3 Minuten' },
      { number: '24', suffix: '/7', text: 'erreichbar \u2014 auch abends, wenn Hausbesitzer \u00fcber Solar nachdenken' }
    ],
    painPoints: [
      { title: 'Auf dem Dach bei der Montage', desc: 'W\u00e4hrend dein Team PV-Module installiert, klingelt das B\u00fcro-Telefon. Interessenten warten nicht \u2014 sie rufen den N\u00e4chsten an.' },
      { title: 'Unqualifizierte Anfragen kosten Zeit', desc: 'Nicht jedes Dach ist geeignet. Ausrichtung, Dachfl\u00e4che, Verschattung \u2014 ohne Vorqualifizierung f\u00e4hrst du umsonst raus.' },
      { title: 'F\u00f6rderungsboom = Anrufwelle', desc: 'Wenn neue F\u00f6rderprogramme starten, explodieren die Anfragen. Ohne System verpasst du die H\u00e4lfte.' },
      { title: 'Abends informieren, morgens vergessen', desc: 'Hausbesitzer recherchieren abends \u2014 rufen an und niemand geht ran. Am n\u00e4chsten Tag haben sie einen anderen Anbieter gefunden.' }
    ],
    featureFraming: 'Nora fragt gezielt nach Dachfl\u00e4che, Ausrichtung, Stromverbrauch und Speicherw\u00fcnsche. So bekommt dein Team nur vorqualifizierte Anfragen \u2014 mit allen relevanten Daten.',
    testimonial: {
      text: 'Seit Nora unsere Anfragen vorqualifiziert, fahren wir nur noch zu Terminen, die sich lohnen. Die Abschlussquote ist deutlich gestiegen.',
      name: 'Stefan B.',
      initials: 'SB',
      role: 'Gesch\u00e4ftsf\u00fchrer, Solartechnik-Betrieb \u00b7 15 Mitarbeiter'
    },
    faqs: [
      { q: 'Kann Nora nach Dachfl\u00e4che und Ausrichtung fragen?', a: 'Ja. Nora stellt gezielt Fragen zu Dachfl\u00e4che, Ausrichtung, Neigung, Verschattung und Stromverbrauch \u2014 genau die Infos, die du f\u00fcr ein Erstangebot brauchst.' },
      { q: 'Versteht Nora PV-Fachbegriffe?', a: 'Nora wird auf deinen Betrieb trainiert und kennt Begriffe wie kWp, Wechselrichter, Speicher, Einspeiseverg\u00fctung, Eigenverbrauch und mehr.' },
      { q: 'Kann Nora \u00fcber F\u00f6rderungen informieren?', a: 'Ja. Du hinterlegst die aktuellen F\u00f6rderprogramme und Nora gibt Anrufern eine erste Orientierung \u2014 ohne falsche Versprechen.' },
      { q: 'Was passiert bei Anrufspitzen nach F\u00f6rderanstieg?', a: 'Nora kann beliebig viele Anrufe parallel bearbeiten. Kein Anrufer h\u00f6rt ein Besetzt-Zeichen.' }
    ],
    relatedBranchen: ['fuer-dachdecker', 'fuer-elektrobetrieb', 'fuer-heizungsbau']
  },
  {
    slug: 'fuer-sanitaer',
    branche: 'Sanit\u00e4rbetriebe',
    brancheArtikel: 'Sanit\u00e4r- & Installationsbetriebe',
    title: 'KI-Telefonassistenz f\u00fcr Sanit\u00e4rbetriebe',
    metaDesc: 'Nora ist die KI-Telefonassistentin f\u00fcr Sanit\u00e4rbetriebe. Nimmt Notf\u00e4lle sofort an, qualifiziert Anfragen und bucht Termine \u2013 24/7. DSGVO-konform. Made in Germany.',
    keywords: 'KI Telefonassistent Sanit\u00e4r, Telefonassistenz Installateur, Sanit\u00e4rbetrieb Telefon KI, Klempner Anrufannahme, SHK digitalisieren',
    heroLine1: 'Rohrbruch um 3 Uhr.',
    heroLine2: 'Nora nimmt ab.',
    heroSmall: 'Dein Sanit\u00e4r-Notdienst. 24/7.',
    heroSub: 'KI-Telefonassistenz f\u00fcr deinen Sanit\u00e4rbetrieb \u2014 priorisiert Notf\u00e4lle, qualifiziert Auftr\u00e4ge und bucht Termine, w\u00e4hrend du beim Kunden bist.',
    stats: [
      { number: '38', suffix: '%', text: 'der Notfall-Anrufe gehen verloren, weil der Meister gerade beim Kunden ist' },
      { number: '4.2', suffix: 'h', decimal: true, text: 'verbringt ein SHK-Betrieb t\u00e4glich mit Telefonaten und R\u00fcckrufen' },
      { number: '24', suffix: '/7', text: 'erreichbar \u2014 auch nachts bei Rohrbruch und Wasserschaden' }
    ],
    painPoints: [
      { title: 'Beim Kunden unter der Sp\u00fcle', desc: 'Wenn du gerade eine Armatur tauschst, kannst du nicht ans Telefon. Der n\u00e4chste Notfall ruft an \u2014 und landet bei der Konkurrenz.' },
      { title: 'Notf\u00e4lle vs. Routineanfragen', desc: 'Ein Rohrbruch muss sofort bearbeitet werden, eine neue Badplanung kann warten. Ohne System geht beides im selben Topf unter.' },
      { title: 'Wochenende und Feiertage', desc: 'Wassersch\u00e4den halten sich nicht an \u00d6ffnungszeiten. Wer dann nicht erreichbar ist, verliert den Auftrag.' },
      { title: 'R\u00fcckrufversprechen vergessen', desc: 'Der Zettel auf der Werkbank, die Nachricht auf der Mailbox \u2014 bei 20 Anfragen am Tag geht vieles unter.' }
    ],
    featureFraming: 'Nora kennt den Unterschied zwischen Rohrbruch und Badplanung. Sie priorisiert Notf\u00e4lle, qualifiziert Routineanfragen und bucht Wartungstermine \u2014 alles automatisch.',
    testimonial: {
      text: 'Nora nimmt alle Anrufe au\u00dferhalb der \u00d6ffnungszeiten ab. Kein verpasster Auftrag mehr \u2014 und meine Mitarbeiter k\u00f6nnen sich endlich auf das Wesentliche konzentrieren.',
      name: 'Thomas H.',
      initials: 'TH',
      role: 'Gesch\u00e4ftsf\u00fchrer, Sanit\u00e4rbetrieb \u00b7 12 Mitarbeiter'
    },
    faqs: [
      { q: 'Kann Nora Notf\u00e4lle von normalen Anfragen unterscheiden?', a: 'Ja. Nora erkennt Schl\u00fcsselw\u00f6rter wie Rohrbruch, Wasserschaden oder \u00dcberschwemmung und eskaliert sofort an dein Notfallteam.' },
      { q: 'Versteht Nora SHK-Fachbegriffe?', a: 'Nora wird auf deinen Betrieb trainiert und kennt Begriffe wie Absperrventil, Siphon, Therme, Zirkulation und alle g\u00e4ngigen Installationsarbeiten.' },
      { q: 'Kann Nora Wartungstermine buchen?', a: 'Ja. Nora pr\u00fcft deinen Kalender und bucht Wartungs- oder Besichtigungstermine direkt ein \u2014 mit Adresse und Anliegen.' },
      { q: 'Funktioniert Nora auch als Notdienst-Annahme?', a: 'Ja. Du definierst die Regeln: Welche Anliegen sind Notf\u00e4lle? Wer wird benachrichtigt? Nora h\u00e4lt sich daran \u2014 rund um die Uhr.' }
    ],
    relatedBranchen: ['fuer-heizungsbau', 'fuer-elektrobetrieb', 'fuer-dachdecker']
  },
  {
    slug: 'fuer-heizungsbau',
    branche: 'Heizungsbauer',
    brancheArtikel: 'Heizungsbau-Betriebe',
    title: 'KI-Telefonassistenz f\u00fcr Heizungsbauer',
    metaDesc: 'Nora ist die KI-Telefonassistentin f\u00fcr Heizungsbaubetriebe. Nimmt Anrufe an, priorisiert Heizungsausf\u00e4lle und bucht Wartungstermine \u2013 24/7. DSGVO-konform.',
    keywords: 'KI Telefonassistent Heizungsbau, Telefonassistenz Heizungsbetrieb, Heizung Telefon KI, Heizungsbauer Anrufannahme, SHK digitalisieren',
    heroLine1: 'Heizung aus.',
    heroLine2: 'Nora h\u00f6rt zu.',
    heroSmall: 'Dein Heizungs-Notdienst. 24/7.',
    heroSub: 'KI-Telefonassistenz f\u00fcr deinen Heizungsbaubetrieb \u2014 priorisiert Ausf\u00e4lle, bucht Wartungstermine und qualifiziert Anfragen f\u00fcr W\u00e4rmepumpen & Co.',
    stats: [
      { number: '85', suffix: '%', text: 'der Heizungsausf\u00e4lle passieren im Winter \u2014 wenn dein Team ohnehin am Limit ist' },
      { number: '5', suffix: 'x', text: 'mehr Anrufe im Herbst/Winter als im Sommer \u2014 ohne mehr Personal' },
      { number: '24', suffix: '/7', text: 'erreichbar \u2014 auch Samstagnacht bei Heizungsausfall' }
    ],
    painPoints: [
      { title: 'Saisonaler Ansturm', desc: 'Wenn im Oktober die erste K\u00e4ltewelle kommt, klingelt das Telefon pausenlos. Dein B\u00fcro schafft es nicht, alle Anfragen abzuarbeiten.' },
      { title: 'Heizung kaputt = Panik', desc: 'Kunden mit ausgefallener Heizung sind gestresst und rufen mehrfach an. Ohne System blockieren sie die Leitung f\u00fcr andere.' },
      { title: 'W\u00e4rmepumpen-Beratung frisst Zeit', desc: 'Die Energiewende bringt viele Beratungsanfragen. Jedes Erstgespr\u00e4ch dauert 15 Minuten \u2014 ohne Ergebnis, wenn der Kunde nicht qualifiziert ist.' },
      { title: 'Wartungsvertr\u00e4ge organisieren', desc: 'Hunderte Kunden mit j\u00e4hrlicher Wartung \u2014 die Terminkoordination per Telefon ist ein Vollzeitjob.' }
    ],
    featureFraming: 'Nora wei\u00df: Heizungsausfall ist ein Notfall, W\u00e4rmepumpen-Beratung kann geplant werden. Sie priorisiert, qualifiziert und bucht \u2014 passend zu deinem Betrieb.',
    testimonial: {
      text: 'Letzten Winter hatten wir 300% mehr Anrufe als im Sommer. Ohne Nora h\u00e4tten wir die H\u00e4lfte verloren. Jetzt wird jeder Anruf angenommen und richtig einsortiert.',
      name: 'J\u00fcrgen K.',
      initials: 'JK',
      role: 'Heizungsbaumeister \u00b7 20 Mitarbeiter'
    },
    faqs: [
      { q: 'Kann Nora zwischen Heizungsausfall und Beratung unterscheiden?', a: 'Ja. Nora erkennt Notf\u00e4lle wie Heizungsausfall oder Gasgeruch und eskaliert sofort. Beratungsanfragen werden strukturiert erfasst und als Termin geplant.' },
      { q: 'Kann Nora Wartungstermine koordinieren?', a: 'Ja. Nora bucht Wartungstermine direkt in deinen Kalender und fragt dabei Heizungstyp, Alter und Adresse ab.' },
      { q: 'Versteht Nora den Unterschied zwischen Gas, \u00d6l und W\u00e4rmepumpe?', a: 'Nora wird auf deinen Betrieb trainiert und kennt alle g\u00e4ngigen Heizungssysteme und deren typische Probleme.' },
      { q: 'Was passiert bei Anrufspitzen im Winter?', a: 'Nora kann beliebig viele Anrufe parallel bearbeiten. Auch bei 50 gleichzeitigen Anrufen h\u00f6rt kein Kunde ein Besetzt-Zeichen.' }
    ],
    relatedBranchen: ['fuer-sanitaer', 'fuer-solaranlagen', 'fuer-elektrobetrieb']
  },
  {
    slug: 'fuer-elektrobetrieb',
    branche: 'Elektrobetriebe',
    brancheArtikel: 'Elektro-Fachbetriebe',
    title: 'KI-Telefonassistenz f\u00fcr Elektrobetriebe',
    metaDesc: 'Nora ist die KI-Telefonassistentin f\u00fcr Elektrobetriebe. Nimmt Anrufe an, qualifiziert Auftr\u00e4ge und bucht Termine \u2013 w\u00e4hrend du auf der Baustelle bist. DSGVO-konform.',
    keywords: 'KI Telefonassistent Elektro, Telefonassistenz Elektrobetrieb, Elektriker Telefon KI, Elektro Anrufannahme, Elektrobetrieb digitalisieren',
    heroLine1: 'Auf der Baustelle.',
    heroLine2: 'Erreichbar.',
    heroSmall: 'Nora nimmt ab. 24/7.',
    heroSub: 'KI-Telefonassistenz f\u00fcr deinen Elektrobetrieb \u2014 nimmt Anrufe an, qualifiziert Auftr\u00e4ge und bucht Termine, w\u00e4hrend du Leitungen verlegst.',
    stats: [
      { number: '52', suffix: '%', text: 'der Elektriker verlieren Auftr\u00e4ge, weil sie auf der Baustelle nicht ans Telefon gehen k\u00f6nnen' },
      { number: '3.8', suffix: 'h', decimal: true, text: 'verbringt ein Elektrobetrieb t\u00e4glich mit R\u00fcckrufen und Terminabsprachen' },
      { number: '0', suffix: '', text: 'verpasste Anrufe \u2014 Nora nimmt jeden einzelnen an' }
    ],
    painPoints: [
      { title: 'H\u00e4nde im Sicherungskasten', desc: 'Wenn du gerade eine Verteilung verdrahtest, kannst du nicht ans Telefon. Potenzielle Auftr\u00e4ge gehen an die Konkurrenz.' },
      { title: 'Viele Kleinanfragen', desc: 'Steckdose, Lampe, FI-Schalter \u2014 viele kleine Auftr\u00e4ge, die einzeln nicht rentabel sind, aber in der Summe fehlen.' },
      { title: 'E-Mobilit\u00e4t boomt', desc: 'Wallbox-Anfragen explodieren. Jedes Erstgespr\u00e4ch braucht: Automarke, Stellplatz, Z\u00e4hlerkasten, Leistung. Das kostet Zeit.' },
      { title: 'Baustellenlärm', desc: 'Auf der Baustelle ist es laut. Selbst wenn du rangehst, versteht niemand etwas. Unprofessionell.' }
    ],
    featureFraming: 'Nora unterscheidet zwischen Notf\u00e4llen (Stromausfall, Kurzschluss), Standardauftr\u00e4gen und Wallbox-Anfragen. Sie qualifiziert gezielt und dein Team bekommt nur die wichtigen Infos.',
    testimonial: {
      text: 'Endlich kann ich auf der Baustelle arbeiten, ohne st\u00e4ndig aufs Handy zu schielen. Nora nimmt alles an und sortiert die Anfragen vor. Mein B\u00fcro ist deutlich entlastet.',
      name: 'Andreas F.',
      initials: 'AF',
      role: 'Elektromeister \u00b7 6 Mitarbeiter'
    },
    faqs: [
      { q: 'Kann Nora Wallbox-Anfragen qualifizieren?', a: 'Ja. Nora fragt nach Automarke, Stellplatz-Typ, Z\u00e4hlerkasten und gew\u00fcnschter Ladeleistung \u2014 so bekommt dein Team alle Infos f\u00fcr ein Erstangebot.' },
      { q: 'Erkennt Nora Strom-Notf\u00e4lle?', a: 'Ja. Bei Stromausfall, Kurzschluss oder Brandgeruch eskaliert Nora sofort und benachrichtigt dein Notfallteam.' },
      { q: 'Kann Nora zwischen Privat- und Gewerbekunden unterscheiden?', a: 'Ja. Nora fragt nach und kategorisiert Anfragen entsprechend \u2014 mit unterschiedlichen Abl\u00e4ufen, wenn gew\u00fcnscht.' },
      { q: 'Versteht Nora Elektro-Fachbegriffe?', a: 'Nora wird auf deinen Betrieb trainiert und kennt Begriffe wie FI-Schalter, Sicherungskasten, Z\u00e4hlerplatz, Unterverteilung und mehr.' }
    ],
    relatedBranchen: ['fuer-solaranlagen', 'fuer-sanitaer', 'fuer-dachdecker']
  },
  {
    slug: 'fuer-zahnarztpraxis',
    branche: 'Zahnarztpraxen',
    brancheArtikel: 'Zahnarztpraxen',
    title: 'KI-Telefonassistenz f\u00fcr Zahnarztpraxen',
    metaDesc: 'Nora ist die KI-Telefonassistentin f\u00fcr Zahnarztpraxen. Bucht Termine, beantwortet Patientenfragen und entlastet die Rezeption \u2013 24/7. DSGVO-konform. Made in Germany.',
    keywords: 'KI Telefonassistent Zahnarztpraxis, Telefonassistenz Zahnarzt, Zahnarzt Telefon KI, Praxis Anrufannahme, Zahnarztpraxis digitalisieren',
    heroLine1: 'Rezeption am Limit.',
    heroLine2: 'Nora \u00fcbernimmt.',
    heroSmall: 'Terminbuchung. 24/7.',
    heroSub: 'KI-Telefonassistenz f\u00fcr deine Zahnarztpraxis \u2014 bucht Termine, beantwortet Patientenfragen und entlastet dein Praxisteam.',
    stats: [
      { number: '67', suffix: '%', text: 'der Praxisanrufe betreffen Terminbuchungen \u2014 die Nora komplett \u00fcbernehmen kann' },
      { number: '23', suffix: 'min', text: 'verbringt eine ZFA pro Stunde am Telefon statt am Patienten' },
      { number: '0', suffix: '', text: 'Patienten in der Warteschleife \u2014 Nora nimmt sofort ab' }
    ],
    painPoints: [
      { title: 'Telefon klingelt ununterbrochen', desc: 'Terminbuchung, Absage, Nachfrage, Rezept \u2014 deine ZFA schafft es kaum, zwischen Telefon und Patient zu wechseln.' },
      { title: 'Patienten h\u00e4ngen in der Warteschleife', desc: 'Wer 5 Minuten wartet, legt auf und bucht woanders. Besonders Neupatienten sind sofort weg.' },
      { title: 'Mittagspause = nicht erreichbar', desc: 'Viele Patienten rufen in der Mittagspause an \u2014 genau dann, wenn die Praxis geschlossen hat.' },
      { title: 'Fachkr\u00e4ftemangel an der Rezeption', desc: 'Gute ZFAs sind schwer zu finden. Die vorhandenen sollten Patienten betreuen, nicht telefonieren.' }
    ],
    featureFraming: 'Nora bucht Kontroll-, Prophylaxe- und Schmerztermine direkt in deinen Praxiskalender. Sie beantwortet Fragen zu \u00d6ffnungszeiten, Versicherung und Behandlungen \u2014 freundlich und geduldig.',
    testimonial: {
      text: 'Ich war skeptisch, ob das wirklich zu uns passt. Aber nach dem ersten Testanruf war ich \u00fcberzeugt. Nora klingt nat\u00fcrlich, antwortet pr\u00e4zise \u2014 und ist DSGVO-konform. Das war uns besonders wichtig.',
      name: 'Sandra K.',
      initials: 'SK',
      role: 'Praxismanagerin, Zahnarztpraxis \u00b7 M\u00fcnchen'
    },
    faqs: [
      { q: 'Kann Nora zwischen Schmerztermin und Routine unterscheiden?', a: 'Ja. Nora erkennt dringende Anliegen und priorisiert Schmerzpatienten. Sie bucht diese in Notfallslots oder benachrichtigt dein Team sofort.' },
      { q: 'Funktioniert Nora mit meiner Praxissoftware?', a: 'Nora bucht Termine \u00fcber Cal.com oder vergleichbare Systeme. Die Integration wird im Setup individuell angepasst.' },
      { q: 'Kann Nora Fragen zu Kassenleistungen beantworten?', a: 'Ja. Du hinterlegst die h\u00e4ufigsten Fragen und Antworten, und Nora gibt Patienten eine zuverl\u00e4ssige Erstauskunft.' },
      { q: 'Ist Nora DSGVO-konform f\u00fcr Patientendaten?', a: 'Ja. Alle Daten werden in Europa verarbeitet und gespeichert. Nora erf\u00fcllt alle Anforderungen der DSGVO \u2014 besonders wichtig im Gesundheitsbereich.' }
    ],
    relatedBranchen: ['fuer-physiotherapie', 'fuer-kosmetikstudio', 'fuer-friseursalon']
  },
  {
    slug: 'fuer-immobilienmakler',
    branche: 'Immobilienmakler',
    brancheArtikel: 'Immobilienb\u00fcros & Makler',
    title: 'KI-Telefonassistenz f\u00fcr Immobilienmakler',
    metaDesc: 'Nora ist die KI-Telefonassistentin f\u00fcr Immobilienmakler. Qualifiziert Interessenten, bucht Besichtigungstermine und ist 24/7 erreichbar. DSGVO-konform.',
    keywords: 'KI Telefonassistent Immobilienmakler, Telefonassistenz Immobilien, Makler Telefon KI, Immobilien Anrufannahme, Immobilienb\u00fcro digitalisieren',
    heroLine1: 'Bei der Besichtigung.',
    heroLine2: 'N\u00e4chster Lead gesichert.',
    heroSmall: 'Nora qualifiziert. 24/7.',
    heroSub: 'KI-Telefonassistenz f\u00fcr dein Immobilienb\u00fcro \u2014 qualifiziert Interessenten, bucht Besichtigungen und erfasst neue Objekte.',
    stats: [
      { number: '42', suffix: '%', text: 'der Immobilien-Leads gehen verloren, weil der Makler bei einer Besichtigung ist' },
      { number: '8', suffix: 'k\u20ac', text: 'durchschnittliche Provision pro Abschluss \u2014 jeder verpasste Anruf z\u00e4hlt' },
      { number: '24', suffix: '/7', text: 'erreichbar \u2014 Interessenten suchen auch abends und am Wochenende' }
    ],
    painPoints: [
      { title: 'Bei der Besichtigung \u2014 Telefon auf stumm', desc: 'Du f\u00fchrst Interessenten durch ein Objekt, w\u00e4hrend ein neuer K\u00e4ufer vergeblich anruft. Bei 8.000\u20ac Provision pro Deal ein teurer Fehler.' },
      { title: 'Anfragen ohne Finanzierung', desc: 'Viele Interessenten rufen an, ohne Budget oder Finanzierung. Jedes Gespr\u00e4ch dauert 15 Minuten \u2014 ohne Ergebnis.' },
      { title: 'Wochenende ist Hochsaison', desc: 'Samstag und Sonntag sind die aktivsten Tage f\u00fcr Immobiliensuche. Wenn dein B\u00fcro zu ist, rufst du Montag zur\u00fcck \u2014 zu sp\u00e4t.' },
      { title: 'Neue Objekte akquirieren', desc: 'Eigent\u00fcmer rufen an, um ihr Objekt anzubieten. Wenn du nicht erreichbar bist, gehen sie zum n\u00e4chsten Makler.' }
    ],
    featureFraming: 'Nora qualifiziert Interessenten nach Budget, Finanzierungsstatus, Suchprofil und Zeitrahmen. Sie bucht Besichtigungstermine und erfasst neue Objekt-Angebote \u2014 strukturiert und vollst\u00e4ndig.',
    testimonial: {
      text: 'Seitdem Nora meine Anrufe annimmt, verpasse ich keinen Lead mehr. Besonders am Wochenende hat sich das direkt in mehr Abschl\u00fcssen bezahlt gemacht.',
      name: 'Claudia M.',
      initials: 'CM',
      role: 'Immobilienmaklerin \u00b7 Frankfurt am Main'
    },
    faqs: [
      { q: 'Kann Nora Interessenten nach Budget qualifizieren?', a: 'Ja. Nora fragt nach Budget, Finanzierungsstatus, gew\u00fcnschter Lage und Objekttyp \u2014 so bekommst du nur vorqualifizierte Leads.' },
      { q: 'Kann Nora Besichtigungstermine buchen?', a: 'Ja. Nora pr\u00fcft deinen Kalender und bucht Besichtigungstermine direkt ein \u2014 mit allen relevanten Infos zum Interessenten.' },
      { q: 'Kann Nora auch Objektangebote von Eigent\u00fcmern erfassen?', a: 'Ja. Nora nimmt Objektdetails auf: Lage, Gr\u00f6\u00dfe, Zustand, Preisvorstellung \u2014 strukturiert als Lead f\u00fcr dein Akquise-Team.' },
      { q: 'Funktioniert Nora auch auf Englisch f\u00fcr internationale Kunden?', a: 'Im Setup besprechen wir deine Anforderungen. Mehrsprachigkeit ist m\u00f6glich und wird individuell konfiguriert.' }
    ],
    relatedBranchen: ['fuer-steuerberater', 'fuer-autohaus', 'fuer-kfz-werkstatt']
  },
  {
    slug: 'fuer-kfz-werkstatt',
    branche: 'KFZ-Werkst\u00e4tten',
    brancheArtikel: 'KFZ-Werkst\u00e4tten & Autowerkst\u00e4tten',
    title: 'KI-Telefonassistenz f\u00fcr KFZ-Werkst\u00e4tten',
    metaDesc: 'Nora ist die KI-Telefonassistentin f\u00fcr KFZ-Werkst\u00e4tten. Bucht Werkstatttermine, nimmt Pannenanrufe an und entlastet die Werkstatt \u2013 24/7. DSGVO-konform.',
    keywords: 'KI Telefonassistent KFZ Werkstatt, Telefonassistenz Autowerkstatt, Werkstatt Telefon KI, KFZ Anrufannahme, Autowerkstatt digitalisieren',
    heroLine1: 'Unter der Hebebühne.',
    heroLine2: 'Nora am Telefon.',
    heroSmall: 'Werkstatttermine. 24/7.',
    heroSub: 'KI-Telefonassistenz f\u00fcr deine KFZ-Werkstatt \u2014 bucht Werkstatttermine, nimmt Pannenanrufe an und qualifiziert Anfragen.',
    stats: [
      { number: '45', suffix: '%', text: 'der Werkstattkunden buchen telefonisch \u2014 wenn niemand rangeht, fahren sie woanders hin' },
      { number: '6', suffix: '+', text: 'verschiedene Anliegen pro Stunde: HU/AU, Reifen, Inspektion, Reparatur, Kostenvoranschlag' },
      { number: '0', suffix: '', text: 'verpasste Terminanfragen \u2014 Nora nimmt jeden Anruf an' }
    ],
    painPoints: [
      { title: '\u00d6lige H\u00e4nde, Telefon klingelt', desc: 'Wenn du unter dem Auto liegst, gehst du nicht ans Telefon. Aber der Kunde mit dem HU-Termin wartet nicht.' },
      { title: 'Viele verschiedene Anliegen', desc: 'HU/AU, Reifenwechsel, Inspektion, Reparatur, Unfallschaden \u2014 jedes Anliegen braucht andere Infos. Am Telefon dauert das ewig.' },
      { title: 'Saisonale Spitzen', desc: 'Reifenwechsel im Fr\u00fchjahr und Herbst, HU-Termine, Urlaubschecks \u2014 in Spitzenzeiten ist die Werkstatt telefonisch \u00fcberfordert.' },
      { title: 'Kostenvoranschl\u00e4ge ohne Infos', desc: 'Kunden rufen an und wollen einen Preis \u2014 ohne Automodell, Baujahr oder Fehlerbeschreibung zu nennen.' }
    ],
    featureFraming: 'Nora fragt nach Automarke, Modell, Baujahr und Anliegen. Sie unterscheidet zwischen HU/AU, Reifenservice, Inspektion und Reparatur und bucht den passenden Termin.',
    testimonial: {
      text: 'Nora hat unsere Terminvergabe komplett ver\u00e4ndert. Fr\u00fcher klingelte das Telefon in der Werkstatt und keiner konnte rangehen. Jetzt wird jeder Anruf professionell angenommen.',
      name: 'Frank D.',
      initials: 'FD',
      role: 'KFZ-Meister, Autowerkstatt \u00b7 K\u00f6ln'
    },
    faqs: [
      { q: 'Kann Nora nach Automodell und Baujahr fragen?', a: 'Ja. Nora erfasst Marke, Modell, Baujahr und Anliegen \u2014 so hat dein Team alle Infos f\u00fcr die Terminplanung.' },
      { q: 'Kann Nora verschiedene Termintypen buchen?', a: 'Ja. HU/AU, Reifenservice, Inspektion, Reparatur \u2014 Nora bucht den richtigen Termintyp mit der passenden Dauer.' },
      { q: 'Erkennt Nora Pannennotf\u00e4lle?', a: 'Ja. Bei liegengebliebenen Fahrzeugen oder Unfallsch\u00e4den eskaliert Nora sofort an dein Team.' },
      { q: 'Kann Nora Infos zu Preisen geben?', a: 'Ja. Du hinterlegst Standardpreise f\u00fcr h\u00e4ufige Leistungen und Nora gibt Kunden eine erste Orientierung.' }
    ],
    relatedBranchen: ['fuer-autohaus', 'fuer-elektrobetrieb', 'fuer-sanitaer']
  },
  {
    slug: 'fuer-autohaus',
    branche: 'Autoh\u00e4user',
    brancheArtikel: 'Autoh\u00e4user & Autoh\u00e4ndler',
    title: 'KI-Telefonassistenz f\u00fcr Autoh\u00e4user',
    metaDesc: 'Nora ist die KI-Telefonassistentin f\u00fcr Autoh\u00e4user. Bucht Probefahrten, qualifiziert K\u00e4ufer und nimmt Serviceanfragen an \u2013 24/7. DSGVO-konform.',
    keywords: 'KI Telefonassistent Autohaus, Telefonassistenz Autoh\u00e4ndler, Autohaus Telefon KI, Probefahrt buchen KI, Autohaus digitalisieren',
    heroLine1: 'Im Verkaufsgespr\u00e4ch.',
    heroLine2: 'N\u00e4chster Kunde wartet.',
    heroSmall: 'Nora qualifiziert. 24/7.',
    heroSub: 'KI-Telefonassistenz f\u00fcr dein Autohaus \u2014 bucht Probefahrten, qualifiziert Kaufinteressenten und nimmt Serviceanfragen an.',
    stats: [
      { number: '35', suffix: '%', text: 'der Autohaus-Anrufe landen auf der Mailbox \u2014 Kunden rufen kein zweites Mal an' },
      { number: '15', suffix: 'k\u20ac', text: 'durchschnittlicher Fahrzeugwert \u2014 jeder verpasste Lead z\u00e4hlt' },
      { number: '3', suffix: '', text: 'Abteilungen (Verkauf, Service, Teile) \u2014 Nora leitet richtig weiter' }
    ],
    painPoints: [
      { title: 'Verk\u00e4ufer im Kundengespräch', desc: 'Wenn dein Verk\u00e4ufer einen K\u00e4ufer berät, kann er nicht gleichzeitig ans Telefon. Der n\u00e4chste Interessent springt ab.' },
      { title: 'Drei Abteilungen, eine Nummer', desc: 'Verkauf, Werkstatt, Ersatzteile \u2014 Kunden landen oft in der falschen Abteilung und werden frustriert durchgestellt.' },
      { title: 'Probefahrten-Buchung ist zeitintensiv', desc: 'Wunschfahrzeug, Termin, F\u00fchrerschein, Finanzierungsfragen \u2014 jede Probefahrt-Buchung braucht 10 Minuten am Telefon.' },
      { title: 'Online-Anfragen nachfassen', desc: 'Kunden stellen Anfragen \u00fcber Portale \u2014 wer als Erster zur\u00fcckruft, gewinnt. Verz\u00f6gerung kostet Deals.' }
    ],
    featureFraming: 'Nora leitet Anrufe an die richtige Abteilung, bucht Probefahrten mit allen Details und qualifiziert Kaufinteressenten nach Budget, Finanzierung und Wunschfahrzeug.',
    testimonial: {
      text: 'Nora hat unsere Erreichbarkeit verdoppelt. Probefahrten werden direkt gebucht und unsere Verk\u00e4ufer k\u00f6nnen sich auf die Beratung vor Ort konzentrieren.',
      name: 'Robert S.',
      initials: 'RS',
      role: 'Verkaufsleiter, Autohaus \u00b7 Stuttgart'
    },
    faqs: [
      { q: 'Kann Nora Anrufe an verschiedene Abteilungen weiterleiten?', a: 'Ja. Nora erkennt das Anliegen und leitet an Verkauf, Werkstatt oder Ersatzteile weiter \u2014 oder nimmt das Anliegen direkt auf.' },
      { q: 'Kann Nora Probefahrten buchen?', a: 'Ja. Nora erfasst Wunschfahrzeug, Terminwunsch und Kontaktdaten und bucht die Probefahrt direkt in euren Kalender.' },
      { q: 'Kann Nora Kaufinteressenten qualifizieren?', a: 'Ja. Nora fragt nach Budget, Finanzierungswunsch, Inzahlungnahme und Zeitrahmen \u2014 so bekommt dein Verkaufsteam nur hei\u00dfe Leads.' },
      { q: 'Funktioniert Nora f\u00fcr mehrere Standorte?', a: 'Ja. Im Setup konfigurieren wir Nora f\u00fcr alle Standorte mit individuellen Regeln und Kalendern.' }
    ],
    relatedBranchen: ['fuer-kfz-werkstatt', 'fuer-immobilienmakler', 'fuer-steuerberater']
  },
  // PRIO 2
  {
    slug: 'fuer-malerbetrieb',
    branche: 'Malerbetriebe',
    brancheArtikel: 'Maler- & Lackierbetriebe',
    title: 'KI-Telefonassistenz f\u00fcr Malerbetriebe',
    metaDesc: 'Nora ist die KI-Telefonassistentin f\u00fcr Malerbetriebe. Nimmt Anrufe an, qualifiziert Auftr\u00e4ge und bucht Besichtigungstermine \u2013 24/7. DSGVO-konform.',
    keywords: 'KI Telefonassistent Maler, Telefonassistenz Malerbetrieb, Maler Telefon KI, Malerbetrieb Anrufannahme, Maler digitalisieren',
    heroLine1: 'Pinsel in der Hand.',
    heroLine2: 'Auftrag am Telefon.',
    heroSmall: 'Nora nimmt ab. 24/7.',
    heroSub: 'KI-Telefonassistenz f\u00fcr deinen Malerbetrieb \u2014 nimmt Anrufe an, qualifiziert Auftr\u00e4ge und bucht Besichtigungstermine.',
    stats: [
      { number: '40', suffix: '%', text: 'der Maleranfragen kommen telefonisch \u2014 w\u00e4hrend du auf der Baustelle streichst' },
      { number: '8', suffix: 'min', text: 'dauert ein Erstgespr\u00e4ch zur Auftragsqualifizierung \u2014 Nora braucht 3' },
      { number: '24', suffix: '/7', text: 'erreichbar \u2014 auch wenn du gerade W\u00e4nde streichst' }
    ],
    painPoints: [
      { title: 'Auf der Leiter, Telefon klingelt', desc: 'Du streichst eine Decke, Farbe an den H\u00e4nden \u2014 und das Telefon klingelt. Der potenzielle Auftrag wartet nicht.' },
      { title: 'Angebote brauchen Vorinfos', desc: 'Raumgr\u00f6\u00dfe, Zustand der W\u00e4nde, Innen oder Au\u00dfen, Farb- oder Tapetenwunsch \u2014 ohne diese Infos f\u00e4hrst du umsonst raus.' },
      { title: 'Saisonaler Ansturm im Fr\u00fchjahr', desc: 'Wenn die Sonne rauskommt, wollen alle gleichzeitig streichen lassen. Das Telefon klingelt pausenlos.' },
      { title: 'Kleine Auftr\u00e4ge richtig filtern', desc: 'Ein einzelnes Zimmer oder ein ganzes Haus? Ohne Vorqualifizierung wei\u00dft du nicht, was sich lohnt.' }
    ],
    featureFraming: 'Nora fragt nach Raumgr\u00f6\u00dfe, Innen/Au\u00dfen, Zustand und Wunschtermin. So bekommt dein Team nur qualifizierte Anfragen mit allen Details f\u00fcr das Angebot.',
    testimonial: {
      text: 'Endlich muss ich nicht mehr mit Farbroller in der Hand ans Telefon. Nora nimmt alles auf und ich rufe abends die qualifizierten Anfragen durch.',
      name: 'Marco T.',
      initials: 'MT',
      role: 'Malermeister \u00b7 5 Mitarbeiter'
    },
    faqs: [
      { q: 'Kann Nora nach Raumgr\u00f6\u00dfe und Auftragsdetails fragen?', a: 'Ja. Nora erfasst Raumgr\u00f6\u00dfe, Innen/Au\u00dfen, Zustand der Fl\u00e4chen und Wunschtermin \u2014 alles, was du f\u00fcr ein Angebot brauchst.' },
      { q: 'Kann Nora zwischen Privat- und Gewerbeauftr\u00e4gen unterscheiden?', a: 'Ja. Nora fragt nach und kategorisiert Anfragen entsprechend \u2014 mit unterschiedlichen Abl\u00e4ufen, wenn gew\u00fcnscht.' },
      { q: 'Kann Nora Besichtigungstermine buchen?', a: 'Ja. Nora pr\u00fcft deinen Kalender und bucht Vor-Ort-Termine direkt ein \u2014 mit Adresse und allen relevanten Details.' },
      { q: 'Versteht Nora Malerhandwerk-Begriffe?', a: 'Nora wird auf deinen Betrieb trainiert und kennt Begriffe wie WDVS, Spachteln, Lasur, Dispersionsfarbe und mehr.' }
    ],
    relatedBranchen: ['fuer-dachdecker', 'fuer-tischlerei', 'fuer-elektrobetrieb']
  },
  {
    slug: 'fuer-tischlerei',
    branche: 'Tischlereien',
    brancheArtikel: 'Tischlereien & Schreinereien',
    title: 'KI-Telefonassistenz f\u00fcr Tischlereien & Schreinereien',
    metaDesc: 'Nora ist die KI-Telefonassistentin f\u00fcr Tischlereien und Schreinereien. Nimmt Anrufe an, qualifiziert Auftr\u00e4ge und bucht Beratungstermine \u2013 24/7. DSGVO-konform.',
    keywords: 'KI Telefonassistent Tischler, Telefonassistenz Tischlerei, Schreiner Telefon KI, Schreinerei Anrufannahme, Tischlerei digitalisieren',
    heroLine1: 'In der Werkstatt.',
    heroLine2: 'Kein Auftrag verloren.',
    heroSmall: 'Nora nimmt ab. 24/7.',
    heroSub: 'KI-Telefonassistenz f\u00fcr deine Tischlerei \u2014 nimmt Anrufe an, qualifiziert Auftr\u00e4ge und bucht Beratungstermine, w\u00e4hrend du an der Werkbank stehst.',
    stats: [
      { number: '55', suffix: '%', text: 'der Anfragen gehen verloren, weil in der Werkstatt niemand das Telefon h\u00f6rt' },
      { number: '12', suffix: 'min', text: 'dauert ein Beratungsgespr\u00e4ch zu Ma\u00dfm\u00f6beln \u2014 Nora qualifiziert in 3 Minuten vor' },
      { number: '0', suffix: '', text: 'verpasste Anrufe \u2014 auch w\u00e4hrend du die Kreiss\u00e4ge bedienst' }
    ],
    painPoints: [
      { title: 'Werkstattl\u00e4rm \u00fcbert\u00f6nt alles', desc: 'Kreiss\u00e4ge, Hobel, Fr\u00e4se \u2014 in der Werkstatt h\u00f6rst du das Telefon nicht. Und wenn doch, ist das Gespr\u00e4ch unm\u00f6glich.' },
      { title: 'Ma\u00dfarbeit braucht Details', desc: 'K\u00fcchen, Regale, Treppen \u2014 jeder Auftrag ist individuell. Ohne Vorinfos zu Ma\u00dfen und W\u00fcnschen geht nichts.' },
      { title: 'Privatkunden vs. Architekten', desc: 'Architekten und Innenausstatter brauchen andere Abl\u00e4ufe als Privatkunden. Am Telefon ist das schwer zu unterscheiden.' },
      { title: 'Showroom-Termine koordinieren', desc: 'Interessenten wollen Holzmuster sehen und sich beraten lassen \u2014 aber nur nach Termin.' }
    ],
    featureFraming: 'Nora fragt nach Projekt (K\u00fcche, M\u00f6bel, T\u00fcren, Treppe), Ma\u00dfen, Material und Budget. Sie bucht Beratungstermine und leitet an den richtigen Ansprechpartner weiter.',
    testimonial: {
      text: 'In der Werkstatt h\u00f6re ich das Telefon einfach nicht. Seit Nora drangeht, habe ich pl\u00f6tzlich 30% mehr Anfragen auf dem Tisch \u2014 buchst\u00e4blich.',
      name: 'Christian L.',
      initials: 'CL',
      role: 'Tischlermeister \u00b7 4 Mitarbeiter'
    },
    faqs: [
      { q: 'Kann Nora nach Projektdetails fragen?', a: 'Ja. Nora erfasst Projekttyp (K\u00fcche, Schrank, Treppe), gew\u00fcnschtes Material, ungef\u00e4hre Ma\u00dfe und Budget \u2014 strukturiert als Anfrage f\u00fcr dein Team.' },
      { q: 'Kann Nora zwischen Privat und Gewerbe unterscheiden?', a: 'Ja. Architekten und Innenausstatter bekommen einen anderen Ablauf als Privatkunden \u2014 wenn du das m\u00f6chtest.' },
      { q: 'Kann Nora Beratungstermine in der Werkstatt buchen?', a: 'Ja. Nora pr\u00fcft deinen Kalender und bucht Showroom- oder Werkstatttermine direkt ein.' },
      { q: 'Versteht Nora Holzarten und Materialien?', a: 'Nora wird auf deinen Betrieb trainiert \u2014 ob Eiche, Buche, Nussbaum oder MDF, sie kennt dein Sortiment.' }
    ],
    relatedBranchen: ['fuer-malerbetrieb', 'fuer-dachdecker', 'fuer-elektrobetrieb']
  },
  {
    slug: 'fuer-physiotherapie',
    branche: 'Physiotherapeuten',
    brancheArtikel: 'Physiotherapie-Praxen',
    title: 'KI-Telefonassistenz f\u00fcr Physiotherapie-Praxen',
    metaDesc: 'Nora ist die KI-Telefonassistentin f\u00fcr Physiotherapie-Praxen. Bucht Behandlungstermine, beantwortet Patientenfragen und entlastet die Rezeption \u2013 24/7. DSGVO-konform.',
    keywords: 'KI Telefonassistent Physiotherapie, Telefonassistenz Physiotherapeut, Physio Telefon KI, Physiotherapie Anrufannahme, Physiotherapie digitalisieren',
    heroLine1: 'H\u00e4nde am Patienten.',
    heroLine2: 'Nora am Telefon.',
    heroSmall: 'Termine buchen. 24/7.',
    heroSub: 'KI-Telefonassistenz f\u00fcr deine Physiotherapie-Praxis \u2014 bucht Behandlungstermine, beantwortet Fragen und entlastet deine Rezeption.',
    stats: [
      { number: '72', suffix: '%', text: 'der Physio-Patienten buchen telefonisch \u2014 oft w\u00e4hrend du behandelst' },
      { number: '18', suffix: 'min', text: 'verbringt die Rezeption pro Stunde am Telefon statt mit Patienten vor Ort' },
      { number: '0', suffix: '', text: 'Patienten in der Warteschleife \u2014 Nora nimmt sofort ab' }
    ],
    painPoints: [
      { title: 'H\u00e4nde am Patienten, Telefon klingelt', desc: 'Du bist gerade in der Behandlung \u2014 das Telefon klingelt, aber du kannst nicht drangehen. Der Patient muss sp\u00e4ter nochmal anrufen.' },
      { title: 'Terminvergabe dominiert den Tag', desc: 'Rezept da, Termin buchen, Warteliste checken \u2014 deine Rezeptionistin verbringt den halben Tag am Telefon.' },
      { title: 'Wartelisten manuell f\u00fchren', desc: 'Beliebte Behandler sind Wochen ausgebucht. Die Warteliste wird auf Zetteln gef\u00fchrt und Patienten warten auf R\u00fcckruf.' },
      { title: 'Keine Rezeptionskraft gefunden', desc: 'Gute Empfangskr\u00e4fte sind schwer zu finden. Therapeuten m\u00fcssen selbst ans Telefon \u2014 zwischen zwei Behandlungen.' }
    ],
    featureFraming: 'Nora bucht Behandlungstermine, fragt nach Rezeptdetails (Anzahl, Diagnose, Verordnung) und gibt Infos zu \u00d6ffnungszeiten und Kassenzulassung.',
    testimonial: {
      text: 'Nora hat unsere Rezeption gerettet. Wir konnten keine Empfangskraft finden und die Therapeuten waren genervt vom st\u00e4ndigen Telefonieren. Jetzt l\u00e4uft alles automatisch.',
      name: 'Dr. Lisa H.',
      initials: 'LH',
      role: 'Praxisinhaberin, Physiotherapie \u00b7 D\u00fcsseldorf'
    },
    faqs: [
      { q: 'Kann Nora nach Rezeptdetails fragen?', a: 'Ja. Nora fragt nach Art der Behandlung, Anzahl der Einheiten, Diagnose und verordnendem Arzt \u2014 so ist dein Team vorbereitet.' },
      { q: 'Kann Nora Wartelisten verwalten?', a: 'Nora kann Patienten auf die Warteliste setzen und sie benachrichtigen, sobald ein Termin frei wird.' },
      { q: 'Ist Nora DSGVO-konform f\u00fcr Gesundheitsdaten?', a: 'Ja. Alle Daten werden in Europa verarbeitet und gespeichert. Nora erf\u00fcllt alle DSGVO-Anforderungen \u2014 auch im sensiblen Gesundheitsbereich.' },
      { q: 'Kann Nora verschiedene Therapeuten und deren Verf\u00fcgbarkeit kennen?', a: 'Ja. Nora wei\u00df, wer wann verf\u00fcgbar ist, und bucht Termine beim richtigen Therapeuten ein.' }
    ],
    relatedBranchen: ['fuer-zahnarztpraxis', 'fuer-kosmetikstudio', 'fuer-friseursalon']
  },
  {
    slug: 'fuer-steuerberater',
    branche: 'Steuerberater',
    brancheArtikel: 'Steuerkanzleien & Steuerberater',
    title: 'KI-Telefonassistenz f\u00fcr Steuerberater',
    metaDesc: 'Nora ist die KI-Telefonassistentin f\u00fcr Steuerkanzleien. Nimmt Mandantenanrufe an, qualifiziert Neuanfragen und bucht Beratungstermine \u2013 24/7. DSGVO-konform.',
    keywords: 'KI Telefonassistent Steuerberater, Telefonassistenz Steuerkanzlei, Steuerberater Telefon KI, Kanzlei Anrufannahme, Steuerkanzlei digitalisieren',
    heroLine1: 'Mandant ruft an.',
    heroLine2: 'Du bist konzentriert.',
    heroSmall: 'Nora nimmt ab. 24/7.',
    heroSub: 'KI-Telefonassistenz f\u00fcr deine Steuerkanzlei \u2014 nimmt Mandantenanrufe an, qualifiziert Neuanfragen und bucht Beratungstermine.',
    stats: [
      { number: '60', suffix: '%', text: 'der Kanzleianrufe sind Routine \u2014 Terminbest\u00e4tigung, Dokumentenstatus, Fristen' },
      { number: '3', suffix: 'x', text: 'mehr Anrufe w\u00e4hrend der Steuererkl\u00e4rungsfrist \u2014 ohne mehr Personal' },
      { number: '24', suffix: '/7', text: 'erreichbar \u2014 auch nach Feierabend f\u00fcr gesch\u00e4ftige Mandanten' }
    ],
    painPoints: [
      { title: 'Konzentration unterbrochen', desc: 'Bilanzen, Steuererkl\u00e4rungen, Gutachten \u2014 jede Unterbrechung durch das Telefon kostet 20 Minuten Konzentration.' },
      { title: 'Saisonaler Ansturm', desc: 'Januar bis Mai: Steuererkl\u00e4rungsfrist. Das Telefon klingelt nonstop \u2014 sind die Unterlagen da? Wann ist mein Termin?' },
      { title: 'Neumandat-Anfragen qualifizieren', desc: 'Nicht jeder Anrufer wird Mandant. Unternehmensgr\u00f6\u00dfe, Branche, Anliegen \u2014 diese Infos braucht man vorab.' },
      { title: 'Empfang unterbesetzt', desc: 'Kleine Kanzleien haben oft keine Vollzeit-Empfangskraft. Der Steuerberater selbst geht ans Telefon.' }
    ],
    featureFraming: 'Nora unterscheidet zwischen Bestandsmandanten und Neuanfragen. Sie gibt Infos zu Fristen und Status, bucht Beratungstermine und qualifiziert Neumandate nach Branche und Anliegen.',
    testimonial: {
      text: 'In der Steuererkl\u00e4rungszeit war das Telefon unser gr\u00f6\u00dftes Problem. Seit Nora \u00fcbernimmt, kann ich mich endlich auf die fachliche Arbeit konzentrieren.',
      name: 'Peter V.',
      initials: 'PV',
      role: 'Steuerberater \u00b7 Einzelkanzlei'
    },
    faqs: [
      { q: 'Kann Nora Bestandsmandanten von Neuanfragen unterscheiden?', a: 'Ja. Nora fragt, ob der Anrufer bereits Mandant ist, und leitet entsprechend weiter \u2014 mit unterschiedlichen Abl\u00e4ufen.' },
      { q: 'Kann Nora Informationen zu Fristen geben?', a: 'Ja. Du hinterlegst aktuelle Fristen und Nora informiert Mandanten \u00fcber Abgabefristen, Vorlagedaten und mehr.' },
      { q: 'Ist Nora DSGVO-konform f\u00fcr Mandantendaten?', a: 'Ja. Alle Daten werden in Europa verarbeitet und gespeichert. Mandantengeheimnis und DSGVO werden vollst\u00e4ndig eingehalten.' },
      { q: 'Kann Nora Neumandat-Anfragen qualifizieren?', a: 'Ja. Nora fragt nach Unternehmensform, Branche, Anzahl Mitarbeiter und Anliegen \u2014 so kannst du vorab einsch\u00e4tzen, ob es passt.' }
    ],
    relatedBranchen: ['fuer-immobilienmakler', 'fuer-zahnarztpraxis', 'fuer-autohaus']
  },
  {
    slug: 'fuer-kosmetikstudio',
    branche: 'Kosmetikstudios',
    brancheArtikel: 'Kosmetikstudios & Beauty-Salons',
    title: 'KI-Telefonassistenz f\u00fcr Kosmetikstudios',
    metaDesc: 'Nora ist die KI-Telefonassistentin f\u00fcr Kosmetikstudios. Bucht Behandlungstermine, beantwortet Fragen und ist 24/7 erreichbar \u2013 auch w\u00e4hrend der Behandlung. DSGVO-konform.',
    keywords: 'KI Telefonassistent Kosmetikstudio, Telefonassistenz Beauty, Kosmetik Telefon KI, Beauty Salon Anrufannahme, Kosmetikstudio digitalisieren',
    heroLine1: 'Mitten in der Behandlung.',
    heroLine2: 'Nora bucht den n\u00e4chsten Termin.',
    heroSmall: 'Terminbuchung. 24/7.',
    heroSub: 'KI-Telefonassistenz f\u00fcr dein Kosmetikstudio \u2014 bucht Behandlungstermine, beantwortet Fragen und l\u00e4sst dich arbeiten.',
    stats: [
      { number: '78', suffix: '%', text: 'der Beauty-Kunden buchen telefonisch \u2014 w\u00e4hrend du gerade am Kunden arbeitest' },
      { number: '5', suffix: '+', text: 'verpasste Anrufe pro Tag in einem Ein-Personen-Studio' },
      { number: '24', suffix: '/7', text: 'erreichbar \u2014 Kundinnen buchen auch abends nach der Arbeit' }
    ],
    painPoints: [
      { title: 'Solo-Selbstst\u00e4ndig = nie erreichbar', desc: 'Wenn du alleine arbeitest und gerade eine Behandlung machst, ist niemand da, der ans Telefon geht. Kunden buchen woanders.' },
      { title: 'Behandlungstypen erkl\u00e4ren kostet Zeit', desc: 'Microneedling, Hydrafacial, Chemical Peeling \u2014 Kundinnen haben Fragen, die 10 Minuten dauern. W\u00e4hrend du behandelst.' },
      { title: 'Abendstunden sind Buchungszeit', desc: 'Kundinnen recherchieren abends \u2014 und wollen sofort buchen. Wenn dein Studio um 19 Uhr schlie\u00dft, verpasst du die H\u00e4lfte.' },
      { title: 'No-Shows kosten Umsatz', desc: 'Ohne Best\u00e4tigung und Erinnerung kommen viele Kunden nicht. Jeder leere Slot kostet Geld.' }
    ],
    featureFraming: 'Nora bucht Behandlungstermine (Gesicht, K\u00f6rper, Waxing, Nails), beantwortet Fragen zu Treatments und schickt automatische Terminbest\u00e4tigungen per SMS.',
    testimonial: {
      text: 'Wir haben Nora f\u00fcr unsere Terminbuchung eingesetzt. Die Abl\u00e4ufe laufen viel ruhiger und unsere Kunden fragen uns regelm\u00e4\u00dfig, wer diese nette Dame am Telefon ist.',
      name: 'Markus R.',
      initials: 'MR',
      role: 'Inhaber, Kosmetikstudio \u00b7 Hamburg'
    },
    faqs: [
      { q: 'Kann Nora verschiedene Behandlungstypen buchen?', a: 'Ja. Gesichtsbehandlung, K\u00f6rperbehandlung, Waxing, Permanent Make-up \u2014 Nora kennt dein Angebot und bucht den richtigen Termin mit der richtigen Dauer.' },
      { q: 'Kann Nora Fragen zu Behandlungen beantworten?', a: 'Ja. Du hinterlegst Infos zu Treatments, Preisen und Kontraindikationen \u2014 Nora gibt Kundinnen eine zuverl\u00e4ssige Erstauskunft.' },
      { q: 'Schickt Nora Terminbest\u00e4tigungen?', a: 'Ja. Nach der Buchung bekommt die Kundin automatisch eine Best\u00e4tigung per SMS oder E-Mail.' },
      { q: 'Lohnt sich Nora f\u00fcr ein Ein-Personen-Studio?', a: 'Gerade f\u00fcr Solo-Selbstst\u00e4ndige ist Nora ideal \u2014 du brauchst keine Empfangskraft und verpasst trotzdem keinen Anruf.' }
    ],
    relatedBranchen: ['fuer-friseursalon', 'fuer-physiotherapie', 'fuer-zahnarztpraxis']
  },
  {
    slug: 'fuer-friseursalon',
    branche: 'Friseursalons',
    brancheArtikel: 'Friseursalons & Barbershops',
    title: 'KI-Telefonassistenz f\u00fcr Friseursalons',
    metaDesc: 'Nora ist die KI-Telefonassistentin f\u00fcr Friseursalons. Bucht Termine, beantwortet Fragen und ist 24/7 erreichbar \u2013 auch w\u00e4hrend du schneidest. DSGVO-konform.',
    keywords: 'KI Telefonassistent Friseur, Telefonassistenz Friseursalon, Friseur Telefon KI, Barbershop Anrufannahme, Friseursalon digitalisieren',
    heroLine1: 'Schere in der Hand.',
    heroLine2: 'N\u00e4chster Termin gebucht.',
    heroSmall: 'Nora nimmt ab. 24/7.',
    heroSub: 'KI-Telefonassistenz f\u00fcr deinen Friseursalon \u2014 bucht Termine, beantwortet Fragen und l\u00e4sst dich in Ruhe arbeiten.',
    stats: [
      { number: '82', suffix: '%', text: 'der Salon-Kunden buchen per Telefon \u2014 w\u00e4hrend du gerade schneidest' },
      { number: '7', suffix: '+', text: 'verpasste Anrufe pro Tag in einem typischen Salon' },
      { number: '24', suffix: '/7', text: 'erreichbar \u2014 auch au\u00dferhalb der Salon\u00f6ffnungszeiten' }
    ],
    painPoints: [
      { title: 'Nasse H\u00e4nde, Telefon klingelt', desc: 'Du f\u00f6hnst, f\u00e4rbst oder schneidest \u2014 und das Telefon klingelt. Entweder du unterbrichst den Kunden oder du verpasst den Anruf.' },
      { title: 'Reines Termingesch\u00e4ft', desc: '95% der Anrufe sind Terminbuchungen. Das kann ein System besser als ein Mensch mit F\u00f6hn in der Hand.' },
      { title: 'Stammkunden wollen ihren Stylisten', desc: 'Kunden buchen nicht einfach irgendeinen Termin \u2014 sie wollen zu ihrem Stylisten. Das macht die Buchung komplexer.' },
      { title: 'Feierabend-Buchungen', desc: 'Kunden buchen oft abends oder am Wochenende, wenn der Salon geschlossen ist. Ohne System geht die Buchung verloren.' }
    ],
    featureFraming: 'Nora kennt dein Team, die Services (Schnitt, Farbe, Str\u00e4hnen, Bart) und die Verf\u00fcgbarkeiten. Sie bucht Termine beim richtigen Stylisten mit der passenden Dauer.',
    testimonial: {
      text: 'Seitdem Nora bei uns die Termine bucht, ist der Salon viel ruhiger. Kein Telefonklingeln mehr zwischen den Kunden. Und abends werden trotzdem Termine gebucht.',
      name: 'Julia W.',
      initials: 'JW',
      role: 'Saloninhaberin \u00b7 D\u00fcsseldorf'
    },
    faqs: [
      { q: 'Kann Nora Termine bei bestimmten Stylisten buchen?', a: 'Ja. Nora kennt dein Team und bucht Termine beim gew\u00fcnschten Stylisten \u2014 mit der richtigen Dauer je nach Service.' },
      { q: 'Kann Nora verschiedene Services unterscheiden?', a: 'Ja. Schnitt, Farbe, Str\u00e4hnen, Dauerwelle, Bartpflege \u2014 Nora kennt dein Angebot und bucht den passenden Zeitslot.' },
      { q: 'Kann Nora Absagen und Umbuchungen annehmen?', a: 'Ja. Kunden k\u00f6nnen \u00fcber Nora Termine absagen oder verschieben \u2014 der freigewordene Slot wird sofort wieder verf\u00fcgbar.' },
      { q: 'Schickt Nora Terminbest\u00e4tigungen und Erinnerungen?', a: 'Ja. Nach der Buchung bekommt der Kunde eine Best\u00e4tigung per SMS oder E-Mail. Erinnerungen k\u00f6nnen ebenfalls eingerichtet werden.' }
    ],
    relatedBranchen: ['fuer-kosmetikstudio', 'fuer-zahnarztpraxis', 'fuer-physiotherapie']
  },
  {
    slug: 'fuer-apotheke',
    branche: 'Apotheken',
    brancheArtikel: 'Apotheken & Pharmazie',
    title: 'KI-Telefonassistenz f\u00fcr Apotheken',
    metaDesc: 'Nora ist die KI-Telefonassistentin f\u00fcr Apotheken. Nimmt Anrufe an, pr\u00fcft Verf\u00fcgbarkeiten, reserviert Medikamente und beantwortet Fragen \u2013 24/7. DSGVO-konform. Made in Germany.',
    keywords: 'KI Telefonassistent Apotheke, Telefonassistenz Apotheke, Apotheke Telefon KI, Apotheke Anrufannahme, Apotheke digitalisieren, Medikamente reservieren KI',
    heroLine1: 'Rezept da.',
    heroLine2: 'Nora kl\u00e4rt den Rest.',
    heroSmall: 'Deine Apotheke. 24/7 erreichbar.',
    heroSub: 'KI-Telefonassistenz f\u00fcr deine Apotheke \u2014 pr\u00fcft Verf\u00fcgbarkeiten, reserviert Medikamente und beantwortet Kundenfragen, w\u00e4hrend du ber\u00e4tst.',
    stats: [
      { number: '73', suffix: '%', text: 'der Apothekenkunden rufen an, um Medikamentenverf\u00fcgbarkeit zu pr\u00fcfen \u2014 das kann Nora' },
      { number: '4.5', suffix: 'h', decimal: true, text: 'verbringt das Apothekenteam t\u00e4glich am Telefon statt in der Beratung' },
      { number: '24', suffix: '/7', text: 'erreichbar \u2014 auch nachts bei dringenden Medikamentenfragen' }
    ],
    painPoints: [
      { title: 'Telefon klingelt, Schlange w\u00e4chst', desc: 'W\u00e4hrend du einen Kunden am HV-Tisch ber\u00e4tst, klingelt das Telefon. Entweder der Kunde vor dir wartet oder der Anrufer legt auf.' },
      { title: 'Immer dieselben Fragen', desc: '\u00d6ffnungszeiten, Notdienstplan, \u201eHaben Sie XY vorr\u00e4tig?\u201c \u2014 80% der Anrufe sind Standardfragen, die dein Team von der Beratung abhalten.' },
      { title: 'Fachkr\u00e4ftemangel in der Apotheke', desc: 'PTA und PKA sind schwer zu finden. Die vorhandenen sollten beraten, nicht telefonieren.' },
      { title: 'Notdienst-Nacht ohne Unterst\u00fctzung', desc: 'Im Notdienst bist du allein \u2014 und das Telefon klingelt trotzdem. Jeder Anruf unterbricht die Versorgung vor Ort.' }
    ],
    featureFraming: 'Nora kennt dein Sortiment, pr\u00fcft Verf\u00fcgbarkeiten, reserviert Medikamente und beantwortet Fragen zu \u00d6ffnungszeiten, Notdienst und Lieferzeiten. Dein Team kann sich auf die pers\u00f6nliche Beratung konzentrieren.',
    testimonial: {
      text: 'Seitdem Nora die Verf\u00fcgbarkeitsanfragen \u00fcbernimmt, ist es am HV-Tisch viel ruhiger. Unsere PTAs k\u00f6nnen sich endlich auf die Beratung konzentrieren \u2014 und die Kunden am Telefon werden trotzdem sofort bedient.',
      name: 'Dr. Kathrin S.',
      initials: 'KS',
      role: 'Apothekeninhaberin \u00b7 3 Filialen'
    },
    faqs: [
      { q: 'Kann Nora Medikamentenverf\u00fcgbarkeit pr\u00fcfen?', a: 'Ja. Du hinterlegst dein Sortiment oder verbindest dein Warenwirtschaftssystem \u2014 Nora gibt Kunden eine zuverl\u00e4ssige Auskunft, ob ein Medikament vorr\u00e4tig ist.' },
      { q: 'Kann Nora Medikamente reservieren?', a: 'Ja. Nora nimmt den Namen, das Medikament und die gew\u00fcnschte Abholzeit auf und legt eine Reservierung an.' },
      { q: 'Kann Nora \u00fcber Notdienste informieren?', a: 'Ja. Nora kennt deinen Notdienstplan und gibt Anrufern Auskunft \u00fcber die n\u00e4chste diensthabende Apotheke.' },
      { q: 'Ist Nora DSGVO-konform f\u00fcr Gesundheitsdaten?', a: 'Ja. Alle Daten werden in Europa verarbeitet und gespeichert. Nora erf\u00fcllt alle DSGVO-Anforderungen \u2014 besonders wichtig im pharmazeutischen Bereich.' }
    ],
    relatedBranchen: ['fuer-zahnarztpraxis', 'fuer-physiotherapie', 'fuer-kosmetikstudio']
  }
];

// Branchen-Name-Map für Related-Links
const branchenMap = {};
pages.forEach(p => { branchenMap[p.slug] = p.branche; });

function generatePage(page) {
  const statsHtml = page.stats.map(s => `
        <div class="stat reveal">
          <div class="stat-number" data-target="${s.number}" data-suffix="${s.suffix}"${s.decimal ? ' data-decimal="true"' : ''}>0${s.suffix}</div>
          <p class="stat-text">${s.text}</p>
        </div>`).join('');

  const painHtml = page.painPoints.map(p => `
          <div class="pain-card">
            <h4>${p.title}</h4>
            <p>${p.desc}</p>
          </div>`).join('');

  const faqSchemaItems = page.faqs.map(f => `      {
        "@type": "Question",
        "name": "${f.q.replace(/"/g, '\\"')}",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "${f.a.replace(/"/g, '\\"')}"
        }
      }`).join(',\n');

  const faqHtml = page.faqs.map(f => `
        <div class="faq-item reveal">
          <button class="faq-question">
            <span>${f.q}</span>
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer">
            <p>${f.a}</p>
          </div>
        </div>`).join('');

  const relatedHtml = page.relatedBranchen.map(slug => {
    const name = branchenMap[slug] || slug;
    return `<a href="../${slug}/" class="related-link">${name}</a>`;
  }).join('\n            ');

  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${page.title} | fonora.ai \u2014 24/7 erreichbar</title>
  <meta name="description" content="${page.metaDesc}">
  <meta name="keywords" content="${page.keywords}">
  <meta name="author" content="HeadUpHigh GmbH">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://fonora.ai/${page.slug}/">
  <link rel="icon" type="image/png" href="../images/icon.png">
  <link rel="apple-touch-icon" href="../images/favicon.png">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://fonora.ai/${page.slug}/">
  <meta property="og:title" content="${page.title} | fonora.ai">
  <meta property="og:description" content="${page.metaDesc}">
  <meta property="og:image" content="https://fonora.ai/images/nora%20handy.png">
  <meta property="og:locale" content="de_DE">
  <meta property="og:site_name" content="fonora.ai">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${page.title} | fonora.ai">
  <meta name="twitter:description" content="${page.metaDesc}">
  <meta name="twitter:image" content="https://fonora.ai/images/nora%20handy.png">

  <!-- Geo -->
  <meta name="geo.region" content="DE">
  <meta name="geo.placename" content="Deutschland">

  <!-- Schema.org Service -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Nora KI-Telefonassistenz f\u00fcr ${page.branche}",
    "provider": {
      "@type": "Organization",
      "name": "fonora.ai",
      "legalName": "HeadUpHigh GmbH",
      "url": "https://fonora.ai"
    },
    "description": "${page.metaDesc.replace(/"/g, '\\"')}",
    "serviceType": "KI-Telefonassistenz",
    "areaServed": "Deutschland",
    "audience": {
      "@type": "Audience",
      "audienceType": "${page.branche}"
    }
  }
  </script>

  <!-- FAQ Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
${faqSchemaItems}
    ]
  }
  </script>

  <!-- BreadcrumbList Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "fonora.ai", "item": "https://fonora.ai/" },
      { "@type": "ListItem", "position": 2, "name": "${page.title}", "item": "https://fonora.ai/${page.slug}/" }
    ]
  }
  </script>

  <!-- LLM-Optimierung -->
  <meta name="summary" content="fonora.ai bietet Nora, eine KI-Telefonassistentin speziell f\u00fcr ${page.branche} in Deutschland. ${page.metaDesc}">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">

  <!-- GSAP + ScrollTrigger -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" defer></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js" defer></script>

  <!-- Lenis Smooth Scroll -->
  <script src="https://unpkg.com/lenis@1.1.18/dist/lenis.min.js" defer></script>

  <style>
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

    :root {
      --navy: #091440;
      --orange: #e85d04;
      --ivory: #f8f5ee;
      --white: #ffffff;
      --font-headline: 'Plus Jakarta Sans', sans-serif;
      --font-body: 'Inter', sans-serif;
    }

    html.lenis, html.lenis body { height: auto; }
    .lenis.lenis-smooth { scroll-behavior: auto !important; }

    body {
      font-family: var(--font-body);
      color: var(--navy);
      background: var(--navy);
      overflow-x: hidden;
      cursor: none;
    }

    img { max-width: 100%; display: block; }
    a { color: inherit; text-decoration: none; }
    ul { list-style: none; }
    h1, h2, h3, h4, h5, h6 { font-family: var(--font-headline); font-weight: 800; }

    .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

    /* CURSOR */
    .custom-cursor {
      position: fixed; top: 0; left: 0; pointer-events: none; z-index: 99999;
      transform: translate(-50%, -50%); transition: transform 0.3s; opacity: 0; will-change: left, top;
    }
    .custom-cursor.visible { opacity: 1; }
    .custom-cursor.hover { transform: translate(-50%, -50%) scale(1.4); }
    .custom-cursor svg { width: 36px; height: 36px; filter: drop-shadow(0 2px 8px rgba(232, 93, 4, 0.5)); }

    /* NAV */
    .nav {
      position: fixed; top: 0; left: 0; width: 100%; z-index: 1000;
      padding: 20px 0; transition: background 0.4s, backdrop-filter 0.4s, padding 0.4s;
    }
    .nav.scrolled { background: rgba(9, 20, 64, 0.95); backdrop-filter: blur(12px); padding: 12px 0; }
    .nav .container { display: flex; justify-content: space-between; align-items: center; }
    .nav-logo {
      font-family: var(--font-headline); font-weight: 800; font-size: 1.4rem;
      color: var(--white); letter-spacing: -0.02em; display: flex; align-items: center; gap: 10px;
    }
    .nav-logo img { height: 36px; width: auto; background: var(--ivory); padding: 4px 10px; border-radius: 8px; }
    .nav-cta {
      display: inline-block; padding: 12px 28px; background: var(--orange); color: var(--white);
      font-family: var(--font-body); font-weight: 600; font-size: 0.9rem;
      border-radius: 100px; border: none; cursor: none; transition: transform 0.3s, box-shadow 0.3s;
    }
    .nav-cta:hover { box-shadow: 0 8px 30px rgba(232, 93, 4, 0.4); }

    /* BREADCRUMB */
    .breadcrumb {
      padding: 100px 0 0; background: var(--navy);
    }
    .breadcrumb-inner {
      font-size: 0.8rem; color: rgba(255,255,255,0.4);
      font-family: var(--font-body);
    }
    .breadcrumb-inner a { color: rgba(255,255,255,0.5); transition: color 0.3s; }
    .breadcrumb-inner a:hover { color: var(--orange); }
    .breadcrumb-sep { margin: 0 8px; }

    /* MAGNETIC BTN */
    .magnetic-btn { display: inline-block; position: relative; cursor: none; }
    .magnetic-btn .btn-inner {
      display: inline-block; padding: 18px 48px; background: var(--orange); color: var(--white);
      font-family: var(--font-body); font-weight: 600; font-size: 1.1rem;
      border-radius: 100px; border: none; transition: box-shadow 0.4s, transform 0.4s; will-change: transform;
    }
    .magnetic-btn:hover .btn-inner { box-shadow: 0 12px 40px rgba(232, 93, 4, 0.5); }
    .magnetic-btn.navy-btn .btn-inner { background: var(--navy); }
    .magnetic-btn.large .btn-inner { padding: 22px 60px; font-size: 1.2rem; }

    /* SECTIONS */
    .section { padding: 120px 0; }
    .section-dark { background: var(--navy); color: var(--white); }
    .section-ivory { background: var(--ivory); color: var(--navy); }
    .section-orange { background: var(--orange); color: var(--navy); }

    .section-label {
      font-family: var(--font-body); font-weight: 600; font-size: 0.75rem;
      letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 16px; opacity: 0.6;
    }
    .section-headline { font-size: clamp(2rem, 5vw, 3.5rem); line-height: 1.15; margin-bottom: 24px; }

    .reveal { opacity: 0; transform: translateY(40px); will-change: opacity, transform; }

    /* HERO */
    .hero {
      position: relative; min-height: 100vh; display: flex; align-items: center;
      justify-content: center; background: var(--navy); overflow: hidden;
    }
    .hero-canvas { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; }
    .hero-content {
      position: relative; z-index: 2; display: grid; grid-template-columns: 1.2fr 0.8fr;
      align-items: center; gap: 48px; padding: 0 24px; max-width: 1200px; width: 100%;
    }
    .hero-text { text-align: left; }
    .hero-phone { display: flex; justify-content: center; align-items: center; }
    .hero-phone img {
      max-height: 420px; width: auto; filter: drop-shadow(0 20px 60px rgba(0,0,0,0.4));
      animation: phoneFloat 4s ease-in-out infinite;
    }
    @keyframes phoneFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }

    .hero-headline { font-family: var(--font-headline); font-weight: 800; color: var(--white); margin-bottom: 32px; }
    .hero-line { display: block; font-size: clamp(2.8rem, 8vw, 6rem); line-height: 1.1; opacity: 0; transform: translateY(30px); }
    .hero-line.small { font-size: clamp(1.4rem, 3.5vw, 2.4rem); color: var(--orange); margin-top: 8px; }
    .hero-sub {
      font-family: var(--font-body); font-size: clamp(1rem, 2vw, 1.2rem); font-weight: 400;
      color: rgba(255,255,255,0.7); margin-bottom: 48px; max-width: 600px; opacity: 0;
    }
    .hero-cta { opacity: 0; }

    /* STATS */
    .stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 48px; text-align: center; }
    .stat-number {
      font-family: var(--font-headline); font-weight: 800;
      font-size: clamp(3rem, 8vw, 7rem); color: var(--orange); line-height: 1; margin-bottom: 16px;
    }
    .stat-text { font-size: 1rem; font-weight: 600; line-height: 1.5; color: var(--navy); max-width: 280px; margin: 0 auto; }

    /* PAIN POINTS */
    .pain-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; margin-top: 48px; }
    .pain-card {
      padding: 32px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
      border-radius: 16px; transition: transform 0.3s, box-shadow 0.3s;
    }
    .pain-card:hover { transform: translateY(-4px); box-shadow: 0 8px 30px rgba(232,93,4,0.15); }
    .pain-card h4 { font-size: 1.05rem; margin-bottom: 8px; color: var(--orange); }
    .pain-card p { font-size: 0.92rem; color: rgba(255,255,255,0.7); line-height: 1.6; }

    /* FEATURES SPLIT */
    .features-split { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
    .features-image { display: flex; align-items: center; justify-content: center; }
    .features-image img { max-height: 480px; width: auto; object-fit: contain; filter: drop-shadow(0 20px 40px rgba(0,0,0,0.3)); }
    .features-text .section-label { color: var(--orange); opacity: 1; }

    /* DEMO */
    .demo-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
    .demo-image { display: flex; align-items: center; justify-content: center; }
    .demo-image img { max-height: 550px; width: 100%; object-fit: cover; border-radius: 20px; }
    .demo-form h2 { font-size: clamp(2rem, 4vw, 3rem); color: var(--navy); margin-bottom: 12px; }
    .demo-form .demo-sub { font-size: 1.05rem; color: rgba(9, 20, 64, 0.7); margin-bottom: 32px; line-height: 1.5; }
    .form-group { margin-bottom: 16px; }
    .form-group input, .form-group select {
      width: 100%; padding: 14px 18px; border: 2px solid rgba(9, 20, 64, 0.15); border-radius: 10px;
      font-family: var(--font-body); font-size: 0.95rem; background: rgba(255,255,255,0.8);
      color: var(--navy); transition: border-color 0.3s; cursor: none; outline: none;
    }
    .form-group input:focus, .form-group select:focus { border-color: var(--navy); }
    .form-group input::placeholder { color: rgba(9, 20, 64, 0.4); }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    .form-submit { margin-top: 24px; }
    .form-legal { margin-top: 16px; font-size: 0.78rem; color: rgba(9, 20, 64, 0.5); text-align: center; }

    /* TESTIMONIAL */
    .tcard {
      background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.1);
      padding: 2.5rem; position: relative; border-radius: 16px; max-width: 700px; margin: 0 auto;
    }
    .tcard .quote-mark {
      font-family: var(--font-headline); font-size: 80px; line-height: 1;
      color: var(--orange); opacity: .4; position: absolute; top: .5rem; left: 1.5rem; font-weight: 800;
    }
    .tcard .stars { color: var(--orange); font-size: 15px; letter-spacing: 2px; margin-bottom: 1rem; }
    .tcard .quote-text {
      font-size: 1.1rem; font-weight: 300; color: rgba(255,255,255,.9);
      line-height: 1.75; margin-bottom: 1.8rem; padding-top: 1rem; font-style: italic;
    }
    .tcard .author { display: flex; align-items: center; gap: 1rem; }
    .tcard .avatar {
      width: 48px; height: 48px; border-radius: 50%; background: var(--orange);
      display: flex; align-items: center; justify-content: center;
      font-family: var(--font-headline); font-size: 18px; font-weight: 700; color: #fff; flex-shrink: 0;
    }
    .tcard .author-name { font-family: var(--font-headline); font-size: 15px; font-weight: 700; color: #fff; text-transform: uppercase; letter-spacing: .06em; }
    .tcard .author-role { font-size: 13px; color: rgba(255,255,255,.45); margin-top: 2px; }

    /* FAQ */
    .faq-list { max-width: 800px; margin: 0 auto; }
    .faq-item { border-bottom: 1px solid rgba(9, 20, 64, 0.1); }
    .faq-question {
      width: 100%; display: flex; justify-content: space-between; align-items: center;
      padding: 24px 0; background: none; border: none; font-family: var(--font-headline);
      font-weight: 700; font-size: 1.05rem; color: var(--navy); text-align: left; cursor: none; gap: 16px;
    }
    .faq-icon { font-size: 1.5rem; font-weight: 400; color: var(--orange); transition: transform 0.4s; flex-shrink: 0; }
    .faq-item.open .faq-icon { transform: rotate(45deg); }
    .faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.5s ease, padding 0.5s ease; }
    .faq-item.open .faq-answer { max-height: 300px; padding-bottom: 24px; }
    .faq-answer p { font-size: 0.95rem; line-height: 1.7; color: rgba(9, 20, 64, 0.65); }

    /* RELATED */
    .related-links { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; margin-top: 32px; }
    .related-link {
      padding: 12px 28px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15);
      border-radius: 100px; font-family: var(--font-body); font-weight: 600; font-size: 0.9rem;
      color: var(--white); transition: all 0.3s;
    }
    .related-link:hover { background: var(--orange); border-color: var(--orange); }

    /* FINAL CTA */
    .final-cta {
      min-height: 60vh; display: flex; align-items: center; justify-content: center; text-align: center;
    }
    .final-cta h2 { font-size: clamp(2.2rem, 5vw, 4rem); color: var(--white); margin-bottom: 16px; max-width: 700px; }
    .final-cta .final-sub { font-size: 1.1rem; color: rgba(255,255,255,0.6); margin-bottom: 48px; }
    .final-meta { margin-top: 64px; font-size: 0.78rem; color: rgba(255,255,255,0.3); letter-spacing: 0.05em; }

    /* FOOTER */
    .footer { background: var(--navy); border-top: 1px solid rgba(255,255,255,0.08); padding: 48px 0; text-align: center; }
    .footer-logo { font-family: var(--font-headline); font-weight: 800; font-size: 1.2rem; color: var(--white); margin-bottom: 8px; }
    .footer-company { font-size: 0.85rem; color: rgba(255,255,255,0.4); margin-bottom: 24px; }
    .footer-links { display: flex; justify-content: center; gap: 24px; }
    .footer-links a { font-size: 0.8rem; color: rgba(255,255,255,0.4); transition: color 0.3s; }
    .footer-links a:hover { color: var(--white); }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .stats-grid { grid-template-columns: 1fr; gap: 48px; }
      .features-split { grid-template-columns: 1fr; }
      .features-image { order: -1; }
      .features-image img { max-height: 300px; }
      .pain-grid { grid-template-columns: 1fr; }
      .demo-grid { grid-template-columns: 1fr; gap: 40px; }
      .demo-image img { max-height: 350px; }
      .hero-content { grid-template-columns: 1fr; text-align: center; }
      .hero-text { text-align: center; }
      .hero-phone img { max-height: 280px; }
      .section { padding: 80px 0; }
      .form-row { grid-template-columns: 1fr; }
      .custom-cursor { display: none; }
      body { cursor: auto; }
      a, button, input, select { cursor: auto; }
    }

    @media (max-width: 480px) {
      .hero-line { font-size: 2.4rem; }
      .hero-line.small { font-size: 1.2rem; }
      .magnetic-btn .btn-inner { padding: 16px 32px; font-size: 1rem; }
      .magnetic-btn.large .btn-inner { padding: 18px 40px; font-size: 1rem; }
    }
  </style>
</head>
<body>

  <!-- CURSOR -->
  <div class="custom-cursor" id="cursor">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.01-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.07 21 3 13.93 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.1.31.03.66-.25.94l-2.2 2.28z" fill="#e85d04"/>
    </svg>
  </div>

  <!-- NAV -->
  <nav class="nav" id="nav">
    <div class="container">
      <a href="../" class="nav-logo">
        <img src="../images/1-removebg-preview.png" alt="fonora.ai \u2013 KI-Telefonassistenz f\u00fcr ${page.branche}">
        <span>fonora.ai</span>
      </a>
      <a href="https://cal.eu/headuphigh/fonora.ai-erstgeprach" target="_blank" rel="noopener" class="nav-cta magnetic-nav">Kennenlerncall buchen &rarr;</a>
    </div>
  </nav>

  <!-- BREADCRUMB -->
  <div class="breadcrumb">
    <div class="container">
      <p class="breadcrumb-inner">
        <a href="../">fonora.ai</a>
        <span class="breadcrumb-sep">/</span>
        <span>${page.title}</span>
      </p>
    </div>
  </div>

  <!-- HERO -->
  <section class="hero" id="hero" style="min-height: 90vh;">
    <canvas class="hero-canvas" id="heroCanvas"></canvas>
    <div class="hero-content">
      <div class="hero-text">
        <h1 class="hero-headline">
          <span class="hero-line">${page.heroLine1}</span>
          <span class="hero-line">${page.heroLine2}</span>
          <span class="hero-line small">${page.heroSmall}</span>
        </h1>
        <p class="hero-sub">${page.heroSub}</p>
        <div class="hero-cta">
          <a href="https://cal.eu/headuphigh/fonora.ai-erstgeprach" target="_blank" rel="noopener" class="magnetic-btn large">
            <span class="btn-inner">Kennenlerncall buchen &rarr;</span>
          </a>
        </div>
      </div>
      <div class="hero-phone">
        <img src="../images/${branchenBilder[page.slug] || 'nora handy.png'}" alt="KI Telefonassistentin Nora f\u00fcr ${page.branche} \u2013 24/7 Anrufannahme und Terminbuchung">
      </div>
    </div>
  </section>

  <!-- STATS -->
  <section class="section section-ivory" id="stats">
    <div class="container">
      <div class="stats-grid">
${statsHtml}
      </div>
    </div>
  </section>

  <!-- PAIN POINTS -->
  <section class="section section-dark" id="pain">
    <div class="container">
      <div class="reveal" style="text-align: center; margin-bottom: 16px;">
        <p class="section-label" style="color: var(--orange); opacity: 1;">Das Problem</p>
        <h2 class="section-headline" style="color: var(--white);">Warum ${page.branche}<br><span style="color:var(--orange);">Anrufe verlieren</span></h2>
      </div>
      <div class="pain-grid">
${painHtml}
      </div>
    </div>
  </section>

  <!-- WAS NORA KANN -->
  <section class="section section-ivory" id="features">
    <div class="container">
      <div class="features-split reveal">
        <div class="features-text">
          <p class="section-label">Die L\u00f6sung</p>
          <h2 class="section-headline">Nora f\u00fcr<br><span style="color:var(--orange);">${page.branche}</span></h2>
          <p style="color: rgba(9,20,64,0.7); font-size: 1.05rem; line-height: 1.7; margin-bottom: 24px;">${page.featureFraming}</p>
          <ul style="color: rgba(9,20,64,0.8); font-size: 0.95rem; line-height: 2.2;">
            <li style="padding-left: 20px; position: relative;"><span style="position: absolute; left: 0; color: var(--orange); font-weight: 700;">\u2713</span> Anrufe 24/7 annehmen</li>
            <li style="padding-left: 20px; position: relative;"><span style="position: absolute; left: 0; color: var(--orange); font-weight: 700;">\u2713</span> Termine direkt buchen</li>
            <li style="padding-left: 20px; position: relative;"><span style="position: absolute; left: 0; color: var(--orange); font-weight: 700;">\u2713</span> Anfragen qualifizieren</li>
            <li style="padding-left: 20px; position: relative;"><span style="position: absolute; left: 0; color: var(--orange); font-weight: 700;">\u2713</span> Notf\u00e4lle priorisieren</li>
            <li style="padding-left: 20px; position: relative;"><span style="position: absolute; left: 0; color: var(--orange); font-weight: 700;">\u2713</span> DSGVO-konform</li>
          </ul>
        </div>
        <div class="features-image">
          <img src="../images/telefon nora kann.webp" alt="KI Telefonassistenz f\u00fcr ${page.branche} \u2013 Anrufe annehmen, Termine buchen, Anfragen qualifizieren">
        </div>
      </div>
    </div>
  </section>

  <!-- DEMO FORM -->
  <section class="section section-orange" id="demo">
    <div class="container">
      <div class="demo-grid">
        <div class="demo-image reveal">
          <img src="../images/Nora 4.1.png" alt="Nora KI-Telefonassistentin Demo anrufen \u2013 kostenlos testen f\u00fcr ${page.branche}">
        </div>
        <div class="demo-form reveal">
          <div id="demoFormArea">
            <h2>Nora ruft dich an.</h2>
            <p class="demo-sub">Gib deine Nummer ein \u2014 in unter 60 Sekunden erlebst du Nora live.</p>
            <form id="demoForm" onsubmit="return false;">
              <div class="form-group">
                <select id="demo-anrede">
                  <option value="">Anrede w\u00e4hlen *</option>
                  <option value="Frau">Frau</option>
                  <option value="Herr">Herr</option>
                  <option value="Divers">Divers</option>
                </select>
              </div>
              <div class="form-row">
                <div class="form-group"><input type="text" id="demo-vorname" placeholder="Vorname *"></div>
                <div class="form-group"><input type="text" id="demo-nachname" placeholder="Nachname *"></div>
              </div>
              <div class="form-group"><input type="text" id="demo-firma" placeholder="Unternehmen *"></div>
              <div class="form-group"><input type="tel" id="demo-telefon" placeholder="Telefonnummer *"></div>
              <div class="form-group">
                <select id="demo-anrufe">
                  <option value="">Anrufe pro Tag (ca.) *</option>
                  <option value="1-20">1 \u2013 20</option>
                  <option value="20-100">20 \u2013 100</option>
                  <option value="ab100">Ab 100</option>
                </select>
              </div>
              <div class="form-submit">
                <button type="button" onclick="submitDemoForm()" style="width:100%;padding:18px 48px;background:var(--navy);color:var(--white);font-family:var(--font-body);font-weight:600;font-size:1.1rem;border-radius:100px;border:none;cursor:none;transition:box-shadow 0.4s;">&#9742; NORA, RUF MICH AN &rarr;</button>
              </div>
              <p class="form-legal">DSGVO-konform &middot; Keine Weitergabe &middot; Kein Spam</p>
            </form>
          </div>
          <div id="demoSuccessArea" style="display:none;text-align:center;padding:2rem 0;">
            <div style="width:64px;height:64px;border-radius:50%;background:rgba(9,20,64,0.15);border:2px solid var(--navy);display:flex;align-items:center;justify-content:center;margin:0 auto 1.2rem;">
              <svg viewBox="0 0 30 30" fill="none" stroke="var(--navy)" stroke-width="2.5" stroke-linecap="round" style="width:28px;height:28px;"><path d="M5 15l7 7L25 8"/></svg>
            </div>
            <h3 style="font-family:var(--font-headline);font-size:1.5rem;color:var(--navy);margin-bottom:0.5rem;">Gleich ruft Nora dich an!</h3>
            <p style="color:rgba(9,20,64,0.7);line-height:1.7;margin-bottom:1.5rem;">Du bekommst in wenigen Sekunden einen Anruf.<br>Einfach abnehmen \u2014 Nora \u00fcbernimmt.</p>
            <div style="background:rgba(9,20,64,0.08);padding:1.2rem 1.5rem;border-radius:12px;">
              <p style="font-size:0.75rem;color:rgba(9,20,64,0.5);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.5rem;">Gerade kein guter Moment?</p>
              <p style="color:var(--navy);line-height:1.6;">Ruf uns einfach selbst an:<br>
                <a href="tel:+493075675746" style="font-family:var(--font-headline);font-size:1.3rem;font-weight:800;color:var(--navy);text-decoration:none;">+49 30 75675746</a>
              </p>
            </div>
            <p class="form-legal" style="margin-top:1rem;">DSGVO-konform &middot; Keine Weitergabe &middot; Kein Spam</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- TESTIMONIAL -->
  <section class="section section-dark" id="testimonial">
    <div class="container">
      <div class="reveal" style="text-align: center; margin-bottom: 2.5rem;">
        <p class="section-label" style="color: var(--orange); opacity: 1;">Was Kunden sagen</p>
        <h2 class="section-headline" style="color: var(--white);">Echte Ergebnisse.<br>Echte Stimmen.</h2>
      </div>
      <div class="reveal">
        <div class="tcard">
          <span class="quote-mark">&ldquo;</span>
          <div class="stars">&starf;&starf;&starf;&starf;&starf;</div>
          <p class="quote-text">${page.testimonial.text}</p>
          <div class="author">
            <div class="avatar">${page.testimonial.initials}</div>
            <div>
              <p class="author-name">${page.testimonial.name}</p>
              <p class="author-role">${page.testimonial.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="section section-ivory" id="faq">
    <div class="container">
      <div class="reveal" style="text-align: center; margin-bottom: 64px;">
        <p class="section-label">H\u00e4ufige Fragen</p>
        <h2 class="section-headline">Fragen von<br><span style="color:var(--orange);">${page.branche}</span></h2>
      </div>
      <div class="faq-list">
${faqHtml}
      </div>
    </div>
  </section>

  <!-- RELATED -->
  <section class="section section-dark" id="related">
    <div class="container" style="text-align: center;">
      <p class="section-label" style="color: var(--orange); opacity: 1;">Weitere Branchen</p>
      <h2 class="section-headline" style="color: var(--white); margin-bottom: 32px;">Nora f\u00fcr<br><span style="color:var(--orange);">andere Branchen</span></h2>
      <div class="related-links">
            ${relatedHtml}
      </div>
      <div style="margin-top: 24px;">
        <a href="../" class="related-link" style="opacity: 0.6;">\u2190 Zur\u00fcck zu fonora.ai</a>
      </div>
    </div>
  </section>

  <!-- FINAL CTA -->
  <section class="section section-dark final-cta" id="cta">
    <div class="container" style="display: flex; flex-direction: column; align-items: center;">
      <h2 class="reveal">Bereit, keinen Anruf mehr zu verpassen?</h2>
      <p class="final-sub reveal">Kennenlerncall \u2014 kostenlos, 30 Minuten, unverbindlich.</p>
      <div class="reveal">
        <a href="https://cal.eu/headuphigh/fonora.ai-erstgeprach" target="_blank" rel="noopener" class="magnetic-btn large">
          <span class="btn-inner">JETZT KENNENLERNCALL BUCHEN &rarr;</span>
        </a>
      </div>
      <p class="final-meta reveal">fonora.ai &middot; Managed Service &middot; DSGVO-konform &middot; Made in Germany</p>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="container">
      <p class="footer-logo">fonora.ai</p>
      <p class="footer-company">fonora.ai ist ein Produkt der HeadUpHigh GmbH</p>
      <div class="footer-links">
        <a href="../datenschutz.html">Datenschutz</a>
        <a href="../impressum.html">Impressum</a>
      </div>
    </div>
  </footer>

  <script>
    document.addEventListener('DOMContentLoaded', function () {
      /* CURSOR */
      var cursor = document.getElementById('cursor');
      var mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;
      document.addEventListener('mousemove', function (e) {
        mouseX = e.clientX; mouseY = e.clientY;
        if (!cursor.classList.contains('visible')) cursor.classList.add('visible');
      });
      document.addEventListener('mouseleave', function () { cursor.classList.remove('visible'); });
      document.querySelectorAll('a, button, input, select, .magnetic-btn').forEach(function (el) {
        el.addEventListener('mouseenter', function () { cursor.classList.add('hover'); });
        el.addEventListener('mouseleave', function () { cursor.classList.remove('hover'); });
      });

      /* LENIS */
      var lenis = null;
      if (window.Lenis) {
        lenis = new window.Lenis({ duration: 1.2, easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); }, touchMultiplier: 2 });
      }

      /* HERO CANVAS */
      var canvas = document.getElementById('heroCanvas');
      var ctx = canvas.getContext('2d');
      var waveTime = 0;
      var heroVisible = true;

      function resizeCanvas() {
        var dpr = Math.min(window.devicePixelRatio || 1, 2);
        var rect = canvas.parentElement.getBoundingClientRect();
        canvas.width = rect.width * dpr; canvas.height = rect.height * dpr;
        ctx.scale(dpr, dpr);
        canvas.style.width = rect.width + 'px'; canvas.style.height = rect.height + 'px';
      }
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      var heroObs = new IntersectionObserver(function (e) { heroVisible = e[0].isIntersecting; }, { threshold: 0 });
      heroObs.observe(document.getElementById('hero'));

      function drawWave() {
        if (!heroVisible) return;
        var w = parseInt(canvas.style.width), h = parseInt(canvas.style.height);
        ctx.clearRect(0, 0, w, h);
        waveTime += 0.015;
        var waves = [
          { amplitude: 80, frequency: 0.006, speed: 0.8, opacity: 0.25, width: 2 },
          { amplitude: 55, frequency: 0.01, speed: 1.2, opacity: 0.2, width: 1.5 },
          { amplitude: 35, frequency: 0.015, speed: 0.6, opacity: 0.35, width: 2.5 },
          { amplitude: 20, frequency: 0.022, speed: 1.5, opacity: 0.3, width: 2 }
        ];
        for (var i = 0; i < waves.length; i++) {
          var wave = waves[i];
          ctx.beginPath();
          ctx.strokeStyle = 'rgba(232, 93, 4, ' + wave.opacity + ')';
          ctx.lineWidth = wave.width;
          for (var x = 0; x < w; x += 2) {
            var y = h / 2 + Math.sin(x * wave.frequency + waveTime * wave.speed) * wave.amplitude + Math.sin(x * wave.frequency * 0.5 + waveTime * wave.speed * 0.7) * wave.amplitude * 0.5;
            if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
      }

      /* RAF LOOP */
      function mainLoop(time) {
        cursorX += (mouseX - cursorX) * 0.15; cursorY += (mouseY - cursorY) * 0.15;
        cursor.style.left = cursorX + 'px'; cursor.style.top = cursorY + 'px';
        if (lenis) lenis.raf(time);
        drawWave();
        requestAnimationFrame(mainLoop);
      }
      requestAnimationFrame(mainLoop);

      /* GSAP */
      if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        if (lenis) lenis.on('scroll', ScrollTrigger.update);

        gsap.to('.hero-line', { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out', delay: 0.3 });
        gsap.to('.hero-sub', { opacity: 1, duration: 0.8, delay: 1, ease: 'power3.out' });
        gsap.to('.hero-cta', { opacity: 1, duration: 0.8, delay: 1.3, ease: 'power3.out' });

        ScrollTrigger.batch('.reveal', {
          onEnter: function (el) { gsap.to(el, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1 }); },
          start: 'top 85%', once: true
        });
      }

      /* STAT COUNTER */
      var statNumbers = document.querySelectorAll('.stat-number');
      var statsObserved = false;
      var statsObserver = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting && !statsObserved) {
          statsObserved = true;
          statNumbers.forEach(function (el) {
            var target = parseFloat(el.dataset.target);
            var suffix = el.dataset.suffix || '';
            var isDecimal = el.dataset.decimal === 'true';
            var start = null;
            function anim(ts) {
              if (!start) start = ts;
              var p = Math.min((ts - start) / 2000, 1);
              var e = 1 - Math.pow(1 - p, 3);
              el.textContent = (isDecimal ? (e * target).toFixed(1) : Math.round(e * target)) + suffix;
              if (p < 1) requestAnimationFrame(anim);
            }
            requestAnimationFrame(anim);
          });
        }
      }, { threshold: 0.3 });
      var ss = document.getElementById('stats');
      if (ss) statsObserver.observe(ss);

      /* NAV SCROLL */
      var nav = document.getElementById('nav');
      window.addEventListener('scroll', function () { nav.classList.toggle('scrolled', window.scrollY > 80); }, { passive: true });

      /* FAQ */
      document.querySelectorAll('.faq-question').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var item = this.parentElement;
          var open = item.classList.contains('open');
          document.querySelectorAll('.faq-item').forEach(function (el) { el.classList.remove('open'); });
          if (!open) item.classList.add('open');
        });
      });

      /* MAGNETIC BUTTONS */
      document.querySelectorAll('.magnetic-btn').forEach(function (btn) {
        btn.addEventListener('mousemove', function (e) {
          var r = btn.getBoundingClientRect();
          var inner = btn.querySelector('.btn-inner');
          if (inner) inner.style.transform = 'translate(' + ((e.clientX - r.left - r.width / 2) * 0.15) + 'px, ' + ((e.clientY - r.top - r.height / 2) * 0.15) + 'px)';
        });
        btn.addEventListener('mouseleave', function () {
          var inner = btn.querySelector('.btn-inner');
          if (inner) { inner.style.transition = 'transform 0.4s ease'; inner.style.transform = 'translate(0, 0)'; setTimeout(function () { inner.style.transition = 'box-shadow 0.4s, transform 0.4s'; }, 400); }
        });
      });

      /* DEMO FORM */
      window.submitDemoForm = function () {
        var fields = [
          { id: 'demo-anrede', msg: 'Bitte w\u00e4hlen' },
          { id: 'demo-vorname', msg: 'Pflichtfeld' },
          { id: 'demo-nachname', msg: 'Pflichtfeld' },
          { id: 'demo-firma', msg: 'Pflichtfeld' },
          { id: 'demo-telefon', msg: 'Bitte Telefonnummer eingeben', min: 6 },
          { id: 'demo-anrufe', msg: 'Bitte w\u00e4hlen' }
        ];
        var ok = true;
        fields.forEach(function (f) {
          var el = document.getElementById(f.id);
          var v = el.value.trim();
          var valid = f.min ? v.length >= f.min : v !== '';
          el.style.borderColor = valid ? 'rgba(9,20,64,0.15)' : '#c00';
          if (!valid) ok = false;
        });
        if (!ok) return;
        var data = {
          anrede: document.getElementById('demo-anrede').value,
          vorname: document.getElementById('demo-vorname').value.trim(),
          nachname: document.getElementById('demo-nachname').value.trim(),
          firma: document.getElementById('demo-firma').value.trim(),
          telefon: document.getElementById('demo-telefon').value.trim(),
          anrufe: document.getElementById('demo-anrufe').value,
          branche: '${page.branche}'
        };
        fetch('https://ocrey.app.n8n.cloud/webhook/fonora-demo', {
          method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data)
        }).catch(function () {});
        document.getElementById('demoFormArea').style.display = 'none';
        document.getElementById('demoSuccessArea').style.display = 'block';
      };
    });
  </script>
</body>
</html>`;
}

// Generate all pages
const outputDir = path.join(__dirname);

pages.forEach(page => {
  const dir = path.join(outputDir, page.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const html = generatePage(page);
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
  console.log(`Created: ${page.slug}/index.html`);
});

// Generate updated sitemap
const sitemapEntries = pages.map(p =>
  `  <url>\n    <loc>https://fonora.ai/${p.slug}/</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>`
).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemapg.org/schemas/sitemap/0.9">
  <url>
    <loc>https://fonora.ai/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://fonora.ai/datenschutz.html</loc>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://fonora.ai/impressum.html</loc>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
${sitemapEntries}
</urlset>`;

fs.writeFileSync(path.join(outputDir, 'sitemap.xml'), sitemap, 'utf8');
console.log('Updated: sitemap.xml');

console.log(`\\nDone! Generated ${pages.length} landing pages.`);
