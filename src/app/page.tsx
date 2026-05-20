import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { EditorialBanner } from "@/components/ui/EditorialBanner";
import { BestSellers } from "@/components/sections/BestSellers";
import { ProductCatalog } from "@/components/sections/ProductCatalog";
import { CollectionDiscovery } from "@/components/sections/CollectionDiscovery";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { ExploreStrip } from "@/components/sections/ExploreStrip";
import { TrendingProducts } from "@/components/sections/TrendingProducts";
import { CategoryLanes } from "@/components/sections/CategoryLanes";
import { BenefitsBar } from "@/components/sections/BenefitsBar";
import { Collections } from "@/components/sections/Collections";
import { Recommendations } from "@/components/sections/Recommendations";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Testimonials } from "@/components/sections/Testimonials";
import { Newsletter } from "@/components/sections/Newsletter";
import { IMAGES } from "@/lib/images";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="texture-studio overflow-x-hidden">
        <Hero />

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

        <BestSellers />
        <CollectionDiscovery />
        <ProductCatalog />

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

        <ProductShowcase />
        <ExploreStrip />
        <TrendingProducts />

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

        <CategoryLanes />
        <BenefitsBar />
        <Collections />
        <Recommendations />
        <WhyChoose />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
