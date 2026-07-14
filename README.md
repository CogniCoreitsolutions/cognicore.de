# cognicore.de

Relaunch der Website der **CogniCore IT Solutions GmbH** — statische **Astro**-Site, deployt auf **GitHub Pages** (Staging: **[new.cognicore.de](https://new.cognicore.de)**), gebaut auf dem **CogniCore Design System**.

## 📌 Für Mitwirkende zuerst lesen
Die vollständige, gemeinsame Projekt-Wissensbasis — Richtung, Design-System-Regeln, Integritätsregeln, Fakten, Deploy, offene Arbeit — steht in **[CLAUDE.md](CLAUDE.md)**. Sie lädt in Claude Code automatisch und ist die *Single Source of Truth* fürs Team.

Ergänzend:
- **[docs/redesign-konzept.md](docs/redesign-konzept.md)** — Konzept & Mapping Findings → Maßnahmen
- **[docs/analyse-webauftritt.md](docs/analyse-webauftritt.md)** — vollständiger 13-Agenten-Analysebericht

## Schnellstart
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # statischer Output nach dist/
```
Node ≥ 18.20 / 20.3 / 22.

## Deploy
Push auf `main` → GitHub Action baut mit `withastro/action` und deployt automatisch nach GitHub Pages / `new.cognicore.de`. Deploy-Details und der SSH-Push-Hinweis stehen in [CLAUDE.md](CLAUDE.md).

## Struktur (Kurzform)
`src/pages` (Seiten) · `src/components` (Nav/Footer) · `src/styles/global.css` (Design-System, `cc-*`) · `src/styles/ds` (Tokens/Marketing aus dem DS) · `public/brand` (Logos) · `docs` (Konzept & Analyse).
```
