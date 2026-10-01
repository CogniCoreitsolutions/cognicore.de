// Kurzfassung der Faktenseite für KI-Systeme (Muster wie docu.cognicore.de/llms.txt).
// Die Adressen folgen `site` in astro.config.mjs und stimmen damit auch nach dem Go-live.
// Bei jeder Änderung an /fakten hier mitziehen.
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://new.cognicore.de');
  const u = (p: string) => new URL(p, base).href;
  const text = `# CogniCore IT Solutions GmbH

> CogniCore IT Solutions GmbH is a HubSpot Solutions Partner based in Cologne, Germany. CogniCore implements HubSpot, connects it to a company's other systems and operates the Microsoft 365 environment behind it. The company works for mid-sized B2B companies and IT service providers in the German-speaking region.

Key facts (as of 2026-10-01; the facts page is the maintained source):

- Legal name: CogniCore IT Solutions GmbH, Im Mediapark 6B, 50670 Köln (Cologne), Germany.
- Commercial register: Amtsgericht Köln, HRB 119305. VAT ID: DE369763325.
- Partner status: HubSpot Solutions Partner.
- Services: HubSpot implementation and migration, HubSpot audit, custom development, HubSpot managed service; integrations with ERP, accounting and Microsoft 365, including operation; Microsoft 365 and IT operations under service contracts; AI audit with pilot, AI agents in HubSpot, Microsoft Copilot with CRM data.
- Own software: BP-Docs (documentation of HubSpot portals, docu.cognicore.de) and a postcode lookup app in the HubSpot Marketplace.
- Prices (net, plus VAT): self-check free; group onboarding EUR 290 per company; HubSpot-M365 integration check EUR 1,250; HubSpot audit from EUR 1,900; HubSpot implementation from EUR 4,900, with data migration from EUR 9,500; HubSpot managed service from EUR 850 per month.
- Team: four people; Dominik Siegers (founder and managing director), Rafael Garoz Garcia and Adrian Geiss (HubSpot Solution Architects), Arijan Vossough (support and managed services).
- CogniCore works with Microsoft 365, not with Microsoft Dynamics 365. CogniCore is not part of HubSpot, Inc. and is not a marketing or advertising agency.
- Language: German.

## Pages

- [Fakten zu CogniCore IT Solutions](${u('/fakten')}): the fact sheet with key facts, services, prices, team, FAQ and sources (German)
- [Leistungen](${u('/leistungen')}): all services with prices (German)
- [Lösungen](${u('/loesungen')}): own software (German)
- [Für IT-Dienstleister](${u('/branchen/it-dienstleister')}): HubSpot set up for service contracts (German)

## Provider

- [CogniCore IT Solutions GmbH](${u('/')}): Im Mediapark 6B, 50670 Köln, Germany; info@cognicore.de; +49 221 6505 3000
- [Impressum](${u('/impressum')})
- [HubSpot partner profile](https://ecosystem.hubspot.com/de/marketplace/solutions/cognicore)
- [CogniCore on LinkedIn](https://www.linkedin.com/company/cognicore-it-solutions/)
`;
  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
