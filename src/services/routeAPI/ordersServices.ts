import { AllOrder, CheckoutSession, CreateCashOrder, GetUserOrders } from "@/types/routeApi/response/OrderResType";
import { routeAPI } from "./api";

export const ordersServices = {

  /**
   * 
   * @param cartId as string
   * @param data  {shippingAddress: { details: string; phone: string; city: string;postalCode:string; }}
   * @requires `token` and `content-type` in the headers
   * @returns `status` as string, `message` as string, `user` as object with type IUser & {_id: string; phone: string;};, `pricing` as object with type "IPricing", `data` as object with type "IOrder"
   */
  createCashCart: async (cartId: string, data:{shippingAddress: { details: string; phone: string; city: string;postalCode:string; }}) => await routeAPI<CreateCashOrder>({
    endpoint: `api/v2/orders/${cartId}`, options: {
      method: 'POST', 
      body: JSON.stringify(data),
      token:true,
      contentType:'application/json',
    }
  }),
  
  oldCreateCashCart: async (cartId: string, data:{shippingAddress: { details: string; phone: string; city: string; }}) => await routeAPI({
    endpoint: `api/v1/orders/${cartId}`, options: {
      method: 'POST',
      token:true,
      body: JSON.stringify(data)
    }
  }),

  /**
   * 
   * @param cartId as string
   * @param data {shippingAddress: { details: string; phone: string; city: string; }}
   * @default queries {url: `process.env.NEXT_PUBLIC_REDIRECT_URL`??'http://localhost:3000'}
   * @returns status as string, session as object with type {url as string, success_url as string, cancel_url as string} 
   */
  checkoutSession: async (cartId: string, data:{shippingAddress: { details: string; phone: string; city: string; }}) => await routeAPI<CheckoutSession>({
    endpoint: `api/v1/orders/checkout-session/${cartId}
`, options: {
      method: 'POST', body: JSON.stringify(data)
    },
    queries:{url:process.env.NEXT_PUBLIC_REDIRECT_URL??'http://localhost:3000'}
  }),

  /**
   * 
   * @returns `results` as number, `metadata` as object with type "IMetadata",  `data` as array with type "IOrder[]"
   */
  getAllOrders: async () => await routeAPI<AllOrder>({ endpoint: 'api/v1/orders/' }),

  /**
   * 
   * @param userId as string
   * @returns `data` as array with type "ICategory[]"
   */
  getUserOrders: async (userId: string) => await routeAPI<GetUserOrders>({ endpoint: `api/v1/orders/user/${userId}` }),

}



