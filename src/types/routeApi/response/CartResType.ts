import { ICart, ICartCleared } from "@/interfaces/routeApi/response/ICart";
import { ResponseType } from "./ResponseType";



// Full response after adding a product

export type CartResType<T> = ResponseType<T> & {
  status: string;
  message: string;
  numOfCartItems: number;
  cartId: string | null;
}

export type CartActionResType = CartResType<ICart>;


/*

{
    "status": "success",
    "message": "Product added successfully to your cart",
    "numOfCartItems": 1,
    "cartId": "69eb1d212b77870012a9e2b6",
    "data": {
        "_id": "69eb1d212b77870012a9e2b6",
        "cartOwner": "69eb16932b77870012a9d7e2",
        "products": [
            {
                "count": 1,
                "_id": "69eb1d212b77870012a9e2b7",
                "product": {
                    "subcategory": [
                        {
                            "_id": "6407f1bcb575d3b90bf95797",
                            "name": "Women's Clothing",
                            "slug": "women's-clothing",
                            "category": "6439d58a0049ad0b52b9003f"
                        }
                    ],
                    "_id": "6428ebc6dc1175abc65ca0b9",
                    "title": "Woman Shawl",
                    "slug": "woman-shawl",
                    "quantity": 220,
                    "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1680403397402-cover.jpeg",
                    "category": {
                        "_id": "6439d58a0049ad0b52b9003f",
                        "name": "Women's Fashion",
                        "slug": "women's-fashion",
                        "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511818071.jpeg"
                    },
                    "brand": {
                        "_id": "64089bbe24b25627a253158b",
                        "name": "DeFacto",
                        "slug": "defacto",
                        "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678285758109.png"
                    },
                    "ratingsAverage": 3.7,
                    "id": "6428ebc6dc1175abc65ca0b9"
                },
                "price": 149
            }
        ],
        "createdAt": "2026-04-24T07:34:57.342Z",
        "updatedAt": "2026-04-24T07:34:57.380Z",
        "__v": 0,
        "totalCartPrice": 149
    }
}

*/

export type ClearUserCart = CartResType<ICartCleared>


/*
{
    "status": "success",
    "message": "Cart cleared",
    "numOfCartItems": 0,
    "cartId": null,
    "data": {
        "products": [],
        "totalCartPrice": 0
    }
}
*/

// apply coupon to cart response failed