"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EditorialTreatment } from "@/components/ui/EditorialTreatment";
import { Reveal } from "@/components/ui/Reveal";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section id="depoimentos" className="section-dense bg-background-elevated">
      <div className="site-container">
        <SectionHeading
          eyebrow="Clientes"
          title="Quem comprou, voltou"
          description="Depoimentos de quem sentiu o metal na mão — não só viu na tela."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, index) => (
            <Reveal
              key={t.name}
              delayMs={index * 80}
              className="group flex flex-col overflow-hidden border border-border bg-background shadow-product transition duration-500 hover:-translate-y-1 hover:shadow-product-hover"
            >
              <article>
                <div className="editorial-bg relative h-48 sm:h-52">
                  <Image
                    src={t.image}
                    alt={`Peça avaliada por ${t.name}`}
                    fill
                    quality={75}
                    loading="lazy"
                    className="editorial-photo object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <EditorialTreatment variant="card" />
                  <p className="absolute bottom-3 left-4 text-xs font-semibold uppercase tracking-widest text-white">
                    {t.product}
                  </p>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-[var(--gold-muted)] text-[var(--gold-muted)]"
                      />
                    ))}
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-muted sm:text-base">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <footer className="mt-6 border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted">{t.location}</p>
                  </footer>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
