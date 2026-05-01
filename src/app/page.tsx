import HeroCarousel from "@/app/_components/HeroCarousel";
import CategoriesSection from "@/app/(pages)/categories/_components/CategoriesSection";
import Features from "@/app/_components/Features";
import Newletter from "@/app/_components/Newletter";
import OfferSection from "@/app/_components/OfferSection";
import ProductsSection from "@/app/_components/ProductsSection";
import SectionHeader from "@/components/shared/SectionHeader";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <Features />
      <CategoriesSection withHeader={true} />
      <OfferSection />
      <section className="py-10">
        <div className="container mx-auto">
          <SectionHeader title={{ text: "Featured ", highlight: "Products" }}
            sectionName="Products" />
          <Suspense fallback={<div className="min-h-[50vh] flex justify-center items-center"><Loader2 className="size-10 animate-spin" /></div>}>
            <ProductsSection />
          </Suspense>
        </div>
      </section>
      <Newletter />
    </>
  );
}
