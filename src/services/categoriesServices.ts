import { apiClient } from "./api";

export const categoriesService = {
  getCategories: async () => await apiClient({ endpoint: '/api/v1/categories', options: { method: "GET", withToken: "noToken" } }),
  getCategoryById: async (categoryId: string) => await apiClient({ endpoint: `/api/v1/categories/${categoryId}`, options: { method: "GET", withToken: "noToken" } })
}





// data types 
// components
// adjust api

// cart redux
// signin
// sign up
