"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { COLLECTIONS } from "@/lib/constants";
import { getAtmosphereFromCollection } from "@/lib/atmosphere";
import type { CollectionId } from "@/lib/atmosphere";

const chipAtmo: Record<string, string> = {
  minimal: "atmo-chip-minimal",
  geek: "atmo-chip-geek",
  anime: "atmo-chip-anime",
  cosmic: "atmo-chip-cosmic",
};

export function CollectionDiscovery() {
  return (
    <section id="descobrir" className="section-dense-tight border-b border-border bg-background py-6 sm:py-8">
      <div className="site-container">
        <Reveal className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
            Navegue por universo
          </h2>
          <Link
            href="#colecoes"
            className="text-[10px] font-semibold uppercase tracking-wider text-muted hover:text-foreground"
          >
            Vitrine →
          </Link>
        </Reveal>

        <div className="ecom-discovery-grid mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
          {COLLECTIONS.map((col, index) => {
            const atmo = getAtmosphereFromCollection(col.id as CollectionId);
            return (
              <Reveal key={col.id} delayMs={index * 60}>
                <Link
                  href={col.href}
                  className={`ecom-discovery-chip group flex items-center gap-2.5 border p-2.5 transition duration-400 sm:gap-3 sm:p-3 ${chipAtmo[atmo]}`}
                >
                  <div className="relative h-11 w-11 shrink-0 overflow-hidden sm:h-12 sm:w-12">
                    <Image
                      src={col.image}
                      alt={col.name}
                      fill
                      quality={75}
                      loading="lazy"
                      className="editorial-photo object-cover transition duration-500 group-hover:scale-105"
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
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
