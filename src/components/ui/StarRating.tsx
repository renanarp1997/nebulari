import { Star } from "lucide-react";
import { formatSoldCount } from "@/lib/product-utils";

export function StarRating({
  rating,
  reviewCount,
  size = "sm",
  dense = false,
  marketplace = false,
}: {
  rating: number;
  reviewCount?: number;
  size?: "sm" | "md";
  dense?: boolean;
  marketplace?: boolean;
}) {
  if (marketplace || dense) {
    return (
      <p className="ecom-rating-line text-xs text-muted">
        <span className="inline-flex items-center gap-0.5 text-[var(--gold-muted)]">
          <Star className="h-3 w-3 fill-[var(--gold-muted)]" strokeWidth={0} />
          <span className="font-semibold text-foreground">{rating.toFixed(1)}</span>
        </span>
        {reviewCount !== undefined && (
          <>
            <span className="mx-1 text-border">|</span>
            <span>{formatSoldCount(reviewCount)}</span>
          </>
        )}
      </p>
    );
  }

  const starClass = size === "md" ? "h-3.5 w-3.5" : "h-2.5 w-2.5 sm:h-3 sm:w-3";

  return (
    <div className="flex flex-wrap items-center gap-1">
      <div className="flex items-center gap-0.5" aria-label={`${rating} de 5 estrelas`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`${starClass} ${
              i < Math.floor(rating)
                ? "fill-[var(--gold-muted)] text-[var(--gold-muted)]"
                : i < rating
                  ? "fill-[var(--gold-muted)]/50 text-[var(--gold-muted)]"
                  : "fill-transparent text-border"
            }`}
            strokeWidth={1.5}
          />
        ))}
      </div>
      <span className="text-xs font-medium text-foreground">{rating.toFixed(1)}</span>
      {reviewCount !== undefined && (
        <span className="text-xs text-muted">({reviewCount.toLocaleString("pt-BR")})</span>
      )}
    </div>
  );
}
