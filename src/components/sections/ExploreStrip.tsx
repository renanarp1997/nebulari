"use client";

import { Sparkles } from "lucide-react";
import { SectionActionLink } from "@/components/ui/SectionActionLink";
import { ProductCarousel } from "@/components/ui/ProductCarousel";
import { Reveal } from "@/components/ui/Reveal";
import { NEW_ARRIVALS, BEST_SELLERS, TRENDING } from "@/lib/products";

const strip = [...NEW_ARRIVALS, ...TRENDING, ...BEST_SELLERS]
  .filter((p, i, arr) => arr.findIndex((x) => x.id === p.id) === i)
  .slice(0, 8);

export function ExploreStrip() {
  return (
    <section className="section-dense-tight border-b border-border bg-[var(--studio-cream)]">
      <div className="site-container">
        <Reveal className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
            <Sparkles className="h-3.5 w-3.5" />
            Explorar sem parar
          </p>
          <SectionActionLink href="#catalogo">Ver catálogo</SectionActionLink>
        </Reveal>
        <ProductCarousel products={strip} edgeTone="cream" showLeftEdgeFade={false} />
      </div>
    </section>
  );
}
