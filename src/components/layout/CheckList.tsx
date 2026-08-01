import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface CheckListProps {
  items: string[];
  columns?: 1 | 2;
  className?: string;
  dark?: boolean;
}

/** Reusable bulleted list styled with brand gold checkmarks. */
export function CheckList({ items, columns = 1, className, dark = false }: CheckListProps) {
  return (
    <ul
      className={cn(
        "grid gap-4",
        columns === 2 ? "sm:grid-cols-2" : "grid-cols-1",
        className,
      )}
    >
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <CheckCircle2
            size={20}
            className={cn("mt-0.5 shrink-0", dark ? "text-gold-light" : "text-forest")}
          />
          <span
            className={cn(
              "font-body text-sm leading-relaxed sm:text-base",
              dark ? "text-ivory/85" : "text-brown/90",
            )}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
