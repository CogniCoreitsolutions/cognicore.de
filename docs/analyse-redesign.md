<!-- Re-Analyse des ueberarbeiteten Auftritts new.cognicore.de — dieselben 13 Rollen, 2026-07-15. -->
<!-- Vorher/Nachher-Gegentest inkl. Resolution-Check der 6 Alt-Findings. Adversarial verifiziert. -->

# Re-Analyse: new.cognicore.de (überarbeiteter Auftritt)

*Chef-strategische Synthese aus 13 Rollen-Findings, Fact-Check und Vollständigkeits-Kritik. Fact-Check-Korrekturen sind eingearbeitet (siehe Fußnoten zu Tier und Zertifikaten). Belege stützen sich auf die von den Rollen zitierten, im Fact-Check verifizierten Seiten- und Code-Elemente.*

---

## Executive Summary — die 5 wichtigsten Erkenntnisse

1. **Der Relaunch ist ein echter Sprung — von „gesichtsloser Generalisten-Agentur" zu „erkennbarem, differenziertem HubSpot-Spezialisten mit Haltung."** Vier der sechs Alt-Findings sind sichtbar adressiert (Positionierung, Team, Datenschutz, Proof-Ansatz). Nahezu jede Rolle bestätigt das unabhängig. Der Engpass hat sich verschoben: nicht mehr Botschaft oder Design, sondern **Beweis und Mechanik**.

2. **Die mit Abstand solideste, mehrfach unabhängig bestätigte Lücke ist der fehlende Kunden-Proof.** GF, CRO, Wettbewerbs-Stratege, misstrauischer Käufer und RevOps-Lead steigen alle an derselben Stelle aus: Der Proof-Band „Belegt, nicht behauptet" enthält **ausschließlich Selbstauskünfte** (13 Zertifizierungen, 10+ Jahre, 1 eigene App). Kein Case, kein Logo, keine Outcome-Zahl. Kompetenz ist belegt — ein Geschäftsergebnis nicht.

3. **Der wichtigste Conversion-Punkt trägt mechanisch nicht — bekannt, aber teuer.** Alle Primär-CTAs münden in ein Formular mit `action="#"`, ohne eingebetteten Scheduler. Alt-Finding 6 („Buchen bucht nicht") ist **sprachlich gelöst, mechanisch nicht**. Das ist ein bewusster Staging-Stand, trifft aber exakt das einzige Seitenziel. Zusätzlich entsteht auf Wording-Ebene eine neue Erwartungslücke (ein Verb „vereinbaren" für Buchen, Anfragen und Self-Check).

4. **Der stärkste, uneinholbare Eigenbeweis liegt brach.** Die eigene HubSpot-Marketplace-App wird als „Proof of Build" prominent beschrieben, ist aber **nirgends verlinkt** und taucht auf /leistungen gar nicht auf — für einen technischen Käufer damit unverifizierbar. Das ist ein Quick-Win mit hoher Hebelwirkung.

5. **Roter Faden über alle blinden Flecken: CogniCore lebt die eigene Kernbotschaft am eigenen Auftritt nicht konsequent nach.** Ein datengetriebener RevOps-Partner **misst die eigene Conversion nicht** (kein Analytics), ein Inbound-Haus **betreibt keinen eigenen Inbound-Funnel**, und die überzeugendste live erlebbare Bau-Story (Migration HubSpot CMS → statisches Astro) wird **nicht erzählt**. Dasselbe „behaupten statt zeigen"-Muster wie inhaltlich — nur eine Ebene höher, auf der Ebene des Dogfoodings.

---

## Resolution der 6 Top-Findings der Vorgänger-Analyse

| # | Alt-Finding | Status | Begründung mit Beleg |
|---|-------------|--------|----------------------|
| 1 | Kein Proof-Layer | **Teilweise** | Capability-Proof ist da (Proof-Band „Belegt, nicht behauptet": „13 Zertifizierungen", „10+ Jahre HubSpot-Projekterfahrung", „1 eigene App im HubSpot Marketplace", „Offizieller HubSpot Solutions Partner"). Aber ausnahmslos **Selbstauskünfte** — kein Case, kein Testimonial, kein Kundenlogo, keine Ergebniszahl. Fähigkeit belegt, Ergebnis nicht. |
| 2 | Gesichtsloses Team | **Weitgehend behoben** | /ueber-uns zeigt sieben Personen mit Namen und Rollen, GF Siegers/Lohmar mit Foto vorn, echte Karriere-Sektion. Rest-Delta: die übrigen fünf nur mit **Vornamen**, kein Nachname/LinkedIn, drei nur als Initialen-Avatar (u. a. HR-Rolle Lara). |
| 3 | „Technische Tiefe" nur behauptet | **Teilweise** | Großer Fortschritt im Vokabular: FAQ nennt native Konnektoren, „Middleware (z. B. Make/n8n)", „REST-/Webhook-Schnittstellen", „OAuth, Least-Privilege", Zielsysteme ERP/DATEV/SAP, Migration aus Salesforce/Pipedrive/Excel. Aber **kein einziges gezeigtes Beispiel**: keine Referenzarchitektur, kein Datenmodell-Vorher/Nachher, keine Deliverable-Liste — und die Marketplace-App ist nicht verlinkt. |
| 4 | Datenschutz passt nicht zur Technik | **Behoben (im aktuellen Zustand)** | DSE ist technik-ehrlich und im Code verifiziert: „keine Cookies … ein Cookie-Consent-Banner ist daher nicht erforderlich" ist heute belegbar richtig (nur lokal preloadete Raleway, inline JSON-LD, keine Drittanbieter-Requests). **Caveat:** ein HubSpot-Client-Embed macht die Aussage falsch → Go-live-Gate (siehe Top-Prio 4). |
| 5 | Positionierung/POV begraben | **Behoben** | Hero „HubSpot, das skaliert — nicht eskaliert." + „Kein klassisches Marketing … Tiefgang in Datenmodell, Prozess- und API-Integration". Titles/H1 keyword- und Köln-front-loaded, POV in JSON-LD. Sauberste Auflösung der sechs. Kleines Rest-Delta: Der Signatur-Claim wird nicht durchgetragen (vier konkurrierende Hero-Frames). |
| 6 | „Buchen" bucht nicht | **Offen (sprachlich gelöst, mechanisch nicht)** | Primär-CTA seitenübergreifend vereinheitlicht auf `/kontakt#termin`. Dort aber `method="post" action="#"` (kontakt.astro:24 **und** index.astro:218), kein eingebetteter Scheduler, Fallback „Rufen Sie uns an". **Bekannter, bewusster Staging-Stand** — aber am wärmsten Funnel-Punkt real spürbar. |

**Bilanz:** 2 klar behoben (4, 5), 1 weitgehend behoben (2), 2 teilweise (1, 3), 1 offen (6). Die zwei unaufgelösten Findings — **Kunden-Proof** und **Buchungsmechanik** — sind genau die, an denen Deals entschieden werden, und exakt die Angriffsflächen, die der Wettbewerbs-Stratege benennt.

---

## Gesamteindruck & Reifegrad (vorher/nachher)

**Vorher (alte HubSpot-CMS-Seite):** helle Standard-Agentur-Anmutung, begrabene Positionierung, reine Behauptungen, anonymes Team, Datenschutz-Boilerplate ohne Technik-Deckung. Austauschbar.

**Nachher:** ein System statt Einzelteilen. Navy-dominantes Design System, scharfer POV oberhalb der Falz, ein ownable Claim, ein echtes Team, ein einwand-bewusster Prozess (8 Wochen, fünf Phasen), eine technik-ehrliche DSE — und ein technisch grundsolides Fundament: statisch, ~1 KB deferrtes JS, textbasiertes LCP, saubere Einzel-H1-Hierarchie, einzigartige Titles/Metas, konsistente NAP-/JSON-LD-Signale, semantisch korrekte a11y-Basis.

**Reifegrad differenziert:**
- **Botschaft/Design/Markenreife: hoch.** Praktisch launch-fähig.
- **Technik-/SEO-/a11y-Fundament: hoch, mit wenigen konkreten Asset- und Token-Korrekturen.**
- **Beweis-Reife: niedrig.** Alles ruht auf Selbstbeschreibung.
- **Conversion-Mechanik: pre-launch.** Der Funnel baut Intent sauber auf und lässt ihn an der letzten Stelle abreißen.

Kurz: Der Auftritt wirkt jetzt **kompetent und sympathisch**, aber noch nicht **beweisbar und abschließbar**. Der Sprung von „klingt fundiert" zu „liefert nachweislich" steht noch aus — und ist überwiegend Text- und Mechanik-Arbeit, kein Redesign.

---

## Neue Top-Prioritäten (Schwere: hoch)

### 1. Null Kunden-/Ergebnis-Proof — der ROI bleibt unbelegbar
- **Problem:** Der gesamte Proof-Layer ist Selbstauskunft. Es fehlt der eine Beweis, den jeder Buyer sucht: „Haben die das für jemanden wie mich schon geschafft?"
- **Beleg:** Proof-Band „Belegt, nicht behauptet" = „13 Zertifizierungen / 10+ Jahre / 1 eigene App / Offizieller HubSpot Solutions Partner". Über Start, /leistungen und /ueber-uns hinweg **kein** benannter Kunde, Logo, Case, Testimonial oder quantifiziertes Ergebnis (Migrationsvolumen, Adoption, Time-to-Value). FAQ „Was kostet das?" → „im Erstgespräch".
- **Perspektiven:** Geschäftsführer (#0), CRO (#2), Wettbewerbs-Stratege (#0), misstrauischer Käufer (#0), RevOps-Lead und Marken-Stratege bestätigen es unabhängig — die am häufigsten und solidesten belegte Lücke der gesamten Analyse.
- **Empfehlung:** Mit Kundenfreigabe **1–3 anonymisierte, aber quantifizierte Mini-Cases** (Ausgangslage → Maßnahme → messbares Ergebnis, z. B. „Maschinenbauer, 180 MA: Salesforce→HubSpot in 8 Wochen, Angebotsdurchlaufzeit 5→1,5 Tage"). Solange Freigaben fehlen, **den bereits extern existierenden Fremd-Proof einbinden statt zu erfinden**: HubSpot-Solutions-Directory-Reviews (verifizierte Kundenbewertungen), Google Business Profile, ProvenExpert — plus `sameAs` im JSON-LD. Das schließt die „nur Selbstauskunft"-Lücke ohne Integritätsbruch (Ergänzung aus der Vollständigkeits-Kritik).

### 2. Buchungsmechanik tot + neue Verb-/Self-Check-Erwartungsbrüche (BEKANNT, aber teuerste Baustelle)
- **Problem:** Der zentrale Conversion-Moment liefert nicht, was er verspricht — und das ein Verb „vereinbaren" bedient gleichzeitig Buchen, Anfragen und Self-Check.
- **Beleg:** `action="#"` auf beiden Formularen (kontakt.astro:24, index.astro:218); Anker `#termin` ist nur der Sektions-Wrapper, kein Kalender; Fallback „Rufen Sie uns an". Der Hero-CTA „Self-Check anfragen" (index.astro:189) zeigt auf denselben `/kontakt#termin` — es gibt keinen eigenen Self-Check-Funnel; im Dropdown ist „Kostenloser Self-Check" nur eine von sechs Betreffzeilen. Submit-Button heißt „Erstgespräch vereinbaren", auch wenn man über „Self-Check" kam.
- **Perspektiven:** CRO (#0/#1), UX (#0/#1/#2), Geschäftsführer (#3), misstrauischer Käufer (#4), Wettbewerbs-Stratege (#3). Der Wettbewerber formuliert die Steilvorlage: „Der HubSpot-Experte kriegt sein eigenes HubSpot-Meetings-Setup nicht live."
- **Einordnung:** Bekannter, bewusster Staging-Punkt — **kein kritischer Bug**, aber am wärmsten Funnel-Punkt die conversion-seitig teuerste Reibung. `noindex` schützt aktuell davor, dass Traffic ins Leere läuft.
- **Empfehlung:** Vor Go-live HubSpot-Meetings-Scheduler unter `#termin` einbetten und Forms-API scharf schalten (**Gate beachten, siehe Prio 4**). **Sofort, ohne Backend:** Verben trennen — „vereinbaren" nur, wo wirklich gebucht wird; alle Wege ins Nachrichtenformular als „Anfrage senden"/„Kontakt aufnehmen" labeln; die Self-Check-Sektion ehrlich als Angebot framen oder zurückstellen; Dropdown-Option „Self-Check" bis zum Bau entfernen oder „in Kürze" markieren.

### 3. Technische Tiefe wird gesagt, aber nicht gezeigt — und der stärkste Eigenbeweis ist nicht verlinkt
- **Problem:** Der Kern-USP „Tiefgang in Datenmodell & Solution Design" hängt allein an Stichworten und einer Nischen-App, die man nicht prüfen kann.
- **Beleg:** FAQ „Wie integrieren Sie HubSpot technisch …?" ist ein korrekter Einzeiler ohne Trade-off-Logik. Die Marketplace-App wird als „Proof of Build" beschrieben („steht öffentlich im HubSpot Marketplace", index.astro:167), aber es existiert **kein einziger Outbound-`href`** zum Listing, und auf /leistungen kommt sie nicht vor (im Fact-Check verifiziert). „Jede Phase hat definierte Deliverables" — die Deliverables selbst werden **nirgends aufgelistet**.
- **Perspektiven:** IT-Leitung/CTO (#0/#1), RevOps-Lead (#0/#1), Wettbewerbs-Stratege (#0/#4), Marken-Stratege (#3), Geschäftsführer (#1).
- **Empfehlung (überwiegend Quick-Wins):** (a) Marketplace-App direkt verlinken (+ Repo, + Kurz-Steckbrief: Scopes, Datenfluss, Authentifizierung) und auf /leistungen im Integrations-Kontext verankern. (b) Ein anonymisiertes Referenz-Schema zeigen (Ausgangssystem → Middleware/Custom-API → HubSpot, mit Sync-Richtung/Objekten/Fehlerbehandlung). (c) Pro Phase 2–3 konkrete Deliverables benennen. (d) **Die eigene Migration HubSpot CMS → statisches Astro als zweites, live erlebbares Bau-Artefakt erzählen** — entkräftet direkt das „Tiefe nur behauptet"-Finding (Ergänzung aus der Vollständigkeits-Kritik).

### 4. HubSpot-Embed kippt die „keine Cookies"-Aussage — hartes Go-live-Gate
- **Problem:** Die DSE ist heute korrekt, wird aber durch einen einzigen Embed-Commit rechtswidrig.
- **Beleg:** datenschutz.astro:41 sagt wörtlich „keine Cookies … Consent-Banner nicht erforderlich". Die Roadmap sieht HubSpot-Forms-/Meetings-Embed vor. Ein Client-Embed lädt Drittdomain-JS und setzt Cookies (hubspotutk, __hstc, __hssc) → DSE-Kernaussage objektiv falsch, § 25 TDDDG-Consent zwingend, CSP muss geöffnet werden.
- **Perspektiven:** Web-Recht/DSGVO (#0). Aktuell **kein Verstoß** (nichts eingebettet) — aber die Weichenstellung ist scharf.
- **Empfehlung:** Als Gate festschreiben: **entweder** serverseitige HubSpot Forms API nutzen (POST ohne Client-JS/Cookies → bleibt cookiefrei, DSE stimmt weiter) **oder** Consent-Layer + DSE-Update + CSP-Freigabe gemeinsam ausrollen. Die Hinweis-Karte in datenschutz.astro:56 in einen echten Checklisten-Punkt überführen.

### 5. Accessibility: weißer Text auf Orange erreicht nur 3,15:1 — WCAG 1.4.3 Fail auf dem wichtigsten Button
- **Problem:** Der zentrale Conversion-Button verfehlt die Kontrast-Mindestanforderung messbar — und das ist bereits als CLAUDE.md-Aufgabe notiert, jetzt bestätigt als realer Verstoß, nicht nur „zu prüfen".
- **Beleg:** `.cc-btn--accent{ background:#EC6945; color:#fff }` bei 14px/600 → gemessen 3,15:1 (nötig: 4,5:1). Betrifft „Erstgespräch vereinbaren" in Nav, Mobile-Menü, Formular, jeder Seiten-CTA. Ebenso Orange-auf-Weiß bei bedeutungstragenden Team-Rollen/Card-Links (3,15:1) und Blau-300 auf Navy (4,23:1).
- **Perspektiven:** Accessibility-Spezialist (#0/#1/#2).
- **Empfehlung:** Ein dunkleres Akzent-Token für Flächen mit weißem Text (Ziel ≥4,5:1, Richtung #B8431F/#C24A2A) — **die Design-System-Invariante „Orange nur Akzent" bleibt gewahrt**, es ändert sich nur die Nuance. Blau-300 leicht aufhellen. Vor dem Entfernen des `noindex` umsetzen. Hohe Schwere, kleiner Aufwand.

---

## Weitere Findings (mittel)

- **Kein Preis-/Größen-Anker.** FAQ „Was kostet das?" → „transparent im Erstgespräch"; keine Ab-Preis-, Range- oder Tagessatz-Angabe. ROI = Nutzen/Kosten, und die Seite liefert weder Zähler noch Nenner. Filtert unpassende Leads nicht vor, lässt passende mit „kann ich mir das leisten?" zurück. *(GF #4, CRO #4, Wettbewerber #2, misstrauischer Käufer #1)*
- **Team nur halb entanonymisiert.** Nur GF mit Nachname; Rest Vorname + Rolle, kein LinkedIn, drei nur Initialen-Avatar — ausgerechnet HR (Lara) und die beiden Frauen ohne Bild. Der erste Team-Eindruck auf der Startseite sind vier Männer mit Foto. *(Bewerber #4, misstrauischer Käufer #3, Wettbewerber #5)*
- **Managed-IT-Säule verwässert die Spezialisten-Story.** Die dritte, gleichrangige Säule („Managed IT, Microsoft 365, Security & Compliance, Satelliten-Modell, 50–500 Arbeitsplätze") zieht den scharfen HubSpot-Spezialisten Richtung generischen IT-Dienstleister. Security-Säule zudem technisch unbelegt (keine Norm/Prozess/Nachweis). Nebenbei: ICP 40–1000 MA vs. Managed-IT 50–500 — Segmentierung nicht ganz scharf. *(Marken #1/#4, Wettbewerber #5, CTO #3)*
- **Der beste Claim wird nicht durchgetragen.** „skaliert, nicht eskaliert" erscheint genau einmal; jede Folgeseite startet mit einem anderen Frame. Wiedererkennung verpufft. *(Marken #0)*
- **Drei-Stufen-Modell differenziert über Bindung/Support, nicht über Outcome.** Essential/Advanced/Excellence = Commitment-Achse; der Buyer kann sich nicht am Geschäftsergebnis verorten. Tier-Namen austauschbar. *(RevOps #2, Marken #4)*
- **Karriere/Recruiting schwach eingelöst.** Keine ausgeschriebene Rolle (nur „Initiativ bewerben" auf `mailto:info@`), obwohl es mit Lara eine HR-Rolle gibt, die nirgends direkt ansprechbar ist. Benefits behauptet, nicht konkretisiert. Karriere nur per Footer/Anchor auffindbar, kein Nav-Punkt. *(Bewerber #0/#1/#2/#3)*
- **Kapazitäts-/Seniority-Signal.** Sichtbar 2 GF + ein Consultant + ein Junior + ein Werkstudent, dazu Basis-Tier — vs. „Excellence: SLA für mehrere Teams". Für 500–1000-MA-Rollout ein Bus-Faktor-Einwand. *(GF #2, Wettbewerber #5)*
- **Performance-Assets.** 311.856-Byte-Raleway-**TTF ohne WOFF2**, per Preload im kritischen Pfad (~150–190 KB Einsparpotenzial); Content-JPGs 180–223 KB ohne WebP/AVIF; 45-KB-PNG-Logo für 150×34 px; Font-Swap ohne Fallback-Metrik = einziges reales CLS-Risiko. *(Performance #0/#1/#2)*
- **DSE-Detaillücken (BEKANNT, für anwaltliche Abnahme).** HubSpot-Abschnitt nennt nur „EU-Speicherung" ohne SCC/EU-US-DPF-Logik für US-Mutter; es fehlen Server-Log-Speicherdauer, Aufsichtsbehörde (LDI NRW), DSB-Satz. *(Web-Recht #4)*
- **Null Web-Analytics — Dogfooding-Widerspruch (NEU).** Kein Plausible/Matomo/GA. Ein datengetriebener RevOps-Partner kann beim Go-live die eigene Conversion nicht messen — keine Absprungpunkte, keine Wirksamkeitskontrolle des Redesigns. Positionierungs-Inkonsistenz. *(Vollständigkeits-Kritik #1)*
- **Kein niedrigschwelliger Inbound-Funnel (NEU).** Einziger Pfad ist High-Commitment „Erstgespräch". Kein Newsletter/Lead-Magnet/E-Mail-Capture — ein Inbound-Haus, das selbst kein Inbound lebt; 95 % nicht-sofort-bereite Besucher verpuffen spurlos. *(Vollständigkeits-Kritik #3)*

---

## ⚡ Quick Wins

*Alle in Stunden bis maximal einem Nachmittag, überwiegend Text/Token/Config — kein Redesign.*

1. **Marketplace-App verlinken** (Outbound-`href` zum Listing + Kurz-Steckbrief) und auf /leistungen verankern — schaltet den stärksten Eigenbeweis von „behauptet" auf „verifizierbar".
2. **Orange-Token für weißen Text abdunkeln** (≥4,5:1) + Blau-300 aufhellen — behebt den WCAG-1.4.3-Fail auf dem Primär-CTA.
3. **CTA-Verben ehrlich trennen** und Submit-Button auf „Anfrage senden" — schließt die neue Erwartungslücke ohne Backend.
4. **Self-Check-Sektion ehrlich framen** / Dropdown-Option bis zum Bau entfernen oder „in Kürze".
5. **Consent-Zeile + /datenschutz-Link ins Startseiten-Formular** übernehmen (Gleichstand mit kontakt.astro; Art. 13 DSGVO am Erhebungspunkt).
6. **FAQPage-JSON-LD** aus dem bereits strukturierten 9-Fragen-Array serialisieren (Rich-Result-Chance, Rohmaterial liegt fertig vor).
7. **Tote hubfs-Logo-URL im JSON-LD reparieren** (Base.astro: `…/hubfs/Logos/…png` → lokales `/brand/`-Asset; `url` synchron zum Ziel halten).
8. **Raleway zu WOFF2** konvertieren (Subset latin/latin-ext), Preload umstellen — ~50–60 % Ersparnis am schwersten Einzeltransfer.
9. **sitemap.xml + robots.txt** vorbereiten (`@astrojs/sitemap`) für die Go-live-Checkliste.
10. **`aria-expanded`/Label-Toggle am Burger, Skip-Link `#inhalt`, `details[open]`-CSS** (+/− bzw. Rotation), `aria-current` am aktiven Nav-Link.
11. **Haftungsausschluss entrümpeln** — die „freibleibend und unverbindlich"/„LG Hamburg"-Museumsklausel widerspricht der Kompetenz-Positionierung; Haftung ist im Impressum bereits DDG-konform abgedeckt (Seite streichen oder knapp ersetzen).
12. **`404.astro` im Design System** anlegen (Nav + CTA) — GitHub-Pages liefert sonst off-brand 404; alte `/hubfs/`-Deep-Links werden nach Abschaltung genau hier auflaufen. *(Vollständigkeits-Kritik #5)*
13. **`public/.well-known/security.txt`** (RFC 9116) — billigstes Vertrauens-Signal, passt zur Security-Säule. *(Vollständigkeits-Kritik #6)*

---

## 🎯 Strategische Hebel

1. **Echte Cases + externer Reputationslayer.** Der eine Hebel, der aus „klingt kompetent" ein „liefert nachweislich" macht: 1–3 quantifizierte (auch anonymisierte) Cases plus Einbindung bereits extern vorliegender Fremdvalidierung (HubSpot-Directory-Reviews, Google/ProvenExpert, Kununu für Recruiting) und `sameAs`/LinkedIn. Ohne Integritätsbruch, mit maximaler Conversion-Wirkung.
2. **Content-/Wissens-Hub + dedizierte Leistungs-Landingpages.** Größter ungenutzter Ranking-Hebel: nur vier indexierbare Seiten, eine Sammel-Leistungsseite mit Keyword-Dilution (Onboarding/Integration/RevOps/Managed IT auf einer URL, nur über Anker). Astro Content Collections passen exakt zum „Team pflegt mit Claude Code"-Workflow. Zahlt zugleich auf die behauptete Tiefe (Datenmodell-/Integrations-Teardowns) und auf Frische-/Vitalitätssignale ein. *(SEO #0/#1, Wettbewerber #4, Vollständigkeits-Kritik #7)*
3. **Das eigene Dogfooding sichtbar machen.** Cookiefreies Analytics (Plausible/Matomo self-hosted — bricht die DSE-Aussage nicht), ein schlanker Inbound-Funnel über die ohnehin kommende Forms-API, der eigene Meetings-Scheduler und die eigene Migrations-Story als Proof-of-Build. Jeder Punkt ist zugleich gelebter Beweis des eigenen Angebots — und schließt genau den „behaupten statt zeigen"-Kern auf Meta-Ebene. *(Vollständigkeits-Kritik #1/#3/#4)*
4. **HubSpot-Fokus schärfen, Managed IT nachordnen.** Die dritte Säule als nachgelagerte Absicherung einrahmen („damit die HubSpot-Prozesse auch infrastrukturell tragen"), nicht als gleichrangiges Angebot — schützt die Spezialisten-Positionierung am oberen ICP-Ende. Den Signatur-Claim „skaliert, nicht eskaliert" durchtragen. *(Marken #0/#1, Wettbewerber #5)*
5. **Self-Check als echte niedrigschwellige Conversion-Stufe bauen** (wenige Fragen, automatisierter Mini-Report, E-Mail als einziges Pflichtfeld) — erzeugt die fehlende zweite Funnel-Stufe und qualifiziert Leads vor dem Gespräch. *(CRO #1)*

---

## Blick der Personas — konvertiert die Person jetzt?

**Geschäftsführer (ROI/Risiko/Vertrauen):** *Führt ein Erstgespräch — aber mit hoher Beweislast.* Versteht in unter 30 Sekunden Positionierung und Differenzierung; Team, Proof-Band und einwand-bewusste FAQ überzeugen. Steigt gedanklich an zwei Stellen aus: „Können die das für jemanden wie mich?" (fehlende Cases/Zahlen) und am Conversion-Punkt (keine Selbstbuchung). **Fehlt:** ein belegter Outcome und ein grober Preis-/Größen-Anker, um vorab einen Business Case zu bauen.

**Fach-Lead / RevOps (Tiefe vs. Buzzwords):** *Setzt CogniCore auf die Shortlist.* Fachvokabular und „30 Minuten, kein Pitch" treffen den Nerv — „hier sprechen Leute meine Sprache". Aber: „Wie läuft die Zusammenarbeit ab?" ist gut beantwortet, „Was genau bekomme ich?" und „Können die das wirklich?" nur teilweise. **Fehlt:** eine Deliverable-Liste und ein anonymisiertes Datenmodell-Beispiel — greifbare Artefakte, die er intern (GF/CFO) weiterreichen kann.

**IT-Evaluator / CTO (Integration/Security):** *Kompetenz plausibel signalisiert, noch zu wenig hart bewiesen.* Die technische FAQ und die tracking-freie DSE belegen glaubhaft, DASS CogniCore saubere Integration versteht. **Fehlt:** der Sprung zu „hier ist der Beweis" — der stärkste Trumpf (Marketplace-App) ist nicht verlinkt/verifizierbar, keine Referenzarchitektur, kein geregelter Umgang mit MEINEN Projekt-/ERP-Daten (AVV, Credentials, Subprozessoren, EU-Residenz während Migration), Security-Säule unbelegt.

**Bewerber (RevOps-Fachkraft, angestellt):** *Interessiert, aber die Hürde zum „Ja" ist zu hoch.* Attraktiver Kern (echte Karriere-Sektion, technisch ambitionierte Projekte, „direkter Draht zu den Gründern"). Vermittelt gut, WAS man täte — kaum, WIE es ist, dort zu arbeiten. **Fehlt:** mindestens eine echte ausgeschriebene Rolle, ein sichtbarer, ansprechbarer Recruiting-Kontakt (Lara statt anonymem info@), belegte statt behauptete Benefits, Auffindbarkeit (Nav/Index).

---

## Stärken des Relaunches (unbedingt behalten)

- **Scharfer, differenzierender POV im Hero** und der ownable Signatur-Claim „HubSpot, das skaliert — nicht eskaliert." — Alt-Finding 5 sauber gelöst.
- **Der „Proof of Build"-Gedanke und die eigene Marketplace-App** — der einzige, schwer kopierbare Eigenbeweis, den ein durchschnittlicher HubSpot-Marketing-Partner nicht liefern kann.
- **Technik-ehrliche, cookie- und trackingfreie DSE**, deckungsgleich mit der tatsächlichen Static-Architektur — hebt Alt-Finding 4 und ist ein reibungsarmer Erstkontakt ohne Consent-Layer.
- **Echtes Fachvokabular** (Make/n8n, REST/Webhook, Sync-Richtung, OAuth/Least-Privilege, ERP/DATEV/SAP) — trifft die reale Middleware-Landschaft, nicht Templates.
- **Greifbarer Prozess** (8 Wochen, fünf benannte Phasen) und der entwaffnende „30 Minuten, kein Pitch"-Ton.
- **Hohe visuelle und stimmliche Konsistenz** durch das Design System (Navy-Dominanz, Orange nur Akzent, //-Motiv, Raleway, formales „Sie", keine Emoji/Ausrufezeichen).
- **Grundsolides Technik-/SEO-/a11y-Fundament:** statisch, ~1 KB deferrtes JS, textbasiertes LCP, Bilder mit width/height + lazy, einzigartige keyword-front-loadete Titles und eigene Metas je Seite, korrekte Canonicals/NAP/JSON-LD, saubere Heading-/Landmark-Struktur, echter Fokus-Ring, respektiertes `prefers-reduced-motion`.
- **Vollständiges, aktuelles Impressum** (§ 5 DDG, § 18 MStV, HRB/USt) — deutlich über Branchenschnitt.

---

## Empfohlene nächste Schritte (priorisiert)

**A — Vor dem Go-live zwingend (Gates & Blocker):**
1. **Buchung scharf schalten:** HubSpot-Meetings-Scheduler unter `#termin` einbetten und Forms-API anbinden — **im Einklang mit dem Datenschutz-Gate** (serverseitige Forms API ODER Consent-Layer + DSE-Update + CSP gemeinsam).
2. **Accessibility-Kontrast fixen** (Orange-Token für weißen Text ≥4,5:1, Blau-300 aufhellen) — vor dem Entfernen des `noindex`.
3. **Go-live-Checkliste abarbeiten:** `noindex` entfernen, `site` in astro.config.mjs auf Apex, hubfs-Logo-URL im JSON-LD reparieren, sitemap.xml + robots.txt.
4. **Startseiten-Formular** um Consent-Zeile + /datenschutz-Link angleichen; `required`-Einwilligungswiderspruch (Rechtsgrundlage) auflösen.

**B — Sofort, hohe Wirkung, geringer Aufwand (parallel):**
5. **Marketplace-App verlinken** (+ Kurz-Steckbrief) und auf /leistungen verankern.
6. **CTA-Verben trennen, Self-Check ehrlich framen**, Submit-Button umbenennen.
7. **FAQPage-Schema** aus den 9 FAQs; **Raleway zu WOFF2**; **404-Seite**; **security.txt**; **Haftungsausschluss** entrümpeln; **aria-/Burger-/details-a11y-Details**.

**C — Beweis-Schicht (der entscheidende Hebel, mittelfristig):**
8. **1–3 anonymisierte, quantifizierte Cases** beschaffen (Freigaben nachziehen).
9. **Externen Reputationslayer einbinden** (Directory-Reviews, Google/ProvenExpert, Kununu, LinkedIn + `sameAs`).
10. **Ein gezeigtes Tiefen-Artefakt** (Referenz-/Datenfluss-Schema, Deliverable-Liste je Phase, eigene Migrations-Story als Proof-of-Build).
11. **Preis-/Größen-Anker** je Stufe (Ab-Preis/Range), Tier über Outcome statt nur Bindung differenzieren.

**D — Strategisch (nach Launch, planbar):**
12. **Content-/Wissens-Hub + dedizierte Leistungs-Landingpages** (SEO-Tiefe, interne Verlinkung, Frische-Signale).
13. **Eigenes Dogfooding sichtbar machen:** cookiefreies Analytics, niedrigschwelliger Inbound-Funnel/Self-Check als echte zweite Stufe, eigener Scheduler.
14. **Positionierung schärfen:** HubSpot-Kern über „und mehr" stellen, Managed IT nachordnen, Signatur-Claim durchtragen; DSE anwaltlich final (US-Zugriff/SCC-DPF, Speicherdauer, Aufsichtsbehörde); Karriere ausbauen (echte Rolle, Recruiting-Kontakt, Nav-Punkt); Team konsistent (Nachnamen/LinkedIn/Fotos für Delivery-Rollen).

---

*Einordnung der bekannten offenen Punkte:* Formulare/Scheduler, Self-Check-Funnel, `noindex`, fehlende Cases und die noch nicht anwaltlich finalisierte DSE sind **bewusste, dokumentierte Staging-Zustände** — realistisch bewertet als Baustellen der Go-live-Phase, nicht als Überraschungen oder kritische Bugs. Ihre Wirkung ist real (sie treffen teils das Kern-Seitenziel), aber terminierbar. Der eigentliche, dauerhafte strategische Engpass bleibt davon unberührt: **belegte Ergebnisse statt Selbstauskunft — und das eigene Angebot am eigenen Haus sichtbar praktizieren.**
