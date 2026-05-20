"use client";

import { motion } from "framer-motion";
import { ProductDenseGrid } from "@/components/ui/ProductDenseGrid";
import { RECOMMENDATIONS } from "@/lib/products";
import { fadeInUp } from "@/lib/motion";

export function Recommendations() {
  return (
    <section id="recomendados" className="section-dense border-b border-border bg-[var(--studio-cream)]">
      <div className="site-container">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
            Para você
          </p>
          <h2 className="mt-1 font-display text-[2rem] font-semibold text-foreground sm:text-[2.35rem] lg:text-4xl">
            Recomendados para sua coleção
          </h2>
        </motion.div>

        <ProductDenseGrid products={[...RECOMMENDATIONS]} className="mt-6 sm:mt-7" />
      </div>
    </section>
  );
}
