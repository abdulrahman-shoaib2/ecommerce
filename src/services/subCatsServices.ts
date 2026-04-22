import { apiClient } from "./api";

export const subCatsServices = {
  getAllSubCategories: async (limit?: string) => await apiClient({ endpoint: `/api/v1/subcategories${limit ? `?limit=${limit}` : ''}`, options: { method: 'GET', withToken: 'noToken' } }),
  getSubCategoriesById: async (subcategoriesId: string) => await apiClient({ endpoint: `/api/v1/subcategories/${subcategoriesId}`, options: { method: 'GET', withToken: 'noToken' } }),
  getSubCatsByCategory: async (categoriesId: string) => await apiClient({ endpoint: `/api/v1/subcategories/${categoriesId}`, options: { method: 'GET', withToken: 'noToken' } }),
}