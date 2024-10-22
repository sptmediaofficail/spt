import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetAdminOrders1d9de514C4e149878eb90909556c7186QueryResponse, GetAdminOrders1d9de514C4e149878eb90909556c7186HeaderParams } from "../../../types/GetAdminOrders1d9de514C4e149878eb90909556c7186";

 /**
 * @summary details
 * @link /admin/orders/1d9de514-c4e1-4987-8eb9-0909556c7186
 */
export async function getAdminOrders1d9de514C4e149878eb90909556c7186(headers?: GetAdminOrders1d9de514C4e149878eb90909556c7186HeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetAdminOrders1d9de514C4e149878eb90909556c7186QueryResponse>["data"]> {
    const res = await client<GetAdminOrders1d9de514C4e149878eb90909556c7186QueryResponse>({ method: "get", url: `/admin/orders/1d9de514-c4e1-4987-8eb9-0909556c7186`, baseURL: "http://{{local}}", headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}