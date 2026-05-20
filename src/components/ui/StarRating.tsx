import { Star } from "lucide-react";

export function StarRating({
  rating,
  reviewCount,
  size = "sm",
  dense = false,
}: {
  rating: number;
  reviewCount?: number;
  size?: "sm" | "md";
  dense?: boolean;
}) {
  if (dense) {
    return (
      <p className="text-[10px] text-muted">
        <span className="font-medium text-foreground">{rating.toFixed(1)}</span>
        {reviewCount !== undefined && (
          <span> · {reviewCount.toLocaleString("pt-BR")} avaliações</span>
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
