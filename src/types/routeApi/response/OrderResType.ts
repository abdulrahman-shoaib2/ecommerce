import { IOrder, IPricing } from "@/interfaces/routeApi/response/IOrder";
import { ListResponseType, ResponseType } from "./ResponseType";
import { IUser } from "@/interfaces/routeApi/response/IUser";


// Paginated orders response
export type AllOrder = ListResponseType<IOrder>;

export type GetUserOrders = ResponseType<IOrder[]>

export type CreateCashOrder = ResponseType<IOrder> & {
  status: string;
  message: string;
  user: IUser & {
    id: string;
  };
  pricing: IPricing;
}

export type CheckoutSession = {
  status: string;
  session: {
    url: string;
    success_url: string;
    cancel_url: string;
  }

}


/*
checkout session
{
    "status": "success",
    "session": {
        "url": "https://checkout.stripe.com/c/pay/cs_test_a1nCsUrbvlfr0hPEuH3qMIv8AnyrgCyMdbSwc93Wy3DAezCvTKlH0l8ioW#fidnandhYHdWcXxpYCc%2FJ2FgY2RwaXEnKSdicGRmZGhqaWBTZHdsZGtxJz8nZmprcXdqaScpJ2R1bE5gfCc%2FJ3VuWnFgdnFaMDRIdWJiXUA1VjJTak5faFVVb0BKZkFQSWlrYUtWcFRAajZQV25QSEhcfH1oSGNqcEZnU3FndEo1VW1dbFxJMnxDPHZpZmRQQGkxckJdVEdOQjFnMFJmaEQ1NTFgdUoxSlBXJyknY3dqaFZgd3Ngdyc%2FcXdwYCknZ2RmbmJ3anBrYUZqaWp3Jz8nJmNjY2NjYycpJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl",
        "success_url": "http://localhost:3000/allorders",
        "cancel_url": "http://localhost:3000/cart"
    }
}

*/

