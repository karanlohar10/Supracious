import { HeroBanner } from "@/components/layout/HeroBanner";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/layout/Reveal";
import { products, productsIntro } from "@/data/content";
import heroProducts from "@/assets/hero/products.jpg";
import wholeDriedTurmeric from "@/assets/products/whole-dried-turmeric.jpg";
import turmericPowder from "@/assets/products/turmeric-powder.jpg";
import freshDriedGinger from "@/assets/products/fresh-dried-ginger.jpg";
import capsicumVarieties from "@/assets/products/capsicum-varieties.jpg";
import chilly from "@/assets/products/chilly.jpg";

const productImages: Record<string, string> = {
  "Whole Dried Turmeric": wholeDriedTurmeric,
  "Turmeric Powder": turmericPowder,
  "Fresh & Dried Ginger": freshDriedGinger,
  "Capsicum Varieties": capsicumVarieties,
  Chilly: chilly,
};

// On large screens the grid uses 6 columns with each card spanning 2, giving
// 3 cards per row. The last 2 cards are offset to sit centered on row two.
const lgPlacement: Record<number, string> = {
  3: "lg:col-start-2",
  4: "lg:col-start-4",
};

export default function Products() {
  return (
    <>
      <HeroBanner
        image={heroProducts}
        eyebrow="Our Products"
        title="Our Products"
        subtitle={productsIntro}
      />

      <Section
        eyebrow="Our Products"
        title="Our Products"
        description={productsIntro}
      >
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
          {products.map((product, idx) => (
            <Reveal
              key={product.name}
              delay={idx * 80}
              className={`lg:col-span-2 ${lgPlacement[idx] ?? ""}`}
            >
              <div className="group h-full overflow-hidden rounded-xl border border-forest/15 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={productImages[product.name]}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-heading text-xl font-semibold text-forest-dark">
                    {product.name}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-brown/90">
                    {product.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
