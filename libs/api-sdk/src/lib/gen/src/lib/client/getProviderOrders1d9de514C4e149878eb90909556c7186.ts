import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetProviderOrders1d9de514C4e149878eb90909556c7186QueryResponse, GetProviderOrders1d9de514C4e149878eb90909556c7186HeaderParams } from "../../../types/GetProviderOrders1d9de514C4e149878eb90909556c7186";

 /**
 * @summary details
 * @link /provider/orders/1d9de514-c4e1-4987-8eb9-0909556c7186
 */
export async function getProviderOrders1d9de514C4e149878eb90909556c7186(headers?: GetProviderOrders1d9de514C4e149878eb90909556c7186HeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetProviderOrders1d9de514C4e149878eb90909556c7186QueryResponse>["data"]> {
    const res = await client<GetProviderOrders1d9de514C4e149878eb90909556c7186QueryResponse>({ method: "get", url: `/provider/orders/1d9de514-c4e1-4987-8eb9-0909556c7186`, baseURL: "http://{{local}}", headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}