export function ProductPrice({
  priceLabel,
  compareAtPrice,
  size = "standard",
}: {
  priceLabel: string;
  compareAtPrice?: string;
  size?: "standard" | "compact" | "carousel";
}) {
  const isLarge = size === "standard";

  return (
    <div className="ecom-price-block">
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
        <span
          className={`ecom-price-current ${isLarge ? "text-xl" : "text-lg"}`}
        >
          {priceLabel}
        </span>
        {compareAtPrice && (
          <span className={`ecom-price-compare ${isLarge ? "text-sm" : "text-xs"}`}>
            {compareAtPrice}
          </span>
        )}
      </div>
    </div>
  );
}
