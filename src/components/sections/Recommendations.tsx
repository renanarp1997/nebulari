"use client";

import { ProductDenseGrid } from "@/components/ui/ProductDenseGrid";
import { Reveal } from "@/components/ui/Reveal";
import { RECOMMENDATIONS } from "@/lib/products";

export function Recommendations() {
  return (
    <section id="recomendados" className="section-dense border-b border-border bg-[var(--studio-cream)]">
      <div className="site-container">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
            Para você
          </p>
          <h2 className="mt-1 font-display text-[2rem] font-semibold text-foreground sm:text-[2.35rem] lg:text-4xl">
            Recomendados para sua coleção
          </h2>
        </Reveal>

        <ProductDenseGrid products={[...RECOMMENDATIONS]} className="mt-6 sm:mt-7" />
      </div>
    </section>
  );
}
