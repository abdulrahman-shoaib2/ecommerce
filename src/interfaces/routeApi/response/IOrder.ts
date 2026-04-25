import { IAddressInfo } from "./IAddress";
import { IProduct } from "./IProduct";
import { IUser } from "./IUser";

// Individual order
export interface IOrder {
  _id: string;
  id: number; // duplicate numeric ID field
  user: IUser & {
    _id: string;
    phone: string;

  };
  shippingAddress: IAddressInfo;
  cartItems: IOrderCartItem[];
  taxPrice: number;
  shippingPrice: number;
  totalOrderPrice: number;
  paymentMethodType: string;
  isPaid: boolean;
  isDelivered: boolean;
  createdAt: string;
  updatedAt: string;
}

// Cart item inside order
export interface IOrderCartItem {
  _id: string;
  product: IProduct;
  count: number;
  price: number;
}

// // User info inside order
// export interface IOrderUser {
//   name: string;
//   email: string;
// }

export interface IPricing {
  cartPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalOrderPrice: number;
}
