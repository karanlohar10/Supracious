import { HeroBanner } from "@/components/layout/HeroBanner";
import { Section } from "@/components/layout/Section";
import { StepList } from "@/components/layout/StepList";
import { Reveal } from "@/components/layout/Reveal";
import { exportCountries, exportProcessSteps, packagingOptions } from "@/data/content";
import heroExports from "@/assets/hero/exports.jpg";
import { Package, Ship, Plane } from "lucide-react";

export default function Exports() {
  return (
    <>
      <HeroBanner
        image={heroExports}
        eyebrow="Exports"
        title="Connecting India to the World"
        subtitle="A seamless export journey from our facilities to global ports."
      />

      {/* Countries We Export To */}
      <Section
        eyebrow="Countries We Export To"
        title="Serving Global Markets"
        description="We aim to serve customers across multiple international markets, including:"
        tone="white"
      >
        <div className="flex flex-wrap justify-center gap-3">
          {exportCountries.map((country, idx) => (
            <Reveal key={country} delay={idx * 40}>
              <span className="rounded-full border border-forest/25 bg-ivory px-5 py-2 font-body text-sm font-medium text-forest-dark">
                {country}
              </span>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Export Process */}
      <Section
        eyebrow="Export Process"
        title="From Inquiry to Delivery"
        description="Our export process ensures a seamless experience from inquiry to delivery."
      >
        <StepList steps={exportProcessSteps} />
      </Section>

      {/* Packaging & Logistics */}
      <Section
        eyebrow="Packaging & Logistics"
        title="Customized, Secure, On Time"
        description="We offer customized packaging solutions suitable for wholesale, retail, and private label businesses."
        tone="white"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packagingOptions.map((option, idx) => (
            <Reveal key={option} delay={idx * 60}>
              <div className="flex h-full items-center gap-3 rounded-xl border border-brown/10 bg-white p-5 shadow-sm">
                <Package className="shrink-0 text-forest" size={22} />
                <span className="font-body text-sm font-medium text-brown">
                  {option}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mx-auto mt-14 flex max-w-3xl flex-col items-center gap-4 text-center">
          <div className="flex gap-4 text-forest">
            <Ship size={26} />
            <Plane size={26} />
          </div>
          <p className="font-body leading-relaxed text-brown/90">
            Our logistics partners ensure safe, timely, and secure delivery
            through sea freight, air freight, and multimodal transportation
            while complying with international export regulations.
          </p>
        </Reveal>
      </Section>
    </>
  );
}
