import { IProduct } from "./IProduct";

// Cart data object
export interface ICart<T> {
  _id: string;
  cartOwner: string; // user ID
  products:ICartProduct<T>[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  totalCartPrice: number;
}

export interface ICartCleared {
  totalCartPrice: number
  products: string[]
}

export interface ICartProduct<T> {

  count: number;
  _id: string;
  price: number;
  product: T;

}