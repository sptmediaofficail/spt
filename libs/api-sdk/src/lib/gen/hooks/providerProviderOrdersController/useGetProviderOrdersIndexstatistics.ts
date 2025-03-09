import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetProviderOrdersIndexstatisticsQueryResponse, GetProviderOrdersIndexstatisticsHeaderParams } from "../../types/GetProviderOrdersIndexstatistics";

 type GetProviderOrdersIndexstatisticsClient = typeof client<GetProviderOrdersIndexstatisticsQueryResponse, never, never>;
type GetProviderOrdersIndexstatistics = {
    data: GetProviderOrdersIndexstatisticsQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: GetProviderOrdersIndexstatisticsHeaderParams;
    response: GetProviderOrdersIndexstatisticsQueryResponse;
    client: {
        parameters: Partial<Parameters<GetProviderOrdersIndexstatisticsClient>[0]>;
        return: Awaited<ReturnType<GetProviderOrdersIndexstatisticsClient>>;
    };
};
export function getProviderOrdersIndexstatisticsQueryOptions<TData = GetProviderOrdersIndexstatistics["response"]>(headers?: GetProviderOrdersIndexstatistics["headerParams"], options: GetProviderOrdersIndexstatistics["client"]["parameters"] = {}): SWRConfiguration<TData, GetProviderOrdersIndexstatistics["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetProviderOrdersIndexstatistics["error"]>({
                method: "get",
                url: `/provider/orders/indexStatistics`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary indexStatistics
 * @link /provider/orders/indexStatistics
 */
export function useGetProviderOrdersIndexstatistics<TData = GetProviderOrdersIndexstatistics["response"]>(headers?: GetProviderOrdersIndexstatistics["headerParams"], options?: {
    query?: SWRConfiguration<TData, GetProviderOrdersIndexstatistics["error"]>;
    client?: GetProviderOrdersIndexstatistics["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetProviderOrdersIndexstatistics["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/provider/orders/indexStatistics`;
    const query = useSWR<TData, GetProviderOrdersIndexstatistics["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getProviderOrdersIndexstatisticsQueryOptions<TData>(headers, clientOptions),
        ...queryOptions
    });
    return query;
}