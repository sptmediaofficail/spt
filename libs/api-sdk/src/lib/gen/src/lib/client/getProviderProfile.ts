import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetProviderProfileQueryResponse, GetProviderProfileHeaderParams } from "../../../types/GetProviderProfile";

 /**
 * @summary show
 * @link /provider/profile
 */
export async function getProviderProfile(headers?: GetProviderProfileHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetProviderProfileQueryResponse>["data"]> {
    const res = await client<GetProviderProfileQueryResponse>({ method: "get", url: `/provider/profile`, baseURL: "http://{{local}}", headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}