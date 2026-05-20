"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/ui/ProductCard";
import { COLLECTIONS } from "@/lib/constants";
import { PRODUCTS, type Product } from "@/lib/products";
import { fadeInUp } from "@/lib/motion";

const LANES = [
  { collectionId: "minimalistas" as const, label: "Joias minimal" },
  { collectionId: "geek" as const, label: "Blocos & geek" },
  { collectionId: "aventureiros" as const, label: "Anime & acessórios" },
  { collectionId: "espaciais" as const, label: "Metais cósmicos" },
];

function getLaneProducts(collectionId: string): Product[] {
  return PRODUCTS.filter((p) => p.collectionId === collectionId).slice(0, 10);
}

export function CategoryLanes() {
  return (
    <section id="corredores" className="section-dense border-b border-border bg-background-elevated">
      <div className="mx-auto max-w-[1400px] space-y-6 px-5 sm:space-y-8 sm:px-8">
        {LANES.map((lane, index) => {
          const col = COLLECTIONS.find((c) => c.id === lane.collectionId);
          const products = getLaneProducts(lane.collectionId);

          return (
            <motion.div
              key={lane.collectionId}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20px" }}
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                    Corredor {index + 1}
                  </p>
                  <h3 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                    {col?.name ?? lane.label}
                  </h3>
                </div>
                <Link
                  href={col?.href ?? "#colecoes"}
                  className="shrink-0 text-[10px] font-semibold uppercase tracking-wider text-foreground hover:text-accent"
                >
                  Ver todos →
                </Link>
              </div>

              <div className="ecom-lane-track ecom-scroll-bleed hide-scrollbar flex gap-2 overflow-x-auto overscroll-x-contain pb-1 touch-pan-x sm:gap-2.5">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} size="carousel" />
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
