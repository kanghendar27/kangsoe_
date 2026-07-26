import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface SectionAction {
  label?: string;
  href: string;
}

interface SectionPanelProps {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  action?: SectionAction;
}

export function SectionPanel({
  title,
  description,
  children,
  className = "",
  action,
}: SectionPanelProps) {
  return (
    <Card
      className={`flex flex-1 flex-col border-0 shadow-none ${className}`}
    >
      <CardHeader className="p-8 pb-0">
        <CardTitle className="text-lg font-medium text-main">
          {title}
        </CardTitle>
        {description && (
          <p className="mt-1 text-[14px] leading-relaxed text-muted-2">
            {description}
          </p>
        )}
      </CardHeader>
      {children && <CardContent className="p-8 pt-6">{children}</CardContent>}

      {action && (
        <div className="mt-auto px-8 pb-8 pt-5">
          <Button
            variant="outline"
            className="h-9 rounded-full border border-input bg-background px-4 text-sm font-medium transition-all duration-300 hover:border-[#fcc10f] hover:bg-[#fcc10f] hover:text-[#0e0b00] touch-active:border-[#fcc10f] touch-active:bg-[#fcc10f] touch-active:text-[#0e0b00]"
            asChild
          >
            <a
              href={action.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              {action.label || "Details"}
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      )}
    </Card>
  );
}
