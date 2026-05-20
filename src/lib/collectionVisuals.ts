import type { AtmosphereId } from "./atmosphere";

/** Tratamento visual por coleção — produto em vitrine, não galeria */
export const COLLECTION_VISUALS = {
  espaciais: {
    atmosphere: "cosmic" as AtmosphereId,
    canvasClass: "collection-canvas-espaciais",    photoClass: "collection-photo-espaciais",
    objectPosition: "object-center",
    fit: "object-contain",
    padding: "p-8 sm:p-12 lg:p-14",
    scale: "scale-[1.02] group-hover:scale-[1.06]",
  },
  aventureiros: {
    atmosphere: "anime" as AtmosphereId,
    canvasClass: "collection-canvas-aventureiros",    photoClass: "collection-photo-anime",
    objectPosition: "object-center",
    fit: "object-contain",
    padding: "p-6 sm:p-8",
    scale: "scale-[1.03] group-hover:scale-[1.07]",
  },
  minimalistas: {
    atmosphere: "minimal" as AtmosphereId,
    canvasClass: "collection-canvas-minimalistas",    photoClass: "collection-photo-minimal",
    objectPosition: "object-[center_38%]",
    fit: "object-contain",
    padding: "p-10 sm:p-12",
    scale: "scale-[1.02] group-hover:scale-[1.05]",
  },
  geek: {
    atmosphere: "geek" as AtmosphereId,
    canvasClass: "collection-canvas-geek",    photoClass: "collection-photo-geek",
    objectPosition: "object-center",
    fit: "object-contain",
    padding: "p-6 sm:p-8 lg:p-10",
    scale: "scale-[1.03] group-hover:scale-[1.07]",
  },
} as const;
