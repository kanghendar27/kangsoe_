import Image from "next/image";

import { profile, socialLinks, contactLinks } from "@/lib/content";

export function Sidebar() {
  return (
    <aside className="flex w-full shrink-0 flex-col items-center border-b border-border p-8 md:w-[280px] md:border-b-0 md:border-r">
      <div className="mb-6 h-36 w-36 overflow-hidden rounded-full border border-border p-1">
        <Image
          alt={profile.imageAlt}
          className="h-full w-full rounded-full object-cover"
          src={profile.imageSrc}
          width={144}
          height={144}
        />
      </div>

      <div className="mb-6 flex w-36 flex-col items-center text-center">
        <p className="mb-2 text-sm font-medium text-muted">{profile.username}</p>
        <p className="text-sm font-semibold leading-relaxed text-main">
          {profile.tagline}
        </p>
      </div>

      <div className="mb-6 flex gap-3">
        {contactLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              aria-label={link.label}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-3 transition-colors ${link.hoverClass}`}
              href={link.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon className="h-5 w-5" />
            </a>
          );
        })}
      </div>

      <div className="grid w-36 gap-3">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              className={`inline-flex h-9 items-center justify-between rounded-full border border-input bg-background px-4 text-[13px] font-medium transition-colors ${link.hoverClass}`}
              href={link.href}
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
  );
}
