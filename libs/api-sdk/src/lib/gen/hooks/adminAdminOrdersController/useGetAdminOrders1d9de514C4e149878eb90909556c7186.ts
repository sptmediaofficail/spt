import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetAdminOrders1d9de514C4e149878eb90909556c7186QueryResponse, GetAdminOrders1d9de514C4e149878eb90909556c7186HeaderParams } from "../../types/GetAdminOrders1d9de514C4e149878eb90909556c7186";

 type GetAdminOrders1d9de514C4e149878eb90909556c7186Client = typeof client<GetAdminOrders1d9de514C4e149878eb90909556c7186QueryResponse, never, never>;
type GetAdminOrders1d9de514C4e149878eb90909556c7186 = {
    data: GetAdminOrders1d9de514C4e149878eb90909556c7186QueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: GetAdminOrders1d9de514C4e149878eb90909556c7186HeaderParams;
    response: GetAdminOrders1d9de514C4e149878eb90909556c7186QueryResponse;
    client: {
        parameters: Partial<Parameters<GetAdminOrders1d9de514C4e149878eb90909556c7186Client>[0]>;
        return: Awaited<ReturnType<GetAdminOrders1d9de514C4e149878eb90909556c7186Client>>;
    };
};
export function getAdminOrders1d9de514C4e149878eb90909556c7186QueryOptions<TData = GetAdminOrders1d9de514C4e149878eb90909556c7186["response"]>(headers?: GetAdminOrders1d9de514C4e149878eb90909556c7186["headerParams"], options: GetAdminOrders1d9de514C4e149878eb90909556c7186["client"]["parameters"] = {}): SWRConfiguration<TData, GetAdminOrders1d9de514C4e149878eb90909556c7186["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetAdminOrders1d9de514C4e149878eb90909556c7186["error"]>({
                method: "get",
                url: `/admin/orders/1d9de514-c4e1-4987-8eb9-0909556c7186`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary details
 * @link /admin/orders/1d9de514-c4e1-4987-8eb9-0909556c7186
 */
export function useGetAdminOrders1d9de514C4e149878eb90909556c7186<TData = GetAdminOrders1d9de514C4e149878eb90909556c7186["response"]>(headers?: GetAdminOrders1d9de514C4e149878eb90909556c7186["headerParams"], options?: {
    query?: SWRConfiguration<TData, GetAdminOrders1d9de514C4e149878eb90909556c7186["error"]>;
    client?: GetAdminOrders1d9de514C4e149878eb90909556c7186["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetAdminOrders1d9de514C4e149878eb90909556c7186["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/orders/1d9de514-c4e1-4987-8eb9-0909556c7186`;
    const query = useSWR<TData, GetAdminOrders1d9de514C4e149878eb90909556c7186["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getAdminOrders1d9de514C4e149878eb90909556c7186QueryOptions<TData>(headers, clientOptions),
        ...queryOptions
    });
    return query;
}