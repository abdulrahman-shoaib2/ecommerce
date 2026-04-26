'use client';
import { Button } from "./ui/button";
import Link from "next/link";
import { ISubCategory } from "@/interfaces/routeApi/response/ISubCategory";
import {
  type CarouselApi,
  Carousel as CarouselComponent,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { productsService } from "@/services/productsServices";
import { IProductDetails } from "@/interfaces/routeApi/response/IProduct";
import ProductCard from "./ProductCard";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";


export default function SimilarProducts({ categoryId }: { categoryId: string }) {
  const [api, setApi] = useState<CarouselApi>()
  const [products, setProducts] = useState<IProductDetails[]>([])
  async function getSimilarProducts() {
    const similarProducts =  await productsService.getProducts({ category: categoryId })
    setProducts(similarProducts)
  } 

  useEffect( ()=>{
      getSimilarProducts()
  },[ ])



  return (
    <section id="similar-products" className="py-10">
      <div className="container mx-auto px-4 ">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full" />
            <h2 className="text-2xl font-bold text-gray-800">
              You May Also <span className="text-emerald-600">Like</span>
            </h2>
          </div>
          <div className="flex space-x-2">
            <Button className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition" onClick={() => api?.scrollNext()}>
              <FontAwesomeIcon icon={faChevronLeft} className="svg-inline--fa fa-chevron-left"/>
              <span className="sr-only">Previous</span>
            </Button>
            <Button className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition" onClick={() => api?.scrollPrev()}>
              <FontAwesomeIcon icon={faChevronRight} className="svg-inline--fa fa-chevron-right"/>
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>

        <CarouselComponent className="mt-4 w-full " setApi={setApi}>
          <CarouselContent className="my-1 flex w-full ">
            {
              products?.length > 0 && products?.map((product, index) => {
                return (
                  <CarouselItem key={'similar-product_' + index} className={cn(
                    "basis-1/5 cursor-pointer transition-opacity pl-1 first-of-type:pl-5 bg-transparent! "
                  )}>
                    <ProductCard  product={product} classNames='h-full' />
                  </CarouselItem>

                )
              })
            }
          </CarouselContent>
        </CarouselComponent>


      </div>
    </section>
  );
}
