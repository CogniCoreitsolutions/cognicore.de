# cognicore.de

Relaunch der Website **cognicore.de** — CogniCore IT Solutions GmbH (HubSpot-Partner).

Statische Site mit **Astro**, deployt auf **GitHub Pages** (Custom Domain `cognicore.de`).
Design-System übernommen aus der Schwester-Site [`cognicore-os-landing`](https://github.com/CogniCoreitsolutions/cognicore-os-landing)
(Raleway, CogniCore-CI-Tokens, Dark-Mode), damit beide Auftritte als eine Marke wirken.

## Entwicklung

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # statischer Output nach dist/
npm run preview  # Build lokal ansehen
```

Voraussetzung: Node ≥ 18.20 / 20.3 / 22.

## Struktur

```
public/            statische Assets (Font, favicon, CNAME, .nojekyll)
src/
  layouts/Base.astro       HTML-Grundgerüst, Head, Theme/Nav/Reveal-Logik
  components/               Nav, Footer, BrandMark
  styles/global.css        Design-System (Tokens + Komponenten)
  pages/                    Seiten (Datei = Route)
.github/workflows/deploy.yml  Auto-Deploy nach GitHub Pages (Push auf main)
```

## Seiten

| Route | Status |
|---|---|
| `/` Startseite | ✅ ausgearbeitet |
| `/leistungen` | ✅ ausgearbeitet |
| `/leistungen/hubspot-self-check` | 🟡 Entwurf — Funktionsweise offen |
| `/ueber-uns` | 🟡 Entwurf — Team-Inhalte fehlen |
| `/kontakt` | ✅ ausgearbeitet — HubSpot-Formular noch anzubinden |
| `/impressum` | ✅ portiert aus Bestand — final juristisch prüfen |
| `/datenschutz` | ✅ portiert aus Bestand — HubSpot/Cookie-Banner vor Launch aktivieren, final juristisch prüfen |

## Deployment

Push auf `main` → GitHub Action baut mit `withastro/action` und deployt nach GitHub Pages.
Voraussetzung: In den Repo-Settings unter **Pages** die Source auf **GitHub Actions** stellen
und die Custom Domain `cognicore.de` hinterlegen (DNS zeigt bereits auf GitHub Pages).

> Hinweis: Solange im Aufbau ist in allen Seiten `<meta name="robots" content="noindex">` gesetzt
> (in `src/layouts/Base.astro`). Zum Launch entfernen.
