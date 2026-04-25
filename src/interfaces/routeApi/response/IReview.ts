// Review data type
export interface IReview<T> {
  _id: string;
  review: string;
  rating: number;
  product: string; // product ID
  user: T;    // user ID
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface IReviewer{
  _id:string;
  name:string
}