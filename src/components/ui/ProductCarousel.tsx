"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Product } from "@/lib/products";
import { ProductCard } from "@/components/ui/ProductCard";

export function ProductCarousel({ products }: { products: Product[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onUpdate = () => {
      setCanScrollLeft(el.scrollLeft > 8);
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
    };

    onUpdate();
    el.addEventListener("scroll", onUpdate, { passive: true });
    const ro = new ResizeObserver(onUpdate);
    ro.observe(el);
    window.addEventListener("resize", onUpdate);

    return () => {
      el.removeEventListener("scroll", onUpdate);
      ro.disconnect();
      window.removeEventListener("resize", onUpdate);
    };
  }, [products.length]);

  const scroll = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.75, 280);
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-8 bg-gradient-to-r from-background-elevated to-transparent sm:block sm:w-12" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-8 bg-gradient-to-l from-background-elevated to-transparent sm:block sm:w-12" />

      <div className="absolute -top-12 right-0 z-20 hidden gap-2 sm:flex lg:-top-14">
        <button
          type="button"
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          aria-label="Anterior"
          className="ecom-carousel-btn flex h-10 w-10 min-h-[44px] min-w-[44px] items-center justify-center border border-border bg-background-elevated text-foreground transition hover:border-foreground/25 disabled:opacity-30"
        >
          <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
        </button>
        <button
          type="button"
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          aria-label="Próximo"
          className="ecom-carousel-btn flex h-10 w-10 min-h-[44px] min-w-[44px] items-center justify-center border border-border bg-background-elevated text-foreground transition hover:border-foreground/25 disabled:opacity-30"
        >
          <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
        </button>
      </div>

      <div
        ref={trackRef}
        className="ecom-carousel-track ecom-scroll-bleed hide-scrollbar flex gap-2 overflow-x-auto overscroll-x-contain scroll-smooth pb-2 pt-1 touch-pan-x sm:gap-2.5"
      >
        {products.map((product) => (
          <div key={product.id} className="ecom-carousel-item shrink-0">
            <ProductCard product={product} size="standard" />
          </div>
        ))}
      </div>

      <div className="mt-3 flex justify-center gap-3 sm:hidden">
        <button
          type="button"
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          aria-label="Anterior"
          className="flex h-11 w-11 items-center justify-center border border-border bg-background-elevated disabled:opacity-30"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          aria-label="Próximo"
          className="flex h-11 w-11 items-center justify-center border border-border bg-background-elevated disabled:opacity-30"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
