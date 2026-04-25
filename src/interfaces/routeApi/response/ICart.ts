import { IProduct } from "./IProduct";

// Cart data object
export interface ICart {
  _id: string;
  cartOwner: string; // user ID
  products: IProduct[] | string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  totalCartPrice: number;
}

export interface ICartCleared {
  totalCartPrice: number
  products: string[]
}

