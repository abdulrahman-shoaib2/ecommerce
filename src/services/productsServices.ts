import { apiClient } from "./api";

export const productsService = {
  getProducts: async (limit?: number, sort?: string, fields?: string, price?: number, page?: number, keyword?: string, brand?: string, category?: string) => {
    let queries = `?${limit?"limit="+limit+'&':''}${sort?"sort="+sort+'&':''}${fields?"fields="+fields+'&':''}${price?"price="+price+'&':''}${page?"page="+page+'&':''}${keyword?"keyword="+keyword+'&':''}${brand?"brand="+brand+'&':''}${category?"category="+category+'&':''}`;

    if(queries == '?') queries = '';
    
    return await apiClient({
      endpoint: `/api/v1/products${queries}`, options: {
        method: "GET",
        withToken: "noToken"
      }
    })
  },

  async getProductById(productId: string) {
    return await apiClient({
      endpoint: `/api/v1/products/${productId}`, options: {
        method: "GET",
        withToken: "noToken"
      }
    });
  },

}