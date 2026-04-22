import { apiClient } from "./api";

export const ordersServices= {
  createCashCart2: async(cartId:string,shippingAddress:{ details:string;phone:string;city:string;postalCode:string}) => await apiClient({endpoint:`api/v2/orders/${cartId}`, options:{ method:'POST',body:JSON.stringify({
    shippingAddress
  })}}),
  createCashCart: async(cartId:string,shippingAddress:{ details:string;phone:string;city:string;}) => await apiClient({endpoint:`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`, options:{ method:'POST',body:JSON.stringify({
    shippingAddress
  })}}),
  checkoutSession: async(cartId:string,shippingAddress:{ details:string;phone:string;city:string;}) => await apiClient({endpoint:`/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000
`, options:{ method:'POST',body:JSON.stringify({
    shippingAddress
  })}}),

  getAllOrders:async() => await apiClient({endpoint:'/api/v1/orders/'}),
  getUserOrders:async(userId:string) => await apiClient({endpoint:`/api/v1/orders/user/${userId}`}),

}



