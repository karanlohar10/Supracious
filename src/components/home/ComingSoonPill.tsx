import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { comingSoon } from "@/data/content";

/** Animated hero pill that draws attention to upcoming offerings. */
export function ComingSoonPill() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setActive((i) => (i + 1) % comingSoon.length), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.a
      href="#coming-soon"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
      className="pill-glow group relative mt-6 flex w-full max-w-full items-center gap-3 overflow-hidden rounded-2xl border border-gold/60 bg-black/40 px-4 py-3 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-gold hover:bg-black/55 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:inline-flex sm:w-auto sm:rounded-full sm:px-5"
    >
      <span className="pill-shimmer" aria-hidden="true" />
      <span className="relative flex size-2.5 shrink-0" aria-hidden="true">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold opacity-70 motion-reduce:animate-none" />
        <span className="relative inline-flex size-2.5 rounded-full bg-gold" />
      </span>
      <span className="relative min-w-0 break-words font-body text-xs leading-relaxed text-ivory sm:text-sm">
        <span className="mr-1 inline-block font-semibold uppercase tracking-[0.18em] text-gold-light">
          Coming soon
        </span>
        <span className="mr-1 text-gold/70" aria-hidden="true">
          |
        </span>
        {comingSoon.map((c, i) => (
          <span key={c.name}>
            {i > 0 && <span className="mx-1 text-gold/70">·</span>}
            <span
              className={`inline-block transition-opacity duration-700 ${
                i === active ? "opacity-100" : "opacity-60"
              }`}
            >
              {c.name}
            </span>
          </span>
        ))}
      </span>
      <ArrowRight
        size={16}
        className="relative shrink-0 text-gold transition-transform group-hover:translate-x-1"
        aria-hidden="true"
      />
    </motion.a>
  );
}
