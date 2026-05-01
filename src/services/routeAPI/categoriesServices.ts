import { AllCatsResType, GetCatResType } from "@/types/routeApi/response/CatsResType";
import { routeAPI } from "./api";

export const categoriesService = {
  /**
   * 
   * @returns `results` as number, `metadata` as object with type "IMetadata",  `data` as array with type "ICategory[]"
  */
  allCategories: async (queries?: { limit?: string; keywords?: string; page?: string }) => {
    const response = await routeAPI<AllCatsResType>({
    endpoint: 'api/v1/categories',
    queries
    // options: { method: "GET"} 
  })
  return response.data
},

  /**
   * 
   * @param categoryId as string
   * @returns `data` as object with type "ICategory"
  */
  getCategoryById: async (categoryId: string) => await routeAPI<GetCatResType>({
    endpoint: `api/v1/categories/${categoryId}`,
    // options: { method: "GET"} 
  })
}





