import { IProduct, IProductDetails } from '@/interfaces/routeApi/response/IProduct';
import { productsService } from '@/services/routeAPI/productsServices';
import React from 'react'
import SimilarProducts from './_components/SimilarProducts';
import ProductDetailsSection from './_components/ProductDetailsSection';

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
