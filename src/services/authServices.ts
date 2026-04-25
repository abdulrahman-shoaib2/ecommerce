import { AllUsersResType, ResetPasswordResType, ResStatusType, UpdateUserDataResType, UserResType, VerfiyTokenResType, VerifyCodeResType } from '@/types/routeApi/response/AuthResType';
import {routeAPI} from './api'

export const authServices ={
  /**
   * 
   * @param data {email as string, password as string} 
   * @returns `message` as string , user as object with "IUser & {role}" , `token` as string
   */
  signIn:async (data:{email:string,password:string})=> await routeAPI<UserResType>({endpoint:'api/v1/auth/signin',options:{
    method:'POST',
    body:JSON.stringify(data)
  }}),

  /**
   * 
   * @param data {name:string;email:string,password:string;rePassword:string;phone:string}
   * @returns `message` as string , user as object with "IUser & {role}" , `token` as string
   */
  Signup:async (data:{name:string;email:string,password:string;rePassword:string;phone:string})=> await routeAPI<UserResType>({endpoint:'api/v1/auth/signup',options:{
    method:'POST',
    body:JSON.stringify(data)
  }}),
  
  /**
   * 
   * @param data {email as string} 
   * @returns `statusMsg` as string, `message` as string
   */
  forgotPassword:async (data:{email:string})=> await routeAPI<ResStatusType>({endpoint:'api/v1/auth/forgotPasswords',options:{
    method:'POST',
    body:JSON.stringify(data)
  }}),

  /**
   * 
   * @param data {resetCode as string}
   * @returns `status` as string
   */
  verifyResetCode:async (data:{resetCode:string})=> await routeAPI<VerifyCodeResType>({endpoint:'api/v1/auth/verifyResetCode',options:{
    method:'POST',
    body:JSON.stringify(data)
  }}),

  /**
   * 
   * @param data {currentPassword:string;password:string,rePassword:string;}
   * @requires `token` in the headers
   * @returns `message` as string , user as object with "IUser & {role}" , `token` as string
   */
  updateUserPassword:async (data:{currentPassword:string;password:string,rePassword:string;})=> await routeAPI<UserResType>({endpoint:'api/v1/users/changeMyPassword',options:{
    method:'PUT',
    body:JSON.stringify(data)
  }}),

  /**
   * 
   * @param data {email:string;newPassword:string;}
   * @returns token as string
   */
  resetPassword:async (data:{email:string;newPassword:string;})=> await routeAPI<ResetPasswordResType>({endpoint:'api/v1/auth/resetPassword',options:{
    method:'PUT',
    body:JSON.stringify(data)
  }}),

  /**
   * 
   * @param data {name:string;email:string,phone:string;}
   * @requires `token` in the headers
   * @returns `message` as string and `user` as object with type 'IUser & {role}'
   */
  UpdateUserData:async (data:{name:string;email:string,phone:string;})=> await routeAPI<UpdateUserDataResType>({endpoint:'api/v1/users/updateMe/',options:{
    method:'PUT',
    body:JSON.stringify(data)
  }}),

  /**
   * 
   * @param queries {limit:string, keywords:string}
   * @returns `totalUsers` as string,`metadata` as object with type  "IMetadata" and `users` as array with type "IUserAcc[]"
   */
  // ?${limit?'?limit='+limit+'&':''}${keyword?'keyword='+keyword:''
  getAllUsers:async (queries?:{limit?:string, keywords?:string})=> await routeAPI<AllUsersResType>({endpoint:`api/v1/users}`,
    // options:{ method:'GET', body:JSON.stringify({data:''}),},
  queries
}),

  /**
   * @requires `token` in the headers
   * @returns `message` as string,`decoded` as object that contain {`id`,`name`,`role`,`iat`,`exp`}
   */
  verifyToken:async ()=> await routeAPI<VerfiyTokenResType>({endpoint:'api/v1/auth/verifyToken', options:{token:true}}),
  // method:'GET',


}