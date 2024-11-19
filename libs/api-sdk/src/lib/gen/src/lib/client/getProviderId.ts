import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetProviderIdQueryResponse, GetProviderIdPathParams, GetProviderIdHeaderParams } from "../../../types/GetProviderId";

 /**
 * @summary single provider
 * @link /provider/:id
 */
export async function getProviderId(id: GetProviderIdPathParams["id"], headers?: GetProviderIdHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetProviderIdQueryResponse>["data"]> {
    const res = await client<GetProviderIdQueryResponse>({ method: "get", url: `/provider/${id}`, baseURL: "http://{{local}}", headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}