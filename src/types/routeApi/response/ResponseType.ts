import { IMetadata } from "@/interfaces/routeApi/response/IMetadata";

// Optional: a type alias (if you prefer types over interfaces)
export type ResponseType<T> = {
  data: T;
};
/*
    "data": T
}       
*/

export type ListResponseType<T> = ResponseType<T[]> & {
  results:number;
  metadata: IMetadata;
};
/*
    "results": 9,
    "metadata": {
        "currentPage": 1,
        "numberOfPages": 1,
        "limit": 40
    },
    "data": []
}       
*/

export type ListResOnlyType<T> = ResponseType<T[]> & {
  results:number;
};
/*
    "results": 9,
    "data": []
}       
*/



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