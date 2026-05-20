/** Utilitários de vitrine — estilo marketplace (referência Shopee) */
export function parsePriceValue(label: string): number | null {
  const digits = label.replace(/[^\d]/g, "");
  if (!digits) return null;
  return Number(digits) / 100;
}

export function getDiscountPercent(
  priceLabel: string,
  compareAtPrice?: string
): number | null {
  if (!compareAtPrice) return null;
  const current = parsePriceValue(priceLabel);
  const compare = parsePriceValue(compareAtPrice);
  if (!current || !compare || compare <= current) return null;
  return Math.round(((compare - current) / compare) * 100);
}

export function formatSoldCount(count: number): string {
  if (count >= 1000) {
    const k = count / 1000;
    return k >= 10 ? `${Math.floor(k)}mil+ vendidos` : `${k.toFixed(1).replace(".", ",")}mil vendidos`;
  }
  return `${count.toLocaleString("pt-BR")} vendidos`;
}
