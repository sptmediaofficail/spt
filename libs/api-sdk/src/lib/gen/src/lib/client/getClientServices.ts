import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetClientServicesQueryResponse, GetClientServicesHeaderParams } from "../../../types/GetClientServices";

 /**
 * @summary list
 * @link /client/services
 */
export async function getClientServices(headers?: GetClientServicesHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetClientServicesQueryResponse>["data"]> {
    const res = await client<GetClientServicesQueryResponse>({ method: "get", url: `/client/services`, baseURL: "http://{{local}}", headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}