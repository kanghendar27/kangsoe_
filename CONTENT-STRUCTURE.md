# Content Structure

This document is the content source of truth for Kang Hendar's Personal Digital Business Card / Personal Landing Card.

## Core Identity

- Name: Kang Hendar.
- Positioning: Web Builder & Digital Systems.
- Primary offer: Websites & Digital Systems.
- Workflow signal: Next.js • AI-assisted workflow.

## Primary Message

Kang Hendar builds practical websites and lightweight digital systems with a modern Next.js workflow assisted by AI.

The copy should feel direct, capable, and personal. It should not sound like a large agency, SaaS company, or generic portfolio template.

## Main Content Blocks

- Identity: Kang Hendar, Web Builder & Digital Systems.
- Offer: Websites & Digital Systems.
- Workflow: Next.js • AI-assisted workflow.
- Currently Building: Snaf Studio, Laman Digital.
- Selected Projects: Poltek Kepribadian, Lestari Alam Qurani, Syifaush Shudur, Al-Mushlih.
- Contact actions: primary ways to reach Kang Hendar.
- Social or external links: only include links that support trust or direct contact.

## Content Rules

- Keep the page short, scannable, and contact-focused.
- Treat selected projects as credibility markers, not a long portfolio archive.
- Avoid case studies, blog posts, service catalogs, team sections, dashboard content, CMS content, or multi-page navigation.
- Final section order may be adjusted during UI design, but all final content should remain compact enough for a one-page card experience.

## Draft Data Shape

```ts
type ProfileContent = {
  name: "Kang Hendar";
  role: "Web Builder & Digital Systems";
  offer: "Websites & Digital Systems";
  workflow: "Next.js • AI-assisted workflow";
  currentlyBuilding: ["Snaf Studio", "Laman Digital"];
  selectedProjects: [
    "Poltek Kepribadian",
    "Lestari Alam Qurani",
    "Syifaush Shudur",
    "Al-Mushlih",
  ];
  contactLinks: Array<{
    label: string;
    href: string;
    kind: "email" | "phone" | "website" | "social";
  }>;
};
```
