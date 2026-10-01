# Ausbaustufen auf new.cognicore.de

Stand 01.10.2026. Hintergrund: Die Seite zeigt bis zum Go-live auch Leistungen, die wir noch nicht geliefert haben. Regel dazu in [`CLAUDE.md`](../CLAUDE.md), Abschnitt „Inhaltliche Integritätsregeln“.

**Vor dem Entfernen von `noindex`** wird jede Zeile mit Status „Ausbaustufe“ oder „Teilweise“ entschieden: liefern wir selbst, liefern wir mit Partner, oder fliegt sie raus. Das Feld `status` in `src/data/leistungen.ts` muss zu dieser Liste passen.

Status: **Geliefert** = es gibt einen Beleg · **Teilweise** = Teile geliefert oder nur im eigenen Haus erprobt · **Ausbaustufe** = noch nie geliefert.

## Leistungsseiten

| Seite | Säule | Status | Freigabe |
|---|---|---|---|
| `/leistungen/hubspot-einfuehrung` | HubSpot | Geliefert | |
| `/leistungen/hubspot-audit` | HubSpot | Geliefert | Preis ab 1.900 € bestätigen |
| `/leistungen/hubspot-entwicklung` | HubSpot | Geliefert | |
| `/leistungen/hubspot-managed-service` | HubSpot | Teilweise | Ticketweg und Quartalsreview prüfen |
| `/leistungen/hubspot-gruppen-onboarding` | HubSpot | Ausbaustufe | Preis 290 € und Format bestätigen |
| `/leistungen/schnittstellen` | Daten und Integration | Teilweise | Betrieb als Pauschale klären |
| `/leistungen/microsoft-integration` | Daten und Integration | Teilweise | |
| `/leistungen/datenbereinigung` | Daten und Integration | Ausbaustufe | prüfen, ob schon als Paket verkauft |
| `/leistungen/managed-it` | Microsoft 365 und IT-Betrieb | Geliefert | Link nach cognicore-service.de |
| `/leistungen/integrations-check` | Microsoft 365 und IT-Betrieb | Ausbaustufe | Preis 1.250 € bestätigen |
| `/leistungen/ki-audit` | KI | Ausbaustufe | Preis ab 6.900 € bestätigen |
| `/leistungen/hubspot-ki-agenten` | KI | Ausbaustufe | |
| `/leistungen/copilot-hubspot` | KI | Ausbaustufe | |
| `/leistungen/ki-sichtbarkeit` | KI | Teilweise | im eigenen Haus erprobt |
| `/leistungen/ki-schulungen` | KI | Ausbaustufe | |

## Weitere Seiten und Elemente

| Element | Status | Freigabe |
|---|---|---|
| `/loesungen`: BP Docs, PLZ-Lookup-App | Geliefert | |
| `/loesungen`: MSP OS als Produkt | Ausbaustufe | intern im Einsatz, Produktversion in Arbeit |
| `/loesungen`: Anwendungen für Kunden | Geliefert | ohne Kundennamen; Namen nur mit dokumentierter Freigabe |
| `/branchen/it-dienstleister`: vorkonfiguriertes Setup, PSA/RMM-Anbindung | Ausbaustufe | |
| Startseite: Zahlen 16 Kunden, 11 HubSpot-Kunden, 43 Projekte, 8 Anwendungen | Geliefert | Stand September 2026, jährlich aktualisieren |
| Preisleiter (Start- und Leistungsseite) | Teilweise | enthält die oben genannten neuen Preise |
