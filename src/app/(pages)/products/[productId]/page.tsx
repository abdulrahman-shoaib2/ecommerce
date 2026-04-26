import ProductDetailsSection from '@/components/ProductDetailsSection'
import SimilarProducts from '@/components/SimilarProducts'
import { IProduct, IProductDetails } from '@/interfaces/routeApi/response/IProduct';
import { productsService } from '@/services/productsServices';
import React from 'react'

export default async function ProductsDetails({params}:{params:Promise<{productId:string}>}) {
  const productId:string = await params.then((res:any)=>res.productId);
  const {data:product}:{data:IProductDetails} = await productsService.getProductById(productId);
  
  return (
    <>
      <ProductDetailsSection product={product} />
      <SimilarProducts categoryId={product.category._id} />
    </>
  )
}
