import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CategoryOption {
  readonly value: string;
  readonly label: string;
  readonly count: number;
}

interface CategoryFilterBarProps {
  readonly options: readonly CategoryOption[];
  readonly selected: string;
  readonly query: string;
  readonly onSelect: (value: string) => void;
  readonly onQueryChange: (value: string) => void;
}

export function CategoryFilterBar({
  options,
  selected,
  query,
  onSelect,
  onQueryChange,
}: CategoryFilterBarProps): React.JSX.Element {
  return (
    <div className="sticky top-24 z-40 -mx-6 border-b border-forest/10 bg-ivory/95 px-6 py-3 backdrop-blur-sm sm:-mx-10 sm:px-10">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div
          role="group"
          aria-label="Filter by category"
          className="flex gap-2 overflow-x-auto pb-1 lg:flex-wrap lg:overflow-visible lg:pb-0"
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              aria-pressed={selected === option.value}
              onClick={() => onSelect(option.value)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-1.5 font-body text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest",
                selected === option.value
                  ? "border-forest bg-forest text-ivory"
                  : "border-forest/25 bg-white text-forest-dark hover:bg-forest/10",
              )}
            >
              {option.label} ({option.count})
            </button>
          ))}
        </div>

        <div className="relative w-full lg:w-72">
          <label htmlFor="product-search" className="sr-only">
            Search products
          </label>
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brown/60"
          />
          <input
            id="product-search"
            type="text"
            inputMode="search"
            role="searchbox"
            autoComplete="off"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search products..."
            className="w-full rounded-full border border-forest/25 bg-white py-2 pl-9 pr-9 font-body text-sm text-forest-dark placeholder:text-brown/50 focus-visible:outline-2 focus-visible:outline-forest"
          />
          {query && (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => onQueryChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-brown/60 hover:text-forest"
            >
              <X aria-hidden="true" className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
