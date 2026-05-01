import { CreateReviewResType, GetReview, GetReviewsList } from "@/types/routeApi/response/ReviewResType";
import { routeAPI } from "./api";

export const reviewsServices = {
  /**
   * 
   * @returns `results` as number, `metadata` as object with type "IMetadata",  `data` as array with type "IReview<IReviewer>[]"
   */
  getAllReviews: async () => await routeAPI<GetReviewsList>({ endpoint: `api/v1/reviews` }), //(nested)

  /**
   * 
   * @param reviewId as string 
   * @returns `data` as object with the type "IReview<IReviewer>"
   */
  getReviewById: async (reviewId: string) => await routeAPI<GetReview>({ endpoint: `api/v1/reviews/${reviewId}` }), 

  /**
   * 
   * @param productId as string
   * @returns `results` as number, `metadata` as object with type "IMetadata",  `data` as array with type "IReview<IReviewer>[]"
   */
  getProductReviews: async (productId: string) => await routeAPI<GetReviewsList>({ endpoint: `api/v1/products/${productId}/reviews` }), //(nested)

  /**
   * 
   * @param productId as string
   * @param data {review: string, rating: number}
   * @requires `token` and `Content-Type` in the headers
   * @returns `data` as object with the type "<IReview<string>"
   */
  createRiview: async (productId: string, data:{review: string, rating: number}) => await routeAPI<CreateReviewResType>({
    endpoint: `api/v1/products/${productId}/reviews`, options: {
      method: 'POST',
      token:true,
      contentType:'application/json',
      body: JSON.stringify(data)
    }
  }),

  //! ??????????????????????
  updateReview: async (reviewId:string,review: string, rating: number) => await routeAPI({
    endpoint: `api/v1/products/reviews/${reviewId}`, options: {
      method: 'PUT',
      body: JSON.stringify({
        review,
        rating
      })
    }
  }),

  deleteReview: async (reviewId: string) => await routeAPI({
    endpoint: `api/v1/reviews/${reviewId}`, options: {
      method: 'DELETE',
    }
  }),


}