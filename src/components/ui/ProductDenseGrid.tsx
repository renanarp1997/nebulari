"use client";

import type { Product } from "@/lib/products";
import { ProductCard, type ProductCardSize } from "@/components/ui/ProductCard";

type GridDensity = "dense" | "bento";

export function ProductDenseGrid({
  products,
  size = "standard",
  density = "dense",
  className = "",
}: {
  products: Product[];
  size?: ProductCardSize;
  density?: GridDensity;
  className?: string;
}) {
  if (density === "bento") {
    const [hero, ...rest] = products;
    return (
      <div
        className={`ecom-product-grid grid grid-cols-2 gap-4 sm:gap-4 lg:grid-cols-4 lg:gap-4 ${className}`}
      >
        {hero && (
          <div className="col-span-2 row-span-2 max-md:col-span-1 max-md:row-span-1 sm:col-span-2 sm:row-span-2 lg:col-span-2">
            <ProductCard product={hero} size={size} />
          </div>
        )}
        {rest.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} size={size} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={`ecom-product-grid ecom-dense-grid grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-4 ${className}`}
    >
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} size={size} />
        </div>
      ))}
    </div>
  );
}
