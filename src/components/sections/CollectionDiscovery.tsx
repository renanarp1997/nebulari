"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { COLLECTIONS } from "@/lib/constants";
import { getAtmosphereFromCollection } from "@/lib/atmosphere";
import type { CollectionId } from "@/lib/atmosphere";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const chipAtmo: Record<string, string> = {
  minimal: "atmo-chip-minimal",
  geek: "atmo-chip-geek",
  anime: "atmo-chip-anime",
  cosmic: "atmo-chip-cosmic",
};

export function CollectionDiscovery() {
  return (
    <section id="descobrir" className="section-dense-tight border-b border-border bg-background py-6 sm:py-8">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-between gap-2"
        >
          <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
            Navegue por universo
          </h2>
          <Link href="#colecoes" className="text-[10px] font-semibold uppercase tracking-wider text-muted hover:text-foreground">
            Vitrine →
          </Link>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="ecom-discovery-grid mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3"
        >
          {COLLECTIONS.map((col) => {
            const atmo = getAtmosphereFromCollection(col.id as CollectionId);
            return (
              <motion.div key={col.id} variants={fadeInUp}>
                <Link
                  href={col.href}
                  className={`ecom-discovery-chip group flex items-center gap-2.5 border p-2.5 transition duration-400 sm:gap-3 sm:p-3 ${chipAtmo[atmo]}`}
                >
                  <div className="relative h-11 w-11 shrink-0 overflow-hidden sm:h-12 sm:w-12">
                    <Image
                      src={col.image}
                      alt={col.name}
                      fill
                      className="object-cover editorial-photo transition duration-500 group-hover:scale-105"
                      sizes="48px"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-display text-base font-semibold text-foreground sm:text-lg">
                      {col.name}
                    </p>
                    <p className="text-[10px] text-muted">desde {col.priceFrom}</p>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted group-hover:text-accent" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
