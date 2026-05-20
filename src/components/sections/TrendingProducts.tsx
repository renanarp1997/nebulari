"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { SectionActionLink } from "@/components/ui/SectionActionLink";
import { ProductCarousel } from "@/components/ui/ProductCarousel";
import { TRENDING } from "@/lib/products";
import { fadeInUp } from "@/lib/motion";

export function TrendingProducts() {
  return (
    <section id="em-alta" className="section-dense border-b border-border bg-background">
      <div className="site-container">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap items-end justify-between gap-3"
        >
          <div>
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
              <TrendingUp className="h-3.5 w-3.5" strokeWidth={1.5} />
              Em alta agora
            </p>
            <h2 className="mt-1 font-display text-3xl font-semibold text-foreground sm:text-4xl">
              Tendências da semana
            </h2>
          </div>
          <SectionActionLink href="#corredores">Ver coleções</SectionActionLink>
        </motion.div>

        <ProductCarousel products={[...TRENDING]} />
      </div>
    </section>
  );
}
