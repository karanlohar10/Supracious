import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/content";

const imageModules = import.meta.glob<string>("@/assets/products/*.jpg", {
  eager: true,
  import: "default",
});

const toSlug = (name: string): string =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const productImages: Record<string, string> = Object.fromEntries(
  Object.entries(imageModules).map(([path, src]) => [
    path.split("/").pop()?.replace(".jpg", "") ?? path,
    src,
  ]),
);

interface ProductCardProps {
  readonly product: Product;
}

export function ProductCard({ product }: ProductCardProps): React.JSX.Element {
  const image = productImages[toSlug(product.name)];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-[4/3] overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            role="img"
            aria-label={`${product.name} (photo coming soon)`}
            className="flex h-full w-full items-center justify-center bg-forest/5 font-body text-sm text-brown/60"
          >
            Photo coming soon
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 text-center">
        <p className="font-body text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold">
          {product.category}
        </p>
        <h4 className="mt-1 font-heading text-lg font-semibold leading-snug text-forest-dark">
          {product.name}
        </h4>
        <p className="mt-2 mb-5 line-clamp-2 font-body text-sm leading-relaxed text-brown/90">
          {product.description}
        </p>
        <Link
          to={`/contact?product=${encodeURIComponent(product.name)}`}
          className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-full border border-forest/30 px-4 py-2 font-body text-sm font-semibold text-forest transition-colors hover:bg-forest hover:text-ivory focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
        >
          Enquire
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
