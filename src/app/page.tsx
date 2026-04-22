import HeroCarousel from "@/components/HeroCarousel";
import CategoriesSection from "@/components/CategoriesSection";
import Features from "@/components/Features";
import Newletter from "@/components/Newletter";
import OfferSection from "@/components/OfferSection";
import ProductsSection from "@/components/ProductsSection";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <Features />
      <CategoriesSection />
      <OfferSection />
      <ProductsSection />
      <Newletter />
    </>
  );
}
