export type ApiClientParams = {
  endpoint: string;
  options?: {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    headers?: {
      'Content-Type'?: string;
      Authorization?: string;
      token?:string
    };
    body?: any;
    withToken?:boolean | 'noToken'
  };

}