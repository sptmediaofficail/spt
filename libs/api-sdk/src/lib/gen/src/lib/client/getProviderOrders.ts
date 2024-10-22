import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetProviderOrdersQueryResponse, GetProviderOrdersQueryParams, GetProviderOrdersHeaderParams } from "../../../types/GetProviderOrders";

 /**
 * @summary index
 * @link /provider/orders
 */
export async function getProviderOrders(params?: GetProviderOrdersQueryParams, headers?: GetProviderOrdersHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetProviderOrdersQueryResponse>["data"]> {
    const res = await client<GetProviderOrdersQueryResponse>({ method: "get", url: `/provider/orders`, baseURL: "http://{{local}}", params, headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}