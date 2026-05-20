"use client";

import { useState } from "react";
import { Grid3X3 } from "lucide-react";
import { SectionActionLink } from "@/components/ui/SectionActionLink";
import { ProductDenseGrid } from "@/components/ui/ProductDenseGrid";
import { CATALOG_ALL } from "@/lib/products";

const INITIAL_COUNT = 6;
const LOAD_MORE_STEP = 8;

export function ProductCatalog() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const visible = CATALOG_ALL.slice(0, visibleCount);
  const hasMore = visibleCount < CATALOG_ALL.length;

  return (
    <section id="catalogo" className="section-dense border-b border-border bg-background">
      <div className="site-container">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
              <Grid3X3 className="h-3.5 w-3.5" strokeWidth={1.5} />
              Catálogo completo
            </p>
            <h2 className="mt-1 font-display text-3xl font-semibold text-foreground sm:text-4xl">
              {CATALOG_ALL.length} peças para explorar
            </h2>
            <p className="mt-1 text-sm text-muted">
              Role, descubra e adicione — densidade de vitrine premium.
            </p>
          </div>
          <SectionActionLink href="#colecoes">Filtrar coleções</SectionActionLink>
        </div>

        <ProductDenseGrid products={visible} className="mt-5" />

        {hasMore && (
          <div className="mt-6 flex justify-center sm:mt-8">
            <button
              type="button"
              onClick={() =>
                setVisibleCount((n) => Math.min(n + LOAD_MORE_STEP, CATALOG_ALL.length))
              }
              className="inline-flex min-h-[48px] items-center justify-center border border-foreground/20 bg-background-elevated px-8 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground transition hover:border-foreground/35 hover:bg-foreground hover:text-white"
            >
              Carregar mais peças ({CATALOG_ALL.length - visibleCount} restantes)
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
