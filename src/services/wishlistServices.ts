import { apiClient } from "./api";

export const wishlistServices= {

  addToWishlist:async(productId:string) => await apiClient({endpoint:`/api/v1/wishlist`, options:{ method:'POST',body:JSON.stringify({productId}),withToken:true}}) ,
  removeFromWishlist:async(productId:string) => await apiClient({endpoint:`/api/v1/wishlist/${productId}
`, options:{ method:'DELETE',body:JSON.stringify({data:''}),withToken:true}}) ,
  getUserWithlist:async() => await apiClient({endpoint:`/api/v1/wishlist`, options:{ method:'GET',body:JSON.stringify({data:''}),withToken:true}}) ,
}

