"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}
    >
      {eyebrow && (
        <p
          className={`mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] ${
            dark ? "text-white/60" : "text-accent"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-[1.65rem] font-semibold leading-[1.08] tracking-tight min-[400px]:text-3xl sm:text-5xl lg:text-6xl ${
          dark ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            dark ? "text-white/70" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
