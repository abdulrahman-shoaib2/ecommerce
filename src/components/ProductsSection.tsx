import ProductCard from "./ProductCard";
import SectionHeader from "./SectionHeader";
import { productsService } from "@/services/productsServices";

export default async function ProductsSection() {
  const products: any = await productsService.getProducts();

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <SectionHeader title={{ text: 'Featured ', highlight: 'Products' }} sectionName="Products" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {
            products.map((product: any, index: number) => {
              return (
                <ProductCard key={product._id} product={product} />
              );
            })
          }
        </div>
      </div>
    </section>
  );
}


