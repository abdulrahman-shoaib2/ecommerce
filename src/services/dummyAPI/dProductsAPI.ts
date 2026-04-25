import { ProductsResponseType } from "@/types/dummyJsonAPI/response/ProductsResponseType";
import { IProduct } from "@/interfaces/dummyjson/response/IProduct";
import { dummyAPI } from "./dummAPI";

export const dProductsAPI = {
  getAllProducts:async ()=> await dummyAPI<ProductsResponseType<IProduct>>({endpoint:'products',}),
  getAllCategories:async ()=> await dummyAPI({endpoint:'products/categories',})


}
