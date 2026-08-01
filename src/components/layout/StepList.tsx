import { cn } from "@/lib/utils";
import { Reveal } from "@/components/layout/Reveal";

interface StepListProps {
  steps: string[];
  className?: string;
}

/** Horizontal/vertical numbered process timeline used for Manufacturing/Export process steps. */
export function StepList({ steps, className }: StepListProps) {
  return (
    <div className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {steps.map((step, idx) => (
        <Reveal key={step} delay={idx * 60}>
          <div className="group relative h-full rounded-xl border border-brown/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg">
            <span className="font-heading text-4xl font-bold text-gold/40 transition-colors group-hover:text-gold">
              {String(idx + 1).padStart(2, "0")}
            </span>
            <p className="mt-3 font-body text-sm font-medium leading-snug text-brown">
              {step}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
