import { IProduct } from "@/interfaces/dummyjson/response/IProduct";
import { ProductsResponseType } from "./ProductsResponseType";

export type CategoriesResponseType = ProductsResponseType<IProduct> | {
  slug:string;
  name:string;
  url:string;
}|string[]