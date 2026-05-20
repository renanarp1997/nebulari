/** Atmosferas por universo de produto — identidade Nebulari, mood distinto por categoria */
export type AtmosphereId = "minimal" | "geek" | "anime" | "cosmic" | "neutral";

export type CollectionId = "minimalistas" | "geek" | "aventureiros" | "espaciais";

export const COLLECTION_ATMOSPHERE: Record<CollectionId, AtmosphereId> = {
  minimalistas: "minimal",
  geek: "geek",
  aventureiros: "anime",
  espaciais: "cosmic",
};

export const ATMOSPHERE_META: Record<
  AtmosphereId,
  { label: string; mood: string; sectionClass: string; stageClass: string; glowClass: string }
> = {
  minimal: {
    label: "Joias minimal",
    mood: "Pérola, ouro suave e silêncio visual",
    sectionClass: "atmo-section-minimal",
    stageClass: "atmo-stage-minimal",
    glowClass: "atmo-glow-minimal",
  },
  geek: {
    label: "Blocos designer",
    mood: "Ateliê arquitetônico e sombras de expositor",
    sectionClass: "atmo-section-geek",
    stageClass: "atmo-stage-geek",
    glowClass: "atmo-glow-geek",
  },
  anime: {
    label: "Acessórios anime",
    mood: "Tinta, crepúsculo e acabamento boutique",
    sectionClass: "atmo-section-anime",
    stageClass: "atmo-stage-anime",
    glowClass: "atmo-glow-anime",
  },
  cosmic: {
    label: "Metais cósmicos",
    mood: "Banho metálico e luz de vitrine galáctica",
    sectionClass: "atmo-section-cosmic",
    stageClass: "atmo-stage-cosmic",
    glowClass: "atmo-glow-cosmic",
  },
  neutral: {
    label: "Curadoria",
    mood: "Estúdio editorial Nebulari",
    sectionClass: "atmo-section-neutral",
    stageClass: "atmo-stage-neutral",
    glowClass: "atmo-glow-neutral",
  },
};

export function getAtmosphere(collectionId?: string): AtmosphereId {
  if (!collectionId) return "neutral";
  return COLLECTION_ATMOSPHERE[collectionId as CollectionId] ?? "neutral";
}

export function getAtmosphereFromCollection(
  id: keyof typeof COLLECTION_ATMOSPHERE
): AtmosphereId {
  return COLLECTION_ATMOSPHERE[id];
}
