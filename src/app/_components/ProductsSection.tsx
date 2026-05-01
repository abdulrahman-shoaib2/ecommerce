"use client";
// import { dProductsAPI } from "@/services/dummyAPI/dProductsAPI";
import ProductCard from "../../components/shared/ProductCard";
// import SectionHeader from "../../components/shared/SectionHeader";
// import { productsService } from "@/services/routeAPI/productsServices";
import { IProductDetails } from "@/interfaces/routeApi/response/IProduct";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxOpen,
  faFilter,
  faLayerGroup,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { productsService } from "@/services/routeAPI/productsServices";
import SkeletonProduct from "@/components/shared/SkeletonProduct";

export default function ProductsSection({
  // withHeader = true,
  showItemCount = false,
}: {
  // withHeader?: boolean;
  showItemCount?: boolean;
}) {
  // const [products, setProducts] = useState<IProductDetails[]>([]);
  const searchParams = useSearchParams();
  // const [isLoading , setIsLoading] = useState(false);
  // const productsSliceData = useSelector((store:RootState)=>store.products)
  // const dispatch = useDispatch<AppDispatch>();
  // const {products:reduxProducts, isLoading} = useSelector((store:RootState)=> store.products)
  const category = searchParams.get("category") || undefined;

  const {
    data: products,
    isLoading,
    isFetching,
    error,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  async function getProducts() {
    try {
      const productsList: IProductDetails[] = await productsService.getProducts(
        { category },
      );
      return productsList;
    } catch (e) {
    } finally {
    }
  }
  // const {products}:{products:any} = await  dProductsAPI.getAllProducts();
  // getProducts();
  // dispatch(getAllProducts(category||''))
  useEffect(() => {
    refetch();
  }, [category]);

  return (
    <>
      {category != undefined && (
        <div className="mb-6 flex items-center gap-3 flex-wrap">
          <span className="flex items-center gap-2 text-sm text-gray-600">
            <FontAwesomeIcon
              icon={faFilter}
              className="svg-inline--fa fa-filter"
            />
            Active Filters:
          </span>
          {products &&
            products?.length > 0 &&
            category == products[0].category._id && (
              <Link
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium hover:bg-primary-200 transition-colors"
                href="/products"
              >
                <FontAwesomeIcon
                  icon={faLayerGroup}
                  className="svg-inline--fa fa-layer-group text-xs"
                />
                {products[0].category.name}
                <FontAwesomeIcon
                  icon={faXmark}
                  className="svg-inline--fa fa-xmark text-xs"
                />
              </Link>
            )}
          <Link
            className="text-sm text-gray-500 hover:text-gray-700 underline"
            href="/products"
          >
            Clear all
          </Link>
        </div>
      )}
      {isLoading ? (
        <div className="min-h-[50vh] flex justify-center items-center">
          <Loader2 className="w-10 h-10 animate-spin text-primary-500" />
        </div>
      ) : (
        isFetching?
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {Array.from({length:20}).map((product, index: number) => {
                return (
                  // <ProductCard key={product._id} product={product} />
                  <SkeletonProduct key={'skeleton_'+index} />
                );
              })}
          </div>
        :
        <>
          {showItemCount && (
            <p className="mb-6 text-sm text-gray-500">
              Showing {products?.length} products
            </p>
          )}
          {products &&  products?.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {products?.map((product, index: number) => {
                return (
                  // <ProductCard key={product._id} product={product} />
                  <ProductCard key={product.id} product={product} />
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5">
                <FontAwesomeIcon icon={faBoxOpen} className="fa-box-open text-3xl text-gray-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                No Products Found
              </h3>
              <p className="text-gray-500 mb-6">
                No products match your current filters.
              </p>
              <Link
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
                href="/products"
              >
                View All Products
              </Link>
            </div>
          )}
        </>
      )}
    </>
  );
}
