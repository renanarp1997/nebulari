/** Fotos premium — produto metálico, joalheria e lifestyle (Unsplash) */
const u = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=92`;

export const IMAGES = {
  hero: {
    main: "/imagens/17.jpg",
    detail: "/imagens/17.jpg",
    surface: u("photo-1611591437281-460bf40a41e2", 1200),
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
    u("photo-1515562141207-7a88fb7ce338", 800),
    "/imagens/16.jpg",
  ],
  testimonials: {
    orbitaPrata: "/imagens/18.jpg",
    pixel: "/imagens/19.jpg",
    minimalArc: "/imagens/20.jpg",
  },
  newsletter: u("photo-1446776811953-b2787eb43f05", 1920),
  packaging: u("photo-1549465220-1a0b9238cd48", 1000),
} as const;
