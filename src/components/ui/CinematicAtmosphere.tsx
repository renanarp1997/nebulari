"use client";

import type { AtmosphereId } from "@/lib/atmosphere";
import { ATMOSPHERE_META } from "@/lib/atmosphere";

export function CinematicAtmosphere({
  variant = "neutral",
  intensity = "medium",
}: {
  variant?: AtmosphereId;
  intensity?: "soft" | "medium" | "rich";
}) {
  const glow = ATMOSPHERE_META[variant].glowClass;
  const opacity =
    intensity === "soft" ? "opacity-70" : intensity === "rich" ? "opacity-100" : "opacity-85";

  const particles = [
    { top: "14%", left: "10%", size: 3, delay: 0 },
    { top: "32%", left: "78%", size: 2, delay: 1.4 },
    { top: "58%", left: "22%", size: 4, delay: 0.5 },
    { top: "72%", left: "88%", size: 2, delay: 2.1 },
    { top: "42%", left: "48%", size: 5, delay: 1.7 },
  ];

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${opacity}`}
      aria-hidden
    >
      <div className={`absolute inset-0 ${glow}`} />
      <div className="atmo-specular-sweep absolute inset-0" />
      <div className="atmo-vignette-soft absolute inset-0" />

      {variant === "cosmic" && (
        <div className="absolute left-1/2 top-[38%] h-[50%] w-[55%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(91,33,182,0.14)_0%,transparent_68%)] blur-2xl" />
      )}

      {variant === "minimal" && (
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(ellipse_at_80%_20%,rgba(196,165,116,0.12)_0%,transparent_55%)]" />
      )}

      {variant === "anime" && (
        <div className="absolute -left-1/4 bottom-0 h-2/3 w-2/3 bg-[radial-gradient(ellipse_at_30%_90%,rgba(91,33,182,0.08)_0%,transparent_60%)]" />
      )}

      {variant === "geek" && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(12,12,13,0.06)_0%,transparent_50%)]" />
      )}

      {particles.map((p, i) => (
        <span
          key={i}
          className="light-particle"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${8 + i * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
}
