import { IReqParams } from "@/interfaces/IReqParams";
import { IReqOptions } from "@/interfaces/IReqOptions";
import { getSession } from "next-auth/react";


export const routeAPI = async <T>({ endpoint, options = { method: 'GET' }, queries }: { endpoint: string, options?: IReqParams, queries?: Record<string, string> }): Promise<T> => {
  const root = process.env.NEXT_PUBLIC_BASE_URL;
  
  const session = await getSession();
  const token = session?.user.token

  let requestOptions: IReqOptions;
  if(options.Authorization ||options.token||options.contentType){
      requestOptions = { method: options.method || 'GET', headers:{}}

  }else{
    requestOptions= { method: options.method || 'GET'}
  }
  let queryString: string = '';

  if (JSON.stringify(queries) !== `{}` && queries) {
    queryString = new URLSearchParams(queries).toString();
  }

  if (options.Authorization) {
    requestOptions.headers!.Authorization = token
  }
  if (options.token && requestOptions.headers) {
    requestOptions.headers.token = token
  }
  if (options.contentType && requestOptions.headers) {
    requestOptions.headers["Content-Type"] = options.contentType
  }
  if (options.body) {
    requestOptions["body"] = options.body
  }

  try {
    return await fetch(`${root}/${endpoint}${queryString ? '?' + queryString : ''}`, requestOptions).then( (res) => {
      // if (!res.ok) throw new Error('routeAPI Error')
      // console.log(await res.json())
      return res.json()
  
    })

  } catch (e) {
    throw new Error("Internet Error");
  }
};
// :.JR2xVSN3pVYy.
// abdulrahman1shoaib@gmail.com