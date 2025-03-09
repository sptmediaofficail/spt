import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetProviderOrdersIndexstatisticsQueryResponse, GetProviderOrdersIndexstatisticsHeaderParams } from "../../../types/GetProviderOrdersIndexstatistics";

 /**
 * @summary indexStatistics
 * @link /provider/orders/indexStatistics
 */
export async function getProviderOrdersIndexstatistics(headers?: GetProviderOrdersIndexstatisticsHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetProviderOrdersIndexstatisticsQueryResponse>["data"]> {
    const res = await client<GetProviderOrdersIndexstatisticsQueryResponse>({ method: "get", url: `/provider/orders/indexStatistics`, baseURL: "http://{{local}}", headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}