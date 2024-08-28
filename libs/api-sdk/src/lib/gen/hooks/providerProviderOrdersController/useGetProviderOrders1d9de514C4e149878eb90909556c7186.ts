import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetProviderOrders1d9de514C4e149878eb90909556c7186QueryResponse, GetProviderOrders1d9de514C4e149878eb90909556c7186HeaderParams } from "../../types/GetProviderOrders1d9de514C4e149878eb90909556c7186";

 type GetProviderOrders1d9de514C4e149878eb90909556c7186Client = typeof client<GetProviderOrders1d9de514C4e149878eb90909556c7186QueryResponse, never, never>;
type GetProviderOrders1d9de514C4e149878eb90909556c7186 = {
    data: GetProviderOrders1d9de514C4e149878eb90909556c7186QueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: GetProviderOrders1d9de514C4e149878eb90909556c7186HeaderParams;
    response: GetProviderOrders1d9de514C4e149878eb90909556c7186QueryResponse;
    client: {
        parameters: Partial<Parameters<GetProviderOrders1d9de514C4e149878eb90909556c7186Client>[0]>;
        return: Awaited<ReturnType<GetProviderOrders1d9de514C4e149878eb90909556c7186Client>>;
    };
};
export function getProviderOrders1d9de514C4e149878eb90909556c7186QueryOptions<TData = GetProviderOrders1d9de514C4e149878eb90909556c7186["response"]>(headers?: GetProviderOrders1d9de514C4e149878eb90909556c7186["headerParams"], options: GetProviderOrders1d9de514C4e149878eb90909556c7186["client"]["parameters"] = {}): SWRConfiguration<TData, GetProviderOrders1d9de514C4e149878eb90909556c7186["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetProviderOrders1d9de514C4e149878eb90909556c7186["error"]>({
                method: "get",
                url: `/provider/orders/1d9de514-c4e1-4987-8eb9-0909556c7186`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary details
 * @link /provider/orders/1d9de514-c4e1-4987-8eb9-0909556c7186
 */
export function useGetProviderOrders1d9de514C4e149878eb90909556c7186<TData = GetProviderOrders1d9de514C4e149878eb90909556c7186["response"]>(headers?: GetProviderOrders1d9de514C4e149878eb90909556c7186["headerParams"], options?: {
    query?: SWRConfiguration<TData, GetProviderOrders1d9de514C4e149878eb90909556c7186["error"]>;
    client?: GetProviderOrders1d9de514C4e149878eb90909556c7186["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetProviderOrders1d9de514C4e149878eb90909556c7186["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/provider/orders/1d9de514-c4e1-4987-8eb9-0909556c7186`;
    const query = useSWR<TData, GetProviderOrders1d9de514C4e149878eb90909556c7186["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getProviderOrders1d9de514C4e149878eb90909556c7186QueryOptions<TData>(headers, clientOptions),
        ...queryOptions
    });
    return query;
}