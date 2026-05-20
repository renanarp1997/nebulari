"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Product } from "@/lib/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { CarouselEdgeFade } from "@/components/ui/CarouselEdgeFade";

type ProductCarouselProps = {
  products: Product[];
  edgeTone?: "cream" | "elevated" | "background";
  showLeftEdgeFade?: boolean;
  showRightEdgeFade?: boolean;
};

export function ProductCarousel({
  products,
  edgeTone = "elevated",
  showLeftEdgeFade = true,
  showRightEdgeFade = true,
}: ProductCarouselProps) {
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
    const firstItem = el.querySelector<HTMLElement>(".ecom-carousel-item");
    const gap = Number.parseFloat(getComputedStyle(el).columnGap || getComputedStyle(el).gap || "12") || 12;
    const step = firstItem ? firstItem.offsetWidth + gap : Math.min(el.clientWidth * 0.85, 300);
    el.scrollBy({ left: dir === "left" ? -step : step, behavior: "smooth" });
  };

  return (
    <div className="ecom-carousel-shell relative max-w-full">
      <CarouselEdgeFade
        tone={edgeTone}
        showLeft={showLeftEdgeFade}
        showRight={showRightEdgeFade}
      />

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
          className="ecom-carousel-btn flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center border-2 border-foreground bg-background-elevated text-foreground transition hover:border-foreground disabled:opacity-30"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          aria-label="Próximo"
          className="ecom-carousel-btn flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center border-2 border-foreground bg-background-elevated text-foreground transition hover:border-foreground disabled:opacity-30"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
