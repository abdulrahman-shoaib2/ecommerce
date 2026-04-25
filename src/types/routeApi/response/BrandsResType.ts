import { IBrand } from '@/interfaces/routeApi/response/IBrand';
import { ListResponseType, ResponseType } from './ResponseType';

export type GetBrandResType = ResponseType<IBrand>;

/*
{
    "data": {
        "_id": "64089ceb24b25627a2531596",
        "name": "Reebok",
        "slug": "reebok",
        "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678286058845.png",
        "createdAt": "2023-03-08T14:34:19.466Z",
        "updatedAt": "2023-03-08T14:34:19.466Z",
        "__v": 0
    }
}

*/

export type AllBrandsResType = ListResponseType<IBrand>;
/*

{
    "results": 54,
    "metadata": {
        "currentPage": 1,
        "numberOfPages": 2,
        "limit": 40,
        "nextPage": 2
    },
    "data": [
        {
            "_id": "64089fe824b25627a25315d1",
            "name": "Canon",
            "slug": "canon",
            "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678286824747.png",
            "createdAt": "2023-03-08T14:47:04.912Z",
            "updatedAt": "2023-03-08T14:47:04.912Z"
        },
    ]
}

*/
