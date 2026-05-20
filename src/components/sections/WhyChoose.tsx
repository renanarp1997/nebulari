"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { WHY_CHOOSE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export function WhyChoose() {
  return (
    <section
      id="por-que"
      className="section-dense border-y border-border bg-[var(--studio-cream)]"
    >
      <div className="site-container">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">
          <SectionHeading
            eyebrow="A marca"
            title="Por que a Nebulari existe"
            description="Não vendemos plástico pintado de prata. Vendemos objeto que você sente no bolso — peso, frio do metal, brilho que dura."
          />
          <Reveal className="flex flex-col gap-6">
            <p className="text-base leading-relaxed text-muted lg:text-lg">
              Inspirados em joalherias de boutique e vitrines premium, cada peça é
              embalada e enviada como se fosse a única do dia.
            </p>
            <Link
              href="#colecoes"
              className="btn-premium-secondary inline-flex w-fit items-center gap-2 border border-foreground/15 bg-white/50 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground backdrop-blur-sm hover:bg-white"
            >
              Explorar a loja
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2 lg:gap-5">
          <Reveal className="story-card group relative overflow-hidden shadow-product">
            <div className="product-stage relative aspect-[4/5] lg:aspect-auto lg:min-h-[560px]">
              <div className="product-stage-shadow" aria-hidden />
              <Image
                src={IMAGES.whyFeatured}
                alt="Colar dourado com pingente preto — edição Nebulari"
                fill
                quality={80}
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="relative z-[2] object-contain object-center p-8 sm:p-12 editorial-photo-warm transition duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/50 to-transparent p-6 sm:p-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70">
                  Nossa assinatura
                </p>
                <p className="mt-1 font-display text-2xl font-semibold text-white sm:text-3xl">
                  Metal que permanece
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {WHY_CHOOSE.map((item, index) => (
              <Reveal
                key={item.title}
                delayMs={index * 70}
                className="story-card group overflow-hidden bg-background-elevated shadow-product"
              >
                <article>
                  <div className="product-stage relative aspect-[16/10] overflow-hidden">
                    <div className="product-stage-shadow" aria-hidden />
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      quality={75}
                      loading="lazy"
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="relative z-[2] object-cover object-center editorial-photo transition duration-700 group-hover:scale-[1.05]"
                    />
                    <div className="absolute left-3 top-3 z-10 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">
                      0{index + 1}
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
