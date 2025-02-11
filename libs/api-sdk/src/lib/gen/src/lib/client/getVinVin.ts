import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetVinVinQueryResponse, GetVinVinPathParams, GetVinVinHeaderParams } from "../../../types/GetVinVin";

 /**
 * @summary Get Data
 * @link /vin/:vin
 */
export async function getVinVin(vin: GetVinVinPathParams["vin"], headers?: GetVinVinHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetVinVinQueryResponse>["data"]> {
    const res = await client<GetVinVinQueryResponse>({ method: "get", url: `/vin/${vin}`, baseURL: "http://{{local}}", headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}