import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetAdminOrdersQueryResponse, GetAdminOrdersQueryParams, GetAdminOrdersHeaderParams } from "../../../types/GetAdminOrders";

 /**
 * @summary index
 * @link /admin/orders
 */
export async function getAdminOrders(params?: GetAdminOrdersQueryParams, headers?: GetAdminOrdersHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetAdminOrdersQueryResponse>["data"]> {
    const res = await client<GetAdminOrdersQueryResponse>({ method: "get", url: `/admin/orders`, baseURL: "http://{{local}}", params, headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}