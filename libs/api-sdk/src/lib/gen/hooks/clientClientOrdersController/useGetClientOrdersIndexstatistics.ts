import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetClientOrdersIndexstatisticsQueryResponse, GetClientOrdersIndexstatisticsHeaderParams } from "../../types/GetClientOrdersIndexstatistics";

 type GetClientOrdersIndexstatisticsClient = typeof client<GetClientOrdersIndexstatisticsQueryResponse, never, never>;
type GetClientOrdersIndexstatistics = {
    data: GetClientOrdersIndexstatisticsQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: GetClientOrdersIndexstatisticsHeaderParams;
    response: GetClientOrdersIndexstatisticsQueryResponse;
    client: {
        parameters: Partial<Parameters<GetClientOrdersIndexstatisticsClient>[0]>;
        return: Awaited<ReturnType<GetClientOrdersIndexstatisticsClient>>;
    };
};
export function getClientOrdersIndexstatisticsQueryOptions<TData = GetClientOrdersIndexstatistics["response"]>(headers?: GetClientOrdersIndexstatistics["headerParams"], options: GetClientOrdersIndexstatistics["client"]["parameters"] = {}): SWRConfiguration<TData, GetClientOrdersIndexstatistics["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetClientOrdersIndexstatistics["error"]>({
                method: "get",
                url: `/client/orders/indexStatistics`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary indexStatistics
 * @link /client/orders/indexStatistics
 */
export function useGetClientOrdersIndexstatistics<TData = GetClientOrdersIndexstatistics["response"]>(headers?: GetClientOrdersIndexstatistics["headerParams"], options?: {
    query?: SWRConfiguration<TData, GetClientOrdersIndexstatistics["error"]>;
    client?: GetClientOrdersIndexstatistics["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetClientOrdersIndexstatistics["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/client/orders/indexStatistics`;
    const query = useSWR<TData, GetClientOrdersIndexstatistics["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getClientOrdersIndexstatisticsQueryOptions<TData>(headers, clientOptions),
        ...queryOptions
    });
    return query;
}