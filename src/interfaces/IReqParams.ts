export interface IReqParams {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  contentType?:string,
  Authorization?:boolean;
  token?:boolean;
  body?: any;
};