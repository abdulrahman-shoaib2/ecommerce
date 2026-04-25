export interface IReqOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?:{
    "Content-Type"?:string,
    Authorization?:string;
    token?:string;
  };
  body?: any;

}