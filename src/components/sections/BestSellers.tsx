"use client";

import { Flame } from "lucide-react";
import { SectionActionLink } from "@/components/ui/SectionActionLink";
import { ProductDenseGrid } from "@/components/ui/ProductDenseGrid";
import { Reveal } from "@/components/ui/Reveal";
import { BEST_SELLERS } from "@/lib/products";

export function BestSellers() {
  return (
    <section id="mais-vendidos" className="section-dense border-b border-border bg-background-elevated">
      <div className="site-container">
        <Reveal className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
              <Flame className="h-3.5 w-3.5" strokeWidth={1.5} />
              Mais vendidos
            </p>
            <h2 className="mt-1 font-display text-2xl font-semibold text-foreground sm:text-4xl">
              O que todo mundo está comprando
            </h2>
          </div>
          <SectionActionLink href="#catalogo">Ver tudo</SectionActionLink>
        </Reveal>

        <ProductDenseGrid products={[...BEST_SELLERS]} className="mt-4" />
      </div>
    </section>
  );
}
