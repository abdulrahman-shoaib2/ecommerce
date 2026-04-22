import { apiClient } from "./api";

export const addresseServices= {
  addAddress:async(address:{name:string;details:string;phone:string;city:string}) => await apiClient({endpoint:`/api/v1/addresses`, options:{ method:'POST',body:JSON.stringify(address),withToken:true}}) ,
  removeAddress:async(addressId:string) => await apiClient({endpoint:`/api/v1/addresses/${addressId}`, options:{ method:'DELETE',body:JSON.stringify({data:''}),withToken:true}}) ,
  getAddress:async(addressId:string) => await apiClient({endpoint:`/api/v1/addresses/${addressId}`,options:{
    method:"GET",
    body:JSON.stringify({data:''}),
    withToken:true
  }}) ,
  getUserAddressES:async() => await apiClient({endpoint:`/api/v1/addresses`,options:{method:'GET',withToken:true}}) ,
}

