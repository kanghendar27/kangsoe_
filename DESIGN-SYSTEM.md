# Design System

This document is the design source of truth before the final UI is implemented.

## Foundation

- Brand subject: Kang Hendar.
- Positioning: Web Builder & Digital Systems.
- Project type: Personal Digital Business Card / Personal Landing Card.
- Typography: Geist Sans as the primary interface font.
- Monospace: Geist Mono only for code-like or technical details if needed.
- UI system: shadcn/ui conventions with Tailwind CSS tokens.

## Color Guide

Use this palette as the final color direction:

- `#0e0b00` Secondary / near black.
- `#392b01` Dark Brown.
- `#fcc10f` Primary & Accent.
- `#fef3cf` Soft Light.

## Color Roles

- Primary action and accent emphasis: `#fcc10f`.
- Main text, high-contrast surfaces, and strong UI anchors: `#0e0b00`.
- Secondary depth, borders, and warm dark details: `#392b01`.
- Light surfaces and soft background areas: `#fef3cf`.

## UI Direction

- Build a concise personal landing card, not a full portfolio or agency homepage.
- Prioritize identity, positioning, selected credibility markers, and contact actions.
- Keep the interface restrained, warm, and sharp.
- Use the final palette deliberately; avoid introducing a broad unrelated color system.
- Do not implement final visuals until the UI phase begins.

## Component Rules

- Place reusable UI primitives in `components/ui`.
- Use `lib/utils.ts` for the shared `cn` helper.
- Prefer shadcn/ui-compatible component patterns.
- Use Geist consistently across the page.
- Keep components suitable for a static one-page card.

## Out Of Scope For Design

- Long portfolio layouts.
- Agency website sections.
- Blog templates.
- Dashboard views.
- CMS-driven content patterns.
- Authenticated states.
- PWA-specific UI.
