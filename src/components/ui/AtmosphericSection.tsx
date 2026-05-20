"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { AtmosphereId } from "@/lib/atmosphere";
import { ATMOSPHERE_META } from "@/lib/atmosphere";
import { CinematicAtmosphere } from "@/components/ui/CinematicAtmosphere";

export function AtmosphericSection({
  id,
  atmosphere = "neutral",
  children,
  className = "",
  border = true,
  parallax = true,
  intensity = "medium",
}: {
  id?: string;
  atmosphere?: AtmosphereId;
  children: ReactNode;
  className?: string;
  border?: boolean;
  parallax?: boolean;
  intensity?: "soft" | "medium" | "rich";
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [parallax ? -24 : 0, parallax ? 24 : 0]);
  const meta = ATMOSPHERE_META[atmosphere];

  return (
    <section
      ref={ref}
      id={id}
      className={`relative overflow-hidden ${border ? "border-b border-border" : ""} ${meta.sectionClass} ${className}`}
    >
      <motion.div
        style={{ y: bgY }}
        className="atmo-section-bg pointer-events-none absolute inset-0"
        aria-hidden
      />
      <CinematicAtmosphere variant={atmosphere} intensity={intensity} />
      <div className="atmo-section-depth pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative z-10">{children}</div>
    </section>
  );
}
