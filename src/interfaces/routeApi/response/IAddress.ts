export interface IAddressInfo {
  details: string,
  phone: string,
  city: string

}
export interface IAddress extends IAddressInfo {
  _id: string,
  name: string,

}