import { IMAGES } from "./images";

export const ANNOUNCEMENT = {
  prefix: "Frete grátis",
  highlight: "acima de R$199",
  secondary: "Parcelamento em até 6x",
  cta: "Comprar agora",
  href: "#colecoes",
} as const;

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Coleções", href: "#colecoes" },
  { label: "Mais vendidos", href: "#mais-vendidos" },
  { label: "Em alta", href: "#em-alta" },
  { label: "Sobre", href: "#por-que" },
] as const;

export const BENEFITS = [
  {
    icon: "truck" as const,
    title: "Envio nacional",
    description: "Rastreio em tempo real, embalagem reforçada.",
  },
  {
    icon: "shield" as const,
    title: "Compra segura",
    description: "SSL, Pix e cartão com proteção total.",
  },
  {
    icon: "gift" as const,
    title: "Caixa presente",
    description: "Veludo, cartão e fita — pronto para entregar.",
  },
  {
    icon: "badge" as const,
    title: "Garantia 90 dias",
    description: "Troca sem burocracia se não amar a peça.",
  },
] as const;

export const COLLECTIONS = [
  {
    id: "espaciais",
    name: "Espaciais",
    categoryLabel: "Chaveiros & metais",
    tagline: "Cosmos em metal",
    description:
      "Cartas e chaveiros metálicos inspirados no universo Pokémon — acabamento banhado e gravação de precisão.",
    priceFrom: "R$ 89",
    productCount: 18,
    badge: "Destaque",
    href: "/colecoes/espaciais",
    image: IMAGES.collections.espaciais,
    featured: true,
  },
  {
    id: "aventureiros",
    name: "Aventureiros",
    categoryLabel: "Acessórios anime",
    tagline: "Para quem explora",
    description:
      "Figuras e acessórios colecionáveis com estética anime premium — close editorial, acabamento de boutique.",
    priceFrom: "R$ 79",
    productCount: 24,
    badge: "Novo",
    href: "/colecoes/aventureiros",
    image: IMAGES.collections.aventureiros,
    featured: false,
  },
  {
    id: "minimalistas",
    name: "Minimalistas",
    categoryLabel: "Joias & metais",
    tagline: "Menos é eterno",
    description:
      "Colares e peças de linha limpa em metal polido — neutros, silenciosos e feitos para usar todo dia.",
    priceFrom: "R$ 69",
    productCount: 16,
    href: "/colecoes/minimalistas",
    image: IMAGES.collections.minimalistas,
    featured: false,
  },
  {
    id: "geek",
    name: "Geek & Pop",
    categoryLabel: "Blocos & decor",
    tagline: "Cultura em metal",
    description:
      "Sets premium em blocos e decor de mesa — peças de exposição com montagem e presença de vitrine.",
    priceFrom: "R$ 94",
    productCount: 22,
    badge: "Edição limitada",
    href: "/colecoes/geek-pop",
    image: IMAGES.collections.geek,
    featured: false,
  },
] as const;

export const WHY_CHOOSE = [
  {
    title: "Design exclusivo",
    description:
      "Cada modelo nasce no estúdio Nebulari — nada de catálogo genérico importado.",
    image: IMAGES.why[0],
  },
  {
    title: "Metal de verdade",
    description:
      "Aço 316L, latão e banhos que resistem ao tempo, ao toque e ao bolso.",
    image: IMAGES.why[1],
  },
  {
    title: "Feito à mão",
    description:
      "Lotes pequenos, polimento manual e controle um a um antes do envio.",
    image: IMAGES.why[2],
  },
  {
    title: "Presente memorável",
    description:
      "Embalagem que abre como experiência — não como sacola de shopping.",
    image: IMAGES.why[3],
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Marina S.",
    location: "São Paulo, SP",
    rating: 5,
    product: "Órbita Prata",
    text: "O brilho do metal é absurdo. Parece foto de campanha, mas é real — seguro na minha bolsa todo dia.",
    image: IMAGES.testimonials.orbitaPrata,
  },
  {
    name: "Rafael M.",
    location: "Belo Horizonte, MG",
    rating: 5,
    product: "Geek & Pop — Pixel",
    text: "Já são quatro na coleção. Peso certo, acabamento impecável, entrega antes do prazo.",
    image: IMAGES.testimonials.pixel,
  },
  {
    name: "Camila T.",
    location: "Curitiba, PR",
    rating: 5,
    product: "Minimal Arc",
    text: "Presenteei minha mãe. Ela chorou. A caixa sozinha já vale metade da experiência.",
    image: IMAGES.testimonials.minimalArc,
  },
] as const;

export const FOOTER_LINKS = {
  navegacao: [
    { label: "Início", href: "#inicio" },
    { label: "Coleções", href: "#colecoes" },
    { label: "Destaques", href: "#destaques" },
    { label: "Presentes", href: "#" },
  ],
  ajuda: [
    { label: "Central de ajuda", href: "#" },
    { label: "Rastrear pedido", href: "#" },
    { label: "Trocas e devoluções", href: "#" },
    { label: "WhatsApp", href: "#" },
  ],
  institucional: [
    { label: "Nossa história", href: "#" },
    { label: "Artesanato", href: "#" },
    { label: "Privacidade", href: "#" },
    { label: "Termos", href: "#" },
  ],
} as const;

export const PAYMENT_METHODS = [
  "Visa",
  "Mastercard",
  "Pix",
  "Boleto",
  "Elo",
  "Amex",
] as const;

export const HERO_TRUST_BADGES = [
  "Frete grátis acima de R$199",
  "Edição limitada",
  "Mais vendidos",
] as const;

export const FOOTER_TRUST = [
  { label: "Compra segura", description: "Pagamento protegido" },
  { label: "Entrega nacional", description: "Rastreio em tempo real" },
  { label: "Garantia Nebulari", description: "90 dias sem burocracia" },
] as const;

export const SHOWCASE_HIGHLIGHT = {
  name: "Minimal Arc",
  category: "Colares",
  price: "R$ 129",
  href: "#destaques",
  badge: "vendido" as const,
} as const;

export const SHOWCASE_GRID = {
  featured: {
    name: "Sakura Atelier",
    category: "Blocos premium",
    price: "R$ 349",
    href: "#galeria-pecas",
    badge: "limitado" as const,
    image: IMAGES.showcaseGrid.featured.src,
    alt: IMAGES.showcaseGrid.featured.alt,
  },
  items: [
    {
      name: "Águia Technic",
      price: "R$ 289",
      href: "#",
      badge: "vendido" as const,
      image: IMAGES.showcaseGrid.items[0].src,
      alt: IMAGES.showcaseGrid.items[0].alt,
    },
    {
      name: "Dragon Quartet",
      price: "R$ 199",
      href: "#",
      badge: "novo" as const,
      image: IMAGES.showcaseGrid.items[1].src,
      alt: IMAGES.showcaseGrid.items[1].alt,
    },
    {
      name: "Meca Eagle",
      price: "R$ 319",
      href: "#",
      badge: "limitado" as const,
      image: IMAGES.showcaseGrid.items[2].src,
      alt: IMAGES.showcaseGrid.items[2].alt,
    },
    {
      name: "Treehouse Edition",
      price: "R$ 279",
      href: "#",
      badge: "novo" as const,
      image: IMAGES.showcaseGrid.items[3].src,
      alt: IMAGES.showcaseGrid.items[3].alt,
    },
    {
      name: "Egghead Luffy",
      price: "R$ 159",
      href: "#",
      badge: "vendido" as const,
      image: IMAGES.showcaseGrid.items[4].src,
      alt: IMAGES.showcaseGrid.items[4].alt,
    },
    {
      name: "Block Cat",
      price: "R$ 129",
      href: "#",
      image: IMAGES.showcaseGrid.items[5].src,
      alt: IMAGES.showcaseGrid.items[5].alt,
    },
  ],
} as const;
