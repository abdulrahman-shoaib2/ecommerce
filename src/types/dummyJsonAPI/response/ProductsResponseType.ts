import { ApiResponseType } from "./ApiResponseType";

export type ProductsResponseType<T> = ApiResponseType & {
  products: T[];
}

// carts , total , skip, limit, {} , []