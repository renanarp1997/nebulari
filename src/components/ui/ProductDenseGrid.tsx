"use client";

import { motion } from "framer-motion";
import type { Product } from "@/lib/products";
import { ProductCard, type ProductCardSize } from "@/components/ui/ProductCard";
import { fadeInUp, staggerContainer } from "@/lib/motion";

type GridDensity = "dense" | "bento";

export function ProductDenseGrid({
  products,
  size = "compact",
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
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-30px" }}
        className={`grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3 lg:grid-cols-6 lg:gap-3 ${className}`}
      >
        {hero && (
          <motion.div
            variants={fadeInUp}
            className="col-span-2 row-span-2 max-md:col-span-1 max-md:row-span-1 sm:col-span-2 sm:row-span-2 lg:col-span-2"
          >
            <ProductCard product={hero} size={size} />
          </motion.div>
        )}
        {rest.map((product) => (
          <motion.div key={product.id} variants={fadeInUp}>
            <ProductCard product={product} size={size} />
          </motion.div>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
      className={`ecom-dense-grid grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-2.5 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 ${className}`}
    >
      {products.map((product) => (
        <motion.div key={product.id} variants={fadeInUp}>
          <ProductCard product={product} size={size} />
        </motion.div>
      ))}
    </motion.div>
  );
}
