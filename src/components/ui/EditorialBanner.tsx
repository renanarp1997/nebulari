"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp } from "@/lib/motion";

export function EditorialBanner({
  eyebrow,
  title,
  description,
  cta,
  href,
  image,
  imageAlt,
  variant = "dark",
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  image: string;
  imageAlt: string;
  variant?: "dark" | "light" | "accent";
  align?: "left" | "right";
}) {
  const isDark = variant === "dark" || variant === "accent";

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className="site-container"
    >
      <Link
        href={href}
        className={`ecom-editorial-banner group relative grid grid-cols-1 overflow-hidden border border-border/80 transition duration-500 active:opacity-95 lg:grid-cols-12 lg:hover:shadow-product-hover ${
          variant === "accent"
            ? "bg-foreground text-white"
            : variant === "dark"
              ? "bg-surface-dark text-white"
              : "bg-background-elevated text-foreground"
        }`}
      >
        <div
          className={`relative min-h-[120px] sm:min-h-[140px] lg:col-span-5 lg:min-h-[180px] ${
            align === "right" ? "lg:order-2" : ""
          }`}
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            className={`object-cover transition duration-700 group-hover:scale-105 ${
              isDark ? "opacity-90 editorial-photo" : "editorial-photo-soft"
            }`}
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <div
            className={`absolute inset-0 ${
              isDark
                ? "bg-gradient-to-r from-black/50 to-transparent lg:from-transparent lg:to-black/40"
                : "bg-gradient-to-t from-background/30 to-transparent"
            }`}
          />
        </div>

        <div
          className={`flex flex-col justify-center p-5 sm:p-6 lg:col-span-7 lg:p-8 ${
            align === "right" ? "lg:order-1" : ""
          }`}
        >
          <p
            className={`text-[10px] font-semibold uppercase tracking-[0.24em] ${
              isDark ? "text-white/55" : "text-accent"
            }`}
          >
            {eyebrow}
          </p>
          <h3
            className={`mt-1.5 font-display text-xl font-semibold leading-tight sm:mt-2 sm:text-3xl ${
              isDark ? "text-white" : "text-foreground"
            }`}
          >
            {title}
          </h3>
          <p
            className={`mt-1.5 line-clamp-2 text-sm leading-relaxed sm:mt-2 sm:line-clamp-none ${
              isDark ? "text-white/70" : "text-muted"
            }`}
          >
            {description}
          </p>
          <span
            className={`mt-4 inline-flex w-fit items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition group-hover:gap-3 ${
              isDark ? "text-white" : "text-foreground"
            }`}
          >
            {cta}
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
