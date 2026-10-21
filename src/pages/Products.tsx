import { HeroBanner } from "@/components/layout/HeroBanner";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/layout/Reveal";
import { productCategories, products, productsIntro } from "@/data/content";
import heroProducts from "@/assets/hero/products.jpg";
import wholeDriedTurmeric from "@/assets/products/whole-dried-turmeric.jpg";
import turmericPowder from "@/assets/products/turmeric-powder.jpg";
import freshDriedGinger from "@/assets/products/fresh-dried-ginger.jpg";
import capsicumVarieties from "@/assets/products/capsicum-varieties.jpg";
import chilly from "@/assets/products/chilly.jpg";
import puffedRice from "@/assets/products/puffed-rice.jpg";
import poppedRice from "@/assets/products/popped-rice-parched-rice.jpg";
import beatenRice from "@/assets/products/beaten-rice-rice-flakes.jpg";
import thickFlattenedRice from "@/assets/products/thick-flattened-rice.jpg";
import maize from "@/assets/products/maize-corn.jpg";
import splitBengalGram from "@/assets/products/split-bengal-gram-chick-peas.jpg";

const productImages: Record<string, string> = {
  "Whole Dried Turmeric": wholeDriedTurmeric,
  "Turmeric Powder": turmericPowder,
  "Fresh & Dried Ginger": freshDriedGinger,
  "Capsicum Varieties": capsicumVarieties,
  Chilly: chilly,
  "Puffed Rice": puffedRice,
  "Popped Rice / Parched Rice": poppedRice,
  "Beaten Rice / Rice Flakes": beatenRice,
  "Thick Flattened Rice": thickFlattenedRice,
  "Maize / Corn": maize,
  "Split Bengal Gram / Chick Peas": splitBengalGram,
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
        <div className="space-y-16">
          {productCategories.map((category) => (
            <div key={category}>
              <Reveal>
                <h3 className="mb-8 border-b border-forest/15 pb-3 text-center font-heading text-2xl font-semibold text-forest-dark">
                  {category}
                </h3>
              </Reveal>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {products
                  .filter((product) => product.category === category)
                  .map((product, idx) => (
                    <Reveal key={product.name} delay={idx * 80}>
                      <div className="group h-full overflow-hidden rounded-xl border border-forest/15 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={productImages[product.name]}
                            alt={product.name}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-6 text-center">
                          <h4 className="font-heading text-xl font-semibold text-forest-dark">
                            {product.name}
                          </h4>
                          <p className="mt-2 font-body text-sm leading-relaxed text-brown/90">
                            {product.description}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
