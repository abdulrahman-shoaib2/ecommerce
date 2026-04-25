import { ISubCategory } from "@/interfaces/routeApi/response/ISubCategory";
import { ListResponseType, ResponseType } from "./ResponseType";

export type GetSubCateResType =  ResponseType<ISubCategory>;

export type AllSubCatsResType = ListResponseType<ISubCategory>;