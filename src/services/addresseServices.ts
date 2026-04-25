import { GetAddress, GetAddressesList, ToggleAddress } from "@/types/routeApi/response/AddressResType";
import { routeAPI } from "./api";

export const addresseServices = {
  /**
   * 
   * @param address { name: string; details: string; phone: string; city: string }
   * @requires token in the headers
   * @returns `status` as string, `message` as string, `data` as array with type "IAddress[]"
   */
  addAddress: async (address: { name: string; details: string; phone: string; city: string }) => await routeAPI<ToggleAddress>({ endpoint: `api/v1/addresses`, options: { 
    method: 'POST',
    token: true,
    body: JSON.stringify(address) 
  }}),

  /**
   * 
   * @param addressId as string
   * @requires token in the headers
   * @returns `status` as string, `message` as string, `data` as array with type "IAddress[]"
   */
  removeAddress: async (addressId: string) => await routeAPI<ToggleAddress>({ endpoint: `api/v1/addresses/${addressId}`, options: { 
    method: 'DELETE', 
    token: true, 
    // body: JSON.stringify({ data: '' }) 
  }}),

    /**
   * 
   * @param addressId as string
   * @requires token in the headers
   * @returns `status` as string, `data` as object with type "IAddress"
   */
  getAddress: async (addressId: string) => await routeAPI<GetAddress>({
    endpoint: `api/v1/addresses/${addressId}`, options: {
      // method: "GET",
      token: true,
      // body: JSON.stringify({ data: '' }),
    }
  }),

  /**
   * 
   * @requires token in the headers
   * @returns `results` as number, `status` as string, `data` as Array with type "IAddress[]"
   */  
  getUserAddresses: async () => await routeAPI<GetAddressesList>({ endpoint: `api/v1/addresses`, options: { 
    // method: 'GET',
    token: true 
  } }),
}

