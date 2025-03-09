import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetClientOrdersIndexstatisticsQueryResponse, GetClientOrdersIndexstatisticsHeaderParams } from "../../../types/GetClientOrdersIndexstatistics";

 /**
 * @summary indexStatistics
 * @link /client/orders/indexStatistics
 */
export async function getClientOrdersIndexstatistics(headers?: GetClientOrdersIndexstatisticsHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetClientOrdersIndexstatisticsQueryResponse>["data"]> {
    const res = await client<GetClientOrdersIndexstatisticsQueryResponse>({ method: "get", url: `/client/orders/indexStatistics`, baseURL: "http://{{local}}", headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}