import { profile } from "@/lib/content";
import { ThemeToggle } from "@/components/theme-toggle";

export function HeroHeader() {
  return (
    <header className="mb-12 text-center animate-fade-in-down">
      <div className="mb-6 flex justify-center">
        <ThemeToggle />
      </div>
      <h1 className="mb-3 text-[40px] font-semibold tracking-normal text-main">
        {profile.greeting}
      </h1>
      <p className="text-[15px] font-medium text-muted">{profile.role}</p>
    </header>
  );
}
