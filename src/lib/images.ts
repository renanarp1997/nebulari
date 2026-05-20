/** Imagens locais — evita dependência de CDN externa (404 / lentidão) */
export const IMAGES = {
  hero: {
    main: "/imagens/17.jpg",
    detail: "/imagens/17.jpg",
    surface: "/imagens/14.jpg",
  },
  showcaseHighlight: {
    src: "/imagens/13.jpg",
    alt: "Colar minimal Arc — metal polido",
  },
  showcaseGrid: {
    featured: {
      src: "/imagens/6.jpg",
      alt: "Sakura Atelier — set premium em blocos",
    },
    items: [
      { src: "/imagens/7.jpg", alt: "Águia Mecânica Technic" },
      { src: "/imagens/11.jpg", alt: "Quarteto Dragon Ball BrickHeadz" },
      { src: "/imagens/9.png", alt: "Águia mecânica colecionável" },
      { src: "/imagens/10.jpg", alt: "Sakura Treehouse Edition" },
      { src: "/imagens/12.jpg", alt: "Luffy Egghead — edição display" },
      { src: "/imagens/8.jpg", alt: "Figura colecionável em blocos" },
    ],
  },
  collections: {
    espaciais: "/imagens/5.jpg",
    aventureiros: "/imagens/11.jpg",
    minimalistas: "/imagens/13.jpg",
    geek: "/imagens/7.jpg",
  },
  whyFeatured: "/imagens/13.jpg",
  why: [
    "/imagens/14.jpg",
    "/imagens/15.jpg",
    "/imagens/16.jpg",
    "/imagens/18.jpg",
  ],
  testimonials: {
    orbitaPrata: "/imagens/18.jpg",
    pixel: "/imagens/19.jpg",
    minimalArc: "/imagens/20.jpg",
  },
  newsletter: "/imagens/5.jpg",
  packaging: "/imagens/14.jpg",
} as const;
