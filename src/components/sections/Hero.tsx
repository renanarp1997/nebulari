"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CinematicAtmosphere } from "@/components/ui/CinematicAtmosphere";
import { EditorialTreatment } from "@/components/ui/EditorialTreatment";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { HERO_TRUST_BADGES } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden border-b border-border bg-[var(--studio-cream)]"
    >
      <div className="film-grain relative">
        <div className="hero-atmo-layer" aria-hidden />
        <CinematicAtmosphere variant="minimal" intensity="soft" />

        <motion.div
          className="hero-layout grid grid-cols-1"
          variants={staggerContainer}
          initial={false}
          animate="visible"
        >
          <motion.div
            variants={fadeInUp}
            className="hero-copy relative z-10 flex flex-col justify-center px-0 py-10 sm:py-12"
          >
            <p className="hero-eyebrow">Metal premium • Edição artesanal</p>

            <h1 className="hero-title">
              Pequenos
              <br />
              detalhes.
              <br />
              <span className="hero-title-accent">Grandes</span>
              <br />
              <span className="hero-title-accent">conexões.</span>
            </h1>

            <p className="hero-lead">
              Chaveiros em aço e latão com acabamento de joalheria. Brilho real,
              peso na mão e embalagem que transforma presente em memória.
            </p>

            <div className="hero-actions">
              <Link
                href="#colecoes"
                className="hero-btn btn-premium-primary w-full bg-foreground text-white hover:bg-accent sm:w-auto"
              >
                Comprar agora
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="#destaques"
                className="hero-btn btn-premium-secondary w-full border border-foreground/20 bg-white/60 text-foreground backdrop-blur-sm hover:bg-white sm:w-auto"
              >
                Ver coleções
              </Link>
            </div>

            <div className="hero-badges">
              {HERO_TRUST_BADGES.map((label) => (
                <TrustBadge key={label}>{label}</TrustBadge>
              ))}
            </div>

            <div className="hero-metrics">
              <motion.div variants={fadeInUp}>
                <p className="hero-metric-value">4.9</p>
                <p className="hero-metric-label">+2.400 avaliações</p>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <p className="hero-metric-value hero-metric-value--sm">Envio em 48h</p>
                <p className="hero-metric-label">Todo o Brasil</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="col-span-2 sm:col-span-1">
                <p className="hero-metric-value hero-metric-value--sm">Aço 316L</p>
                <p className="hero-metric-label">Garantia 90 dias</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="hero-visual group">
            <div className="hero-necklace-glow" aria-hidden />
            <div className="hero-product-shadow" aria-hidden />

            <div className="absolute inset-0 z-[2]">
              <Image
                src={IMAGES.hero.main}
                alt="Colar lua crescente com pedra galáxia em caixa premium"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 65vw"
                className="editorial-photo-warm object-cover object-center transition duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
              />
            </div>

            <div className="hero-reflection-layer hidden sm:block" aria-hidden />

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
              className="absolute bottom-6 left-5 right-5 z-10 sm:bottom-10 sm:left-10 sm:right-auto"
            >
              <Link
                href="#destaques"
                className="hero-floating-card shadow-editorial flex gap-4 rounded-sm border border-white/50 bg-white/92 p-4 backdrop-blur-md sm:gap-5 sm:p-5"
              >
                <div className="product-stage relative h-20 w-20 shrink-0 overflow-hidden sm:h-24 sm:w-24">
                  <Image
                    src={IMAGES.hero.detail}
                    alt="Colar lua crescente — mais vendido"
                    fill
                    className="editorial-photo-warm object-cover object-center"
                    sizes="(max-width: 1024px) 96px, 112px"
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-center">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-accent">
                    Mais vendido
                  </p>
                  <p className="font-display text-2xl font-semibold text-foreground">
                    Órbita Prata
                  </p>
                  <p className="text-base text-muted">A partir de R$ 89</p>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
