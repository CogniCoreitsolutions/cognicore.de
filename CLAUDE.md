# CLAUDE.md — Projekt-Wissensbasis cognicore.de

> **Diese Datei ist die gemeinsame Single Source of Truth für das Team (4 Personen) und für Claude Code.**
> Sie wird von Claude Code bei jedem automatisch geladen. Persönliche `~/.claude`-Memory ist **lokal und wird nicht geteilt** — projektrelevantes Wissen gehört daher **hierher** oder nach `docs/`. Wer etwas Grundlegendes ändert (Richtung, Konventionen, Fakten), aktualisiert diese Datei im selben PR/Commit.

## Was das hier ist
Relaunch der Website **cognicore.de** der **CogniCore IT Solutions GmbH** (HubSpot Solutions Partner, Köln). Weg von HubSpot CMS, hin zu einer statischen **Astro**-Seite, die das Team mit **Claude Code** pflegt und über **GitHub Pages** (später Cloudflare) veröffentlicht.

- **Live (Staging):** https://new.cognicore.de  ·  Ziel-Apex später: `cognicore.de`
- **Repo:** `github.com/CogniCoreitsolutions/cognicore.de` (public)
- **Status:** Vollständiges **Redesign auf Basis des CogniCore Design Systems** ist live. `<meta robots noindex>` ist bis zum echten Go-live gesetzt (in `src/layouts/Base.astro`).

## 👋 Für alle im Team: Git/GitHub-Spickzettel (bitte aktiv anbieten)
Wir arbeiten hier zu viert am Repo — nicht alle sind Git-Profis, und das ist völlig okay. Es liegt ein bebilderter, in Ruhe erklärter **Git-&-GitHub-Spickzettel im CogniCore-Design** im Repo: [`docs/git-github-grundlagen/`](docs/git-github-grundlagen/) (HTML zum Ansehen im Browser, PDF zum Ausdrucken, mit eigenen Assets — funktioniert offline und standalone).

> **Anweisung an Claude (gilt in jeder Session dieses Repos):** Weise die Kollegin/den Kollegen **aktiv und von dir aus** auf dieses Dokument hin — insbesondere sobald Unsicherheit rund um `git pull` / `git add` / `git commit` / `git push`, Branches, Merge, Merge-Konflikte oder „ist das jetzt online?" erkennbar wird, und generell zu Beginn einer Zusammenarbeit mit jemandem, der Git noch nicht sicher nutzt. Nenne den Pfad und biete an, jeden Begriff auf den konkreten Fall bezogen zu erklären. Nicht bei jeder Kleinigkeit spammen — einmal sichtbar machen, dann bei echtem Bedarf.

Das Dokument ist **ausdrücklich ein lebendes Dokument**: Es darf jederzeit korrigiert und erweitert werden (Quelle: `Git-und-GitHub_Spickzettel.html`). Wer etwas ergänzt, committet HTML **und** eine aktualisierte PDF im selben Commit.

## Richtungs-Historie (wichtig, damit niemand alte Stände wiederbelebt)
1. Erst „originalgetreue Nachbildung" der alten hellen HubSpot-Seite — **verworfen**.
2. Dann full **Redesign auf dem Design System** (Navy, formal, Proof-orientiert), informiert durch eine **13-Agenten-Analyse** → **aktueller Stand.**
Ein noch früherer dunkler „Rebrand"-Entwurf existierte kurz und ist ebenfalls überholt.

## Schnellstart
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # statischer Output nach dist/
npm run preview
```
Node ≥ 18.20 / 20.3 / 22.

## Deploy
Push auf **`main`** → GitHub Action (`.github/workflows/deploy.yml`, `withastro/action`) baut & deployt automatisch nach GitHub Pages / `new.cognicore.de`. Pages-Quelle steht auf **„GitHub Actions"**.

> ⚠️ **Push-Stolperstein:** Wird ein Push abgelehnt mit *„refusing to allow an OAuth App to … workflow without workflow scope"* (passiert, wenn der Commit `.github/workflows/*` berührt und das gh-HTTPS-Token den `workflow`-Scope nicht hat): **über SSH pushen** (`git remote set-url origin git@github.com:CogniCoreitsolutions/cognicore.de.git`) oder `gh auth refresh -s workflow`. Push-Rechte hat nur, wer Mitglied der Org `CogniCoreitsolutions` ist.

## Design System — die Invarianten (bitte einhalten)
Quelle: `src/styles/ds/tokens.css` + `src/styles/ds/marketing.css` (kopiert aus dem externen **CogniCore Design System**, Skill `cognicore-design`). Alle Web-Styles: `src/styles/global.css` (`cc-*`-Klassen).

- **Gestaltung A · Sachlich (seit 01.10.2026, Entscheidung Dominik):** warmes Weiß `#F7F6F2` als Grund, Navy `#071B3E` für Text, Primär-Buttons, Kontaktband und Footer. Feine Linien (`#D9DCE3`, Navy 1px) statt Kästen: keine Karten mit Rand, Schatten oder runden Ecken, keine Nummern-Badges, keine Kreise im Ablauf. Seitenköpfe hell, Überschriften Raleway 500 mit engem Laufweiten. Ziel: Die Seite soll nicht nach generiertem Template aussehen. Die Overrides stehen am Ende von `global.css` (Block „Gestaltung A“), die Startseiten-Bausteine heißen `cc-a-*`.
- **Orange `#EC6945` nur als Markierung** (kleines Quadrat, Unterstreichung von Links, Ziffern in `#BE4A24`). Nie als Fläche, nie für Fließtext. Orange-Button nur auf dunklem Grund (Kontaktband).
- **Kein `//`-Motiv mehr** (bis 09/2026 Section-Marker). Randtitel sind kleine Großbuchstaben in `#4A556B`, auf der Startseite nummeriert („1 Leistungen“).
- **Grün `#4A7B52`** für Status-Hinweise (z. B. „Live“ auf /loesungen).
- **Schrift: Raleway** (self-hosted, `public/fonts/`), keine Google Fonts.
- **Icons:** Lucide-Stil (stroke-width 1.75, `currentColor`) — inline als SVG (kein CDN wegen GitHub-Pages-CSP).
- **Voice: selbstbewusst, direkt, „Sie" (formell), kein Marketing-Sprech, keine Ausrufezeichen, keine Emoji.**
- Brand-Mark als dezentes Wasserzeichen auf dunklen Sektionen (Opazität ~6 %).

## Inhaltliche Integritätsregeln (nicht verhandelbar)
new.cognicore.de zeigt bis zum Go-live auch Leistungen, die wir noch nicht geliefert haben (**Ausbaustufen** des Geschäftsmodells, Entscheidung Dominik 01.10.2026). **Das Angebot darf Ausbaustufe sein, Belege nie:** keine erfundenen Kennzahlen, Testimonials, Kundenlogos, Zertifikate oder Erfahrungsangaben. Auf Seiten mit Ausbaustufen stehen Vorgehen, Ergebnis und Preis, aber keine Aussagen wie „seit Jahren", „bewährt" oder „in X Projekten". Jede Ausbaustufe steht mit Status in [`docs/ausbaustufen.md`](docs/ausbaustufen.md) und im Feld `status` in `src/data/leistungen.ts` und wird **vor dem Entfernen von `noindex`** einzeln freigegeben oder gestrichen. Zahlen auf der Seite (Kunden, Projekte, Anwendungen) nur mit Stand und Quelle. Partner-Tier korrekt: „Solutions Partner" (Basisstufe). Team-Fotos nur, wenn vorhanden, sonst Initialen-Avatar, keine erfundenen Bilder. INQA nie als Finanzierung der HubSpot- oder IT-Umsetzung darstellen, Coaching und Umsetzung sind nach den Förderregeln getrennt.

## Fakten (für Impressum, Footer, Kontakt, JSON-LD)
- CogniCore IT Solutions GmbH · Im Mediapark 6B · 50670 Köln
- Tel **+49 221 6505 3000** · **info@cognicore.de**
- GF: **Dominik Siegers, Michael Lohmar** · AG Köln **HRB 119305** · USt **DE369763325**
- HubSpot-Formulare später an **Forms API, Portal 144804770 (EU-Region)** — CRM bleibt HubSpot.
- Team & Rollen auf der Website (Stand 01.10.2026): Dominik Siegers (Gründer und Geschäftsführer), Rafael Garoz Garcia und Adrian Geiss (beide **HubSpot Solution Architect**), Arijan Vossough (Support und Managed Services). Michael Lohmar bleibt bis zur Löschung im Handelsregister nur im Impressum.
- **MSP OS wird auf der Website nicht erwähnt** (Vorgabe Dominik 01.10.2026), weder als Produkt noch als Werkzeug.
- Positionierung (seit 01.10.2026): **HubSpot im Zentrum, Microsoft 365 und IT-Betrieb dahinter.** Vier Säulen: HubSpot · Daten und Integration · Microsoft 365 und IT-Betrieb · KI. Dazu Lösungen (eigene Software) und die Branche IT-Dienstleister/MSPs. Ältere Fassung bis 09/2026: „HubSpot-first und mehr", 3 Säulen.

## Repo-Struktur
```
CLAUDE.md                     diese Wissensbasis
docs/
  redesign-konzept.md         Konzept + Findings→Maßnahmen-Mapping
  analyse-webauftritt.md      vollständiger 13-Agenten-Analysebericht (Ist-Seite)
  analyse-redesign.md         13-Agenten-Re-Analyse gegen new.cognicore.de
  git-github-grundlagen/      interner Git-&-GitHub-Spickzettel (HTML+PDF, CogniCore-Design) — Onboarding fürs Team
src/
  layouts/Base.astro          Head (SEO/JSON-LD), noindex, Nav/Footer, Reveal-Logik
  components/                  Nav (mit Leistungsmenü aus src/data), Footer, CtaBand, Preisleiter
  data/leistungen.ts          Säulen und alle Leistungsseiten (Texte, Ablauf, Preis, FAQ, status) — eine Quelle für Menü, Übersicht und Detailseiten
  styles/global.css           Web-Design-System (cc-*)
  styles/ds/                   Tokens + Marketing-CSS aus dem Design System
  pages/                       Start, Leistungen, Lösungen, Über-uns, Kontakt, Impressum, Datenschutz, Haftungsausschluss
  pages/leistungen/[slug].astro  Vorlage für alle Leistungsseiten (/leistungen/<slug>)
  pages/branchen/              Branchenseiten (heute: it-dienstleister)
public/
  brand/                      Logo-/Icon-Varianten
  img/                        Team- & Content-Fotos (optimiert)
  fonts/, CNAME, .nojekyll
.github/workflows/deploy.yml  Auto-Deploy
```

## Die Analyse (Grundlage des Redesigns)
Vollständig in [`docs/analyse-webauftritt.md`](docs/analyse-webauftritt.md). Die sechs Top-Findings, die der Redesign adressiert:
1. **Kein Proof-Layer** → Proof-Band mit echten Belegen + „Proof of Build" (PLZ-Marketplace-App).
2. **Gesichtsloses Team** → Team mit echten Rollen, GF vorn, Karriere-Sektion.
3. **Tiefe nur behauptet** → konkrete Zielsysteme, technische FAQ.
4. **Datenschutz ≠ Technik** → neue DSE für die echte Static-Technik (kein Tracking).
5. **Positionierung begraben** → POV in den Hero; Titles/H1 mit „HubSpot"/„Köln"; JSON-LD.
6. **„Buchen" bucht nicht** → CTA einheitlich „Erstgespräch vereinbaren".

**Re-Analyse nach dem Relaunch** (dieselben 13 Rollen gegen `new.cognicore.de`, [`docs/analyse-redesign.md`](docs/analyse-redesign.md)): Bilanz **2 behoben** (Datenschutz, Positionierung), **1 weitgehend** (Team), **2 teilweise** (Proof, Tiefe), **1 offen** (Buchungs-Mechanik). Der Engpass hat sich von „Botschaft/Design" zu **„Beweis & Mechanik"** verschoben — der dauerhafte strategische Kern: *belegte Ergebnisse statt Selbstauskunft, und das eigene Angebot am eigenen Haus sichtbar praktizieren.*

## Offene Arbeit (Roadmap) — nach Re-Analyse priorisiert
**Vor Go-live (Gates & Blocker):**
- [ ] **Buchung scharfschalten:** HubSpot-Meetings-Scheduler in `#termin` + Forms API (Portal 144804770) — aktuell Platzhalter (`action="#"`).
- [ ] **DSGVO-Gate:** Ein HubSpot-Client-Embed kippt die „keine Cookies"-Aussage der DSE → **serverseitige Forms API bevorzugen** (bleibt cookiefrei) ODER Consent-Layer + DSE-Update + CSP gemeinsam ausrollen.
- [x] **Accessibility-Kontrast erledigt:** `--cc-orange-ink #BE4A24` für weißen Text / Text-auf-Hell (WCAG 1.4.3 ≥ 4,5:1), Blau-300 → `#8195BE`. (Weiterer a11y-Feinschliff optional.)
- [ ] **Go-live-Checkliste:** `noindex` raus, `site` in `astro.config.mjs` auf Apex, totes hubfs-Logo im JSON-LD (`Base.astro`) → lokales `/brand/`-Asset, `sitemap.xml` + `robots.txt` (`@astrojs/sitemap`).
- [x] **Startseiten-Formular** um Consent-Zeile + `/datenschutz`-Link angeglichen (Parität mit `kontakt.astro`). Rest-Punkt: `required`-Einwilligung vs. Rechtsgrundlage sauber lösen.

**Quick-Wins — ✅ erledigt (Commit `aedd738`, 2026-07-15):**
- [x] **Marketplace-App/HubSpot-Verzeichnis verlinkt** (Startseite Proof-of-Build + Leistungen-Integration) → `ecosystem.hubspot.com/de/marketplace/solutions/cognicore`.
- [x] **CTA-Verben getrennt:** Formular-Submit → „Anfrage senden" (Start + Kontakt); „vereinbaren" nur noch für den Booking-CTA.
- [x] **FAQPage-JSON-LD** (Leistungen); **Raleway → WOFF2** (ohne Subset, Umlaute erhalten, 305→125 KB); **404-Seite** im DS; `security.txt`; Burger-`aria-expanded`, Skip-Link.

**Beweis-Schicht (der eigentliche strategische Hebel):**
- [ ] **Echte Cases** (anonymisiert, quantifiziert) + **externer Reputationslayer** (HubSpot-Directory-Reviews, Google/ProvenExpert, `sameAs`/LinkedIn) — nichts erfinden.
- [ ] **Tiefe zeigen** statt behaupten: Referenz-/Datenfluss-Schema, Deliverables je Phase, eigene Migrations-Story (HubSpot CMS → Astro) als Proof-of-Build.
- [x] **Preis-/Größen-Anker je Stufe** (2026-09-15): ab-Preise auf `/leistungen` — Essential ab 4.900 € (mit Migration ab 9.500 €), Advanced ab 850 €/Monat (5 h), Excellence ab 2.900 €/Monat (16 h, SLA). Nicht geschätzt, sondern aus Clockodo-Ist-Stunden zum Satz 1.250 €/Projekttag hergeleitet und gegen den Markt gespiegelt (HubSpot-Pflicht-Onboarding 1.470/2.930 €, JUNGMUT ab 5.000 €, Postina-Retainer 140 bis 185 €/h). Herleitung und Quellen: CogniHero `03_Projekte/Website-Relaunch_cognicore.de/Preisvorschlag_ab-Preise_new-cognicore-de.md` + `Wettbewerbsrecherche_Onboarding-Preise.md`. **Offen bleibt:** Tier über Outcome differenzieren statt nur über Bindung, und die Mindestlaufzeit für Advanced/Excellence ist bewusst noch nicht auf der Seite (nicht entschieden).

**Weiter (nach Launch, planbar):**
- [ ] **Datenschutz** final juristisch prüfen; **Self-Check-Funnel** & **PLZ-Doku** im neuen Design bauen.
- [ ] **Karriere** ausbauen (echte Rolle, Recruiting-Kontakt Lara statt `info@`, Nav-Punkt); **Team** konsistent (Nachnamen/LinkedIn/Fotos für Delivery-Rollen).
- [ ] **Content-/Wissens-Hub** + dedizierte Leistungs-Landingpages (SEO-Tiefe); cookiefreies Analytics (Plausible/Matomo) — eigenes Dogfooding sichtbar machen.
- [ ] **Positionierung schärfen:** HubSpot-Kern über „und mehr" stellen, Managed IT nachordnen, Signatur-Claim durchtragen.

**Ausbau 10/2026 (Leistungsmenü, 15 Leistungsseiten, Lösungen, Branche IT-Dienstleister, Preisleiter):**
- [ ] Ausbaustufen einzeln freigeben oder streichen, Liste in [`docs/ausbaustufen.md`](docs/ausbaustufen.md).
- [ ] Neue Preise bestätigen: Integrations-Check 1.250 €, HubSpot-Audit ab 1.900 €, KI-Audit mit Pilot ab 6.900 €. (Gruppen-Onboarding 290 € bestätigt 01.10.2026.)
- [x] Gruppen-Onboarding buchbar (01.10.2026): Terminliste mit „Jetzt buchen“ auf der Leistungsseite, Termine im Feld `termine` in `src/data/leistungen.ts`, vergangene blendet die Seite selbst aus. Ohne `zahlungslink` öffnet der Knopf eine vorbereitete Buchungs-Mail an info@ (Zahlung per Rechnung).
- [ ] Je Termin einen HubSpot-Zahlungslink (Stripe) ins Feld `zahlungslink` eintragen, sobald Stripe im Portal verbunden ist.
- [ ] Neue Leistung anlegen = Eintrag in `src/data/leistungen.ts`, Menü, Übersicht und Detailseite entstehen automatisch.

## Arbeitskonventionen
- **Sprache:** deutsche Inhalte, „Sie". Commit-Messages knapp und aussagekräftig.
- **Neue Seite:** `src/pages/<name>.astro`, `import Base`, `cc-*`-Komponenten aus `global.css` wiederverwenden — kein Ad-hoc-CSS, das das DS umgeht.
- **Bilder:** vor dem Commit optimieren (Fotos als JPG, ~1000 px, oder WebP). Keine Multi-MB-Assets.
- **Vor Merge/Push:** `npm run build` muss grün sein; Änderung im Dev-Server (oder auf `new.cognicore.de` nach Deploy) sichten.
