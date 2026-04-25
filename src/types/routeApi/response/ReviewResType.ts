import { IReview, IReviewer } from "@/interfaces/routeApi/response/IReview";
import { ListResponseType, ResponseType } from "./ResponseType";


// Full API response
export type CreateReviewResType = ResponseType<IReview<string>>

export type GetReviewsList = ListResponseType<IReview<IReviewer>> ;
export type GetReview = ResponseType<IReview<IReviewer>> ;
// export type AllReview = ListResponseType<IReview> ;

// !updata and delete response failed