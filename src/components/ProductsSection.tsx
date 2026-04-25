import { dProductsAPI } from "@/services/dummyAPI/dProductsAPI";
import ProductCard from "./ProductCard";
import SectionHeader from "./SectionHeader";
import { productsService } from "@/services/productsServices";
import { IProductDetails } from "@/interfaces/routeApi/response/IProduct";

export default async function ProductsSection({withHeader=true, showItemCount=false}:{withHeader?:boolean, showItemCount?:boolean}) {
  const products: IProductDetails[] = await productsService.getProducts();
  // const {products}:{products:any} = await  dProductsAPI.getAllProducts();

  return (
    <section className="py-10">
      <div className="container mx-auto">
        {
          withHeader && <SectionHeader title={{ text: 'Featured ', highlight: 'Products' }} sectionName="Products"  />
        }
        {
          showItemCount && <p className="mb-6 text-sm text-gray-500" >Showing {products.length} products</p>
        }
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {
            products.map((product, index: number) => {
              return (
                // <ProductCard key={product._id} product={product} />
                <ProductCard key={product.id} product={product} />
              );
            })
          }
        </div>
      </div>
    </section>
  );
}


