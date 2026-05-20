"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CollectionAmbience } from "@/components/ui/CollectionAmbience";
import { COLLECTIONS } from "@/lib/constants";
import { COLLECTION_VISUALS } from "@/lib/collectionVisuals";
import { fadeInUp, staggerContainer } from "@/lib/motion";

type Collection = (typeof COLLECTIONS)[number];
type CollectionId = keyof typeof COLLECTION_VISUALS;

function formatProductCount(count: number) {
  return `${count} ${count === 1 ? "peça" : "peças"}`;
}

function CollectionMedia({
  id,
  src,
  alt,
  sizes,
}: {
  id: CollectionId;
  src: string;
  alt: string;
  sizes: string;
}) {
  const visual = COLLECTION_VISUALS[id];

  return (
    <>
      <CollectionAmbience collectionId={id as CollectionId} />

      <div className={`collection-product-stage ${visual.padding}`}>
        <div className="collection-product-shadow" aria-hidden />
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className={`relative z-[2] ${visual.fit} transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${visual.photoClass} ${visual.objectPosition} ${visual.scale}`}
        />
      </div>

      <div className="collection-tone" aria-hidden />
      <div className="collection-overlay-luxury" aria-hidden />
    </>
  );
}

function CollectionMeta({
  collection,
  featured = false,
}: {
  collection: Collection;
  featured?: boolean;
}) {
  const countLabel = formatProductCount(collection.productCount);

  if (featured) {
    return (
      <div className="absolute bottom-0 left-0 right-0 z-10 p-4 sm:p-10">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {"badge" in collection && collection.badge && (
            <span className="collection-badge rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/95">
              {collection.badge}
            </span>
          )}
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/55">
            {collection.categoryLabel}
          </span>
        </div>

        <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/85">
          {collection.tagline}
        </p>
        <h3 className="mt-1 font-display text-2xl font-semibold text-white sm:mt-2 sm:text-5xl">
          {collection.name}
        </h3>
        <p className="mt-2 line-clamp-2 max-w-md text-xs leading-relaxed text-white/88 sm:mt-3 sm:line-clamp-none sm:text-base">
          {collection.description}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/80">
          <span className="font-medium text-white/95">{countLabel}</span>
          <span className="h-3 w-px bg-white/25" aria-hidden />
          <span>
            A partir de{" "}
            <strong className="font-semibold text-white">
              {collection.priceFrom}
            </strong>
          </span>
        </div>

        <span className="collection-cta mt-4 inline-flex min-h-[44px] items-center gap-2 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white sm:mt-6 sm:px-5 sm:py-2.5 sm:text-[11px]">
          Ver coleção
          <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    );
  }

  return (
    <div className="absolute bottom-0 left-0 right-0 z-10 p-3.5 sm:p-6">
      <div className="flex items-end justify-between gap-2 sm:gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            {"badge" in collection && collection.badge && (
              <span className="collection-badge rounded-full px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/92">
                {collection.badge}
              </span>
            )}
            <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-white/55">
              {collection.categoryLabel}
            </span>
          </div>

          <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">
            {collection.tagline}
          </p>
          <h3 className="mt-0.5 font-display text-lg font-semibold text-white sm:mt-1 sm:text-3xl">
            {collection.name}
          </h3>

          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/75">
            <span>{countLabel}</span>
            <span className="text-white/35" aria-hidden>
              ·
            </span>
            <span>
              desde{" "}
              <strong className="font-semibold text-white/95">
                {collection.priceFrom}
              </strong>
            </span>
          </div>

          <span className="collection-cta mt-2 inline-flex min-h-[40px] items-center gap-1.5 px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-white sm:mt-4 sm:px-3.5 sm:py-2 sm:text-[10px]">
            Ver coleção
            <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
          </span>
        </div>

        <span
          className="hidden h-11 w-11 shrink-0 items-center justify-center border border-white/30 bg-white/10 text-white backdrop-blur-sm sm:flex"
          aria-hidden
        >
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </div>
  );
}

function CollectionCard({
  collection,
  featured = false,
  className,
}: {
  collection: Collection;
  featured?: boolean;
  className: string;
}) {
  const visual = COLLECTION_VISUALS[collection.id as CollectionId];

  return (
    <motion.article variants={fadeInUp} className={className}>
      <Link
        href={collection.href}
        className="group collection-card-lift block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <div
          className={`collection-canvas collection-hover-glow ${visual.canvasClass} relative overflow-hidden shadow-product group-hover:shadow-product-hover ${
            featured
              ? "aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[560px]"
              : "aspect-[16/11] lg:aspect-auto lg:min-h-[270px]"
          }`}
        >
          <CollectionMedia
            id={collection.id as CollectionId}
            src={collection.image}
            alt={`Coleção ${collection.name} — ${collection.categoryLabel}`}
            sizes={
              featured
                ? "(max-width: 1024px) 100vw, 55vw"
                : "(max-width: 1024px) 100vw, 40vw"
            }
          />
          <CollectionMeta collection={collection} featured={featured} />
        </div>
      </Link>
    </motion.article>
  );
}

export function Collections() {
  const [featured, ...rest] = COLLECTIONS;

  return (
    <section id="colecoes" className="section-dense relative overflow-hidden border-b border-border bg-background">
      <div className="atmo-section-bg pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_0%,rgba(255,252,248,0.8)_0%,transparent_55%)]" aria-hidden />
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 relative z-10">
        <SectionHeading
          eyebrow="Coleções"
          title="Nossas coleções"
          description="Quatro categorias para comprar agora. Mesmo padrão de acabamento, curadoria de boutique."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-6 grid gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-12 lg:grid-rows-2 lg:gap-5"
        >
          <CollectionCard
            collection={featured}
            featured
            className="lg:col-span-7 lg:row-span-2"
          />

          {rest.map((col) => (
            <CollectionCard
              key={col.id}
              collection={col}
              className="lg:col-span-5"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
