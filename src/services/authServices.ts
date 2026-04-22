import {apiClient} from './api'

export const authServices ={
  signIn:async (email:string,password:string)=> await apiClient({endpoint:'/api/v1/signin',options:{
    method:'POST',
    body:JSON.stringify({
      email,
      password,
    })
  }}),

  Signup:async (data:{name:string;email:string,password:string;rePassword:string;phone:string})=> await apiClient({endpoint:'/api/v1/auth/signup',options:{
    method:'POST',
    body:JSON.stringify(data)
  }}),
  
  forgotPassword:async (email:string)=> await apiClient({endpoint:'/api/v1/auth/forgotPasswords',options:{
    method:'POST',
    body:JSON.stringify({
      email,
    })
  }}),

  verifyResetCode:async (resetCode:string)=> await apiClient({endpoint:'/api/v1/auth/verifyResetCode',options:{
    method:'POST',
    body:JSON.stringify({
      resetCode,
    })
  }}),

  updateUserPassword:async (data:{currentPassword:string;password:string,rePassword:string;})=> await apiClient({endpoint:'/api/v1/users/changeMyPassword',options:{
    method:'PUT',
    withToken:true,
    body:JSON.stringify(data)
  }}),

  resetPassword:async (data:{email:string;newPassword:string;})=> await apiClient({endpoint:'/api/v1/auth/resetPassword',options:{
    method:'PUT',
    withToken:`noToken`,
    body:JSON.stringify(data)
  }}),

  UpdateUserData:async (data:{name:string;email:string,phone:string;})=> await apiClient({endpoint:'/api/v1/users/updateMe/',options:{
    method:'PUT',
    withToken:true,
    body:JSON.stringify(data)
  }}),

  getAllUsers:async (limit?:string, keyword?:string)=> await apiClient({endpoint:`/api/v1/users?${limit?'?limit='+limit+'&':''}${keyword?'keyword='+keyword:''}`,options:{
    method:'GET',
    body:JSON.stringify({data:''})
  }}),

  verifyToken:async ()=> await apiClient({endpoint:'/api/v1/auth/verifyToken',options:{
    method:'GET',
    withToken:true,
  }}),


}