import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/layout/Reveal";
import { comingSoon } from "@/data/content";
import foodSoilTestingLaboratory from "@/assets/coming-soon/food-soil-testing-laboratory.jpg";
import soilMicronutrientSolutions from "@/assets/coming-soon/soil-micronutrient-solutions.jpg";

export const comingSoonImages: Record<string, string> = {
  "Food & Soil Testing Laboratory": foodSoilTestingLaboratory,
  "Soil Micronutrient Solutions": soilMicronutrientSolutions,
};

/** Glass cards that float over the bottom edge of the Home hero. */
export function ComingSoonCards() {
  return (
    <section
      aria-label="Coming soon"
      className="relative z-20 -mt-20 bg-[linear-gradient(to_bottom,transparent_5rem,var(--color-white)_5rem)] px-4 sm:-mt-24 sm:bg-[linear-gradient(to_bottom,transparent_6rem,var(--color-white)_6rem)] sm:px-10"
    >
      <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 sm:gap-6">
        {comingSoon.map((item, idx) => (
          <Reveal key={item.name} delay={idx * 100}>
            <a
              href="#coming-soon"
              className="group flex h-full items-center gap-4 rounded-2xl border border-gold/40 bg-forest-dark/80 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:p-5"
            >
              <img
                src={comingSoonImages[item.name]}
                alt=""
                className="size-20 shrink-0 rounded-xl object-cover ring-1 ring-gold/50 sm:size-24"
              />
              <div className="min-w-0">
                <Badge className="rounded-full border-none bg-gold px-3 py-0.5 font-body text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-forest-dark">
                  Coming Soon
                </Badge>
                <h3 className="mt-2 font-heading text-lg font-semibold italic leading-snug text-ivory sm:text-xl">
                  {item.name}
                </h3>
                <p className="mt-1 line-clamp-2 font-body text-xs leading-relaxed text-ivory/75 sm:text-sm">
                  {item.description}
                </p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
