import { GetWishlist, ToggleWishlist } from "@/types/routeApi/response/WishlistResType";
import { routeAPI } from "./api";

export const wishlistServices = {

  /**
   * 
   * @param productId as string
   * @requires `token` in the headers
   * @returns `status` as string, `message` as string, `data` as array with the type "string[]"
   */
  addToWishlist: async (productId: string) => await routeAPI<ToggleWishlist>({ 
    endpoint: `api/v1/wishlist`, 
    options: { 
      method: 'POST', 
      body: JSON.stringify({ productId }), 
      token:true 
    } 
  }),

  /**
   * 
   * @param productId 
   * @requires `token` in the headers
   * @returns `status` as string, `message` as string, `data` as array with the type "string[]"
   */
  removeFromWishlist: async (productId: string) => await routeAPI<ToggleWishlist>({
    endpoint: `api/v1/wishlist/${productId}
`, 
  options: { 
    method: 'DELETE', 
    token:true     
    // body: JSON.stringify({ data: '' }) 
  }
  }),

  /**
   * @requires `token` in the headers
   * @returns `status` as string, `count` as number, data as array with the type "IProductDetails[]"
   */
  getUserWithlist: async () => await routeAPI<GetWishlist>({ 
    endpoint: `api/v1/wishlist`, 
    options: { 
      // method: 'GET', 
      // body: JSON.stringify({ data: '' }),
      token:true,
    } 
  }),
}

