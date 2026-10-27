import { Reveal } from "@/components/layout/Reveal";
import { comingSoon } from "@/data/content";
import foodSoilTestingLaboratory from "@/assets/coming-soon/food-soil-testing-laboratory.jpg";
import soilMicronutrientSolutions from "@/assets/coming-soon/soil-micronutrient-solutions.jpg";

export const comingSoonImages: Record<string, string> = {
  "Food & Soil Testing Laboratory": foodSoilTestingLaboratory,
  "Soil Micronutrient Solutions": soilMicronutrientSolutions,
};

/** Featured band announcing upcoming offerings, shown right below the Home hero. */
export function ComingSoonCards() {
  return (
    <section
      aria-label="Coming soon"
      className="border-y border-gold/40 bg-forest-dark px-4 py-14 sm:px-10 sm:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Coming Soon
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold italic text-ivory sm:text-4xl">
            Introducing what&apos;s next
          </h2>
          <span className="mx-auto mt-4 block h-px w-16 bg-gold" aria-hidden="true" />
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {comingSoon.map((item, idx) => (
            <Reveal key={item.name} delay={idx * 100}>
              <a
                href="#coming-soon"
                className="group relative block aspect-[16/11] overflow-hidden rounded-2xl border border-gold/40 shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <img
                  src={comingSoonImages[item.name]}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <span className="inline-block rounded-full bg-gold px-3 py-0.5 font-body text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-forest-dark">
                    Coming Soon
                  </span>
                  <h3 className="mt-3 font-heading text-2xl font-semibold italic leading-snug text-ivory">
                    {item.name}
                  </h3>
                  <p className="mt-1 font-body text-sm leading-relaxed text-ivory/80">
                    {item.description}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
