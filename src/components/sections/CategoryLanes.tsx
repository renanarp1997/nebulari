"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ProductCard } from "@/components/ui/ProductCard";
import { CarouselEdgeFade } from "@/components/ui/CarouselEdgeFade";
import { COLLECTIONS } from "@/lib/constants";
import { PRODUCTS, type Product } from "@/lib/products";

const LANES = [
  { collectionId: "minimalistas" as const, label: "Joias minimal" },
  { collectionId: "geek" as const, label: "Blocos & geek" },
  { collectionId: "aventureiros" as const, label: "Anime & acessórios" },
  { collectionId: "espaciais" as const, label: "Metais cósmicos" },
];

const LANE_DESKTOP = 6;
const LANE_MOBILE = 4;

function getLaneProducts(collectionId: string, limit: number): Product[] {
  return PRODUCTS.filter((p) => p.collectionId === collectionId).slice(0, limit);
}

export function CategoryLanes() {
  const [limit, setLimit] = useState(LANE_MOBILE);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const apply = () => setLimit(mq.matches ? LANE_DESKTOP : LANE_MOBILE);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <section id="corredores" className="section-dense border-b border-border bg-background-elevated">
      <div className="site-container space-y-6 sm:space-y-8">
        {LANES.map((lane, index) => {
          const col = COLLECTIONS.find((c) => c.id === lane.collectionId);
          const products = getLaneProducts(lane.collectionId, limit);

          return (
            <div key={lane.collectionId}>
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

              <div className="ecom-carousel-shell relative max-w-full">
                <CarouselEdgeFade
                  tone="elevated"
                  showLeft={lane.collectionId !== "espaciais"}
                />
                <div className="ecom-lane-track ecom-scroll-bleed hide-scrollbar flex gap-4 overflow-x-auto overscroll-x-contain pb-1 touch-auto">
                  {products.map((product) => (
                    <div key={product.id} className="ecom-lane-item shrink-0">
                      <ProductCard product={product} size="standard" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
