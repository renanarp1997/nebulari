"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { IMAGES } from "@/lib/images";
import { fadeInUp } from "@/lib/motion";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section id="newsletter" className="w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="newsletter-panel relative w-full overflow-hidden"
      >
        <div className="relative min-h-[380px] w-full sm:min-h-[400px] lg:min-h-[420px]">
          <Image
            src={IMAGES.newsletter}
            alt=""
            fill
            className="editorial-photo object-cover opacity-35"
            sizes="100vw"
            priority={false}
          />
          <div className="newsletter-gradient absolute inset-0" />
          <div className="newsletter-glow absolute inset-0" />
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(ellipse 45% 70% at 88% 30%, rgba(196,165,116,0.12) 0%, transparent 55%)",
            }}
            aria-hidden
          />
          <div className="film-grain film-grain-rich absolute inset-0" />

          <div className="relative site-container flex min-h-[380px] w-full flex-col justify-center px-5 py-10 sm:min-h-[400px] sm:px-8 sm:py-14 lg:min-h-[420px] lg:px-12 lg:py-16">
            <div className="w-full max-w-xl lg:max-w-2xl">
              <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/60">
                <Sparkles className="h-3.5 w-3.5 text-[var(--gold-muted)]" strokeWidth={1.5} />
                Newsletter VIP
              </p>
              <h2 className="mt-3 font-display text-[1.75rem] font-semibold leading-tight text-white min-[400px]:text-3xl sm:text-5xl">
                Primeiro acesso às novas peças
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
                Lançamentos limitados, pré-vendas e embalagens especiais — sem
                spam, só o que importa.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <TrustBadge variant="dark">Edição limitada</TrustBadge>
                <TrustBadge variant="dark">−10% na primeira compra</TrustBadge>
              </div>

              {submitted ? (
                <p className="mt-8 text-sm font-medium text-white/90">
                  Obrigado. Você está na lista VIP Nebulari.
                </p>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="mt-8 flex w-full max-w-lg flex-col gap-3 sm:flex-row"
                >
                  <input
                    type="email"
                    required
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="newsletter-input h-12 min-h-[48px] w-full flex-1 border border-white/20 bg-white/8 px-4 text-base text-white placeholder:text-white/40 outline-none backdrop-blur-md sm:h-14 sm:px-5 sm:text-sm"
                  />
                  <button
                    type="submit"
                    className="newsletter-btn inline-flex h-12 min-h-[48px] w-full shrink-0 items-center justify-center gap-2 bg-white px-6 text-sm font-semibold uppercase tracking-wider text-foreground hover:bg-white/95 sm:h-14 sm:w-auto sm:px-8"
                  >
                    Inscrever
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
