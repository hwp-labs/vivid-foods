import { Banner } from "@/components/organisms/banner";
import { Header } from "@/components/organisms/header";
import { Hero } from "@/components/organisms/hero";
import { FeaturedList } from "@/components/organisms/featured-list";
import { ProductList } from "@/components/organisms/product-list";
import { Footer } from "@/components/organisms/footer";

export default function HomePage() {
  return (
    <div className="">
      <Banner />
      <Header />
      <Hero />
      <FeaturedList />
      <ProductList />
      <Footer />
    </div>
  );
}
