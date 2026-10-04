import { Link } from "react-router-dom";
import { HeroBanner } from "@/components/layout/HeroBanner";
import { Section } from "@/components/layout/Section";
import { CheckList } from "@/components/layout/CheckList";
import { Reveal } from "@/components/layout/Reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  productRange,
  whyChooseUs,
  certifications,
  highlights,
  siteInfo,
  foundersTaglines,
} from "@/data/content";
import heroHome from "@/assets/hero/home.jpg";
import { ShieldCheck, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <>
      <HeroBanner
        image={heroHome}
        eyebrow="Supracious Exim Pvt Ltd"
        title="Delivering Nature's Finest to the World"
        subtitle="Premium Indian spices, pulses, cereals and agricultural products, exported with trust across the globe."
        showGlobalMotif
      >
        <p className="mt-6 flex items-center gap-3 font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold-light sm:text-sm">
          <span className="h-px w-6 bg-gold" aria-hidden="true" />
          {foundersTaglines[1]}
        </p>
        <div className="mt-7 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <Button
            asChild
            size="lg"
            className="w-full rounded-full bg-gold text-forest-dark hover:bg-gold-light sm:w-auto"
          >
            <Link to="/contact">Request a Quote</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full rounded-full border-ivory/60 bg-transparent text-ivory hover:bg-ivory/10 hover:text-ivory sm:w-auto"
          >
            <Link to="/about">Discover Our Story</Link>
          </Button>
        </div>
      </HeroBanner>

      {/* Welcome */}
      <Section
        eyebrow="Welcome"
        title={`Welcome to ${siteInfo.name}`}
        description="Supracious is a trusted exporter of premium Indian spices, pulses, cereals, and agricultural products. We are committed to delivering authentic products that meet international quality standards while preserving their natural aroma, taste, and nutritional value. Our focus on quality, timely deliveries, and customer satisfaction has helped us build strong relationships with global partners."
        tone="white"
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: Sparkles, label: "Premium Sourcing" },
            { icon: ShieldCheck, label: "Certified Quality" },
            { icon: ShieldCheck, label: "Global Trust" },
          ].map(({ icon: Icon, label }, idx) => (
            <Reveal key={label} delay={idx * 80} className="mx-auto">
              <div className="flex items-center gap-3 rounded-full border border-forest/15 bg-ivory px-6 py-4">
                <Icon className="text-forest" size={20} />
                <span className="font-body text-sm font-medium text-brown">
                  {label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Company Profile */}
      <Section
        eyebrow="Company Profile"
        title="Sourcing, Processing & Exporting Excellence"
        description="Supracious is dedicated to sourcing, processing, and exporting high-quality agricultural commodities from India. With a customer-centric approach and a robust supply chain, we serve importers, wholesalers, retailers, and food manufacturers across the globe. Our product range includes:"
      >
        <div className="flex flex-wrap justify-center gap-3">
          {productRange.map((item) => (
            <Badge
              key={item}
              variant="outline"
              className="rounded-full border-forest/30 bg-white px-4 py-2 font-body text-sm text-forest-dark"
            >
              {item}
            </Badge>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section
        eyebrow="Why Choose Us"
        title="A Partner You Can Rely On"
        tone="white"
      >
        <CheckList items={whyChooseUs} columns={2} className="mx-auto max-w-4xl" />
      </Section>

      {/* Certifications */}
      <Section
        eyebrow="Certifications"
        title="Committed to Global Standards"
        description="Our certifications reflect our commitment to food safety, hygiene, and international compliance."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, idx) => (
            <Reveal key={cert.title} delay={idx * 60}>
              <div className="h-full rounded-xl border border-gold/25 bg-white p-6 text-center shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg">
                <ShieldCheck className="mx-auto text-gold" size={28} />
                <h3 className="mt-3 font-heading text-lg font-semibold text-forest-dark">
                  {cert.title}
                </h3>
                <p className="mt-1 font-body text-sm text-brown/80">
                  {cert.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Highlights */}
      <Section
        eyebrow="Highlights"
        title="Supracious at a Glance"
        tone="forest"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, idx) => (
            <Reveal key={item} delay={idx * 60}>
              <div className="rounded-xl border border-ivory/15 bg-ivory/5 p-6 text-center">
                <p className="font-heading text-lg font-semibold text-gold-light">
                  {item}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
