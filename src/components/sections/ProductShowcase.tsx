"use client";

import Link from "next/link";
import { ProductDenseGrid } from "@/components/ui/ProductDenseGrid";
import { Reveal } from "@/components/ui/Reveal";
import { PRODUCTS } from "@/lib/products";

const bentoProducts = PRODUCTS.slice(0, 8);

export function ProductShowcase() {
  return (
    <section id="destaques" className="section-dense border-b border-border bg-background-elevated">
      <div className="site-container">
        <Reveal className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
              Destaques
            </p>
            <h2 className="mt-1 font-display text-3xl font-semibold text-foreground sm:text-4xl">
              Feito para tocar, guardar e admirar
            </h2>
            <p className="mt-1 text-sm text-muted">
              Layout misto — vitrine densa com peças em destaque.
            </p>
          </div>
          <Link
            href="#galeria-pecas"
            className="text-[11px] font-semibold uppercase tracking-wider text-foreground hover:text-accent"
          >
            Galeria completa →
          </Link>
        </Reveal>

        <ProductDenseGrid products={bentoProducts} density="bento" className="mt-5" />
      </div>

      <div id="galeria-pecas" className="site-container mt-6 sm:mt-8">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
          Blocos & colecionáveis
        </p>
        <ProductDenseGrid products={PRODUCTS.filter((p) => p.collectionId === "geek")} />
      </div>
    </section>
  );
}
