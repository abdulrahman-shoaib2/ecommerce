import { IReqParams } from "@/interfaces/IReqParams";
import { IReqOptions } from "@/interfaces/IReqOptions";




// const queryString = new URLSearchParams(params).toString();
// const url = `${root}${endpoint}?${queryString}`;


export const dummyAPI = async <T>({ endpoint, options = { method: 'GET' }, queries }: { endpoint: string, options?: IReqParams, queries?: Record<string, string> }): Promise<T> => {
  //  Promise<IProductsApiResponse>
  const root = process.env.NEXT_PUBLIC_DUMMYJSON_API;
  const token: string = '';
  const requestOptions: IReqOptions = { method: options.method || 'GET' }
  let queryString: string = '';

  if (JSON.stringify(queries) !== `{}` && queries) {
    queryString = new URLSearchParams(queries).toString();
  }

  if (options.Authorization) {
    requestOptions.headers!.Authorization = token
  }
  if (options.token) {
    requestOptions.headers!.token = token
  }
  if (options.contentType) {
    requestOptions.headers!["Content-Type"] = options.contentType
  }
  if (options.body) {
    requestOptions.body = options.body
  }

  try {
    return await fetch(`${root}/${endpoint}${queryString ? '?' + queryString : ''}`, requestOptions).then((res) => {
      if (!res.ok) throw new Error('dummyAPI Error')
      return res.json()

    }).then((data) => {
      console.log(data)
      return data
    });

  } catch (e) {

    throw new Error("Internet Error");
  }
};