import type { SVGProps } from "react";

import {
  LinkedinIcon as LinkedinSvg,
  InstagramIcon as InstagramSvg,
  ThreadsIcon as ThreadsSvg,
  FacebookIcon as FacebookSvg,
  PinterestIcon as PinterestSvg,
  WhatsappIcon as WhatsappSvg,
  TelegramIcon as TelegramSvg,
  EmailIcon as EmailSvg,
} from "@/components/icons/social-icons";

export interface BuildingItem {
  title: string;
  href: string;
  hoverClass: string;
  description: string;
}

export interface ProjectItem {
  title: string;
  href: string;
  description?: string;
}

export interface SocialLink {
  label: string;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  href: string;
  hoverClass: string;
}

export interface ContactLink {
  label: string;
  href: string;
  hoverClass: string;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
}

export const profile = {
  name: "Kang Hendar",
  role: "Web Builder & Digital Systems Developer",
  greeting: "Hi, I'm Hendar",
  username: "@kangsoe_",
  tagline: "Kang Hendar | Web Builder",
  imageSrc: "/foto_profil.jpg",
  imageAlt: "Kang Hendar",
} as const;

export const buildingItems: BuildingItem[] = [
  {
    title: "Snaf Studio",
    href: "https://id.pinterest.com/snafstudio/",
    hoverClass: "hover:text-[#fcc10f] touch-active:text-[#fcc10f]",
    description: "Ruang kreatif untuk visual design dan aset digital.",
  },
  {
    title: "Laman Digital",
    href: "https://lamandigital.vercel.app/",
    hoverClass: "hover:text-[#0692ef] touch-active:text-[#0692ef]",
    description: "Studio web untuk website dan sistem digital.",
  },
];

export const selectedProjects: ProjectItem[] = [
  {
    title: "Poltek Kepribadian",
    href: "https://kepribadian-tau.vercel.app/",
  },
  {
    title: "Lestari Alam Qurani",
    href: "https://lestarialamqurani.vercel.app/",
  },
  {
    title: "Syifaush Shudur",
    href: "https://syifaush-shudur.vercel.app/",
  },
  {
    title: "Al-Mushlih",
    href: "https://ponpes-al-mushlih.vercel.app/",
  },
  {
    title: "Bimbel YPDH",
    href: "https://ypdh.sch.id/",
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    icon: LinkedinSvg,
    href: "https://www.linkedin.com/in/kanghendar/",
    hoverClass: "hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white touch-active:border-[#0A66C2] touch-active:bg-[#0A66C2] touch-active:text-white",
  },
  {
    label: "Instagram",
    icon: InstagramSvg,
    href: "https://www.instagram.com/kangsoe_",
    hoverClass: "hover:border-[#E4405F] hover:bg-[#E4405F] hover:text-white touch-active:border-[#E4405F] touch-active:bg-[#E4405F] touch-active:text-white",
  },
  {
    label: "Threads",
    icon: ThreadsSvg,
    href: "https://www.threads.com/@kangsoe_",
    hoverClass: "hover:border-black hover:bg-black hover:text-white touch-active:border-black touch-active:bg-black touch-active:text-white",
  },
  {
    label: "Facebook",
    icon: FacebookSvg,
    href: "https://www.facebook.com/snafarts",
    hoverClass: "hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white touch-active:border-[#1877F2] touch-active:bg-[#1877F2] touch-active:text-white",
  },
  {
    label: "Pinterest",
    icon: PinterestSvg,
    href: "https://id.pinterest.com/snafstudio",
    hoverClass: "hover:border-[#E60023] hover:bg-[#E60023] hover:text-white touch-active:border-[#E60023] touch-active:bg-[#E60023] touch-active:text-white",
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "WhatsApp",
    href: "https://wa.me/6281212828248",
    hoverClass: "hover:border-[#25D366] hover:bg-[#25D366] hover:text-white touch-active:border-[#25D366] touch-active:bg-[#25D366] touch-active:text-white",
    icon: WhatsappSvg,
  },
  {
    label: "Telegram",
    href: "https://t.me/kang_soe",
    hoverClass: "hover:border-[#229ED9] hover:bg-[#229ED9] hover:text-white touch-active:border-[#229ED9] touch-active:bg-[#229ED9] touch-active:text-white",
    icon: TelegramSvg,
  },
  {
    label: "Email",
    href: "mailto:lamandigital.id@gmail.com",
    hoverClass: "hover:border-[#0e0b00] hover:bg-[#0e0b00] hover:text-white touch-active:border-[#0e0b00] touch-active:bg-[#0e0b00] touch-active:text-white",
    icon: EmailSvg,
  },
];
