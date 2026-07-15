# CLAUDE.md — Projekt-Wissensbasis cognicore.de

> **Diese Datei ist die gemeinsame Single Source of Truth für das Team (4 Personen) und für Claude Code.**
> Sie wird von Claude Code bei jedem automatisch geladen. Persönliche `~/.claude`-Memory ist **lokal und wird nicht geteilt** — projektrelevantes Wissen gehört daher **hierher** oder nach `docs/`. Wer etwas Grundlegendes ändert (Richtung, Konventionen, Fakten), aktualisiert diese Datei im selben PR/Commit.

## Was das hier ist
Relaunch der Website **cognicore.de** der **CogniCore IT Solutions GmbH** (HubSpot Solutions Partner, Köln). Weg von HubSpot CMS, hin zu einer statischen **Astro**-Seite, die das Team mit **Claude Code** pflegt und über **GitHub Pages** (später Cloudflare) veröffentlicht.

- **Live (Staging):** https://new.cognicore.de  ·  Ziel-Apex später: `cognicore.de`
- **Repo:** `github.com/CogniCoreitsolutions/cognicore.de` (public)
- **Status:** Vollständiges **Redesign auf Basis des CogniCore Design Systems** ist live. `<meta robots noindex>` ist bis zum echten Go-live gesetzt (in `src/layouts/Base.astro`).

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

- **Navy `#071B3E` ist die dominante Farbe** (große Flächen, Hero, Footer, Primär-Buttons).
- **Orange `#EC6945` nur als Akzent** — Eyebrows, ein CTA, aktiver Zustand, das `//`-Motiv. **Nie** als große Fläche, nie Orange-auf-Weiß für Fließtext.
- **Beige `#F9EBD9`** als warme Sekundärfläche; **Grün `#4A7B52`** für Erfolg/Tags.
- **Schrift: Raleway** (self-hosted, `public/fonts/`), keine Google Fonts.
- **`//`-Doppelslash** als Section-Marker (Eyebrows: `// Leistungen`).
- **Icons:** Lucide-Stil (stroke-width 1.75, `currentColor`) — inline als SVG (kein CDN wegen GitHub-Pages-CSP).
- **Voice: selbstbewusst, direkt, „Sie" (formell), kein Marketing-Sprech, keine Ausrufezeichen, keine Emoji.**
- Brand-Mark als dezentes Wasserzeichen auf dunklen Sektionen (Opazität ~6 %).

## Inhaltliche Integritätsregeln (nicht verhandelbar)
Es ist eine echte Firmen-Website — **keine erfundenen** Kennzahlen, Testimonials, Kundenlogos oder Preise. Nur **belegbare** Aussagen. Partner-Tier korrekt: „Solutions Partner" (Basisstufe). Team-Fotos nur, wenn vorhanden — sonst Initialen-Avatar, keine erfundenen Bilder.

## Fakten (für Impressum, Footer, Kontakt, JSON-LD)
- CogniCore IT Solutions GmbH · Im Mediapark 6B · 50670 Köln
- Tel **+49 221 6505 3000** · **info@cognicore.de**
- GF: **Dominik Siegers, Michael Lohmar** · AG Köln **HRB 119305** · USt **DE369763325**
- HubSpot-Formulare später an **Forms API, Portal 144804770 (EU-Region)** — CRM bleibt HubSpot.
- Team & Rollen: Dominik Siegers & Michael Lohmar (Gründer/GF), Rafael (Consultant), Adrian (Junior Consultant), Arijan (Werkstudent), Lisa (Kommunikation), Lara (Recruiting & HR).
- Positionierung: **HubSpot-first — „und mehr"** (3 Säulen: HubSpot · IT-Projekte · IT-Struktur/Managed IT). POV: „kein klassisches Marketing, sondern Tiefgang in Datenmodell & Solution Design".

## Repo-Struktur
```
CLAUDE.md                     diese Wissensbasis
docs/
  redesign-konzept.md         Konzept + Findings→Maßnahmen-Mapping
  analyse-webauftritt.md      vollständiger 13-Agenten-Analysebericht
src/
  layouts/Base.astro          Head (SEO/JSON-LD), noindex, Nav/Footer, Reveal-Logik
  components/                  Nav, Footer
  styles/global.css           Web-Design-System (cc-*)
  styles/ds/                   Tokens + Marketing-CSS aus dem Design System
  pages/                       Start, Leistungen, Über-uns, Kontakt, Impressum, Datenschutz, Haftungsausschluss
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
- [ ] **Preis-/Größen-Anker** je Stufe; Tier über Outcome differenzieren statt nur Bindung.

**Weiter (nach Launch, planbar):**
- [ ] **Datenschutz** final juristisch prüfen; **Self-Check-Funnel** & **PLZ-Doku** im neuen Design bauen.
- [ ] **Karriere** ausbauen (echte Rolle, Recruiting-Kontakt Lara statt `info@`, Nav-Punkt); **Team** konsistent (Nachnamen/LinkedIn/Fotos für Delivery-Rollen).
- [ ] **Content-/Wissens-Hub** + dedizierte Leistungs-Landingpages (SEO-Tiefe); cookiefreies Analytics (Plausible/Matomo) — eigenes Dogfooding sichtbar machen.
- [ ] **Positionierung schärfen:** HubSpot-Kern über „und mehr" stellen, Managed IT nachordnen, Signatur-Claim durchtragen.

## Arbeitskonventionen
- **Sprache:** deutsche Inhalte, „Sie". Commit-Messages knapp und aussagekräftig.
- **Neue Seite:** `src/pages/<name>.astro`, `import Base`, `cc-*`-Komponenten aus `global.css` wiederverwenden — kein Ad-hoc-CSS, das das DS umgeht.
- **Bilder:** vor dem Commit optimieren (Fotos als JPG, ~1000 px, oder WebP). Keine Multi-MB-Assets.
- **Vor Merge/Push:** `npm run build` muss grün sein; Änderung im Dev-Server (oder auf `new.cognicore.de` nach Deploy) sichten.
