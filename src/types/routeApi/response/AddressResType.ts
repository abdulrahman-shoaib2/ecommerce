import { IAddress } from "@/interfaces/routeApi/response/IAddress";
import { ListResOnlyType, ResponseType } from "./ResponseType";

export type AddressResType<T> = ResponseType<T> & {
  status: string;
};

export type GetAddress = AddressResType<IAddress>;
/*
  {
      "status": "success",
      "data": {
          "_id": "69eb1bae2b77870012a9e291",
          "name": "Home",
          "details": "Home details",
          "phone": "01010700700",
          "city": "Gizaa"
      }
  }
*/

export type ToggleAddress = AddressResType<IAddress[]> & {
  message: string;
};
/*
  {
    "status": "success",
    "message": "Address added successfully",
    "data": [
      {
        "_id": "69eb1b492b77870012a9e27a",
        "name": "Home",
        "details": "Home details",
        "phone": "01010700700",
        "city": "Gizaa"
          }
      ]
  }
*/

export type GetAddressesList = AddressResType<ListResOnlyType<IAddress>>;
/*
  {
    "results": 1,
    "status": "success",
    "data": [
        {
          "_id": "69eb1b492b77870012a9e27a",
          "name": "Home",
          "details": "Home details",
          "phone": "01010700700",
          "city": "Gizaa"
          }
      ]
  }
*/

