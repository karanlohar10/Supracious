import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface HeroBannerProps {
  image: string;
  eyebrow?: string;
  /** Optional short accent line rendered above the title (styled as text, not a button). */
  tagline?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  /** Show a subtle world-map + cargo-ship motif overlay (used on Home). */
  showGlobalMotif?: boolean;
}

/**
 * Full-width premium hero banner used consistently across all pages.
 * 1920x700-style aspect, warm dark overlay, left-aligned title area.
 */
export function HeroBanner({
  image,
  eyebrow,
  tagline,
  title,
  subtitle,
  children,
  showGlobalMotif = false,
}: HeroBannerProps) {
  return (
    <section className="relative h-[70vh] min-h-[520px] max-h-[700px] w-full overflow-hidden sm:min-h-[420px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      {/* Warm dark overlay for readability, heavier on the left for title space */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

      {showGlobalMotif && (
        <svg
          className="pointer-events-none absolute -right-24 top-1/2 h-[140%] w-[70%] -translate-y-1/2 opacity-15"
          viewBox="0 0 200 200"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="100" cy="100" r="90" stroke="#F8F7F2" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="70" stroke="#F8F7F2" strokeWidth="0.5" />
          <path
            d="M40 60 Q100 30 160 60 M30 100 Q100 80 170 100 M40 140 Q100 170 160 140"
            stroke="#F8F7F2"
            strokeWidth="0.5"
          />
        </svg>
      )}

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 pt-28 sm:px-10 sm:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          {tagline && (
            <p className="mb-4 flex items-center gap-3 font-body text-xs font-semibold uppercase tracking-[0.24em] text-gold-light sm:text-sm">
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              {tagline}
            </p>
          )}
          {eyebrow && (
            <p className="mb-3 font-body text-sm font-semibold uppercase tracking-[0.25em] text-gold">
              {eyebrow}
            </p>
          )}
          <h1 className="font-heading text-4xl font-semibold leading-tight text-ivory sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-md font-body text-base text-ivory/85 sm:text-lg">
              {subtitle}
            </p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
