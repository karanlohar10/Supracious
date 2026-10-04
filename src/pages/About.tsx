import { HeroBanner } from "@/components/layout/HeroBanner";
import { Section } from "@/components/layout/Section";
import { CheckList } from "@/components/layout/CheckList";
import { Reveal } from "@/components/layout/Reveal";
import {
  scopeOfBusiness,
  cateredTo,
  founders,
  foundersIntro,
  foundersPledge,
  foundersTaglines,
} from "@/data/content";
import heroAbout from "@/assets/hero/about.jpg";
import { Factory, Quote } from "lucide-react";
import sunilJadhavPhoto from "@/assets/founders/dr-sunil-jadhav.webp";
import pratibhaSutarPhoto from "@/assets/founders/pratibha-sutar.jpg";

export default function About() {
  return (
    <>
      <HeroBanner
        image={heroAbout}
        eyebrow="About Us"
        title="Rooted in Tradition, Reaching the World"
        subtitle="Bringing the rich flavors of India to customers worldwide since our founding."
      />

      {/* Company Profile */}
      <Section
        eyebrow="Company Profile"
        title="Our Story"
        tone="white"
        description="Supracious was established with the vision of bringing the rich flavors of India to customers worldwide. We specialize in exporting premium-quality spices, pulses, cereals, and other agricultural products while maintaining the highest standards of quality, consistency, and customer satisfaction. Our business philosophy is built on trust, transparency, innovation, and continuous improvement."
      />

      {/* Our Founders */}
      <Section
        eyebrow="Our Founders"
        title={foundersIntro}
        description="Supracious was born at the intersection of chemistry and commerce — founded by a researcher and his student, both committed to bringing lab-grade precision to every export."
        tone="forest"
      >
        {/* Eye-catching brand taglines */}
        <Reveal className="mb-10 flex flex-col items-center justify-center gap-5 text-center sm:flex-row sm:gap-8">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-ivory/85 sm:text-sm">
            {foundersTaglines[1]}
          </p>
          <span className="hidden h-8 w-px bg-gold/50 sm:block" aria-hidden="true" />
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-ivory/85 sm:text-sm">
            {foundersTaglines[0]}
          </p>
        </Reveal>

        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          {founders.map((founder, idx) => (
            <Reveal key={founder.name} delay={idx * 80}>
              <div className="h-full rounded-xl border border-forest/15 bg-ivory p-6 text-center shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg">
                <img
                  src={idx === 0 ? sunilJadhavPhoto : pratibhaSutarPhoto}
                  alt={founder.name}
                  className="mx-auto h-24 w-24 rounded-full border-4 border-gold/30 object-cover shadow-sm"
                />
                <h3 className="mt-3 font-heading text-lg font-semibold text-forest-dark">
                  {founder.name}
                </h3>
                <p className="mt-1 font-body text-sm font-medium text-gold">
                  {founder.role}
                </p>
                <p className="font-body text-xs tracking-wide text-brown/70">
                  {founder.qualification}
                </p>
                <span className="mt-2 inline-block rounded-full bg-forest/10 px-3 py-1 font-body text-xs font-semibold uppercase tracking-wide text-forest">
                  {founder.specialty}
                </span>
                <p className="mt-3 font-body text-sm leading-relaxed text-brown/90">
                  {founder.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Shared founders' pledge */}
        <Reveal className="mx-auto mt-14 max-w-2xl text-center">
          <Quote className="mx-auto text-gold" size={32} />
          <p className="mt-3 font-heading text-xl leading-snug text-ivory sm:text-2xl">
            {foundersPledge}
          </p>
        </Reveal>
      </Section>

      {/* Scope of Business */}
      <Section
        eyebrow="Scope of Business"
        title="End-to-End Export Solutions"
        description="We provide end-to-end export solutions including:"
      >
        <CheckList items={scopeOfBusiness} columns={2} className="mx-auto max-w-3xl" />

        <Reveal className="mx-auto mt-14 max-w-3xl text-center">
          <h3 className="font-heading text-xl font-semibold text-forest-dark">
            We cater to
          </h3>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {cateredTo.map((item) => (
              <span
                key={item}
                className="rounded-full border border-forest/25 bg-ivory px-5 py-2 font-body text-sm text-brown"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Our Facility */}
      <Section
        eyebrow="Our Facility"
        title="Modern, Hygienic, Consistent"
        tone="white"
      >
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <Reveal>
            <Factory className="text-forest" size={40} />
          </Reveal>
          <Reveal delay={80}>
            <p className="font-body leading-relaxed text-brown/90">
              Our manufacturing facility is equipped with modern machinery for
              cleaning, grading, grinding, blending, and packaging spices. The
              facility follows hygienic production practices with strict
              quality control measures to ensure every product meets domestic
              and international standards. Our team continuously monitors
              production processes to maintain consistency, freshness, and
              food safety.
            </p>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
