import type { AtmosphereId } from "@/lib/atmosphere";
import { getAtmosphereFromCollection } from "@/lib/atmosphere";
import type { CollectionId } from "@/lib/atmosphere";
import { CinematicAtmosphere } from "@/components/ui/CinematicAtmosphere";

export function CollectionAmbience({
  collectionId,
}: {
  collectionId: CollectionId;
}) {
  const atmosphere: AtmosphereId = getAtmosphereFromCollection(collectionId);

  return (
    <>
      <div className={`atmo-collection-rim atmo-collection-rim--${atmosphere}`} aria-hidden />
      <CinematicAtmosphere variant={atmosphere} intensity="soft" />
      <div className="atmo-collection-shine pointer-events-none absolute inset-0 z-[2]" aria-hidden />
    </>
  );
}
