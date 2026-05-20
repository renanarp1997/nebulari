import { CinematicAtmosphere } from "@/components/ui/CinematicAtmosphere";
import type { AtmosphereId } from "@/lib/atmosphere";

/** @deprecated Use CinematicAtmosphere — mantido para compatibilidade */
export function CinematicLight({ variant = "cosmic" }: { variant?: AtmosphereId }) {
  return <CinematicAtmosphere variant={variant} intensity="rich" />;
}
