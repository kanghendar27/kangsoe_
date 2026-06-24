import { ArrowRight } from "lucide-react";

import {
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  PinterestIcon,
  TelegramIcon,
  ThreadsIcon,
  WhatsappIcon,
} from "../components/icons/social-icons";

const buildingItems = [
  {
    title: "Snaf Studio",
    href: "https://www.instagram.com/snafstudio/",
    hoverClass: "hover:text-[#fcc10f]",
    description: "Ruang kreatif untuk visual design dan aset digital.",
  },
  {
    title: "Laman Digital",
    href: "https://www.instagram.com/lamandigital.id/",
    hoverClass: "hover:text-[#0692ef]",
    description: "Studio web untuk website dan sistem digital.",
  },
];

const selectedProjects = [
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
  {
    title: "LamanKampus",
    href: "https://portal-prisain.vercel.app/",
    description: "Sistem Digital Akademik",
  },
  {
    title: "LamanEvent",
    href: "https://event-dakwah-register.up.railway.app/admin/login",
    description: "EDR (Event Digital Registration)",
  },
];

const socialLinks = [
  { label: "LinkedIn", icon: LinkedinIcon, href: "https://www.linkedin.com/in/kanghendar/", hoverClass: "hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white" },
  { label: "Instagram", icon: InstagramIcon, href: "https://www.instagram.com/kangsoe_", hoverClass: "hover:border-[#E4405F] hover:bg-[#E4405F] hover:text-white" },
  { label: "Threads", icon: ThreadsIcon, href: "https://www.threads.com/@kangsoe_", hoverClass: "hover:border-black hover:bg-black hover:text-white" },
  { label: "Facebook", icon: FacebookIcon, href: "https://www.facebook.com/snafarts", hoverClass: "hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white" },
  { label: "Pinterest", icon: PinterestIcon, href: "https://id.pinterest.com/snafstudio", hoverClass: "hover:border-[#E60023] hover:bg-[#E60023] hover:text-white" },
];

const panelButtonClass =
  "mt-auto inline-flex h-9 items-center justify-center rounded-full border border-input bg-background px-4 py-2 text-sm font-medium transition-colors hover:border-[#fcc10f] hover:bg-[#fcc10f] hover:text-[#0e0b00]";

const projectButtonClass =
  "inline-flex h-9 items-center justify-between rounded-full border border-input bg-background px-4 text-[13px] font-medium transition-colors hover:border-[#fcc10f] hover:bg-[#fcc10f] hover:text-[#0e0b00]";

const socialButtonBaseClass =
  "inline-flex h-9 items-center justify-between rounded-full border border-input bg-background px-4 text-[13px] font-medium transition-colors";

export default function Home() {
  return (
    <main className="kangsoe-page-bg flex min-h-screen flex-col items-center justify-center px-4 py-12 text-foreground antialiased">
      <header className="mb-12 text-center">
        <h1 className="mb-3 text-[40px] font-semibold tracking-normal text-zinc-900">
          Hi, I'm Hendar
        </h1>
        <p className="text-[15px] font-medium text-zinc-500">
          Web & Digital Systems Builder
        </p>
      </header>

      <section className="flex w-full max-w-[1000px] flex-col overflow-hidden rounded-xl border border-border bg-background shadow-sm md:flex-row">
        <aside className="flex w-full shrink-0 flex-col items-center border-b border-border p-8 md:w-[280px] md:border-b-0 md:border-r">
          <div className="mb-6 h-36 w-36 rounded-full border border-border p-1">
            <img
              alt="Kang Hendar"
              className="h-full w-full rounded-full object-cover"
              src="/profile-image.jpg"
            />
          </div>

          <div className="mb-6 flex w-36 flex-col items-center text-center">
            <p className="mb-2 text-sm font-medium text-zinc-500">@kangsoe_</p>
            <p className="text-sm font-semibold leading-relaxed text-zinc-900">
              Kang Hendar | Web Builder
            </p>
          </div>

          <div className="mb-6 flex gap-3">
            <a
              aria-label="WhatsApp"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-zinc-700 transition-colors hover:border-[#25D366] hover:bg-[#25D366] hover:text-white"
              href="https://wa.me/6281212828248"
              rel="noopener noreferrer"
              target="_blank"
            >
              <WhatsappIcon className="h-5 w-5" />
            </a>
            <a
              aria-label="Telegram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-zinc-700 transition-colors hover:border-[#229ED9] hover:bg-[#229ED9] hover:text-white"
              href="https://t.me/kang_soe"
              rel="noopener noreferrer"
              target="_blank"
            >
              <TelegramIcon className="h-5 w-5" />
            </a>
            <a
              aria-label="Email"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-zinc-700 transition-colors hover:border-[#0e0b00] hover:bg-[#0e0b00] hover:text-white"
              href="mailto:lamandigital.id@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <EmailIcon className="h-5 w-5" />
            </a>
          </div>

          <div className="grid w-36 gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  className={`${socialButtonBaseClass} ${link.hoverClass}`}
                  href={link.href}
                  key={link.label}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {link.label}
                  <Icon className="ml-2 h-4 w-4" />
                </a>
              );
            })}
          </div>
        </aside>

        <section className="flex flex-1 flex-col border-b border-border md:border-b-0 md:border-r">
          <div className="flex flex-1 flex-col items-start border-b border-border p-8">
            <h2 className="mb-4 text-lg font-medium text-zinc-900">
              Websites & Digital Systems
            </h2>
            <p className="mb-6 text-[14px] leading-relaxed text-zinc-600">
              Saya membangun website dan sistem berbasis web untuk membantu
              personal brand, bisnis, sekolah, pesantren, dan lembaga mengelola
              informasi, data, layanan, dan kebutuhan digital mereka.
            </p>
            <a
              className={panelButtonClass}
              href="#"
            >
              Details
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="flex flex-1 flex-col items-start p-8">
            <h2 className="mb-4 text-lg font-medium text-zinc-900">
              How I Work
            </h2>
            <p className="mb-6 text-[14px] leading-relaxed text-zinc-600">
              Saya menggunakan Next.js dan AI-assisted workflow untuk membantu
              proses perancangan, penyusunan struktur, dan implementasi website
              agar lebih terarah, rapi, dan mudah dikembangkan.
            </p>
            <a
              className={panelButtonClass}
              href="#"
            >
              Details
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="flex flex-1 flex-col">
          <div className="flex flex-1 flex-col items-start border-b border-border p-8">
            <h2 className="mb-4 text-lg font-medium text-zinc-900">
              Currently Building
            </h2>
            <ul className="mb-6 w-full space-y-4">
              {buildingItems.map((item) => (
                <li
                  className="flex items-start text-[14px] leading-relaxed text-zinc-600"
                  key={item.title}
                >
                  <span className="mr-3 mt-[6px] h-2 w-2 shrink-0 rounded-full border-2 border-zinc-300" />
                  <span>
                    <a
                      className={`font-semibold text-zinc-900 transition-colors ${item.hoverClass}`}
                      href={item.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {item.title}
                    </a>
                    <span className="block">{item.description}</span>
                  </span>
                </li>
              ))}
            </ul>
            <a
              className={panelButtonClass}
              href="#"
            >
              Details
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="flex flex-1 flex-col items-start p-8">
            <h2 className="mb-4 text-lg font-medium text-zinc-900">
              Selected Projects
            </h2>
            <p className="mb-6 text-[14px] leading-relaxed text-zinc-600">
              Beberapa project web yang saya kerjakan untuk kebutuhan lembaga,
              pendidikan, pesantren, dan sistem digital.
            </p>

            <div className="mb-6 grid w-full gap-3">
              {selectedProjects.map((project) => (
                <a
                  className={projectButtonClass}
                  href={project.href}
                  key={project.title}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {project.title}
                  <ArrowRight className="ml-2 h-3.5 w-3.5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </section>

      <p className="mt-6 text-center text-xs font-medium text-zinc-500">
        © 2026 kangsoe_. Seluruh hak cipta dilindungi.
      </p>
    </main>
  );
}
