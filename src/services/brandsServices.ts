import { apiClient } from "./api";

export const brandsServices= {
  getAllBrands:async() => await apiClient({endpoint:`/api/v1/brands`, options:{ method:'GET',withToken:'noToken'}}),
  getBrandById:async(brandId:string) => await apiClient({endpoint:`/api/v1/brands/${brandId}`, options:{ method:'GET',withToken:'noToken'}})
}
