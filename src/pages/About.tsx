import { HeroBanner } from "@/components/layout/HeroBanner";
import { Section } from "@/components/layout/Section";
import { CheckList } from "@/components/layout/CheckList";
import { Reveal } from "@/components/layout/Reveal";
import { scopeOfBusiness, cateredTo } from "@/data/content";
import heroAbout from "@/assets/hero/about.jpg";
import { Factory } from "lucide-react";

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
