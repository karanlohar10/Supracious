import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { HeroBanner } from "@/components/layout/HeroBanner";
import { Section } from "@/components/layout/Section";
import { ProductCard } from "@/components/products/ProductCard";
import {
  CategoryFilterBar,
  type CategoryOption,
} from "@/components/products/CategoryFilterBar";
import { productCategories, products, productsIntro } from "@/data/content";
import heroProducts from "@/assets/hero/products.jpg";

const ALL = "All";
const PREVIEW_COUNT = 6;
const GRID_CLASSES = "grid gap-6 grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3";

export default function Products(): React.JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const [expanded, setExpanded] = useState<ReadonlySet<string>>(new Set());

  const categoryParam = searchParams.get("category") ?? ALL;
  const selected = (productCategories as readonly string[]).includes(
    categoryParam,
  )
    ? categoryParam
    : ALL;
  const query = searchParams.get("q") ?? "";
  const normalizedQuery = query.trim().toLowerCase();

  const updateParams = (category: string, q: string): void => {
    const next = new URLSearchParams();
    if (category !== ALL) next.set("category", category);
    if (q) next.set("q", q);
    setSearchParams(next, { replace: true });
  };

  const matching = useMemo(
    () =>
      products.filter(
        (p) =>
          !normalizedQuery ||
          p.name.toLowerCase().includes(normalizedQuery) ||
          p.description.toLowerCase().includes(normalizedQuery),
      ),
    [normalizedQuery],
  );

  const options: readonly CategoryOption[] = [
    { value: ALL, label: ALL, count: matching.length },
    ...productCategories.map((c) => ({
      value: c,
      label: c,
      count: matching.filter((p) => p.category === c).length,
    })),
  ];

  const isGrouped = selected === ALL && !normalizedQuery;
  const flatResults = matching.filter(
    (p) => selected === ALL || p.category === selected,
  );

  const toggleExpanded = (category: string): void => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(category)) next.delete(category);
      else next.add(category);
      return next;
    });
  };

  const clearFilters = (): void => updateParams(ALL, "");

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
        <CategoryFilterBar
          options={options}
          selected={selected}
          query={query}
          onSelect={(value) => updateParams(value, query)}
          onQueryChange={(value) => updateParams(selected, value)}
        />

        <p className="sr-only" aria-live="polite">
          {flatResults.length} products shown
        </p>

        <div className="mt-10 space-y-14">
          {isGrouped ? (
            productCategories.map((category) => {
              const items = products.filter((p) => p.category === category);
              const isExpanded = expanded.has(category);
              const visible = isExpanded ? items : items.slice(0, PREVIEW_COUNT);
              return (
                <div key={category}>
                  <h3 className="mb-6 border-b border-forest/15 pb-3 text-center font-heading text-2xl font-semibold text-forest-dark">
                    {category}{" "}
                    <span className="text-base font-normal text-brown/60">
                      ({items.length})
                    </span>
                  </h3>
                  <div className={GRID_CLASSES}>
                    {visible.map((product) => (
                      <ProductCard key={product.name} product={product} />
                    ))}
                  </div>
                  {items.length > PREVIEW_COUNT && (
                    <div className="mt-6 text-center">
                      <button
                        type="button"
                        aria-expanded={isExpanded}
                        onClick={() => toggleExpanded(category)}
                        className="rounded-full border border-forest px-6 py-2 font-body text-sm font-semibold text-forest transition-colors hover:bg-forest hover:text-ivory focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
                      >
                        {isExpanded
                          ? "Show less"
                          : `Show all ${items.length} ${category}`}
                      </button>
                    </div>
                  )}
                </div>
              );
            })
          ) : flatResults.length > 0 ? (
            <div className={GRID_CLASSES}>
              {flatResults.map((product) => (
                <ProductCard key={product.name} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-10 text-center font-body text-brown/80">
              <p>No products match your search.</p>
              <button
                type="button"
                onClick={clearFilters}
                className="mt-4 rounded-full border border-forest px-6 py-2 text-sm font-semibold text-forest hover:bg-forest hover:text-ivory"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </Section>
    </>
  );
}
