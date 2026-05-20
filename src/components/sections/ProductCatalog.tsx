"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Grid3X3 } from "lucide-react";
import { ProductDenseGrid } from "@/components/ui/ProductDenseGrid";
import { CATALOG_ALL } from "@/lib/products";
import { fadeInUp } from "@/lib/motion";

export function ProductCatalog() {
  return (
    <section id="catalogo" className="section-dense border-b border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap items-end justify-between gap-3"
        >
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
          <Link
            href="#colecoes"
            className="text-[11px] font-semibold uppercase tracking-wider text-foreground hover:text-accent"
          >
            Filtrar por coleção →
          </Link>
        </motion.div>

        <ProductDenseGrid products={CATALOG_ALL} size="compact" className="mt-5" />
      </div>
    </section>
  );
}
