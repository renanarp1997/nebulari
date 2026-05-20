import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EditorialTreatment } from "@/components/ui/EditorialTreatment";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { HERO_TRUST_BADGES } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden border-b border-border bg-[var(--studio-cream)]"
    >
      <div className="relative max-md:[&::after]:hidden">
        <div className="hero-atmo-layer max-md:hidden" aria-hidden />

        <div className="hero-layout grid grid-cols-1">
          <div className="hero-copy hero-enter relative z-10 flex flex-col justify-center px-0 py-10 sm:py-12">
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
                className="hero-btn btn-premium-secondary w-full border border-foreground/20 bg-white text-foreground hover:bg-white sm:w-auto"
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
              <div className="hero-enter hero-enter-delay-1">
                <p className="hero-metric-value">4.9</p>
                <p className="hero-metric-label">+2.400 avaliações</p>
              </div>
              <div className="hero-enter hero-enter-delay-2">
                <p className="hero-metric-value hero-metric-value--sm">Envio em 48h</p>
                <p className="hero-metric-label">Todo o Brasil</p>
              </div>
              <div className="hero-enter hero-enter-delay-2 col-span-2 sm:col-span-1">
                <p className="hero-metric-value hero-metric-value--sm">Aço 316L</p>
                <p className="hero-metric-label">Garantia 90 dias</p>
              </div>
            </div>
          </div>

          <div className="hero-visual hero-enter hero-enter-delay-1 group">
            <div className="hero-necklace-glow max-md:hidden" aria-hidden />
            <div className="hero-product-shadow max-md:hidden" aria-hidden />

            <div className="absolute inset-0 z-[2]">
              <Image
                src={IMAGES.hero.main}
                alt="Colar lua crescente com pedra galáxia em caixa premium"
                fill
                priority
                quality={70}
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 100vw, 650px"
                className="editorial-photo-warm object-cover object-center max-md:transition-none sm:transition sm:duration-700 sm:ease-out sm:group-hover:scale-[1.02]"
              />
            </div>

            <div className="hero-reflection-layer hidden sm:block" aria-hidden />

            <EditorialTreatment variant="hero" />
            <div className="hero-panel-dark max-md:hidden" aria-hidden />

            <div className="hero-floating-card-wrap absolute bottom-6 left-5 right-5 z-10 hidden sm:bottom-10 sm:left-10 sm:right-auto md:block">
              <Link
                href="#destaques"
                className="hero-floating-card shadow-editorial flex gap-4 rounded-sm border border-white/50 bg-white/92 p-4 backdrop-blur-md sm:gap-5 sm:p-5"
              >
                <div className="product-stage relative h-20 w-20 shrink-0 overflow-hidden sm:h-24 sm:w-24">
                  <Image
                    src={IMAGES.hero.detail}
                    alt="Colar lua crescente — mais vendido"
                    fill
                    quality={75}
                    className="editorial-photo-warm object-cover object-center"
                    sizes="96px"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
