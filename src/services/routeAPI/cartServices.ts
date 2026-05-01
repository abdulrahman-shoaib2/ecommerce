import { CartActionResType, ClearUserCart } from "@/types/routeApi/response/CartResType";
import { routeAPI } from "./api";


export const cartServices = {
  // AUTHORIZATION Bearer Token
  /**
   * 
   * @param data:{productId: string} 
   * @returns `status` as string, `message` as string, `numOfCartItems` as number, `cartId` as string, `data` as object with type "ICart"
   */
  addToCart: async (data:{productId: string}) => await routeAPI<CartActionResType>({ endpoint: `api/v2/cart`, options: { 
    method: 'POST',
    contentType:'application/json' , 
    token:true,
    body: JSON.stringify(data) 
  }}),

/**
 * @requires token in headers
 * @returns `status` as string, `message` as string, `numOfCartItems` as number, `cartId` as string, `data` as object with type "ICart"
 */
  getUserCart: async () => await routeAPI<CartActionResType>({ endpoint: `api/v2/cart`, 
  options: { 
    // method: 'GET',
    token:true,
  }}), 

  /**
   * 
   * @param data {count as string} 
   * @param productId as string
   * @returns `status` as string, `message` as string, `numOfCartItems` as number, `cartId` as string, `data` as object with type  "ICart"
   */
  updateQuantity: async (data:{count: number}, productId: string) => await routeAPI <CartActionResType>({
    endpoint: `api/v2/cart/${productId}`, options: { 
      method: 'PUT', 
      body: JSON.stringify(data), 
      token:true,
      contentType:'application/json',
    }}),

  /**
   * 
   * @param productId as string
   * @requires token in the headers
   * @returns `status` as string, `message` as string, `numOfCartItems` as number, `cartId` as string, `data` as object with type "ICart"
   */
  removeCartItem: async (productId: string) => await routeAPI<CartActionResType>({ endpoint: `api/v2/cart/${productId}`, options: { 
    method: 'DELETE', 
    token:true,
    // body: JSON.stringify({ data: '' })
  }}),

  /**
   * 
   * @requires token in the headers
   * @returns `status` as string, `message` as string, `numOfCartItems` as number, `cartId` as null, `data` as object with type "ICartCleared"
   */
  clearUserCart: async () => await routeAPI<ClearUserCart>({ endpoint: `api/v2/cart`, options: { 
    method: 'DELETE', 
    token:true,

    // body: JSON.stringify({ data: '' })
  } }),

/**
 * 
 * @param data {couponName: string}
 * @param productId as string
 * @requires token in the headers
 * @returns 
 */
  applyCouponToCart: async (data:{couponName: string}) => await routeAPI({
    endpoint: `api/v2/cart/applyCoupon`, options: { 
      method: 'PUT', 
      token:true,
      contentType:"application/json",
      body: JSON.stringify(data) 
  }}),
}


export const oldCartServices = {
  getUserCart: async () => await routeAPI({ endpoint: `api/v1/cart`, options: { method: 'POST'} }), // GET ??
  addToCart: async (productId: string) => await routeAPI({ endpoint: `api/v1/cart`, options: { method: 'POST', body: JSON.stringify({ productId }) } }),
  updateQuantity: async (count: number, productId: string) => await routeAPI({
    endpoint: `api/v1/cart/${productId}
`, options: { method: 'PUT', body: JSON.stringify({ count }) }
  }),
  removeCartItem: async (productId: string) => await routeAPI({ endpoint: `api/v1/cart/${productId}`, options: { method: 'DELETE', body: JSON.stringify({ data: '' })} }),
  clearUserCart: async () => await routeAPI({ endpoint: `api/v1/cart`, options: { method: 'DELETE', body: JSON.stringify({ data: '' })} }),


}