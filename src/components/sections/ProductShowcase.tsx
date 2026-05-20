"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ProductDenseGrid } from "@/components/ui/ProductDenseGrid";
import { PRODUCTS } from "@/lib/products";
import { fadeInUp } from "@/lib/motion";

const bentoProducts = PRODUCTS.slice(0, 11);

export function ProductShowcase() {
  return (
    <section id="destaques" className="section-dense border-b border-border bg-background-elevated">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap items-end justify-between gap-3"
        >
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
        </motion.div>

        <ProductDenseGrid
          products={bentoProducts}
          size="compact"
          density="bento"
          className="mt-5"
        />
      </div>

      <div id="galeria-pecas" className="mx-auto mt-6 max-w-[1400px] px-5 sm:mt-8 sm:px-8">
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted"
        >
          Blocos & colecionáveis
        </motion.p>
        <ProductDenseGrid products={PRODUCTS.filter((p) => p.collectionId === "geek")} size="compact" />
      </div>
    </section>
  );
}
