"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";
import { ArrowRight } from "lucide-react";
import { CinematicAtmosphere } from "@/components/ui/CinematicAtmosphere";
import { EditorialTreatment } from "@/components/ui/EditorialTreatment";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { HERO_TRUST_BADGES } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const isMobile = useIsMobile();
  const imageY = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : 48]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, isMobile ? 1 : 1.06]);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative overflow-hidden border-b border-border bg-[var(--studio-cream)]"
    >
      <div className="film-grain relative">
        <div className="hero-atmo-layer" aria-hidden />
        <CinematicAtmosphere variant="minimal" intensity="rich" />

        <motion.div
          className="mx-auto grid max-w-[1400px] lg:grid-cols-12 lg:min-h-[92vh]"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={fadeInUp}
            className="relative z-10 flex flex-col justify-center px-4 pb-6 pt-[calc(var(--announcement-h)+4.25rem)] sm:px-8 sm:pb-12 sm:pt-28 lg:col-span-5 lg:px-10 lg:py-20 xl:px-14"
          >
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-muted">
              Metal premium · Edição artesanal
            </p>

            <h1 className="font-display text-[2rem] font-semibold leading-[0.95] tracking-tight text-foreground min-[400px]:text-[2.35rem] sm:text-6xl lg:text-[4.25rem] xl:text-[4.75rem]">
              Pequenos detalhes.
              <br />
              <span className="italic text-accent">Grandes conexões.</span>
            </h1>

            <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
              Chaveiros em aço e latão com acabamento de joalheria. Brilho real,
              peso na mão e embalagem que transforma presente em memória.
            </p>

            <div className="mt-7 flex flex-col gap-2.5 sm:mt-9 sm:flex-row sm:items-center sm:gap-3">
              <Link
                href="#colecoes"
                className="btn-premium-primary inline-flex h-12 min-h-[48px] w-full items-center justify-center gap-2 bg-foreground px-6 text-sm font-semibold uppercase tracking-wider text-white hover:bg-accent sm:h-14 sm:w-auto sm:px-8"
              >
                Comprar agora
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="#destaques"
                className="btn-premium-secondary inline-flex h-12 min-h-[48px] w-full items-center justify-center border border-foreground/20 bg-white/60 px-6 text-sm font-semibold uppercase tracking-wider text-foreground backdrop-blur-sm hover:bg-white sm:h-14 sm:w-auto sm:px-8"
              >
                Ver coleções
              </Link>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {HERO_TRUST_BADGES.map((label) => (
                <TrustBadge key={label}>{label}</TrustBadge>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-foreground/10 pt-6 text-sm sm:flex sm:flex-wrap sm:items-center sm:gap-6 sm:pt-8">
              <motion.div variants={fadeInUp}>
                <p className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  4.9
                </p>
                <p className="mt-0.5 text-xs text-muted sm:text-sm">+2.400 avaliações</p>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <p className="font-semibold text-foreground">Envio em 48h</p>
                <p className="mt-0.5 text-xs text-muted sm:text-sm">Todo o Brasil</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="col-span-2 sm:col-span-1">
                <p className="font-semibold text-foreground">Aço 316L</p>
                <p className="mt-0.5 text-xs text-muted sm:text-sm">Garantia 90 dias</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="group relative lg:col-span-7">
            <div className="editorial-bg relative aspect-[4/5] max-h-[70vh] overflow-hidden sm:aspect-[5/6] sm:max-h-none lg:aspect-auto lg:min-h-[92vh]">
              <div className="hero-necklace-glow" aria-hidden />
              <div className="hero-product-shadow" aria-hidden />

              <motion.div
                style={{ y: imageY, scale: imageScale }}
                className="absolute inset-0 z-[2]"
              >
                <Image
                  src={IMAGES.hero.main}
                  alt="Colar lua crescente com pedra galáxia em caixa premium"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="editorial-photo-warm object-cover object-center transition duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                />
              </motion.div>

              <div className="hero-reflection-layer hidden sm:block" aria-hidden>
                <Image
                  src={IMAGES.hero.main}
                  alt=""
                  fill
                  className="product-reflection editorial-photo-warm object-cover object-center opacity-60"
                  aria-hidden
                />
              </div>

              <EditorialTreatment variant="hero" />
              <div className="hero-panel-dark" aria-hidden />
              <div
                className="pointer-events-none absolute inset-0 z-[4] opacity-40 mix-blend-soft-light transition-opacity duration-700 group-hover:opacity-55"
                style={{
                  background:
                    "radial-gradient(ellipse 55% 45% at 68% 38%, rgba(255,255,255,0.4) 0%, transparent 70%)",
                }}
                aria-hidden
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute bottom-4 left-4 right-4 z-10 sm:bottom-10 sm:left-10 sm:right-auto sm:w-72"
              >
                <Link
                  href="#destaques"
                  className="shadow-editorial flex gap-3 rounded-sm border border-white/50 bg-white/92 p-2.5 backdrop-blur-md sm:gap-4 sm:p-3"
                >
                  <div className="product-stage relative h-14 w-14 shrink-0 overflow-hidden sm:h-20 sm:w-20">
                    <Image
                      src={IMAGES.hero.detail}
                      alt="Colar lua crescente — mais vendido"
                      fill
                      className="editorial-photo-warm object-cover object-center"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex flex-col justify-center py-1">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-accent">
                      Mais vendido
                    </p>
                    <p className="font-display text-lg font-semibold text-foreground sm:text-xl">
                      Órbita Prata
                    </p>
                    <p className="text-xs text-muted sm:text-sm">A partir de R$ 89</p>
                  </div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
