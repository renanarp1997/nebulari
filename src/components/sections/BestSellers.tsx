"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Flame } from "lucide-react";
import { ProductCarousel } from "@/components/ui/ProductCarousel";
import { ProductDenseGrid } from "@/components/ui/ProductDenseGrid";
import { BEST_SELLERS } from "@/lib/products";
import { fadeInUp } from "@/lib/motion";

export function BestSellers() {
  return (
    <section id="mais-vendidos" className="section-dense border-b border-border bg-background-elevated">
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
              <Flame className="h-3.5 w-3.5" strokeWidth={1.5} />
              Mais vendidos
            </p>
            <h2 className="mt-1 font-display text-2xl font-semibold text-foreground sm:text-4xl">
              O que todo mundo está comprando
            </h2>
          </div>
          <Link
            href="#catalogo"
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-foreground hover:text-accent"
          >
            Ver catálogo
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </motion.div>

        <div className="mt-4 lg:hidden">
          <ProductCarousel products={[...BEST_SELLERS]} />
        </div>

        <ProductDenseGrid
          products={[...BEST_SELLERS]}
          size="compact"
          className="mt-4 hidden lg:grid"
        />
      </div>
    </section>
  );
}
