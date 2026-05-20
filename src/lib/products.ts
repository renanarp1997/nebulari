import { IMAGES } from "./images";

export type ProductBadge = "novo" | "limitado" | "vendido" | "destaque";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  priceLabel: string;
  compareAtPrice?: string;
  image: string;
  alt: string;
  href: string;
  rating: number;
  reviewCount: number;
  shipping: string;
  badge?: ProductBadge;
  collectionId?: string;
}

const p = (
  data: Omit<Product, "priceLabel"> & { priceLabel?: string }
): Product => ({
  ...data,
  priceLabel: data.priceLabel ?? `R$ ${data.price}`,
});

export const PRODUCTS: Product[] = [
  p({
    id: "orbita-prata",
    name: "Órbita Prata",
    category: "Colares",
    price: 89,
    compareAtPrice: "R$ 109",
    image: IMAGES.hero.main,
    alt: "Colar Órbita Prata — lua crescente",
    href: "#destaques",
    rating: 4.9,
    reviewCount: 428,
    shipping: "Frete grátis acima de R$199",
    badge: "vendido",
    collectionId: "minimalistas",
  }),
  p({
    id: "minimal-arc",
    name: "Minimal Arc",
    category: "Colares",
    price: 129,
    image: IMAGES.showcaseHighlight.src,
    alt: IMAGES.showcaseHighlight.alt,
    href: "#destaques",
    rating: 4.8,
    reviewCount: 312,
    shipping: "Envio em 48h · SP",
    badge: "destaque",
    collectionId: "minimalistas",
  }),
  p({
    id: "sakura-atelier",
    name: "Sakura Atelier",
    category: "Blocos premium",
    price: 349,
    compareAtPrice: "R$ 399",
    image: IMAGES.showcaseGrid.featured.src,
    alt: IMAGES.showcaseGrid.featured.alt,
    href: "#galeria-pecas",
    rating: 5,
    reviewCount: 186,
    shipping: "Frete grátis acima de R$199",
    badge: "limitado",
    collectionId: "geek",
  }),
  p({
    id: "aguia-technic",
    name: "Águia Technic",
    category: "Colecionáveis",
    price: 289,
    image: IMAGES.showcaseGrid.items[0].src,
    alt: IMAGES.showcaseGrid.items[0].alt,
    href: "#",
    rating: 4.9,
    reviewCount: 254,
    shipping: "Envio em 48h",
    badge: "vendido",
    collectionId: "geek",
  }),
  p({
    id: "dragon-quartet",
    name: "Dragon Quartet",
    category: "BrickHeadz",
    price: 199,
    image: IMAGES.showcaseGrid.items[1].src,
    alt: IMAGES.showcaseGrid.items[1].alt,
    href: "#",
    rating: 4.7,
    reviewCount: 167,
    shipping: "Frete grátis acima de R$199",
    badge: "novo",
    collectionId: "aventureiros",
  }),
  p({
    id: "meca-eagle",
    name: "Meca Eagle",
    category: "Technic",
    price: 319,
    image: IMAGES.showcaseGrid.items[2].src,
    alt: IMAGES.showcaseGrid.items[2].alt,
    href: "#",
    rating: 4.8,
    reviewCount: 203,
    shipping: "Envio em 48h",
    badge: "limitado",
    collectionId: "geek",
  }),
  p({
    id: "treehouse-edition",
    name: "Treehouse Edition",
    category: "Display sets",
    price: 279,
    image: IMAGES.showcaseGrid.items[3].src,
    alt: IMAGES.showcaseGrid.items[3].alt,
    href: "#",
    rating: 4.6,
    reviewCount: 98,
    shipping: "Frete grátis acima de R$199",
    badge: "novo",
    collectionId: "geek",
  }),
  p({
    id: "egghead-luffy",
    name: "Egghead Luffy",
    category: "Anime collectibles",
    price: 159,
    image: IMAGES.showcaseGrid.items[4].src,
    alt: IMAGES.showcaseGrid.items[4].alt,
    href: "#",
    rating: 4.9,
    reviewCount: 341,
    shipping: "Envio em 48h",
    badge: "vendido",
    collectionId: "aventureiros",
  }),
  p({
    id: "block-cat",
    name: "Block Cat",
    category: "Desk decor",
    price: 129,
    image: IMAGES.showcaseGrid.items[5].src,
    alt: IMAGES.showcaseGrid.items[5].alt,
    href: "#",
    rating: 4.5,
    reviewCount: 72,
    shipping: "Envio em 48h",
    collectionId: "geek",
  }),
  p({
    id: "cosmos-metal",
    name: "Cosmos Metal Set",
    category: "Chaveiros",
    price: 94,
    image: IMAGES.collections.espaciais,
    alt: "Chaveiros metálicos cosmos",
    href: "/colecoes/espaciais",
    rating: 4.8,
    reviewCount: 519,
    shipping: "Frete grátis acima de R$199",
    badge: "vendido",
    collectionId: "espaciais",
  }),
  p({
    id: "anime-strap",
    name: "Anime Strap Pro",
    category: "Acessórios",
    price: 79,
    image: IMAGES.collections.aventureiros,
    alt: "Acessórios anime premium",
    href: "/colecoes/aventureiros",
    rating: 4.7,
    reviewCount: 284,
    shipping: "Envio em 48h",
    badge: "novo",
    collectionId: "aventureiros",
  }),
  p({
    id: "lunar-pendant",
    name: "Lunar Pendant",
    category: "Joias",
    price: 69,
    image: IMAGES.collections.minimalistas,
    alt: "Colar minimal lunar",
    href: "/colecoes/minimalistas",
    rating: 4.9,
    reviewCount: 156,
    shipping: "Frete grátis acima de R$199",
    collectionId: "minimalistas",
  }),
  p({
    id: "galaxy-charm",
    name: "Galaxy Charm",
    category: "Chaveiros",
    price: 84,
    compareAtPrice: "R$ 99",
    image: IMAGES.testimonials.orbitaPrata,
    alt: "Chaveiro galáxia premium",
    href: "#",
    rating: 4.8,
    reviewCount: 392,
    shipping: "Frete grátis acima de R$199",
    badge: "vendido",
    collectionId: "espaciais",
  }),
  p({
    id: "pixel-ring",
    name: "Pixel Ring",
    category: "Geek metal",
    price: 74,
    image: IMAGES.testimonials.pixel,
    alt: "Anel pixel colecionável",
    href: "#",
    rating: 4.6,
    reviewCount: 118,
    shipping: "Envio em 48h",
    badge: "novo",
    collectionId: "geek",
  }),
  p({
    id: "arc-gold",
    name: "Arc Gold",
    category: "Colares",
    price: 149,
    image: IMAGES.testimonials.minimalArc,
    alt: "Colar arc dourado",
    href: "#",
    rating: 4.9,
    reviewCount: 267,
    shipping: "Frete grátis acima de R$199",
    collectionId: "minimalistas",
  }),
  p({
    id: "studio-block",
    name: "Studio Block Set",
    category: "Blocos",
    price: 219,
    image: IMAGES.why[0],
    alt: "Set studio em blocos",
    href: "#",
    rating: 4.7,
    reviewCount: 89,
    shipping: "Envio em 48h",
    collectionId: "geek",
  }),
  p({
    id: "metal-craft",
    name: "Metal Craft Kit",
    category: "Artesanal",
    price: 99,
    image: IMAGES.why[1],
    alt: "Kit metal craft",
    href: "#",
    rating: 4.8,
    reviewCount: 201,
    shipping: "Frete grátis acima de R$199",
    badge: "limitado",
    collectionId: "espaciais",
  }),
  p({
    id: "orbit-chain",
    name: "Orbit Chain",
    category: "Colares",
    price: 109,
    image: IMAGES.why[2],
    alt: "Corrente orbit",
    href: "#",
    rating: 4.7,
    reviewCount: 143,
    shipping: "Envio em 48h",
    collectionId: "minimalistas",
  }),
  p({
    id: "pop-display",
    name: "Pop Display",
    category: "Decor",
    price: 189,
    image: IMAGES.why[3],
    alt: "Display pop culture",
    href: "#",
    rating: 4.5,
    reviewCount: 64,
    shipping: "Envio em 48h",
    badge: "novo",
    collectionId: "geek",
  }),
  p({
    id: "nexus-figure",
    name: "Nexus Figure",
    category: "Anime",
    price: 139,
    image: "/imagens/14.jpg",
    alt: "Figura nexus anime",
    href: "#",
    rating: 4.8,
    reviewCount: 178,
    shipping: "Frete grátis acima de R$199",
    collectionId: "aventureiros",
  }),
  p({
    id: "prism-key",
    name: "Prism Key",
    category: "Chaveiros",
    price: 59,
    image: "/imagens/15.jpg",
    alt: "Chaveiro prisma",
    href: "#",
    rating: 4.6,
    reviewCount: 312,
    shipping: "Envio em 48h",
    badge: "vendido",
    collectionId: "espaciais",
  }),
  p({
    id: "vault-mini",
    name: "Vault Mini",
    category: "Colecionáveis",
    price: 249,
    compareAtPrice: "R$ 289",
    image: "/imagens/16.jpg",
    alt: "Mini vault colecionável",
    href: "#",
    rating: 4.9,
    reviewCount: 95,
    shipping: "Frete grátis acima de R$199",
    badge: "limitado",
    collectionId: "geek",
  }),
];

export const CATALOG_ALL = [...PRODUCTS];

export const NEW_ARRIVALS = PRODUCTS.filter((x) =>
  x.badge === "novo" || ["dragon-quartet", "treehouse-edition", "anime-strap", "pixel-ring", "pop-display", "nexus-figure"].includes(x.id)
);

export const BY_COLLECTION = {
  minimalistas: PRODUCTS.filter((p) => p.collectionId === "minimalistas"),
  geek: PRODUCTS.filter((p) => p.collectionId === "geek"),
  aventureiros: PRODUCTS.filter((p) => p.collectionId === "aventureiros"),
  espaciais: PRODUCTS.filter((p) => p.collectionId === "espaciais"),
} as const;

export const BEST_SELLERS = PRODUCTS.filter((x) =>
  ["orbita-prata", "cosmos-metal", "egghead-luffy", "aguia-technic", "minimal-arc", "sakura-atelier"].includes(
    x.id
  )
);

export const TRENDING = PRODUCTS.filter((x) =>
  ["dragon-quartet", "meca-eagle", "treehouse-edition", "anime-strap", "block-cat", "lunar-pendant"].includes(
    x.id
  )
);

export const RECOMMENDATIONS = PRODUCTS.filter((x) =>
  [
    "minimal-arc",
    "orbita-prata",
    "dragon-quartet",
    "cosmos-metal",
    "sakura-atelier",
    "galaxy-charm",
    "egghead-luffy",
    "arc-gold",
  ].includes(x.id)
);

export function getProductById(id: string) {
  return PRODUCTS.find((p) => p.id === id);
}
