import type { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/** Wraps children with a fade-up scroll reveal animation. */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const { ref, isVisible } = useReveal();

  return (
    <div
      ref={ref}
      className={cn("reveal", isVisible && "is-visible", className)}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
