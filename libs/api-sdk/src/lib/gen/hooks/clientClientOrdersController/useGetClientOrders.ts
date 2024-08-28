import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetClientOrdersQueryResponse, GetClientOrdersQueryParams, GetClientOrdersHeaderParams } from "../../types/GetClientOrders";

 type GetClientOrdersClient = typeof client<GetClientOrdersQueryResponse, never, never>;
type GetClientOrders = {
    data: GetClientOrdersQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: GetClientOrdersQueryParams;
    headerParams: GetClientOrdersHeaderParams;
    response: GetClientOrdersQueryResponse;
    client: {
        parameters: Partial<Parameters<GetClientOrdersClient>[0]>;
        return: Awaited<ReturnType<GetClientOrdersClient>>;
    };
};
export function getClientOrdersQueryOptions<TData = GetClientOrders["response"]>(params?: GetClientOrders["queryParams"], headers?: GetClientOrders["headerParams"], options: GetClientOrders["client"]["parameters"] = {}): SWRConfiguration<TData, GetClientOrders["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetClientOrders["error"]>({
                method: "get",
                url: `/client/orders`,
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
 * @link /client/orders
 */
export function useGetClientOrders<TData = GetClientOrders["response"]>(params?: GetClientOrders["queryParams"], headers?: GetClientOrders["headerParams"], options?: {
    query?: SWRConfiguration<TData, GetClientOrders["error"]>;
    client?: GetClientOrders["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetClientOrders["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/client/orders`;
    const query = useSWR<TData, GetClientOrders["error"], [
        typeof url,
        typeof params
    ] | null>(shouldFetch ? [url, params] : null, {
        ...getClientOrdersQueryOptions<TData>(params, headers, clientOptions),
        ...queryOptions
    });
    return query;
}