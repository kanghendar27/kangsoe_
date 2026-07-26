import { ArrowRight } from "lucide-react";

import { buildingItems, selectedProjects } from "@/lib/content";
import { HeroHeader } from "@/components/hero-header";
import { Sidebar } from "@/components/sidebar";
import { SectionPanel } from "@/components/section-panel";

export default function Home() {
  return (
    <main className="kangsoe-page-bg flex min-h-screen flex-col items-center justify-center px-4 py-12 text-foreground antialiased">
      <HeroHeader />

      <section className="flex w-full max-w-[1000px] flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm md:flex-row animate-fade-in-up">
        <Sidebar />

        <section className="flex flex-1 flex-col border-b border-border md:border-b-0 md:border-r">
          <SectionPanel
            title="Websites & Digital Systems"
            description="Saya membangun website dan sistem berbasis web untuk membantu personal brand, bisnis, sekolah, pesantren, dan lembaga mengelola informasi, data, layanan, dan kebutuhan digital mereka."
            className="border-b border-border"
            action={{ href: "https://lamandigital.vercel.app/" }}
          />

          <SectionPanel
            title="How I Work"
            description="Saya menggunakan Next.js dan AI-assisted workflow untuk membantu proses perancangan, penyusunan struktur, dan implementasi website agar lebih terarah, rapi, dan mudah dikembangkan."
            action={{ href: "https://lamandigital.vercel.app/tentang" }}
          />
        </section>

        <section className="flex flex-1 flex-col">
          <SectionPanel
            title="Currently Building"
            className="border-b border-border"
          >
            <ul className="w-full space-y-4">
              {buildingItems.map((item) => (
                <li
                  className="flex items-start text-[14px] leading-relaxed text-muted-2"
                  key={item.title}
                >
                  <span className="mr-3 mt-[6px] h-2 w-2 shrink-0 rounded-full border-2 border-border" />
                  <span>
                    <a
                      className={`font-semibold text-main transition-colors ${item.hoverClass}`}
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
          </SectionPanel>

          <SectionPanel
            title="Selected Projects"
            description="Beberapa project web yang saya kerjakan untuk kebutuhan lembaga, pendidikan, pesantren, dan sistem digital."
          >
            <div className="grid w-full gap-3">
              {selectedProjects.map((project) => (
                <a
                  key={project.title}
                  className="inline-flex h-9 items-center justify-between rounded-full border border-input bg-background px-4 text-[13px] font-medium transition-colors hover:border-[#fcc10f] hover:bg-[#fcc10f] hover:text-[#0e0b00] touch-active:border-[#fcc10f] touch-active:bg-[#fcc10f] touch-active:text-[#0e0b00]"
                  href={project.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {project.title}
                  <ArrowRight className="ml-2 h-3.5 w-3.5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </SectionPanel>
        </section>
      </section>

      <footer className="mt-8 text-center text-xs font-medium text-muted animate-fade-in">
        <p>© 2026 kangsoe_. Seluruh hak cipta dilindungi.</p>
      </footer>
    </main>
  );
}
