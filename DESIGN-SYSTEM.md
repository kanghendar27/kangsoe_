# Design System

This document is the design source of truth for Kang Hendar's Personal Digital Business Card / Personal Landing Card.

## Foundation

- Brand subject: Kang Hendar.
- Positioning: Web Builder & Digital Systems.
- Project type: Personal Digital Business Card / Personal Landing Card.
- Typography: Geist Sans as the primary interface font.
- Monospace: Geist Mono only for code-like or technical details if needed.
- UI system: shadcn/ui conventions with Tailwind CSS tokens.

## Color Guide

The palette is implemented as CSS custom properties in `app/globals.css` and extended in `tailwind.config.ts`:

- `#fcc10f` — Primary & Accent (HSL: 45 98% 52%)
- `#0e0b00` — Secondary / near black (HSL: 45 100% 3%)
- `#392b01` — Dark Brown (HSL: 43 97% 11%)
- `#fef3cf` — Soft Light

## Color Roles

- Primary action and accent emphasis: `#fcc10f` — used for buttons, ring, hover highlights.
- Main text, high-contrast surfaces, and strong UI anchors: `#0e0b00`.
- Secondary depth, borders, and warm dark details: `#392b01`.
- Light surfaces and soft background areas: `#fef3cf`.
- Text hierarchy: `--text-main`, `--text-muted`, `--text-muted-2`, `--text-muted-3` via CSS utilities `.text-main`, `.text-muted`, etc.

## UI Direction (Implemented)

The UI is a single-page personal landing card with:

- Hero header with theme toggle
- Profile sidebar (photo, username, contact buttons, social links)
- Three-column content layout on desktop, stacked on mobile
  - Offer panel: "Websites & Digital Systems"
  - Workflow panel: "How I Work"
  - Currently Building list
  - Selected Projects list
- Action buttons ("Details") linking to external pages
- Smooth fade-in animations
- Dark/light mode via `next-themes`

## Component Architecture

- `components/ui/` — shadcn primitives (`button.tsx`, `card.tsx`)
- `components/hero-header.tsx` — greeting + theme toggle
- `components/sidebar.tsx` — profile card with contact & social links
- `components/section-panel.tsx` — reusable content panel with optional action button
- `components/theme-toggle.tsx` — dark/light toggle button
- `components/icons/social-icons.tsx` — SVG icon set
- `lib/content.ts` — all content data separated from UI
- `lib/utils.ts` — shared `cn` helper

## Content Layer

All page content is maintained in `lib/content.ts` with typed interfaces:
- `BuildingItem`, `ProjectItem`, `SocialLink`, `ContactLink`

## Out Of Scope

- Long portfolio layouts.
- Agency website sections.
- Blog templates.
- Dashboard views.
- CMS-driven content patterns.
- Authenticated states.
- PWA-specific UI.
