import { apiClient } from "./api";

export const reviewsServices = {
  getAllReviews: async () => await apiClient({ endpoint: `/api/v1/reviews` }), //(nested)

  getReviewById: async (reviewId: string) => await apiClient({ endpoint: `/api/v1/reviews/${reviewId}` }), 

  getProductReviews: async (productId: string) => await apiClient({ endpoint: `/api/v1/products/${productId}/reviews` }), //(nested)

  createRiview: async (productId: string, review: string, rating: number) => await apiClient({
    endpoint: `api/v1/products/${productId}/reviews`, options: {
      method: 'POST',
      body: JSON.stringify({
        review,
        rating
      })
    }
  }),

  updateReview: async (reviewId:string,review: string, rating: number) => await apiClient({
    endpoint: `api/v1/products/reviews/${reviewId}`, options: {
      method: 'PUT',
      body: JSON.stringify({
        review,
        rating
      })
    }
  }),

  deleteReview: async (reviewId: string) => await apiClient({
    endpoint: `api/v1/reviews/${reviewId}`, options: {
      method: 'DELETE',
    }
  }),


}