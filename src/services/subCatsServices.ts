import { AllSubCatsResType, GetSubCateResType } from "@/types/routeApi/response/SubCatsResType";
import { routeAPI } from "./api";

export const subCatsServices = {
  /**
   * 
   * @param queries {limit?: string} 
   * @returns `results` as number, `metadata` as object with type "IMetadata",  `data` as array with type "ISubCategory[]"
   */
  getAllSubCategories: async (queries:{limit?: string}) => await routeAPI<AllSubCatsResType>({ 
    endpoint: `api/v1/subcategories`, 
    queries
    // options: { method: 'GET'} 
  }),

  /**
   * 
   * @param subcategoriesId as string
   * @returns `data` as object with type "ISubCategory"
   */
  getSubCategoriesById: async (subcategoriesId: string) => await routeAPI<GetSubCateResType>({ 
    endpoint: `api/v1/subcategories/${subcategoriesId}`, 
    // options: { method: 'GET'} 
  }),

  /**
   * 
   * @param categoriesId as string
   * @returns `results` as number, `metadata` as object with type "IMetadata",  `data` as array with type "ISubCategory[]"
   */
  getSubCatsByCategory: async (categoriesId: string) => await routeAPI<AllSubCatsResType>({ 
    endpoint: `api/v1/subcategories/${categoriesId}`, 
    // options: { method: 'GET'} 
  }),
}