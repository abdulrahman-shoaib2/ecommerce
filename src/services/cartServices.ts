import { apiClient } from "./api";


export const cartServices = {

  addToCart: async (productId: string) => await apiClient({ endpoint: `/api/v2/cart`, options: { method: 'POST', body: JSON.stringify({ productId }) } }),

  getUserCart: async () => await apiClient({ endpoint: `/api/v2/cart`, options: { method: 'GET', withToken: true } }), // GET ??

  updateQuantity: async (count: number, productId: string) => await apiClient({
    endpoint: `/api/v2/cart/${productId}`, options: { method: 'PUT', body: JSON.stringify({ count }) }
  }),

  removeCartItem: async (productId: string) => await apiClient({ endpoint: `/api/v2/cart/${productId}`, options: { method: 'DELETE', body: JSON.stringify({ data: '' }), withToken: true } }),
  clearUserCart: async () => await apiClient({ endpoint: `/api/v2/cart`, options: { method: 'DELETE', body: JSON.stringify({ data: '' }), withToken: true } }),

  applyCouponToCart: async (couponName: string, productId: string) => await apiClient({
    endpoint: `/api/v2/cart/applyCoupon`, options: { method: 'PUT', body: JSON.stringify({ couponName }) }
  }),
}


export const oldCartServices = {
  getUserCart: async () => await apiClient({ endpoint: `/api/v1/cart`, options: { method: 'POST', withToken: true } }), // GET ??
  addToCart: async (productId: string) => await apiClient({ endpoint: `/api/v1/cart`, options: { method: 'POST', body: JSON.stringify({ productId }) } }),
  updateQuantity: async (count: number, productId: string) => await apiClient({
    endpoint: `/api/v1/cart/${productId}
`, options: { method: 'PUT', body: JSON.stringify({ count }) }
  }),
  removeCartItem: async (productId: string) => await apiClient({ endpoint: `/api/v1/cart/${productId}`, options: { method: 'DELETE', body: JSON.stringify({ data: '' }), withToken: true } }),
  clearUserCart: async () => await apiClient({ endpoint: `/api/v1/cart`, options: { method: 'DELETE', body: JSON.stringify({ data: '' }), withToken: true } }),


}