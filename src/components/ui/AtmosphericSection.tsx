import type { ReactNode } from "react";
import type { AtmosphereId } from "@/lib/atmosphere";
import { ATMOSPHERE_META } from "@/lib/atmosphere";
import { CinematicAtmosphere } from "@/components/ui/CinematicAtmosphere";

export function AtmosphericSection({
  id,
  atmosphere = "neutral",
  children,
  className = "",
  border = true,
  intensity = "medium",
}: {
  id?: string;
  atmosphere?: AtmosphereId;
  children: ReactNode;
  className?: string;
  border?: boolean;
  intensity?: "soft" | "medium" | "rich";
}) {
  const meta = ATMOSPHERE_META[atmosphere];

  return (
    <section
      id={id}
      className={`relative overflow-hidden ${border ? "border-b border-border" : ""} ${meta.sectionClass} ${className}`}
    >
      <div className="atmo-section-bg pointer-events-none absolute inset-0" aria-hidden />
      <CinematicAtmosphere variant={atmosphere} intensity={intensity} />
      <div className="atmo-section-depth pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative z-10">{children}</div>
    </section>
  );
}
