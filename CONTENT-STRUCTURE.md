# Content Structure

This document is the content source of truth for Kang Hendar's Personal Digital Business Card / Personal Landing Card.

## Core Identity

- Name: Kang Hendar.
- Greeting: Hi, I'm Hendar.
- Username: @kangsoe_
- Tagline: Kang Hendar | Web Builder.
- Positioning: Web Builder & Digital Systems.
- Primary offer: Websites & Digital Systems.
- Workflow signal: Next.js • AI-assisted workflow.
- Profile image: `/foto_profil.jpg`.

## Primary Message

Kang Hendar builds practical websites and lightweight digital systems with a modern Next.js workflow assisted by AI.

The copy should feel direct, capable, and personal. It should not sound like a large agency, SaaS company, or generic portfolio template.

## Main Content Blocks

### Identity
- Greeting: "Hi, I'm Hendar"
- Role: "Web & Digital Systems Builder"
- Profile: "Kang Hendar | Web Builder"

### Offer Panel — "Websites & Digital Systems"
Saya membangun website dan sistem berbasis web untuk membantu personal brand, bisnis, sekolah, pesantren, dan lembaga mengelola informasi, data, layanan, dan kebutuhan digital mereka.
- Action button: "Details" → https://lamandigital.vercel.app/

### Workflow Panel — "How I Work"
Saya menggunakan Next.js dan AI-assisted workflow untuk membantu proses perancangan, penyusunan struktur, dan implementasi website agar lebih terarah, rapi, dan mudah dikembangkan.
- Action button: "Details" → https://lamandigital.vercel.app/tentang

### Currently Building
- [Snaf Studio](https://www.instagram.com/snafstudio/) — Ruang kreatif untuk visual design dan aset digital.
- [Laman Digital](https://www.instagram.com/lamandigital.id/) — Studio web untuk website dan sistem digital.

### Selected Projects
- [Poltek Kepribadian](https://kepribadian-tau.vercel.app/)
- [Lestari Alam Qurani](https://lestarialamqurani.vercel.app/)
- [Syifaush Shudur](https://syifaush-shudur.vercel.app/)
- [Al-Mushlih](https://ponpes-al-mushlih.vercel.app/)
- [Bimbel YPDH](https://ypdh.sch.id/)

### Contact Actions (Sidebar)
| Label | Link | Type |
|-------|------|------|
| WhatsApp | https://wa.me/6281212828248 | contact |
| Telegram | https://t.me/kang_soe | contact |
| Email | mailto:lamandigital.id@gmail.com | contact |

### Social Links (Sidebar)
| Label | Link |
|-------|------|
| LinkedIn | https://www.linkedin.com/in/kanghendar/ |
| Instagram | https://www.instagram.com/kangsoe_ |
| Threads | https://www.threads.com/@kangsoe_ |
| Facebook | https://www.facebook.com/snafarts |
| Pinterest | https://id.pinterest.com/snafstudio |

## Content Rules

- Keep the page short, scannable, and contact-focused.
- Treat selected projects as credibility markers, not a long portfolio archive.
- Avoid case studies, blog posts, service catalogs, team sections, dashboard content, CMS content, or multi-page navigation.
- Final section order may be adjusted during UI design, but all final content should remain compact enough for a one-page card experience.

## Reference: Actual Data Shape (lib/content.ts)

```ts
interface BuildingItem {
  title: string;
  href: string;
  hoverClass: string;
  description: string;
}

interface ProjectItem {
  title: string;
  href: string;
  description?: string;
}

interface SocialLink {
  label: string;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  href: string;
  hoverClass: string;
}

interface ContactLink {
  label: string;
  href: string;
  hoverClass: string;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
}
```
