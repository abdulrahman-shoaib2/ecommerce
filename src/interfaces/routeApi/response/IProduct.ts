import { IBrand } from "./IBrand";
import { ICategory } from "./ICategory";
import { ISubCategory } from "./ISubCategory";

export interface IProduct {
  _id: string;
  id: string; // duplicate ID field
  title: string;
  slug: string;
  quantity: number;
  imageCover: string;
  category: ICategory;
  subcategory: ISubCategory[];
  brand: IBrand;
  ratingsAverage: number;
}

// Individual product type
export interface IProductDetails extends IProduct {
  description: string;
  price: number;
  sold: number;
  images: string[];
  ratingsQuantity: number;
  priceAfterDiscount:number;
  createdAt: string;
  updatedAt: string;
  "__v"?:number;
}

