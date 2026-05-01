import { AllBrandsResType, GetBrandResType } from "@/types/routeApi/response/BrandsResType";
import { routeAPI } from "./api";

export const brandsServices= {
  /**
   * 
   * @returns `results` as number,  `metadata` as object with type "Metadata" , `data` as array with type "IBrand[]"
   */
  getAllBrands:async(queries?:{keywords?:string;limit?:string;}) => {
    const res = await routeAPI<AllBrandsResType>({endpoint:`api/v1/brands`, 
    // options:{ method:'GET'},
    queries})
    return res.data
  }
    
    ,

  /**
   * 
   * @param brandId as string
   * @returns data as object with type "IBrand"
   */
  getBrandById:async(brandId:string) => await routeAPI<GetBrandResType>({endpoint:`api/v1/brands/${brandId}`, 
    // options:{ method:'GET'}
  })
}
