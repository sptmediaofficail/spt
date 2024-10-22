import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetProviderSearchQueryResponse, GetProviderSearchQueryParams, GetProviderSearchHeaderParams } from "../../../types/GetProviderSearch";

 /**
 * @summary search
 * @link /provider/search
 */
export async function getProviderSearch(params?: GetProviderSearchQueryParams, headers?: GetProviderSearchHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetProviderSearchQueryResponse>["data"]> {
    const res = await client<GetProviderSearchQueryResponse>({ method: "get", url: `/provider/search`, baseURL: "http://{{local}}", params, headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}