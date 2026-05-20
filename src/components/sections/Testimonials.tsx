"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EditorialTreatment } from "@/components/ui/EditorialTreatment";
import { TESTIMONIALS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function Testimonials() {
  return (
    <section id="depoimentos" className="section-dense bg-background-elevated">
      <div className="site-container">
        <SectionHeading
          eyebrow="Clientes"
          title="Quem comprou, voltou"
          description="Depoimentos de quem sentiu o metal na mão — não só viu na tela."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 grid gap-5 md:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <motion.article
              key={t.name}
              variants={fadeInUp}
              className="group flex flex-col overflow-hidden border border-border bg-background shadow-product transition duration-500 hover:-translate-y-1 hover:shadow-product-hover"
            >
              <div className="editorial-bg relative h-48 sm:h-52">
                <Image
                  src={t.image}
                  alt={`Peça avaliada por ${t.name}`}
                  fill
                  className="editorial-photo object-cover"
                  sizes="33vw"
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
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
