import { comingSoon } from "@/data/content";

const items = comingSoon.map((c) => c.name);

function Track({ hidden }: { hidden?: boolean }) {
  return (
    <ul className="marquee-track" aria-hidden={hidden || undefined}>
      {[...items, ...items, ...items].map((name, i) => (
        <li
          key={`${name}-${i}`}
          className={`flex items-center gap-8 pr-8 sm:gap-12 sm:pr-12${i >= items.length ? " marquee-dup" : ""}`}
        >
          <span className="flex items-center gap-3 whitespace-nowrap">
            <span className="font-body text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-gold">
              Coming Soon
            </span>
            <span className="font-heading text-lg italic text-ivory sm:text-xl">{name}</span>
          </span>
          <span className="size-1.5 rotate-45 bg-gold/70" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
}

/** Slim, seamless scrolling strip announcing upcoming offerings. */
export function ComingSoonMarquee() {
  return (
    <section
      aria-label={`Coming soon: ${items.join(", ")}`}
      className="marquee border-y border-gold/40 bg-forest-dark py-4"
    >
      <div className="marquee-mask overflow-hidden">
        <div className="marquee-inner">
          <Track />
          <Track hidden />
        </div>
      </div>
    </section>
  );
}
