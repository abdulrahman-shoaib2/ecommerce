import { IProductDetails, IWishlistProduct } from "@/interfaces/routeApi/response/IProduct";
import { ResponseType } from "./ResponseType";

export type WishlistResType<T> = ResponseType<T[]>&{
  status:string;
}

export type ToggleWishlist = WishlistResType<string> & {
  message:string;
}
/*

{
    "status": "success",
    "message": "Product added successfully to your wishlist",
    "data": [
        "6428ebc6dc1175abc65ca0b9"
    ]
}
*/

export type addToWishlistType = WishlistResType<IWishlistProduct>& {
  count:number;
}

export type GetWishlist = WishlistResType<IProductDetails> & {
  count:number;
}


