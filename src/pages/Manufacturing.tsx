import { HeroBanner } from "@/components/layout/HeroBanner";
import { Section } from "@/components/layout/Section";
import { StepList } from "@/components/layout/StepList";
import { CheckList } from "@/components/layout/CheckList";
import { Reveal } from "@/components/layout/Reveal";
import {
  manufacturingProcess,
  infrastructure,
  qualityControlSteps,
  storageGuidelines,
  shelfLife,
} from "@/data/content";
import heroManufacturing from "@/assets/hero/manufacturing.jpg";
import { Leaf, Snowflake } from "lucide-react";

export default function Manufacturing() {
  return (
    <>
      <HeroBanner
        image={heroManufacturing}
        eyebrow="Manufacturing"
        title="Precision, Hygiene & Consistency"
        subtitle="A modern, automated facility built to international food safety standards."
      />

      {/* Manufacturing Process */}
      <Section
        eyebrow="Manufacturing Process"
        title="From Raw Material to Export-Ready Product"
        description="Every batch undergoes multiple quality checks before shipment."
        tone="white"
      >
        <StepList steps={manufacturingProcess} />
      </Section>

      {/* Infrastructure & Facility */}
      <Section
        eyebrow="Infrastructure & Facility"
        title="Built for Efficiency & Safety"
        description="The facility is designed to ensure efficient production while maintaining international food safety standards. Our infrastructure includes:"
      >
        <CheckList items={infrastructure} columns={2} className="mx-auto max-w-3xl" />
      </Section>

      {/* Quality Control at Production */}
      <Section
        eyebrow="Quality Control at Production"
        title="Quality From Farm to Final Shipment"
        description="Quality assurance begins from raw material procurement and continues until the final shipment. Our quality control process includes:"
        tone="white"
      >
        <CheckList items={qualityControlSteps} columns={2} className="mx-auto max-w-3xl" />
      </Section>

      {/* Nutritional Value */}
      <Section
        eyebrow="Nutritional Value"
        title="Naturally Rich, Carefully Preserved"
        tone="forest"
      >
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <Reveal>
            <Leaf className="text-gold-light" size={40} />
          </Reveal>
          <Reveal delay={80}>
            <p className="font-body leading-relaxed text-ivory/85">
              Indian spices are naturally rich in antioxidants, essential
              minerals, vitamins, and beneficial plant compounds. Our products
              retain their natural aroma, flavor, and nutritional value
              through carefully controlled processing techniques. Detailed
              nutritional information is available on product packaging and
              technical specification sheets.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Shelf Life & Storage */}
      <Section
        eyebrow="Shelf Life & Storage Conditions"
        title="Preserving Freshness at Every Stage"
        tone="white"
      >
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h3 className="mb-4 flex items-center gap-2 font-heading text-xl font-semibold text-forest-dark">
              <Snowflake size={20} className="text-forest" /> Recommended Storage
            </h3>
            <ul className="space-y-3">
              {storageGuidelines.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-brown/10 bg-ivory px-4 py-3 font-body text-sm text-brown/90"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <h3 className="mb-4 font-heading text-xl font-semibold text-forest-dark">
              Typical Shelf Life
            </h3>
            <div className="overflow-hidden rounded-xl border border-brown/10">
              <table className="w-full text-left font-body text-sm">
                <thead className="bg-forest text-ivory">
                  <tr>
                    <th className="px-4 py-3 font-medium">Product</th>
                    <th className="px-4 py-3 font-medium">Shelf Life</th>
                  </tr>
                </thead>
                <tbody>
                  {shelfLife.map((row, idx) => (
                    <tr
                      key={row.product}
                      className={idx % 2 === 0 ? "bg-white" : "bg-ivory"}
                    >
                      <td className="px-4 py-3 text-brown">{row.product}</td>
                      <td className="px-4 py-3 text-brown/80">{row.life}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
