import { IProductDetails } from "@/interfaces/routeApi/response/IProduct";
import ProductDetailsCard from "./ProductDetailsCard";
import ProductDetailsTabs from "./ProductDetailsTabs";
import ProductCard from "@/components/shared/ProductCard";

export default function ProductDetailsSection({product}:{product:IProductDetails}) {
  return (
    <>
        <ProductDetailsCard  product={product} />
        <ProductDetailsTabs product={product} />
    </>
  );
}
