import { IProductDetails } from "@/interfaces/routeApi/response/IProduct";
import ProductCard from "./ProductCard";
import ProductDetailsCard from "./ProductDetailsCard";
import ProductDetailsTabs from "./ProductDetailsTabs";

export default function ProductDetailsSection({product}:{product:IProductDetails}) {
  return (
    <>
        <ProductDetailsCard  product={product} />
        <ProductDetailsTabs product={product} />
    </>
  );
}
