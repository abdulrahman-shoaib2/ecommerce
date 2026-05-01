import { AllProductsResType, GetProductResType } from "@/types/routeApi/response/ProductResType";
import { routeAPI } from "./api";

export const productsService = {
  /**
   * 
   * @param queries? optional 
   * @returns `results` as number, `metadata` as object with type "IMetadata",  `data` as array with type "IProductDetails[]"
   */
  getProducts: async (queries?:{limit?: string, sort?: string, fields?: string, price?: string, page?: string, keyword?: string, brand?: string, category?: string}) => {
    const res = await routeAPI<AllProductsResType>({
      endpoint: `api/v1/products`, 
      // options: { method: "GET",  },
      queries
    });
    return res.data
  },

  /**
   * 
   * @param productId as string
   * @returns `data` as object with type "IProductDetails"
   */
  async getProductById(productId: string) {
    return await routeAPI<GetProductResType>({
      endpoint: `api/v1/products/${productId}`, 
      // options: {method: "GET"}
    });
  },

}