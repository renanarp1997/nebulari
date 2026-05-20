"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { ProductCarousel } from "@/components/ui/ProductCarousel";
import { NEW_ARRIVALS, BEST_SELLERS, TRENDING } from "@/lib/products";
import { fadeInUp } from "@/lib/motion";

const strip = [...NEW_ARRIVALS, ...TRENDING, ...BEST_SELLERS]
  .filter((p, i, arr) => arr.findIndex((x) => x.id === p.id) === i)
  .slice(0, 8);

export function ExploreStrip() {
  return (
    <section className="section-dense-tight border-b border-border bg-[var(--studio-cream)]">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-4 flex flex-wrap items-center justify-between gap-2"
        >
          <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
            <Sparkles className="h-3.5 w-3.5" />
            Explorar sem parar
          </p>
          <Link href="#catalogo" className="text-[10px] font-semibold uppercase tracking-wider text-muted hover:text-foreground">
            Ver catálogo →
          </Link>
        </motion.div>
        <ProductCarousel products={strip} />
      </div>
    </section>
  );
}
