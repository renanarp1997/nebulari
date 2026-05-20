type BadgeVariant = "novo" | "limitado" | "vendido" | "destaque";

const variantClass: Record<BadgeVariant, string> = {
  novo: "product-badge-novo",
  limitado: "product-badge-limitado",
  vendido: "product-badge-vendido",
  destaque: "product-badge-destaque",
};

const labels: Record<BadgeVariant, string> = {
  novo: "Novo",
  limitado: "Limitado",
  vendido: "Mais vendido",
  destaque: "Destaque",
};

export function ProductBadge({ variant }: { variant: BadgeVariant }) {
  return (
    <span className={`product-badge ${variantClass[variant]}`}>
      {labels[variant]}
    </span>
  );
}
