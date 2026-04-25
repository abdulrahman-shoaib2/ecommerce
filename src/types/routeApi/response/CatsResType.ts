import { ICategory } from "@/interfaces/routeApi/response/ICategory";
import { ResponseType, ListResponseType } from "./ResponseType";



// Full API response
export type GetCatResType = ResponseType<ICategory>;
/*
{
  "data": {
      "_id": "6439d3e067d9aa4ca97064c3",
      "name": "Home",
      "slug": "home",
      "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511392672.png",
      "createdAt": "2023-04-14T22:29:52.763Z",
      "updatedAt": "2023-04-14T22:29:52.763Z",
      "__v": 0
    }
}

*/

export type AllCatsResType =  ListResponseType<ICategory>;
/*
    "results": 9,
    "metadata": {
        "currentPage": 1,
        "numberOfPages": 1,
        "limit": 40
    },
    "data": [
        {
            "_id": "6407f198b575d3b90bf95794",
            "name": "Kitchen & Dining",
            "slug": "kitchen-and-dining",
            "category": "6439d3e067d9aa4ca97064c3",
            "createdAt": "2023-03-08T02:23:20.140Z",
            "updatedAt": "2023-04-14T23:14:14.116Z"
        },

     ]
}       
*/