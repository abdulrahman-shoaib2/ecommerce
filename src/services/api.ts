import { ApiClientParams } from "@/types/api";
import { getSession } from "next-auth/react";



export const apiClient = async ({endpoint, options={method: 'GET', withToken:false}}:ApiClientParams) => {
  const session = await getSession();
  const token = session?.user.token;
  
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  }
  
  if(options.method !== "GET" && options.withToken != true){
      options.headers={
        ...headers,
        ...options.headers,
      }
  }
  if(options.withToken === true){
    options.headers={
      token
    }
  }
  
  try{
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      ...options
    });

    if (!response.ok) {
      throw new Error("API Error");
    }
    const {data} = await response.json()
    return data ;
  }catch(e){
    
    throw new Error("Sever Error");
  }


};