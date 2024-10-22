import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetClientOrdersQueryResponse, GetClientOrdersQueryParams, GetClientOrdersHeaderParams } from "../../../types/GetClientOrders";

 /**
 * @summary index
 * @link /client/orders
 */
export async function getClientOrders(params?: GetClientOrdersQueryParams, headers?: GetClientOrdersHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetClientOrdersQueryResponse>["data"]> {
    const res = await client<GetClientOrdersQueryResponse>({ method: "get", url: `/client/orders`, baseURL: "http://{{local}}", params, headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}