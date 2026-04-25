import { IProductDetails } from '@/interfaces/routeApi/response/IProduct';
import { ListResponseType, ResponseType } from "./ResponseType";


// Full API response
export type GetProductResType =  ResponseType<IProductDetails>;


export type AllProductsResType =  ListResponseType<IProductDetails> ;