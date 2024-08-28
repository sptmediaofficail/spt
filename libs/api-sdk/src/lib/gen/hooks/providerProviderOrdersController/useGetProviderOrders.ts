import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetProviderOrdersQueryResponse, GetProviderOrdersQueryParams, GetProviderOrdersHeaderParams } from "../../types/GetProviderOrders";

 type GetProviderOrdersClient = typeof client<GetProviderOrdersQueryResponse, never, never>;
type GetProviderOrders = {
    data: GetProviderOrdersQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: GetProviderOrdersQueryParams;
    headerParams: GetProviderOrdersHeaderParams;
    response: GetProviderOrdersQueryResponse;
    client: {
        parameters: Partial<Parameters<GetProviderOrdersClient>[0]>;
        return: Awaited<ReturnType<GetProviderOrdersClient>>;
    };
};
export function getProviderOrdersQueryOptions<TData = GetProviderOrders["response"]>(params?: GetProviderOrders["queryParams"], headers?: GetProviderOrders["headerParams"], options: GetProviderOrders["client"]["parameters"] = {}): SWRConfiguration<TData, GetProviderOrders["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetProviderOrders["error"]>({
                method: "get",
                url: `/provider/orders`,
                params,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary index
 * @link /provider/orders
 */
export function useGetProviderOrders<TData = GetProviderOrders["response"]>(params?: GetProviderOrders["queryParams"], headers?: GetProviderOrders["headerParams"], options?: {
    query?: SWRConfiguration<TData, GetProviderOrders["error"]>;
    client?: GetProviderOrders["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetProviderOrders["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/provider/orders`;
    const query = useSWR<TData, GetProviderOrders["error"], [
        typeof url,
        typeof params
    ] | null>(shouldFetch ? [url, params] : null, {
        ...getProviderOrdersQueryOptions<TData>(params, headers, clientOptions),
        ...queryOptions
    });
    return query;
}