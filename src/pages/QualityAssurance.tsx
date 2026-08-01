import { HeroBanner } from "@/components/layout/HeroBanner";
import { Section } from "@/components/layout/Section";
import { CheckList } from "@/components/layout/CheckList";
import { Reveal } from "@/components/layout/Reveal";
import { qaCommitments, certifications, testingProcess } from "@/data/content";
import heroQuality from "@/assets/hero/quality.jpg";
import { ShieldCheck, FlaskConical } from "lucide-react";

export default function QualityAssurance() {
  return (
    <>
      <HeroBanner
        image={heroQuality}
        eyebrow="Quality Assurance"
        title="Quality at the Heart of Everything We Do"
        subtitle="Rigorous testing and farm-to-export monitoring for every shipment."
      />

      {/* Quality Policy */}
      <Section
        eyebrow="Quality Policy"
        title="Our Commitment to Excellence"
        description="Quality is at the heart of everything we do. Our quality assurance system ensures that every product delivered meets customer expectations and international food safety requirements. Our commitment includes:"
        tone="white"
      >
        <CheckList items={qaCommitments} columns={2} className="mx-auto max-w-3xl" />
      </Section>

      {/* Certifications */}
      <Section
        eyebrow="Certifications"
        title="Recognized International Standards"
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

      {/* Testing Process */}
      <Section
        eyebrow="Testing Process"
        title="Multi-Stage Verification"
        tone="forest"
      >
        <div className="mx-auto grid max-w-3xl gap-4">
          {testingProcess.map((step, idx) => (
            <Reveal key={step} delay={idx * 60}>
              <div className="flex items-center gap-4 rounded-xl border border-ivory/15 bg-ivory/5 px-5 py-4">
                <FlaskConical size={20} className="shrink-0 text-gold-light" />
                <span className="font-body text-sm text-ivory/90">{step}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
