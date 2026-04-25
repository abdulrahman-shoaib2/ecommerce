import { IUser } from "@/interfaces/routeApi/response/IUser";
import { ResponseType } from "./ResponseType";
import { IMetadata } from '@/interfaces/routeApi/response/IMetadata';



// Full login/auth response
export type AuthResType = {
  message: string;
}

// Full login/auth response
export type UserResType = AuthResType & {
  user: IUser&{
    role: string;
  };
  token: string;
}

/*
UpdateUserPassword
{
    "message": "success",
    "user": {
        "name": "Ahmed Abd Al-Muti",
        "email": "ahmedmuttii401434@gmail.com",
        "role": "user"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZWIxNjkzMmI3Nzg3MDAxMmE5ZDdlMiIsIm5hbWUiOiJBaG1lZCBBYmQgQWwtTXV0aSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzc3MDE0NDIwLCJleHAiOjE3ODQ3OTA0MjB9.F0PhP-tSGwfMcIJ9t4jy4LG6-miPTJxx5h28wH4c780"
}
*/

export type ResStatusType = AuthResType & {
  statusMsg: string;
}

export type VerifyCodeResType = {
  status: string
}

export type UpdateUserDataResType = AuthResType & {
  user: IUser &{
    role:string
  }
}
/*
{
    "message": "success",
    "user": {
        "name": "Ahmed Abd Al-Muti",
        "email": "abdulrahman1shoaib@gmail.com",
        "role": "user"
    }
}
*/

export type ResetPasswordResType = {
  token: string
}

interface IUserAcc extends IUser {
  createdAt:string;
  _id:string;
}

export type AllUsersResType =  {
  totalUsers: number;
  metadata: IMetadata;
  users: IUserAcc[];
};

export type VerfiyTokenResType = AuthResType & {
  decoded: {
    id: string,
    name: string,
    role: string,
    iat: number,
    exp: number
  }
}