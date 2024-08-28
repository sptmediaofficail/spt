import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetAdminOrdersQueryResponse, GetAdminOrdersQueryParams, GetAdminOrdersHeaderParams } from "../../types/GetAdminOrders";

 type GetAdminOrdersClient = typeof client<GetAdminOrdersQueryResponse, never, never>;
type GetAdminOrders = {
    data: GetAdminOrdersQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: GetAdminOrdersQueryParams;
    headerParams: GetAdminOrdersHeaderParams;
    response: GetAdminOrdersQueryResponse;
    client: {
        parameters: Partial<Parameters<GetAdminOrdersClient>[0]>;
        return: Awaited<ReturnType<GetAdminOrdersClient>>;
    };
};
export function getAdminOrdersQueryOptions<TData = GetAdminOrders["response"]>(params?: GetAdminOrders["queryParams"], headers?: GetAdminOrders["headerParams"], options: GetAdminOrders["client"]["parameters"] = {}): SWRConfiguration<TData, GetAdminOrders["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetAdminOrders["error"]>({
                method: "get",
                url: `/admin/orders`,
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
 * @link /admin/orders
 */
export function useGetAdminOrders<TData = GetAdminOrders["response"]>(params?: GetAdminOrders["queryParams"], headers?: GetAdminOrders["headerParams"], options?: {
    query?: SWRConfiguration<TData, GetAdminOrders["error"]>;
    client?: GetAdminOrders["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetAdminOrders["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/orders`;
    const query = useSWR<TData, GetAdminOrders["error"], [
        typeof url,
        typeof params
    ] | null>(shouldFetch ? [url, params] : null, {
        ...getAdminOrdersQueryOptions<TData>(params, headers, clientOptions),
        ...queryOptions
    });
    return query;
}