// Leistungsseiten unter /leistungen/<slug>, gruppiert in Säulen.
// status: 'geliefert' = belegt · 'teilweise' = Teile geliefert oder am eigenen Haus erprobt ·
// 'ausbaustufe' = noch nie geliefert. Für Ausbaustufen gilt die Integritätsregel in CLAUDE.md:
// Vorgehen, Ergebnis und Preis ja, Erfahrungsangaben, Referenzen und Kennzahlen nein.
// Übersicht und Freigabestand: docs/ausbaustufen.md

export type Status = 'geliefert' | 'teilweise' | 'ausbaustufe';

export interface Saeule {
  key: string;
  ey: string;
  title: string;
  intro: string;
}

// Buchbare Termine. Ohne zahlungslink öffnet "Jetzt buchen" eine vorbereitete Buchungs-Mail
// (Zahlung per Rechnung). Mit zahlungslink (HubSpot-Zahlungslink, Stripe) führt der Knopf direkt dorthin.
// Vergangene Termine blendet die Seite automatisch aus.
export interface Termin {
  datum: string; // ISO, z. B. 2026-11-10
  von: string;
  bis: string;
  zahlungslink?: string;
}

export interface Leistung {
  slug: string;
  saeule: string;
  nav: string;
  kurz: string;
  title: string;
  lede: string;
  kontext: string[];
  fuerWen: string[];
  ablauf: { t: string; d: string }[];
  ergebnis: string[];
  preis: { wert: string; einheit?: string; hinweis?: string };
  faq: { q: string; a: string }[];
  related: string[];
  extern?: { href: string; label: string };
  termine?: Termin[];
  terminOrt?: string;
  terminTitel?: string; // Name in der Buchungs-Mail, z. B. „HubSpot-Gruppen-Onboarding“
  seoTitle: string;
  seoDesc: string;
  status: Status;
}

export const saeulen: Saeule[] = [
  {
    key: 'hubspot',
    ey: 'HubSpot',
    title: 'HubSpot',
    intro: 'Vom ersten Datenmodell bis zur laufenden Betreuung Ihres Portals.',
  },
  {
    key: 'daten',
    ey: 'Daten und Integration',
    title: 'Daten und Integration',
    intro: 'HubSpot im Zusammenspiel mit Ihren übrigen Systemen, auch mit Microsoft 365.',
  },
  {
    key: 'microsoft',
    ey: 'Microsoft 365 und IT-Betrieb',
    title: 'Microsoft 365 und IT-Betrieb',
    intro: 'Die IT hinter dem CRM: Microsoft 365, Geräte und Sicherheit aus derselben Hand.',
  },
  {
    key: 'ki',
    ey: 'KI',
    title: 'KI',
    intro: 'KI dort einsetzen, wo Ihre Daten schon liegen: in HubSpot und Microsoft 365.',
  },
];

export const leistungen: Leistung[] = [
  // ---------------------------------------------------------------- HubSpot
  {
    slug: 'hubspot-einfuehrung',
    saeule: 'hubspot',
    nav: 'Einführung und Migration',
    kurz: 'HubSpot neu aufsetzen und Daten aus Salesforce, Pipedrive oder Excel übernehmen.',
    title: 'HubSpot einführen und Ihre Daten sauber übernehmen.',
    lede: 'Wir setzen HubSpot so auf, dass es Ihre Vertriebs-, Marketing- und Serviceprozesse abbildet, und übernehmen Ihre Daten aus Salesforce, Pipedrive, Excel oder einem anderen Altsystem.',
    kontext: [
      'Die meisten Probleme in einem CRM entstehen in den ersten Wochen. Felder, die niemand pflegt, Pipelines, die nicht zum Verkauf passen, Dubletten aus der Migration.',
      'Deshalb beginnt jede Einführung bei uns mit dem Datenmodell und den Prozessen. Konfiguriert wird erst, wenn klar ist, was das System abbilden soll.',
    ],
    fuerWen: [
      'Unternehmen, die HubSpot neu einführen',
      'Teams, die aus Salesforce, Pipedrive oder Excel wechseln',
      'Häuser mit gewachsener Systemlandschaft, die HubSpot anbinden müssen',
    ],
    ablauf: [
      { t: 'Discovery', d: 'Prozesse, Daten, Beteiligte und Ziele aufnehmen.' },
      { t: 'Konzept', d: 'Datenmodell, Pipelines und Module festlegen.' },
      { t: 'Build', d: 'Setup, Datenübernahme und Integrationen umsetzen.' },
      { t: 'Enablement', d: 'Schulung für das Team und Coaching für den Admin.' },
      { t: 'Go-Live', d: 'Produktivstart mit Begleitung in den ersten Wochen.' },
    ],
    ergebnis: [
      'Ein dokumentiertes Datenmodell mit Objekten, Properties und Pipelines',
      'Übernommene und bereinigte Altdaten',
      'Geschulte Anwender und ein Admin, der das System selbst pflegen kann',
    ],
    preis: { wert: 'ab 4.900 €', einheit: 'einmalig', hinweis: 'Mit Datenübernahme aus einem Altsystem ab 9.500 €. Die HubSpot-Lizenzen zahlen Sie direkt an HubSpot.' },
    faq: [
      { q: 'Wie lange dauert eine Einführung?', a: 'Ein typischer Einstieg ist in rund acht Wochen produktiv. Mit Datenübernahme oder mehreren Hubs kann es länger dauern. Den Zeitplan legen wir im Konzept verbindlich fest.' },
      { q: 'Aus welchen Systemen übernehmen Sie Daten?', a: 'Häufig aus Salesforce, Pipedrive und Excel. Andere Quellen prüfen wir im Erstgespräch. Entscheidend ist, in welcher Form sich die Daten exportieren lassen.' },
      { q: 'Was passiert nach dem Go-Live?', a: 'Sie führen HubSpot selbst weiter oder beauftragen uns mit der Betreuung im HubSpot Managed Service.' },
    ],
    related: ['hubspot-audit', 'hubspot-managed-service', 'schnittstellen'],
    seoTitle: 'HubSpot-Einführung und Migration | CogniCore Köln',
    seoDesc: 'HubSpot neu einführen und Daten aus Salesforce, Pipedrive oder Excel übernehmen. Datenmodell, Setup, Schulung und Go-Live, ab 4.900 €.',
    status: 'geliefert',
  },
  {
    slug: 'hubspot-audit',
    saeule: 'hubspot',
    nav: 'HubSpot-Audit',
    kurz: 'Ihr bestehendes Portal prüfen lassen und einen priorisierten Maßnahmenplan erhalten.',
    title: 'HubSpot-Audit: wissen, wo Ihr Portal steht.',
    lede: 'Wir prüfen Ihr bestehendes HubSpot-Portal auf Datenqualität, Struktur, Automatisierungen und Lizenzen. Sie bekommen einen priorisierten Maßnahmenplan mit Aufwand je Punkt.',
    kontext: [
      'Portale wachsen über Jahre. Workflows laufen ins Leere, Properties werden doppelt angelegt, Lizenzen passen nicht mehr zur Nutzung.',
      'Ein Audit macht sichtbar, was davon Ihr Team Zeit kostet und was Sie Geld kostet. Danach entscheiden Sie, was Sie selbst angehen und wobei Sie Unterstützung wollen.',
    ],
    fuerWen: [
      'Unternehmen, die HubSpot seit einigen Jahren nutzen',
      'Teams nach einem Agentur- oder Personalwechsel',
      'Geschäftsführungen vor einer Lizenzverlängerung',
    ],
    ablauf: [
      { t: 'Zugang und Ziele', d: 'Lesezugriff auf das Portal und ein Gespräch mit den Hauptnutzern.' },
      { t: 'Analyse', d: 'Datenmodell, Datenqualität, Workflows, Berichte, Berechtigungen und Lizenzen.' },
      { t: 'Bericht', d: 'Befunde mit Priorität und geschätztem Aufwand.' },
      { t: 'Besprechung', d: 'Ergebnis gemeinsam durchgehen und nächste Schritte festlegen.' },
    ],
    ergebnis: [
      'Schriftlicher Bericht mit priorisierten Befunden',
      'Maßnahmenplan mit Aufwand je Punkt',
      'Empfehlung zu Lizenzen und Hubs',
    ],
    preis: { wert: 'ab 1.900 €', einheit: 'Festpreis', hinweis: 'Der Umfang richtet sich nach Portalgröße und Zahl der Hubs.' },
    faq: [
      { q: 'Brauchen Sie Schreibrechte im Portal?', a: 'Für das Audit reicht ein Lesezugriff. Änderungen setzen wir erst um, wenn Sie den Maßnahmenplan freigegeben haben.' },
      { q: 'Setzen Sie die Maßnahmen auch um?', a: 'Ja, auf Wunsch als eigenes Projekt oder im Rahmen des HubSpot Managed Service.' },
    ],
    related: ['hubspot-managed-service', 'datenbereinigung', 'ki-audit'],
    seoTitle: 'HubSpot-Audit zum Festpreis | CogniCore Köln',
    seoDesc: 'HubSpot-Portal prüfen lassen: Datenqualität, Workflows, Berichte, Berechtigungen und Lizenzen. Priorisierter Maßnahmenplan, Festpreis ab 1.900 €.',
    status: 'geliefert',
  },
  {
    slug: 'hubspot-entwicklung',
    saeule: 'hubspot',
    nav: 'Individualentwicklung',
    kurz: 'Eigene Objekte, CRM-Karten, Workflow-Aktionen und Apps, wo der Standard nicht reicht.',
    title: 'HubSpot erweitern, wo der Standard endet.',
    lede: 'Eigene Objekte, CRM-Karten, Workflow-Aktionen und Apps: Wir entwickeln HubSpot-Erweiterungen, wenn Ihr Prozess mehr braucht als die Standardfunktionen.',
    kontext: [
      'Unsere eigene App steht öffentlich im HubSpot Marketplace. Für Kunden haben wir unter anderem einen Saleskonfigurator gebaut, der Angebote für technische Anlagen als Deal und Angebot nach HubSpot schreibt, und ein Stammdatenportal, dessen Rücklauf direkt in HubSpot landet.',
      'Wir bauen mit den offiziellen HubSpot-Schnittstellen und dokumentieren jede Erweiterung so, dass Ihr Team sie versteht.',
    ],
    fuerWen: [
      'Prozesse, die sich mit Standard-Properties nicht abbilden lassen',
      'Teams, die Daten aus anderen Systemen direkt im CRM sehen müssen',
      'Unternehmen, die wiederkehrende Handarbeit in HubSpot automatisieren wollen',
    ],
    ablauf: [
      { t: 'Anforderung', d: 'Prozess und Daten aufnehmen, Machbarkeit klären.' },
      { t: 'Prototyp', d: 'Eine lauffähige erste Version in einer Testumgebung.' },
      { t: 'Umsetzung', d: 'Ausbau, Tests und Dokumentation.' },
      { t: 'Betrieb', d: 'Übergabe an Ihr Team oder Wartung durch uns.' },
    ],
    ergebnis: [
      'Lauffähige Erweiterung in Ihrem Portal',
      'Dokumentation für Ihr Team',
      'Auf Wunsch Wartung und Weiterentwicklung',
    ],
    preis: { wert: 'Festpreis', einheit: 'nach der Anforderungsaufnahme' },
    faq: [
      { q: 'Welche Technik setzen Sie ein?', a: 'Die HubSpot-APIs, Custom Objects, eigenen Code in Workflows und UI-Erweiterungen im CRM. Wo es sinnvoll ist, betreiben wir einen eigenen Dienst zwischen HubSpot und Ihren Systemen.' },
      { q: 'Gehört der Code uns?', a: 'Die Nutzungsrechte regeln wir im Angebot. Für Kundenentwicklungen ist die Übergabe des Quellcodes vorgesehen.' },
    ],
    related: ['schnittstellen', 'microsoft-integration', 'hubspot-managed-service'],
    seoTitle: 'HubSpot-Individualentwicklung: Custom Objects, Apps, Custom Code | CogniCore',
    seoDesc: 'HubSpot erweitern mit Custom Objects, CRM-Karten, Workflow-Aktionen und eigenen Apps. Von der Anforderung bis zum Betrieb.',
    status: 'geliefert',
  },
  {
    slug: 'hubspot-managed-service',
    saeule: 'hubspot',
    nav: 'HubSpot Managed Service',
    kurz: 'Feste Betreuung Ihres Portals mit monatlichem Stundenkontingent und Quartalsreview.',
    title: 'Ihr HubSpot in fester Betreuung.',
    lede: 'Wir übernehmen Anwenderfragen, Anpassungen und die laufende Weiterentwicklung Ihres Portals, mit festen Ansprechpartnern und einem monatlichen Stundenkontingent.',
    kontext: [
      'Viele Unternehmen haben niemanden, der HubSpot hauptberuflich betreut. Fragen bleiben liegen, und kleine Änderungen werden zu Projekten.',
      'Im Managed Service haben Sie für beides einen festen Weg. Anfragen gehen als Ticket ein, wir arbeiten sie aus dem Kontingent ab, und einmal im Quartal besprechen wir mit Ihnen, wohin sich das Portal entwickeln soll.',
    ],
    fuerWen: [
      'Unternehmen ohne eigenen HubSpot-Admin',
      'Teams, deren Admin eine Vertretung braucht',
      'Portale nach der Einführung',
    ],
    ablauf: [
      { t: 'Start', d: 'Portal kennenlernen, Zugänge und Ansprechpartner festlegen.' },
      { t: 'Laufender Betrieb', d: 'Anfragen per Ticket, Umsetzung aus dem Kontingent.' },
      { t: 'Quartalsreview', d: 'Auswertung und Planung mit der Entscheiderebene.' },
    ],
    ergebnis: [
      'Antworten auf Anwenderfragen und kleine Konfigurationsänderungen',
      'Pflege von Workflows, Berichten und Berechtigungen',
      'Quartalsreview mit Empfehlungen',
      'Größere Vorhaben wie Migrationen oder neue Schnittstellen bekommen ein eigenes Angebot',
    ],
    preis: { wert: 'ab 850 €', einheit: 'im Monat', hinweis: 'Advanced mit 5 Stunden im Monat. Excellence ab 2.900 € im Monat mit 16 Stunden und SLA.' },
    faq: [
      { q: 'Was zählt zum Kontingent?', a: 'Alles, was wir im Portal für Sie tun: Fragen beantworten, Änderungen umsetzen, Berichte bauen. Vorhaben, die das Kontingent übersteigen, bekommen ein eigenes Angebot.' },
      { q: 'Wer ist unser Ansprechpartner?', a: 'Sie haben feste Ansprechpartner im Team, die Ihr Portal kennen.' },
    ],
    related: ['hubspot-audit', 'hubspot-einfuehrung', 'hubspot-ki-agenten'],
    seoTitle: 'HubSpot Managed Service: feste Betreuung ab 850 € im Monat | CogniCore',
    seoDesc: 'HubSpot in fester Betreuung: Anwenderfragen, Anpassungen und Weiterentwicklung aus einem monatlichen Kontingent, mit Quartalsreview. Ab 850 € im Monat.',
    status: 'teilweise',
  },
  {
    slug: 'hubspot-gruppen-onboarding',
    saeule: 'hubspot',
    nav: 'Gruppen-Onboarding',
    kurz: 'HubSpot-Grundlagen im Live-Webinar für kleine Teams, zum Festpreis.',
    title: 'HubSpot-Grundlagen im Live-Webinar.',
    lede: 'Für Teams, die HubSpot gerade gekauft haben und schnell arbeitsfähig sein wollen: 90 Minuten live über Microsoft Teams mit einem HubSpot-Berater, mit Zeit für Ihre Fragen.',
    kontext: [
      'Nicht jede Einführung braucht ein Projekt. Wenn Sie wenige Nutzer haben und HubSpot weitgehend im Standard einsetzen, reicht oft ein strukturierter Einstieg.',
      'Im Webinar zeigen wir die Abläufe, die Ihr Team ab dem ersten Tag braucht, und beantworten Ihre Fragen live.',
    ],
    fuerWen: [
      'Unternehmen mit wenigen HubSpot-Nutzern',
      'Teams im Sales Hub oder Service Hub',
      'Neue Mitarbeitende in bestehenden Portalen',
    ],
    ablauf: [
      { t: 'Termin wählen', d: 'Einmal im Monat dienstags von 14:00 bis 15:30, online über Microsoft Teams.' },
      { t: 'Live-Session', d: '60 Minuten Grundlagen, 30 Minuten für Ihre Fragen.' },
      { t: 'Unterlagen', d: 'Checkliste für die ersten Wochen im System.' },
    ],
    ergebnis: [
      'Ein Team, das Kontakte, Deals und Aufgaben sicher pflegt',
      'Checkliste für die ersten Wochen',
      'Klarheit, ob Sie mehr Unterstützung brauchen',
    ],
    preis: { wert: '290 €', einheit: 'je Unternehmen', hinweis: 'Bis zu zehn Teilnehmende je Unternehmen. Buchbar nur für Unternehmen.' },
    faq: [
      { q: 'Ersetzt das eine Einführung?', a: 'Für einfache Setups ja. Wenn Daten übernommen oder Systeme angebunden werden müssen, ist die HubSpot-Einführung der richtige Weg.' },
      { q: 'Wie buchen wir?', a: 'Wählen Sie oben einen Termin und klicken Sie auf „Jetzt buchen“. Es öffnet sich eine vorbereitete E-Mail an uns. Sie bekommen eine Bestätigung mit Rechnung und vor dem Termin den Teams-Link.' },
      { q: 'Was, wenn wir einen Termin nicht wahrnehmen können?', a: 'Sie können bis drei Werktage vor dem Termin kostenlos auf einen späteren Termin umbuchen. Danach ist keine Erstattung möglich.' },
    ],
    related: ['hubspot-einfuehrung', 'ki-schulungen', 'hubspot-managed-service'],
    terminOrt: 'Microsoft Teams',
    terminTitel: 'HubSpot-Gruppen-Onboarding',
    termine: [
      { datum: '2026-11-10', von: '14:00', bis: '15:30' },
      { datum: '2026-12-08', von: '14:00', bis: '15:30' },
      { datum: '2027-01-12', von: '14:00', bis: '15:30' },
      { datum: '2027-02-16', von: '14:00', bis: '15:30' },
      { datum: '2027-03-09', von: '14:00', bis: '15:30' },
      { datum: '2027-04-13', von: '14:00', bis: '15:30' },
      { datum: '2027-05-11', von: '14:00', bis: '15:30' },
      { datum: '2027-06-08', von: '14:00', bis: '15:30' },
      { datum: '2027-07-13', von: '14:00', bis: '15:30' },
    ],
    seoTitle: 'HubSpot-Gruppen-Onboarding im Live-Webinar, 290 € | CogniCore',
    seoDesc: 'HubSpot-Grundlagen für kleine Teams: 90 Minuten live über Microsoft Teams mit einem HubSpot-Berater, Fragen inklusive. 290 € je Unternehmen.',
    status: 'ausbaustufe',
  },

  // ---------------------------------------------------------------- Daten und Integration
  {
    slug: 'schnittstellen',
    saeule: 'daten',
    nav: 'Schnittstellen und Betrieb',
    kurz: 'HubSpot mit ERP, Buchhaltung und Branchensoftware verbinden und die Schnittstelle betreiben.',
    title: 'Schnittstellen, die wir bauen und auch betreiben.',
    lede: 'Wir verbinden HubSpot mit ERP, Buchhaltung, Abrechnung und Branchensoftware und kümmern uns danach um den Betrieb: Überwachung, Fehlerbehandlung und Anpassung, wenn sich eines der Systeme ändert.',
    kontext: [
      'Mit dem Go-Live einer Schnittstelle beginnt ihr Betrieb. APIs ändern sich, Zugänge laufen ab, und plötzlich passen Datensätze nicht mehr zusammen.',
      'Weil wir auch IT-Betrieb machen, gehört die Überwachung für uns zur Schnittstelle dazu.',
    ],
    fuerWen: [
      'Anbindung von ERP, DATEV, SAP und Abrechnungssystemen',
      'Systeme ohne fertigen HubSpot-Connector',
      'Unternehmen ohne eigene Entwicklungsabteilung',
    ],
    ablauf: [
      { t: 'Scoping', d: 'Datenfluss, Sync-Richtung und Authentifizierung klären.' },
      { t: 'Konzept', d: 'Datenmapping und Fehlerfälle festlegen.' },
      { t: 'Entwicklung', d: 'Über native Konnektoren, Make, n8n oder eigenen Code.' },
      { t: 'Test und Go-Live', d: 'Mit echten Datensätzen, dann Produktivstart.' },
      { t: 'Betrieb', d: 'Überwachung, Wartung und Anpassung.' },
    ],
    ergebnis: [
      'Dokumentierter Datenfluss',
      'Überwachte Schnittstelle mit Fehlerbenachrichtigung',
      'Auf Wunsch Betrieb und Wartung durch uns',
    ],
    preis: { wert: 'Festpreis', einheit: 'nach dem Scoping', hinweis: 'Betrieb und Wartung als monatliche Pauschale.' },
    faq: [
      { q: 'Wo läuft die Schnittstelle?', a: 'Je nach Anforderung in Ihrer Umgebung oder in einer von uns betriebenen. Das legen wir im Konzept fest.' },
      { q: 'Wie sichern Sie die Zugänge ab?', a: 'Mit OAuth wo möglich und nur mit den Berechtigungen, die die Schnittstelle wirklich braucht. Zugangsdaten liegen nie im Klartext im Code.' },
    ],
    related: ['microsoft-integration', 'hubspot-entwicklung', 'datenbereinigung'],
    seoTitle: 'HubSpot-Schnittstellen: Entwicklung und Betrieb | CogniCore Köln',
    seoDesc: 'HubSpot mit ERP, DATEV, SAP und Branchensoftware verbinden. Entwicklung, Überwachung und Wartung aus einer Hand.',
    status: 'teilweise',
  },
  {
    slug: 'microsoft-integration',
    saeule: 'daten',
    nav: 'HubSpot und Microsoft 365',
    kurz: 'Entra ID, Outlook, Teams und SharePoint sauber mit HubSpot verbinden.',
    title: 'HubSpot und Microsoft 365 als ein System.',
    lede: 'Anmeldung über Entra ID, Termine und Mails aus Outlook, Dokumente aus SharePoint, Benachrichtigungen in Teams: Wir verbinden HubSpot mit der Microsoft-Umgebung, in der Ihr Team ohnehin arbeitet.',
    kontext: [
      'Die meisten Mittelständler arbeiten in Microsoft 365. Ihr CRM ist aber ein eigenes System mit eigener Anmeldung und eigener Ablage.',
      'Wir betreuen beide Welten und richten deshalb Identität, Berechtigungen und Datenflüsse auf beiden Seiten ein.',
    ],
    fuerWen: [
      'Unternehmen mit Microsoft 365 und HubSpot',
      'IT-Abteilungen, die Anmeldung und Berechtigungen zentral steuern wollen',
      'Teams, die zwischen Outlook, Teams und HubSpot hin und her springen',
    ],
    ablauf: [
      { t: 'Bestandsaufnahme', d: 'Tenant, Lizenzen, HubSpot-Portal und vorhandene Verknüpfungen.' },
      { t: 'Konzept', d: 'Identität, Berechtigungen und Datenflüsse festlegen.' },
      { t: 'Umsetzung', d: 'Anmeldung über Entra ID, Outlook- und Teams-Anbindung, SharePoint-Ablage.' },
      { t: 'Übergabe', d: 'Dokumentation für IT und Fachbereich.' },
    ],
    ergebnis: [
      'Anmeldung an HubSpot über Entra ID',
      'Saubere Anbindung von Outlook und Teams',
      'Dokumentierte Berechtigungen auf beiden Seiten',
    ],
    preis: { wert: 'Festpreis', einheit: 'nach der Bestandsaufnahme', hinweis: 'Den Einstieg bildet der HubSpot-M365-Integrations-Check.' },
    faq: [
      { q: 'Arbeiten Sie mit unserer internen IT zusammen?', a: 'Ja. Änderungen am Microsoft-Tenant stimmen wir mit Ihrer IT ab. Wenn wir Ihre Microsoft-Umgebung ohnehin betreuen, übernehmen wir sie selbst.' },
    ],
    related: ['integrations-check', 'managed-it', 'copilot-hubspot'],
    seoTitle: 'HubSpot und Microsoft 365 integrieren: Entra ID, Outlook, Teams | CogniCore',
    seoDesc: 'HubSpot mit Microsoft 365 verbinden: Anmeldung über Entra ID, Outlook, Teams und SharePoint. Vom Partner, der beide Seiten betreut.',
    status: 'teilweise',
  },
  {
    slug: 'datenbereinigung',
    saeule: 'daten',
    nav: 'Datenbereinigung',
    kurz: 'Dubletten auflösen, Daten vereinheitlichen und Regeln für dauerhafte Qualität setzen.',
    title: 'Saubere CRM-Daten, einmal und dauerhaft.',
    lede: 'Wir finden Dubletten, vereinheitlichen Schreibweisen, ergänzen fehlende Angaben und legen Regeln fest, damit die Datenqualität nach der Bereinigung erhalten bleibt.',
    kontext: [
      'Schlechte Daten fallen meist erst auf, wenn ein Bericht nicht stimmt oder eine Kampagne an die falschen Kontakte geht.',
      'Eine einmalige Bereinigung hält nicht lange. Ohne Regeln für Pflichtfelder, Formulare und Importe ist das Problem nach einem Jahr zurück, deshalb gehören die Regeln zum Projekt.',
    ],
    fuerWen: [
      'Portale nach Migrationen oder Zusammenlegungen',
      'Teams, die KI-Funktionen auf ihre CRM-Daten loslassen wollen',
      'Unternehmen mit unzuverlässigem Reporting',
    ],
    ablauf: [
      { t: 'Analyse', d: 'Datenqualität messen und Ursachen finden.' },
      { t: 'Konzept', d: 'Regeln für Dubletten, Pflichtfelder und Formate.' },
      { t: 'Bereinigung', d: 'Zusammenführen, vereinheitlichen, ergänzen.' },
      { t: 'Absicherung', d: 'Validierungen, Workflows und Importregeln.' },
    ],
    ergebnis: [
      'Bereinigter Datenbestand',
      'Dokumentierte Datenregeln',
      'Automatische Prüfungen gegen neue Fehler',
    ],
    preis: { wert: 'Festpreis', einheit: 'nach der Analyse' },
    faq: [
      { q: 'Löschen Sie Daten?', a: 'Nur nach Ihrer Freigabe. Vor jeder Zusammenführung sichern wir den Ausgangsstand.' },
    ],
    related: ['hubspot-audit', 'schnittstellen', 'hubspot-ki-agenten'],
    seoTitle: 'CRM-Datenbereinigung in HubSpot | CogniCore Köln',
    seoDesc: 'Dubletten auflösen, Daten vereinheitlichen und Regeln für dauerhafte Datenqualität in HubSpot festlegen.',
    status: 'ausbaustufe',
  },

  // ---------------------------------------------------------------- Microsoft 365 und IT-Betrieb
  {
    slug: 'managed-it',
    saeule: 'microsoft',
    nav: 'Microsoft 365 und IT-Betrieb',
    kurz: 'Microsoft 365, Geräte und Sicherheit im Servicevertrag mit festen Reaktionszeiten.',
    title: 'Microsoft 365 und IT-Betrieb aus einer Hand.',
    lede: 'Wir betreiben Microsoft 365, Geräte und Sicherheit für mittelständische Unternehmen, mit Serviceverträgen, festen Paketen und vereinbarten Reaktionszeiten.',
    kontext: [
      'Ein gutes Drittel unserer Arbeit ist IT-Betrieb. Deshalb denken wir bei HubSpot-Projekten Anmeldung, Berechtigungen und Datenschutz von Anfang an mit.',
      'Wir kennen die Umgebung, in die das CRM eingebettet wird, weil wir sie oft selbst betreiben.',
    ],
    fuerWen: [
      'Unternehmen ohne eigene IT-Abteilung',
      'IT-Verantwortliche, die Unterstützung im Tagesgeschäft brauchen',
      'Kunden, die CRM und IT bei einem Partner bündeln wollen',
    ],
    ablauf: [
      { t: 'Bestandsaufnahme', d: 'Tenant, Geräte, Lizenzen und Sicherheit.' },
      { t: 'Onboarding', d: 'Übernahme in den Betrieb und Dokumentation.' },
      { t: 'Betrieb', d: 'Support und Wartung nach Servicevertrag.' },
    ],
    ergebnis: [
      'Betrieb von Microsoft 365 und Entra ID',
      'Verwaltung und Absicherung der Geräte',
      'Lizenzen, Mail-Security und Backup',
      'Support nach vereinbarten Reaktionszeiten',
    ],
    preis: { wert: 'Feste Pakete', einheit: 'im Servicevertrag', hinweis: 'Pakete und Konditionen stehen auf cognicore-service.de.' },
    faq: [
      { q: 'Wo finden wir Pakete und Preise?', a: 'Auf cognicore-service.de, unserer Seite für den IT-Betrieb.' },
      { q: 'Müssen wir HubSpot nutzen, um den IT-Betrieb zu beauftragen?', a: 'Nein. Der IT-Betrieb ist eine eigene Leistung. Wenn Sie beides nutzen, profitieren Sie davon, dass ein Team beide Seiten kennt.' },
    ],
    related: ['integrations-check', 'microsoft-integration', 'copilot-hubspot'],
    extern: { href: 'https://cognicore-service.de', label: 'Pakete auf cognicore-service.de' },
    seoTitle: 'Microsoft 365 und IT-Betrieb für den Mittelstand | CogniCore Köln',
    seoDesc: 'Microsoft 365, Geräte, Sicherheit, Mail-Security und Backup im Servicevertrag mit festen Paketen und Reaktionszeiten.',
    status: 'geliefert',
  },
  {
    slug: 'integrations-check',
    saeule: 'microsoft',
    nav: 'HubSpot-M365-Integrations-Check',
    kurz: 'Ein Beratertag, der zeigt, wie gut HubSpot und Microsoft 365 bei Ihnen zusammenarbeiten.',
    title: 'Wie gut arbeiten HubSpot und Microsoft 365 bei Ihnen zusammen?',
    lede: 'Ein kompakter Check Ihrer HubSpot- und Microsoft-Umgebung: Anmeldung, Berechtigungen, Mail- und Kalenderanbindung, Ablage und Datenflüsse. Am Ende wissen Sie, wo es hakt und was sich mit wenig Aufwand verbessern lässt.',
    kontext: [
      'Für diesen Check braucht es Einblick in beide Systeme. Weil wir HubSpot und Microsoft 365 betreuen, schauen wir in einem Durchgang auf beides.',
    ],
    fuerWen: [
      'Unternehmen mit HubSpot und Microsoft 365',
      'IT-Leitungen vor einer CRM-Einführung',
      'Vertriebsleitungen, deren Team über doppelte Pflege klagt',
    ],
    ablauf: [
      { t: 'Vorbereitung', d: 'Lesezugriff auf Portal und Tenant, kurzer Fragebogen.' },
      { t: 'Analyse', d: 'Anmeldung, Berechtigungen, Anbindungen und Datenflüsse.' },
      { t: 'Ergebnis', d: 'Bericht mit priorisierten Maßnahmen und Besprechung im Termin.' },
    ],
    ergebnis: [
      'Bericht mit Befunden zu Identität, Anbindung und Daten',
      'Maßnahmenliste mit Aufwand',
      'Empfehlung, was Sie selbst umsetzen können',
    ],
    preis: { wert: '1.250 €', einheit: 'Festpreis', hinweis: 'Ein Beratertag inklusive Bericht und Besprechung.' },
    faq: [
      { q: 'Was passiert nach dem Check?', a: 'Die Maßnahmen setzen Sie selbst um, mit Ihrer IT oder mit uns. Der Check verpflichtet zu nichts.' },
    ],
    related: ['microsoft-integration', 'managed-it', 'hubspot-audit'],
    seoTitle: 'HubSpot-M365-Integrations-Check, 1.250 € | CogniCore Köln',
    seoDesc: 'Wie gut arbeiten HubSpot und Microsoft 365 zusammen? Anmeldung, Berechtigungen, Outlook, Teams und Datenflüsse in einem Beratertag geprüft.',
    status: 'ausbaustufe',
  },

  // ---------------------------------------------------------------- KI
  {
    slug: 'ki-audit',
    saeule: 'ki',
    nav: 'KI-Audit mit Pilot',
    kurz: 'Anwendungsfälle bewerten und einen davon als laufenden Pilot umsetzen.',
    title: 'Ein KI-Audit, das mit einem laufenden Pilot endet.',
    lede: 'Wir prüfen Ihre Prozesse in Vertrieb, Marketing und Service auf sinnvolle KI-Einsätze, wählen mit Ihnen einen Anwendungsfall aus und setzen ihn als Pilot in Ihren Systemen um.',
    kontext: [
      'Am Ende vieler KI-Audits steht eine Liste von Ideen, und dann passiert lange nichts.',
      'Bei uns endet das Audit mit einem Pilot, den Ihr Team im Alltag nutzen kann. Daran sehen Sie, was KI bei Ihnen leistet, bevor Sie größer investieren.',
    ],
    fuerWen: [
      'Geschäftsführungen, die KI für ihr Unternehmen einordnen wollen',
      'Teams mit HubSpot oder Microsoft 365 als Datenbasis',
      'Unternehmen, die einen ersten Anwendungsfall suchen',
    ],
    ablauf: [
      { t: 'Analyse', d: 'Prozesse, Daten und Systeme in bis zu drei Kernprozessen.' },
      { t: 'Auswahl', d: 'Anwendungsfälle nach Nutzen und Aufwand bewerten, einen für den Pilot wählen.' },
      { t: 'Pilot', d: 'Umsetzung in HubSpot, Microsoft 365 oder als eigene Anwendung.' },
      { t: 'Auswertung', d: 'Ergebnis messen und über den Ausbau entscheiden.' },
    ],
    ergebnis: [
      'Bewertete Liste von Anwendungsfällen',
      'Ein laufender Pilot in Ihren Systemen',
      'Entscheidungsgrundlage für den nächsten Schritt',
    ],
    preis: { wert: 'ab 6.900 €', einheit: 'Festpreis', hinweis: 'Analyse von bis zu drei Kernprozessen und ein Pilot.' },
    faq: [
      { q: 'Brauchen wir dafür HubSpot?', a: 'Nein. HubSpot und Microsoft 365 sind unsere Schwerpunkte. Der Pilot kann aber auch als eigene Anwendung entstehen.' },
      { q: 'Was passiert mit unseren Daten?', a: 'Wir arbeiten nur mit den Daten, die der Anwendungsfall braucht, und klären vorab, welche KI-Dienste genutzt werden und wo die Daten verarbeitet werden.' },
    ],
    related: ['hubspot-ki-agenten', 'copilot-hubspot', 'ki-schulungen'],
    seoTitle: 'KI-Audit mit Pilot für den Mittelstand | CogniCore Köln',
    seoDesc: 'KI-Anwendungsfälle in Vertrieb, Marketing und Service bewerten und einen davon als laufenden Pilot umsetzen. Festpreis ab 6.900 €.',
    status: 'ausbaustufe',
  },
  {
    slug: 'hubspot-ki-agenten',
    saeule: 'ki',
    nav: 'KI-Agenten in HubSpot',
    kurz: 'Die KI-Agenten von HubSpot auf Ihre Daten und Prozesse einrichten.',
    title: 'KI-Agenten in HubSpot einrichten.',
    lede: 'HubSpot bringt eigene KI-Agenten mit, etwa für den Kundenservice, die Recherche zu Interessenten und für Inhalte. Wir richten sie auf Ihre Daten und Prozesse ein, damit sie belastbare Antworten geben.',
    kontext: [
      'Ein Agent ist nur so gut wie die Daten und Inhalte, auf die er zugreift.',
      'Deshalb beginnt die Einrichtung mit der Wissensdatenbank, der Datenqualität und klaren Regeln, wann der Agent an einen Menschen übergibt.',
    ],
    fuerWen: [
      'Serviceteams mit vielen wiederkehrenden Anfragen',
      'Vertriebsteams mit hohem Lead-Volumen',
      'Unternehmen, die HubSpot bereits produktiv nutzen',
    ],
    ablauf: [
      { t: 'Auswahl', d: 'Anwendungsfall und passenden Agenten festlegen.' },
      { t: 'Vorbereitung', d: 'Inhalte, Daten und Regeln für die Übergabe.' },
      { t: 'Einrichtung', d: 'Konfiguration und Tests mit echten Fällen.' },
      { t: 'Begleitung', d: 'Auswertung und Nachschärfen in den ersten Wochen.' },
    ],
    ergebnis: [
      'Eingerichteter Agent für einen klaren Anwendungsfall',
      'Dokumentierte Regeln für die Übergabe an Menschen',
      'Auswertung nach den ersten Wochen',
    ],
    preis: { wert: 'Festpreis', einheit: 'nach der Auswahl', hinweis: 'Die Nutzungskosten der KI-Funktionen rechnet HubSpot direkt mit Ihnen ab.' },
    faq: [
      { q: 'Wann übergibt der Agent an einen Menschen?', a: 'Das legen wir mit Ihnen fest, zum Beispiel bei bestimmten Themen, bei Unsicherheit oder auf Wunsch des Kunden.' },
    ],
    related: ['ki-audit', 'datenbereinigung', 'hubspot-managed-service'],
    seoTitle: 'HubSpot-KI-Agenten einrichten | CogniCore Köln',
    seoDesc: 'KI-Agenten in HubSpot für Service, Vertrieb und Inhalte einrichten: Wissensdatenbank, Datenqualität, Übergaberegeln und Tests mit echten Fällen.',
    status: 'ausbaustufe',
  },
  {
    slug: 'copilot-hubspot',
    saeule: 'ki',
    nav: 'Copilot und HubSpot',
    kurz: 'Microsoft Copilot mit Ihren CRM-Daten nutzen, mit klaren Berechtigungen.',
    title: 'Microsoft Copilot mit Ihren CRM-Daten.',
    lede: 'Ihr Team arbeitet in Outlook, Teams und Word. Wir sorgen dafür, dass Copilot dort auf die Informationen aus HubSpot zugreifen kann, mit den Berechtigungen, die Sie festlegen.',
    kontext: [
      'Copilot ist so nützlich wie die Daten, die es sehen darf. Kundendaten liegen aber meist im CRM und nicht in Microsoft 365.',
      'Wir verbinden beides und klären dabei die Frage, die IT und Datenschutz zuerst stellen: Wer darf welche Daten sehen.',
    ],
    fuerWen: [
      'Unternehmen mit Microsoft 365 Copilot und HubSpot',
      'Vertriebsteams, die Kundeninformationen in Outlook und Teams brauchen',
      'IT-Leitungen, die Berechtigungen zentral steuern',
    ],
    ablauf: [
      { t: 'Bestandsaufnahme', d: 'Lizenzen, Berechtigungen und Datenlage.' },
      { t: 'Konzept', d: 'Welche CRM-Daten Copilot nutzen darf und für wen.' },
      { t: 'Umsetzung', d: 'Anbindung über einen Konnektor oder eine eigene Schnittstelle.' },
      { t: 'Einführung', d: 'Anwendungsfälle gemeinsam mit dem Team erproben.' },
    ],
    ergebnis: [
      'CRM-Daten in Copilot mit klaren Berechtigungen',
      'Dokumentiertes Berechtigungskonzept',
      'Erprobte Anwendungsfälle für Vertrieb und Service',
    ],
    preis: { wert: 'Festpreis', einheit: 'nach der Bestandsaufnahme' },
    faq: [
      { q: 'Brauchen wir Copilot-Lizenzen?', a: 'Ja, Microsoft 365 Copilot wird pro Nutzer lizenziert. Welche Nutzer eine Lizenz brauchen, klären wir in der Bestandsaufnahme.' },
    ],
    related: ['microsoft-integration', 'ki-audit', 'managed-it'],
    seoTitle: 'Microsoft Copilot mit HubSpot-Daten | CogniCore Köln',
    seoDesc: 'HubSpot-Daten in Microsoft 365 Copilot nutzen: Anbindung, Berechtigungskonzept und Anwendungsfälle für Vertrieb und Service.',
    status: 'ausbaustufe',
  },
  {
    slug: 'ki-sichtbarkeit',
    saeule: 'ki',
    nav: 'KI-Sichtbarkeit',
    kurz: 'Prüfen und steuern, was ChatGPT, Gemini und Copilot über Ihr Unternehmen sagen.',
    title: 'Was KI-Assistenten über Ihr Unternehmen sagen.',
    lede: 'ChatGPT, Gemini und Copilot beantworten heute Fragen nach Anbietern. Wir prüfen, wie diese Systeme Ihr Unternehmen beschreiben, und sorgen mit einer Faktenseite und strukturierten Daten dafür, dass die Angaben stimmen.',
    kontext: [
      'Für uns selbst haben wir eine solche Faktenseite gebaut und gegen die Antworten mehrerer KI-Systeme geprüft. Dabei kam zum Beispiel heraus, dass ein System uns ein Microsoft-Produkt zuschrieb, das wir gar nicht anbieten.',
      'Solche Fehler lassen sich nur beheben, wenn die Fakten an einer Stelle eindeutig, belegt und maschinenlesbar stehen.',
    ],
    fuerWen: [
      'Unternehmen, deren Kunden Anbieter über KI-Assistenten suchen',
      'Firmen mit Namensverwechslungen oder veralteten Angaben im Netz',
      'Marketingteams, die neben der Suche auch KI-Antworten im Blick haben wollen',
    ],
    ablauf: [
      { t: 'Bestandsaufnahme', d: 'Antworten mehrerer KI-Systeme zu Ihrem Unternehmen auswerten.' },
      { t: 'Faktenseite', d: 'Steckbrief, Abgrenzung, Quellen und strukturierte Daten.' },
      { t: 'Abgleich', d: 'Antworten erneut prüfen und Abweichungen nachbessern.' },
    ],
    ergebnis: [
      'Protokoll, was KI-Systeme heute über Sie sagen',
      'Faktenseite mit strukturierten Daten',
      'Wiederholbarer Prüfablauf',
    ],
    preis: { wert: 'Festpreis', einheit: 'nach der Bestandsaufnahme' },
    faq: [
      { q: 'Können Sie Platzierungen in ChatGPT garantieren?', a: 'Nein, das kann niemand seriös. Wir sorgen dafür, dass die Fakten über Ihr Unternehmen eindeutig, belegt und maschinenlesbar sind.' },
    ],
    related: ['ki-audit', 'ki-schulungen', 'hubspot-einfuehrung'],
    seoTitle: 'KI-Sichtbarkeit: was ChatGPT über Ihr Unternehmen sagt | CogniCore',
    seoDesc: 'Prüfen, wie ChatGPT, Gemini und Copilot Ihr Unternehmen beschreiben, und mit Faktenseite und strukturierten Daten korrigieren.',
    status: 'teilweise',
  },
  {
    slug: 'ki-schulungen',
    saeule: 'ki',
    nav: 'KI-Schulungen',
    kurz: 'Hands-on-Schulungen zu den KI-Funktionen in HubSpot und Microsoft 365.',
    title: 'KI-Schulungen an Ihren eigenen Systemen.',
    lede: 'Praxisnahe Schulungen zu den KI-Funktionen in HubSpot und Microsoft 365: was sie können, wo ihre Grenzen liegen und welche Regeln in Ihrem Unternehmen gelten sollten.',
    kontext: [
      'KI-Funktionen sind in vielen Lizenzen schon enthalten und werden trotzdem kaum genutzt.',
      'Meist fehlen Beispiele aus dem eigenen Alltag und klare Regeln, was erlaubt ist. Beides bringen wir in die Schulung mit.',
    ],
    fuerWen: [
      'Vertriebs-, Marketing- und Serviceteams',
      'Führungskräfte, die Regeln für den KI-Einsatz festlegen wollen',
      'Unternehmen nach der Einführung von Copilot oder der KI in HubSpot',
    ],
    ablauf: [
      { t: 'Vorgespräch', d: 'Systeme, Lizenzen und Anwendungsfälle klären.' },
      { t: 'Schulung', d: 'Hands-on an Ihren Systemen, vor Ort oder remote.' },
      { t: 'Leitlinien', d: 'Regeln für den Einsatz im Unternehmen.' },
    ],
    ergebnis: [
      'Ein Team, das die KI-Funktionen sicher nutzt',
      'Schriftliche Leitlinien für den KI-Einsatz',
      'Sammlung von Anwendungsfällen aus Ihrem Alltag',
    ],
    preis: { wert: 'Festpreis', einheit: 'je Schulungstag' },
    faq: [
      { q: 'Schulen Sie vor Ort?', a: 'In Köln und Umgebung gern vor Ort, sonst remote.' },
    ],
    related: ['ki-audit', 'copilot-hubspot', 'hubspot-gruppen-onboarding'],
    seoTitle: 'KI-Schulungen für HubSpot und Microsoft 365 | CogniCore Köln',
    seoDesc: 'Hands-on-Schulungen zu den KI-Funktionen in HubSpot und Microsoft 365, mit Leitlinien für den Einsatz im Unternehmen.',
    status: 'ausbaustufe',
  },
];

export const bySlug = (slug: string) => leistungen.find((l) => l.slug === slug);
export const inSaeule = (key: string) => leistungen.filter((l) => l.saeule === key);
