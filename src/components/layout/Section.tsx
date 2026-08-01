import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/layout/Reveal";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  tone?: "ivory" | "white" | "forest";
}

const toneClasses: Record<NonNullable<SectionProps["tone"]>, string> = {
  ivory: "bg-ivory",
  white: "bg-white",
  forest: "bg-forest-dark text-ivory",
};

/** Consistent section wrapper with heading + scroll-reveal used across every page. */
export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  tone = "ivory",
}: SectionProps) {
  const isDark = tone === "forest";

  return (
    <section id={id} className={cn("py-20 sm:py-24", toneClasses[tone], className)}>
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          {eyebrow && (
            <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              {eyebrow}
            </p>
          )}
          <h2
            className={cn(
              "font-heading text-3xl font-semibold sm:text-4xl",
              isDark ? "text-ivory" : "text-forest-dark",
            )}
          >
            {title}
          </h2>
          {description && (
            <p
              className={cn(
                "mt-4 font-body text-base leading-relaxed",
                isDark ? "text-ivory/75" : "text-brown/90",
              )}
            >
              {description}
            </p>
          )}
        </Reveal>

        {children && <div className="mt-12">{children}</div>}
      </div>
    </section>
  );
}
