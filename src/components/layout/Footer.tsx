"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Share2, Globe, Play, CreditCard, Shield, Truck, BadgeCheck } from "lucide-react";
import { FOOTER_LINKS, FOOTER_TRUST, PAYMENT_METHODS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const socialLinks = [
  { icon: Share2, label: "Instagram", href: "#" },
  { icon: Globe, label: "Site", href: "#" },
  { icon: Play, label: "Vídeos", href: "#" },
] as const;

const trustIcons = [Shield, Truck, BadgeCheck] as const;

export function Footer() {
  return (
    <footer className="footer-premium border-t bg-surface-dark text-white/75">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="site-container px-4 py-10 sm:px-8 sm:py-16"
      >
        <motion.div
          variants={fadeInUp}
          className="mb-8 grid gap-3 border-b border-white/12 pb-8 sm:mb-12 sm:grid-cols-3 sm:gap-4 sm:pb-10"
        >
          {FOOTER_TRUST.map((item, i) => {
            const Icon = trustIcons[i];
            return (
              <div
                key={item.label}
                className="flex items-start gap-4 border border-white/10 bg-white/[0.03] px-5 py-4 transition duration-400 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-white/70" strokeWidth={1.5} />
                <div>
                  <p className="text-sm font-semibold text-white">{item.label}</p>
                  <p className="mt-1 text-xs text-white/55">{item.description}</p>
                </div>
              </div>
            );
          })}
        </motion.div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-10">
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <Link
              href="#inicio"
              className="font-display text-3xl font-semibold text-white transition hover:text-white/90"
            >
              Nebulari
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              Chaveiros metálicos premium, feitos no Brasil. Design exclusivo,
              embalagem de presente e acabamento que você sente no toque.
            </p>
            <div className="mt-7 flex gap-2.5">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center border border-white/18 text-white/75 transition duration-300 hover:border-white/40 hover:bg-white/5 hover:text-white"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </motion.div>

          {(
            [
              { title: "Navegação", links: FOOTER_LINKS.navegacao },
              { title: "Ajuda", links: FOOTER_LINKS.ajuda },
              { title: "Institucional", links: FOOTER_LINKS.institucional },
            ] as const
          ).map((col) => (
            <motion.div key={col.title} variants={fadeInUp}>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/90">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="footer-link text-sm text-white/65">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeInUp}
          className="mt-14 flex flex-col gap-8 border-t border-white/12 pt-10 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">
              <CreditCard className="h-3.5 w-3.5" strokeWidth={1.5} />
              Formas de pagamento
            </p>
            <div className="flex flex-wrap gap-2">
              {PAYMENT_METHODS.map((m) => (
                <span key={m} className="footer-payment-badge">
                  {m}
                </span>
              ))}
            </div>
          </div>
          <p className="text-xs leading-relaxed text-white/45">
            © {new Date().getFullYear()} Nebulari
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> · </span>
            CNPJ 00.000.000/0001-00
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
