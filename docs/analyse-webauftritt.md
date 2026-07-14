<!-- Quelle: 13-Agenten-Multi-Perspektiven-Analyse (adversarial verifiziert), erzeugt 2026-07-15. -->
<!-- Analyse-Gegenstand: die damalige Live-Seite cognicore.de (HubSpot CMS). Grundlage des Redesigns. -->
<!-- Methodik: 13 Rollen (4 Personas, 7 Experten, 2 adversarial) -> Fact-Check + Vollstaendigkeits-Kritik -> Synthese. -->

# Analyse des Webauftritts cognicore.de

## Executive Summary — die 5 wichtigsten Erkenntnisse

1. **Der Auftritt behauptet Kompetenz, beweist sie aber nie.** Auf keiner Kernseite (Start, Leistungen, Über uns) steht eine einzige Case-Study, Kennzahl, Kundenstimme oder ein Logo — der einzige „Beleg" ist der Satz „Schau mal in die Bewertungen im offiziellen Anbieterverzeichnis von HubSpot", also ein Klick *weg* von der Seite. Dieses Beweis-Defizit ist das mit Abstand meistbelegte Finding (7 von 13 Rollen) und der zentrale Absprunggrund vor der Terminbuchung.

2. **Der eigentliche Hebel ist nicht „es fehlen Beweise", sondern „vorhandene Beweise werden versteckt".** CogniCore besitzt bereits drei starke, sofort verfügbare Trust-Assets: die eigene HubSpot-Marketplace-App (PLZ-Lookup, „Proof of Build"), den eigenen HubSpot-Betrieb der Website („eat your own dog food") und den Self-Check-Funnel. Keines wird als Beweis oder Conversion-Fläche inszeniert. Das ist die günstigste und schnellste Verbesserungsklasse.

3. **Das gesamte Differenzierungsversprechen — „technische Tiefe" — ist das Einzige, was man nicht sehen kann.** Es wird als Leitmotiv mehrfach behauptet (Subline, Team-Teaser, „zertifizierte Tiefe"), aber die 13 Badges sind ausnahmslos Marketing-/Sales-/Service-/Inbound-Zertifikate — keine einzige Developer-, CMS-, API- oder Architektur-Zertifizierung. Der Integrationstext bleibt metaphorisch („So wird HubSpot zur Schaltzentrale"), das Team gesichtslos. Die Belege belegen das Gegenteil des Versprechens.

4. **Die Datenschutzerklärung passt nicht zur real eingesetzten Technik — das ist rechtlich abmahnfähig und für ein HubSpot-Beratungshaus glaubwürdigkeitszerstörend.** Verifiziert: Die DSE nennt HubSpot mit keinem Wort, führt stattdessen veraltete Boilerplate zu „Google Analytics / AdWords / LinkedIn" und behauptet wörtlich „verzichten wir auf eine automatische Entscheidungsfindung oder ein Profiling" — bei gleichzeitig aktivem HubSpot-Ads-Pixel/Tracking. Ausgerechnet die Kernkompetenz (HubSpot DSGVO-konform aufsetzen) wird am eigenen Objekt verfehlt.

5. **Der wichtigste Klick löst nicht ein, was er verspricht.** Der Primär-CTA „Jetzt Erstgespräch buchen" verlinkt auf den Formular-Anker `#talk`, nicht auf einen Kalender — verifiziert. Der Nutzer „bucht" nicht, sondern schreibt und wartet „in der Regel innerhalb eines Werktags". Momentum-Verlust im Moment höchster Kaufabsicht, obwohl HubSpot Meetings technisch bereits vorhanden ist.

---

## Gesamteindruck & Reifegrad

**Reifegrad: solide gebautes Schaufenster, aber unfertige Beweis- und Vertrauensschicht — „gut positioniert, schwach belegt".**

Die Substanz ist da: scharfer, ehrlich abgegrenzter ICP, ein echtes Marken-Asset im Claim „Damit es skaliert, nicht eskaliert!", ein differenzierender Standpunkt („keine klassische Marketing-Agentur, sondern HubSpot-Partner mit Tiefgang in Datenmodell und Solution Design") und eine saubere Informationsarchitektur. Technisch ist das Fundament überdurchschnittlich (Edge-Caching, saubere Semantik, konformes Impressum, Double-Opt-in).

Der Reifegrad kippt jedoch genau an den Entscheidungspunkten: Wo der Besucher Vertrauen fassen soll (Team, Referenzen, Preise, technischer Beweis), findet er Adjektive statt Belege. Die Seite ist damit ein kompetent gemachtes Marketing-Blatt, das seine eigene Kernbehauptung („Tiefe", „Systematik", „klare Prozesse") an mehreren Stellen selbst unterläuft — durch ein anonymes Team, eine zur Technik widersprüchliche Datenschutzerklärung und einen „Buchen"-Button, der nicht bucht. Der Abstand zwischen „was hier steht" und „was hier bewiesen wird" ist der rote Faden aller 13 Perspektiven.

---

## Top-Prioritäten (Schwere: hoch)

### 1. Kein Proof-Layer — die Seite verlangt Vertrauen, liefert aber null verifizierbaren Beleg
- **Problem:** Keine Case-Study, keine Ergebniszahl, kein Testimonial, kein Kundenlogo auf irgendeiner Kernseite. Vertrauen wird konsequent nach extern (HubSpot-Verzeichnis) ausgelagert — die Beweislast liegt beim Nutzer.
- **Beleg (verifiziert):** Auf `/`, `/leistungen`, `/ueberuns` bestätigt kein Proof-Element; einziger Verweis: „Schau mal in die Bewertungen im offiziellen Anbieterverzeichnis von HubSpot". Die einzige quantifizierte Aussage überhaupt ist „mehr als zehn Jahren Projekterfahrung".
- **Betroffene Perspektiven:** Geschäftsführer, Head of RevOps, CRO, UX, IT/CTO, konkurrierender Partner, misstrauischer B2B-Käufer (7 Rollen — stärkstes Signal des gesamten Audits).
- **Empfehlung:** 2–3 anonymisierbare Ergebnis-Cases mit Ausgangslage → Maßnahme → harter Kennzahl (Time-to-Live, Adoption, Pipeline/Conversion, Sync-Fehlerquote) prominent auf Start und Leistungen. 3–4 O-Ton-Zitate mit Name/Rolle/Branche+Größe. Die HubSpot-Directory-Bewertungen nicht nur verlinken, sondern Sterne-Score + 1–2 Zitate **on-page** ziehen. *Hinweis: Die Behauptung eines der Rollen-Findings, die HubSpot-Directory-URL liefere 404, hat der Fact-Check als unbelegt verworfen — die Seite verlinkt gar keine konkrete Directory-URL.*

### 2. Gesichtsloses Team — vier Vornamen widersprechen der eigenen Überschrift „Vertrauen entsteht, wenn man weiß, mit wem man es zu tun hat"
- **Problem:** Beratung wird über Köpfe gekauft. Das Team erscheint nur als vier Vornamen mit Foto — ohne Nachnamen, Rollen, Bios, LinkedIn. Das untergräbt genau das „technische Tiefe"-Versprechen und wirkt bei einem 6-stelligen CRM-Vorhaben wie ein Start-up-Selfie.
- **Beleg (verifiziert):** Startseite zeigt „Dominik, Michael, Rafael, Adrian"; `/ueberuns` enthält **gar keine** Personen, nur Bürofotos — im direkten Kontrast zur dortigen Vertrauens-Headline und zu „mehr als zehn Jahren Projekterfahrung". Das Impressum weist die GF Dominik Siegers und Michael Lohmar dagegen voll aus.
- **Betroffene Perspektiven:** Geschäftsführer, CRO, UX, Bewerber, Marken-Stratege, konkurrierender Partner, misstrauischer Käufer (7 Rollen).
- **Empfehlung:** Vollständige Profile: Vor-/Nachname, Rolle („Solutions Architect, HubSpot CMS & API"), 1–2 Zeilen Fokus, verlinktes LinkedIn, konkret zugeordnete Zertifikate. Die beiden GF mit Klarnamen und Foto sichtbar nach vorn. Reiner Quick-Win-Aufwand, zahlt direkt auf die Tiefen-Positionierung ein.

### 3. „Technische Tiefe" wird behauptet, aber die vorhandenen Beweise werden versteckt — der Differenzierer bleibt Floskel
- **Problem:** Das einzige echte Alleinstellungsmerkmal (Datenmodell, API-/Prozessintegration, Solution Design) ist unbelegt. Der Integrationstext bleibt metaphorisch, die 13 Badges sind reine Methodik-Zertifikate, und die stärksten technischen Beweise sind gar nicht auf der Seite: die **eigene HubSpot-Marketplace-App** (PLZ-Lookup) und der **eigene HubSpot-Betrieb** der Website.
- **Beleg (verifiziert):** POV „keine klassische Marketing-Agentur, sondern HubSpot-Partner mit Tiefgang in Datenmodell und Solution Design" existiert — aber nur als Behauptung. Kein Protokoll (REST/Webhook/OAuth), keine Middleware, kein Fehler-/Monitoring-Modell, kein konkret benanntes Zielsystem (SAP/DATEV/…). Die 13 Badges enthalten keine einzige Developer-/CMS-/API-/Architektur-Zertifizierung.
- **Betroffene Perspektiven:** IT/CTO, Head of RevOps, Marken-Stratege, misstrauischer Käufer, konkurrierender Partner; verstärkt durch die Vollständigkeits-Kritik („eigene Assets falsch platziert").
- **Empfehlung:** Tiefe **zeigen** statt behaupten: (a) die Marketplace-App als „Wir bauen eigene HubSpot-Apps"-Beweis inszenieren; (b) ein „So bauen wir HubSpot — an uns selbst"-Abschnitt mit Datenmodell-Ausschnitt/Lifecycle; (c) ein anonymisiertes Mini-Architekturdiagramm (HubSpot ↔ Middleware ↔ ERP) und 1–2 technische FAQ-Einträge (Sync-Richtung, Auth, Monitoring). Ein echtes Artefakt schlägt zehn Adjektive.

### 4. Datenschutzerklärung & Consent widersprechen der real eingesetzten Technik — rechtlich angreifbar, Trust-kritisch
- **Problem:** Doppelt gravierend: rechtlicher Art.-13-Verstoß inkl. fehlender US-Transfer-Grundlage **und** Kompetenz-Selbstwiderspruch bei genau der Leistung, die CogniCore verkauft.
- **Beleg (verifiziert):** Die DSE nennt HubSpot mit keinem Wort, beschreibt stattdessen „Google Analytics / AdWords / LinkedIn" und behauptet wörtlich „verzichten wir auf eine automatische Entscheidungsfindung oder ein Profiling" — bei live geladenem HubSpot-Ads-Pixel, Collected Forms, GTM/GA4. Zusätzlich weicht der DSE-Verantwortliche (`dominik.siegers@cognicore.de` / `022165053000`) vom Impressum (`info@cognicore.de` / `+49 221 6505 3000`) ab.
- **Betroffene Perspektiven:** Web-Recht/DSGVO (Kern), IT/CTO (Datenhaltung/Compliance als Kaufhindernis Nr. 1 des DACH-ICP).
- **Empfehlung:** DSE über Kanzlei/Generator mit HubSpot-Modul neu aufsetzen (HubSpot Inc., GTM, GA4, LinkedIn je mit Zweck, Rechtsgrundlage, Speicherdauer, SCC/DPF-US-Transfer); den „kein Profiling"-Satz streichen; Consent-Banner auf echtes Opt-in mit gleichwertig sichtbarem „Alle ablehnen" auf Ebene 1 umstellen und per Netzwerk-Trace verifizieren, dass vor Zustimmung kein Tracking-Cookie feuert; DSE-Kontaktdaten ans Impressum angleichen.

### 5. Der stärkste Positionierungssatz ist begraben — Hero und Home-Title verschenken die teuerste Fläche
- **Problem:** Der eine Satz, der CogniCore von 1.000 Partnern trennt, erreicht Erstbesucher nie; der Hero bleibt austauschbar, und das wichtigste Title-Tag der Seite ist leer.
- **Beleg (verifiziert):** Der POV „keine klassische Marketing-Agentur, sondern … Datenmodell und Solution Design" steht nur auf `/ueberuns`. Der Home-Hero nutzt die generische Subline „… mit klaren Prozessen, skalierbarer Technologie und technischer Tiefe" (Wörter, die jeder Partner schreibt). `<title>Home - CogniCore IT Solutions</title>` enthält weder „HubSpot" noch „Köln"; die H1 ist nur der Slogan.
- **Betroffene Perspektiven:** Marken-Stratege, CRO, Geschäftsführer, SEO.
- **Empfehlung:** Den POV in die Hero-Subline hochziehen und mit einer Proof-Zeile unterlegen („Offizieller HubSpot Solutions Partner · 13 Zertifizierungen · spezialisiert auf API-/Prozessintegration für den B2B-Mittelstand"). Home-Title umschreiben, z. B. „HubSpot-Partner für B2B: Onboarding, Integration & RevOps | CogniCore Köln"; eine keyword-tragende H1 ergänzen, Slogan als visuelles Element belassen.

### 6. „Erstgespräch buchen" bucht nicht — Erwartungsbruch am höchst-intent Klick
- **Problem:** Das Wort „buchen" verspricht Self-Service-Terminwahl, liefert aber Formular + Wartezeit. Der Weg zum Gespräch verlängert sich von 1 auf 3–4 Schritte.
- **Beleg (verifiziert):** Home-CTA „Jetzt Erstgespräch buchen" → Anker `#talk`; `/kontakt` hat nur Formular + Textlink „Oder direkt einen Termin buchen", kein eingebettetes Kalender-Widget; dazu „Antwort in der Regel innerhalb eines Werktags".
- **Betroffene Perspektiven:** CRO (Kern), UX, konkurrierender Partner.
- **Empfehlung:** HubSpot-Meetings-Scheduler direkt im `#talk`-Abschnitt und auf `/kontakt` einbetten (Slots sichtbar, Selbstbuchung). Formular als sekundäre Option. Da HubSpot bereits im Einsatz ist, technisch minimal.

---

## Weitere relevante Findings (mittel)

- **Keine Preis-Orientierung.** Drei Stufen (Essential/Advanced/Excellence) ohne jede Zahl/Range; „klarer Kostenrahmen" wird bei Essential sogar behauptet, aber nirgends eingelöst. Zwingt Budget-Check ins Erstgespräch — Reibung, die preissensible Mittelständler zur transparenteren Konkurrenz treibt. *(GF, Konkurrent, misstrauischer Käufer, UX)*
- **Ablauf bleibt generisch, FAQ liefert Nicht-Antworten.** „Wir setzen um in klaren Phasen" — ohne die Phasen zu nennen. Weder Zeitrahmen noch Deliverables je Phase; die Kontaktseite sagt nicht, was das Erstgespräch konkret liefert. *(Head of RevOps, misstrauischer Käufer)*
- **HubSpot Partner-Tier fehlt.** Verifiziert: Das Badge ist die Basis-Stufe „Solutions Partner" (`PARTNER_ORANGE`), kein Gold/Platinum/Diamond. Im HubSpot-Ökosystem ist der Tier die eigentliche, extern verifizierbare Vertrauenswährung — „Solutions Partner" ohne Tier liest der Kenner als unterste Stufe. Falls kein höherer Tier existiert, die dahinterstehenden Metriken proaktiv besetzen („X gemanagte Portale", „Y zertifizierte Berater:innen"). *(Vollständigkeits-Kritik)*
- **RevOps-/Mess-Ebene unterentwickelt.** Startseite verspricht „messbaren Vertriebserfolg", aber kein Wort zu Lifecycle-Stufen, MQL/SQL, Attribution, Forecasting, SLA-Reporting. Das „Ops" in RevOps fehlt. *(Head of RevOps)*
- **Security als Integrationsdisziplin unbesetzt.** Keine Aussage zu Auth/Token-Handling, Least-Privilege, Datenhaltung/EU-Residency — obwohl HubSpot als „Schaltzentrale" mit ERP-/Abrechnungszugriff beworben wird. Direkter Freigabe-Blocker der IT. *(IT/CTO)*
- **Accessibility auf den Conversion-Pfaden.** Der orange Primär-CTA und orange Textlinks reißen laut Prüfung den WCAG-Kontrast (3,15:1 statt 4,5:1), der Tastatur-Fokus ist per `outline:none` unsichtbar gemacht, Links sind nur farbcodiert. *Hinweis: Der Fact-Check stuft die Pixel-Messwerte als plausibel, aber nicht per Seiteninhalt gegengeprüft ein — vor Umsetzung im Browser/DevTools verifizieren.* *(Accessibility)*
- **Performance-Bremse Hero-Bild.** Der Foto-Hero soll ein ~2,4-MB-PNG als CSS-Background sein (LCP-Killer auf Mobil), Gesamt-Bildlast ~4,9 MB aus unoptimierten `/hubfs/`-Pfaden. *Ebenfalls plausibel, aber messtechnisch nicht seitenbelegt — per Lighthouse/DevTools bestätigen.* *(Web-Performance)*
- **Lokal-SEO Köln ungenutzt.** „Köln" fehlt in allen Titles/Descriptions; keine LocalBusiness-Daten, kein NAP-Block im sichtbaren Content — obwohl der Standort Mediapark ein margenstarker Local-Hebel wäre. *(SEO)*
- **Uneinheitliche Anrede (du/ihr).** Der Bruch ist real, aber **nur auf `/kontakt` sauber belegbar** (Hero „du" vs. Body „ihr"); Start/Leistungen/Über-uns nutzen durchgängig „ihr/euch". *Der Fact-Check hat das seo-Finding „Seite duzt überwiegend / Home-Description in Sie-Form" als faktisch falsch verworfen und den Home-Absatz-Beleg der UX-Rolle als nicht bestätigt.* Einheitliche Anrede: durchgängig **„ihr"** (Hausstandard). *(7 Rollen nennen den Bruch)*

---

## ⚡ Quick Wins (sofort, geringer Aufwand)

- **Team-Profile ergänzen:** Nachnamen, Rollen, 1–2 Zeilen Bio, LinkedIn, zugeordnete Zertifikate — GF Siegers/Lohmar nach vorn.
- **HubSpot-Meetings-Kalender einbetten** in `#talk` und `/kontakt` (Selbstbuchung statt Formular-Warteschleife).
- **Home-Title & H1** keyword-optimieren („HubSpot-Partner … Köln"); Slogan als visuelles Element behalten.
- **POV in die Hero-Subline** hochziehen + Proof-Zeile (Partner-Status · 13 Zertifizierungen · API-/Prozessintegration).
- **Anrede vereinheitlichen** auf durchgängig „ihr" (redaktioneller Durchlauf, beginnend beim `/kontakt`-Hero).
- **CTA-Label vereinheitlichen** auf „Erstgespräch buchen" (statt „Let's talk!" / „Termin vereinbaren" / „Jetzt einfach kontaktieren" nebeneinander).
- **Preis-Anker je Stufe** ergänzen („Essential-Onboarding ab € X", „Advanced-Retainer ab € X/Monat" oder Tagessatz-Korridor).
- **Self-Check** prominent neben das Stufenmodell und auf die Startseite („In 3 Minuten euren HubSpot-Reifegrad testen — ohne Termin").
- **FAQ ausbauen:** echte Phasen + Deliverables je Phase; 2–3 technische/Security-/Datenhaltungs-Fragen ergänzen.
- **DSGVO-Sofortmaßnahmen:** „kein Profiling"-Satz streichen; DSE-Kontaktdaten ans Impressum angleichen.
- **Accessibility:** Orange abdunkeln bis ≥4,5:1 (z. B. #C44A28) oder CTAs dunkelblau; `:focus-visible`-Outline wiederherstellen; Inline-Links unterstreichen.
- **Strukturierte Daten (JSON-LD):** FAQPage aus den 7 bestehenden Fragen, Organization + LocalBusiness (Mediapark-Adresse, Tel., geo, sameAs) — Inhalte existieren bereits.

## 🎯 Strategische Hebel (größer, mittelfristig)

- **Proof-Layer aufbauen:** 2–3 Ergebnis-Cases mit harten Vorher/Nachher-Zahlen + on-page-Testimonials + eingebettetes HubSpot-Rating-Widget.
- **Eigene Assets als Beweis inszenieren:** Marketplace-App (PLZ-Lookup) als „Proof of Build", eigener HubSpot-Betrieb als NDA-freier Referenz-Case, Datenmodell-/Integrations-Artefakt zeigen.
- **Content-/Ressourcen-Hub** in Topic-Clustern um die drei Leistungen (Onboarding-Guides, Integrations-Use-Cases, RevOps-Grundlagen) — schließt die komplette Top-of-Funnel-Reichweite und beweist zugleich die „Tiefe". Jeder Artikel verlinkt kontextuell auf Leistung + CTA.
- **Positionierung schärfen:** aus „Essential/Advanced/Excellence" (Good/Better/Best) ein benanntes, proprietäres Reifegrad-/Skalierungs-Framework machen, das die „eskaliert→skaliert"-Logik codiert; optional 1–2 Branchen-/Use-Case-Schwerpunkte statt breit „40–1.000 MA".
- **Zwei Einstiegspfade** direkt unter dem Hero trennen: „Ihr nutzt HubSpot schon" (Optimierung/Audit/Self-Check) vs. „Ihr plant den Einstieg" (Auswahl/Erstgespräch) — heute zu einer Botschaft verschmolzen.
- **Risk-Reversal produktisieren:** ein fixpreisiges „HubSpot-Health-Audit" mit definiertem Deliverable, bei Beauftragung verrechenbar; den kostenlosen Self-Check explizit als „risikofreier erster Schritt" rahmen.
- **DSE + Consent rechtssicher** neu aufsetzen (Kanzlei/HubSpot-Modul, Opt-in-Banner mit gleichwertigem Ablehnen) — zugleich Compliance und Kompetenzbeweis.
- **Karriereseite/EVP** anlegen (im Footer verlinkt): Tech-Stack, Arbeitsweise, Remote-/Weiterbildungs-Politik, Initiativbewerbung — die Talent-Zielgruppe ist heute komplett unsichtbar.
- **Performance/Technik:** Hero und `/hubfs/`-Bilder auf WebP/`hs-fs` + `srcset` umstellen (Hero als echtes `<img fetchpriority=high>`), Legacy-Animations-Stack (jQuery 1.7.1 + TweenMax + ScrollMagic) entschlacken/`defer`.

---

## Blick der Personas

- **Geschäftsführer:in (ROI/Risiko/Vertrauen):** *Konvertiert nicht.* Erkennt sich dank „Passt CogniCore zu euch?" in Sekunden als Zielkunde und schätzt die transparente Vertragslogik — steigt aber aus, weil kein einziger Beleg (Case, Zahl, Referenz, Preis) das Risiko bewertbar macht und das Team gesichtslos bleibt. Fehlt konkret: 2–3 Referenzen mit harten Zahlen, Klarnamen der GF, ein Budget-Anker.
- **Fach-Lead / Head of RevOps (operativer Projektpartner):** *Überzeugt, aber nicht argumentationsfähig.* Fühlt sich sprachlich exakt getroffen (Datenmodell, Integration, Silos aufbrechen), kann den Partner intern aber nicht verkaufen, weil Datenmodell-/Integrations-Tiefe und die Mess-Ebene (Attribution/Forecast/SLA) nirgends konkret werden. Fehlt: ein echtes Artefakt (Zielbild/Mapping), ein Ergebnis-Case, ein sichtbares Reporting-Angebot.
- **IT-Evaluator / CTO:** *Gibt nicht frei.* Findet Integration korrekt als dritte Kernleistung, liest den Text aber als Marketing-Prosa ohne Engineering-Substanz — keine Protokolle, keine belegte Referenz, nur Methodik-Badges, und — am schwersten — kein Wort zu Datenschutz/Datenhaltung/API-Security. Fehlt: technischer Deep-Dive, benannte Zielsysteme, DSGVO-/EU-Residency-Baustein.
- **Bewerber:in (HubSpot-/RevOps-Fachkraft):** *Kann sich faktisch nicht bewerben.* Findet das Umfeld fachlich attraktiv (Zertifizierungen, Flexibilität, sympathisches Büro), aber keine Karriereseite, keinen Job-/Bewerbungspfad und ein anonymes Team ohne Rollen. Fehlt: `/karriere` mit EVP (Weiterbildungsbudget, Remote-Policy, Projektalltag) und ein Initiativbewerbungs-CTA.

---

## Was CogniCore unbedingt behalten sollte (Stärken)

- **Der Claim „Damit es skaliert, nicht eskaliert!"** — ein ownable Wortspiel mit echter Spannung, das kaum ein anderer Partner so führt.
- **Der scharfe ICP + die „Passt CogniCore zu euch?"-Selbstqualifizierung** (6 konkrete Kriterien) — seltener, vertrauensbildender Fit-Filter, der die Lead-Qualität hebt.
- **Der differenzierende Standpunkt** „keine klassische Marketing-Agentur, sondern Tiefgang in Datenmodell und Solution Design" — der wertvollste Rohstoff der Positionierung (nur falsch platziert).
- **Ehrliche, druckfreie Angebotslogik:** „ein Termin, kein Pitch", Essential „ohne langfristige Bindung", faire Kündigungsfristen, Antwort „innerhalb eines Werktags" — nimmt gebrannten Käufern die Knebelvertrag-Angst.
- **Saubere Informationsarchitektur:** konsistente Navigation, gespiegeltes Leistungs-/Stufenmodell, aufklappbares FAQ-Accordion, persistenter CTA.
- **Solides technisches & rechtliches Fundament:** starkes Server-/Caching-Setup, korrektes Impressum, Newsletter-Double-Opt-in, vorbildliches Formular-Labeling und saubere HTML-Semantik.
- **13 HubSpot-Zertifizierungen** als glaubwürdiges Kompetenzsignal (Table-Stakes, aber vorhanden).

---

## Empfohlene nächste Schritte (nummeriert, priorisiert)

1. **Team entanonymisieren** — Nachnamen, Rollen, Bios, LinkedIn, GF nach vorn. *(Höchste Wirkung pro Aufwand; behebt Top-Priorität 2 in Stunden.)*
2. **DSGVO-Risiko entschärfen** — „kein Profiling"-Satz sofort streichen, DSE-Neuaufsetzung mit HubSpot-Modul beauftragen, Consent-Banner auf Opt-in mit gleichwertigem Ablehnen. *(Rechtliches Abmahnrisiko zuerst weg.)*
3. **Echte Buchung ermöglichen** — HubSpot-Meetings-Scheduler in `#talk` und `/kontakt` einbetten. *(Behebt den teuersten Funnel-Bruch, technisch minimal.)*
4. **Hero & Home-Title neu** — POV in die Subline, Proof-Zeile darunter, keyword-tragender Title/H1. *(Positionierung + SEO in einem redaktionellen Schritt.)*
5. **Vorhandene Beweise inszenieren** — Marketplace-App als „Proof of Build", eigener HubSpot-Betrieb als Case, Self-Check als Micro-Conversion prominent platzieren. *(Günstigster Weg zu Trust — Assets existieren bereits.)*
6. **Proof-Layer bauen** — 2–3 Ergebnis-Cases mit Zahlen + on-page-Testimonials + HubSpot-Rating-Widget. *(Löst das meistbelegte Finding, braucht Kundenfreigaben → parallel starten.)*
7. **Preis- & Ablauf-Transparenz** — „ab"-Anker je Stufe, sichtbares Phasenmodell mit Deliverables, FAQ-Nicht-Antworten schließen.
8. **Redaktioneller Konsistenz-Pass** — Anrede durchgängig „ihr", CTA-Label vereinheitlichen, Accessibility-Fixes (Kontrast, Fokus-Outline, Link-Unterstreichung).
9. **Technische Tiefe belegen** — Mini-Architekturdiagramm, benannte Zielsysteme, technische/Security-FAQ, Datenschutz-/Datenhaltungs-Baustein.
10. **Reichweite & Talent mittelfristig** — Content-/Ressourcen-Hub (Topic-Cluster + Lokal-SEO Köln, JSON-LD), zwei Käufer-Einstiegspfade, Risk-Reversal-Audit-Produkt und eine `/karriere`-Seite mit EVP; Performance-Optimierung des Hero-/Bild-Stacks.
