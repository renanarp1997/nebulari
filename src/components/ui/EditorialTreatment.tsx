type EditorialVariant = "hero" | "collection" | "product" | "card";

const variantClass: Record<EditorialVariant, string> = {
  hero: "editorial-overlay-hero",
  collection: "editorial-overlay-collection",
  product: "editorial-overlay-product",
  card: "editorial-overlay-card",
};

export function EditorialTreatment({
  variant = "product",
}: {
  variant?: EditorialVariant;
}) {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div className={`absolute inset-0 ${variantClass[variant]}`} />
      <div className="editorial-specular absolute inset-0" />
      <div className="editorial-vignette absolute inset-0" />
    </div>
  );
}
