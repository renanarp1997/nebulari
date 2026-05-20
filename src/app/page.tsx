import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { MarketplaceTrustBar } from "@/components/layout/MarketplaceTrustBar";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { LazyWhenVisible } from "@/components/ui/LazyWhenVisible";
import { IMAGES } from "@/lib/images";
import dynamic from "next/dynamic";

const ProductCatalog = dynamic(
  () => import("@/components/sections/ProductCatalog").then((m) => m.ProductCatalog),
  { loading: () => <div className="section-dense min-h-[480px] border-b border-border bg-background" /> }
);
const ProductShowcase = dynamic(
  () => import("@/components/sections/ProductShowcase").then((m) => m.ProductShowcase),
  { loading: () => <div className="section-dense min-h-[520px] border-b border-border bg-background-elevated" /> }
);
const ExploreStrip = dynamic(
  () => import("@/components/sections/ExploreStrip").then((m) => m.ExploreStrip),
  { loading: () => <div className="section-dense-tight min-h-[360px] border-b border-border" /> }
);
const TrendingProducts = dynamic(
  () => import("@/components/sections/TrendingProducts").then((m) => m.TrendingProducts),
  { loading: () => <div className="section-dense min-h-[380px] border-b border-border" /> }
);
const CategoryLanes = dynamic(
  () => import("@/components/sections/CategoryLanes").then((m) => m.CategoryLanes),
  { loading: () => <div className="section-dense min-h-[640px] border-b border-border bg-background-elevated" /> }
);
const Collections = dynamic(
  () => import("@/components/sections/Collections").then((m) => m.Collections),
  { loading: () => <div className="section-dense min-h-[480px] border-b border-border" /> }
);
const Recommendations = dynamic(
  () => import("@/components/sections/Recommendations").then((m) => m.Recommendations),
  { loading: () => <div className="section-dense min-h-[420px] border-b border-border" /> }
);
const WhyChoose = dynamic(
  () => import("@/components/sections/WhyChoose").then((m) => m.WhyChoose),
  { loading: () => <div className="section-dense min-h-[400px] border-b border-border" /> }
);
const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials").then((m) => m.Testimonials),
  { loading: () => <div className="section-dense min-h-[360px] border-b border-border" /> }
);
const BestSellers = dynamic(
  () => import("@/components/sections/BestSellers").then((m) => m.BestSellers),
  { loading: () => <div className="section-dense min-h-[420px] border-b border-border bg-background-elevated" /> }
);
const CollectionDiscovery = dynamic(
  () => import("@/components/sections/CollectionDiscovery").then((m) => m.CollectionDiscovery),
  { loading: () => <div className="section-dense-tight min-h-[200px] border-b border-border" /> }
);
const BenefitsBar = dynamic(
  () => import("@/components/sections/BenefitsBar").then((m) => m.BenefitsBar),
  { loading: () => <div className="min-h-[200px] border-b border-border" /> }
);
const Newsletter = dynamic(
  () => import("@/components/sections/Newsletter").then((m) => m.Newsletter),
  { loading: () => <div className="min-h-[380px]" /> }
);
const Footer = dynamic(
  () => import("@/components/layout/Footer").then((m) => m.Footer),
  { loading: () => <footer className="min-h-[280px] border-t border-border" /> }
);
const EditorialBanner = dynamic(
  () => import("@/components/ui/EditorialBanner").then((m) => m.EditorialBanner),
  { loading: () => <div className="min-h-[140px]" /> }
);

export default function Home() {
  return (
    <>
      <div className="site-chrome">
        <AnnouncementBar />
        <Header />
        <MarketplaceTrustBar />
      </div>
      <main className="texture-studio overflow-x-hidden">
        <Hero />

        <LazyWhenVisible minHeight={140}>
          <div className="section-dense-tight border-b border-border bg-background py-3 sm:py-5">
            <EditorialBanner
              eyebrow="Frete grátis"
              title="Acima de R$199 em todo o Brasil"
              description="Explore o catálogo completo — joias, blocos, anime e metais com acabamento boutique."
              cta="Começar a comprar"
              href="#catalogo"
              image={IMAGES.collections.minimalistas}
              imageAlt="Coleção minimal"
              variant="dark"
            />
          </div>
        </LazyWhenVisible>

        <LazyWhenVisible minHeight={420}>
          <BestSellers />
        </LazyWhenVisible>
        <LazyWhenVisible minHeight={200}>
          <CollectionDiscovery />
        </LazyWhenVisible>

        <LazyWhenVisible minHeight={520}>
          <ProductCatalog />
        </LazyWhenVisible>

        <LazyWhenVisible minHeight={140}>
          <div className="section-dense-tight border-b border-border bg-background-elevated py-4">
            <EditorialBanner
              eyebrow="Geek & Pop"
              title="Blocos designer e decor de vitrine"
              description="Edições limitadas com o mesmo padrão de luz editorial — sem visual de marketplace barato."
              cta="Ver blocos"
              href="#galeria-pecas"
              image={IMAGES.showcaseGrid.featured.src}
              imageAlt="Blocos premium"
              variant="accent"
              align="right"
            />
          </div>
        </LazyWhenVisible>

        <LazyWhenVisible minHeight={560}>
          <ProductShowcase />
        </LazyWhenVisible>
        <LazyWhenVisible minHeight={380}>
          <ExploreStrip />
        </LazyWhenVisible>
        <LazyWhenVisible minHeight={400}>
          <TrendingProducts />
        </LazyWhenVisible>

        <LazyWhenVisible minHeight={140}>
          <div className="section-dense-tight border-b border-border py-4">
            <EditorialBanner
              eyebrow="Anime & metais"
              title="Acessórios para colecionadores exigentes"
              description="Corredores temáticos com dezenas de peças — descubra como em Shopee, com luxo Nebulari."
              cta="Explorar corredores"
              href="#corredores"
              image={IMAGES.collections.aventureiros}
              imageAlt="Anime accessories"
              variant="light"
            />
          </div>
        </LazyWhenVisible>

        <LazyWhenVisible minHeight={720}>
          <CategoryLanes />
        </LazyWhenVisible>
        <LazyWhenVisible minHeight={200}>
          <BenefitsBar />
        </LazyWhenVisible>
        <LazyWhenVisible minHeight={480}>
          <Collections />
        </LazyWhenVisible>
        <LazyWhenVisible minHeight={520}>
          <Recommendations />
        </LazyWhenVisible>
        <LazyWhenVisible minHeight={420}>
          <WhyChoose />
        </LazyWhenVisible>
        <LazyWhenVisible minHeight={380}>
          <Testimonials />
        </LazyWhenVisible>
        <LazyWhenVisible minHeight={380}>
          <Newsletter />
        </LazyWhenVisible>
      </main>
      <Footer />
    </>
  );
}
