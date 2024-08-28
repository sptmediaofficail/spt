import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetAdminOrders1d9de514C4e149878eb90909556c7186OffersQueryResponse, GetAdminOrders1d9de514C4e149878eb90909556c7186OffersHeaderParams } from "../../types/GetAdminOrders1d9de514C4e149878eb90909556c7186Offers";

 type GetAdminOrders1d9de514C4e149878eb90909556c7186OffersClient = typeof client<GetAdminOrders1d9de514C4e149878eb90909556c7186OffersQueryResponse, never, never>;
type GetAdminOrders1d9de514C4e149878eb90909556c7186Offers = {
    data: GetAdminOrders1d9de514C4e149878eb90909556c7186OffersQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: GetAdminOrders1d9de514C4e149878eb90909556c7186OffersHeaderParams;
    response: GetAdminOrders1d9de514C4e149878eb90909556c7186OffersQueryResponse;
    client: {
        parameters: Partial<Parameters<GetAdminOrders1d9de514C4e149878eb90909556c7186OffersClient>[0]>;
        return: Awaited<ReturnType<GetAdminOrders1d9de514C4e149878eb90909556c7186OffersClient>>;
    };
};
export function getAdminOrders1d9de514C4e149878eb90909556c7186OffersQueryOptions<TData = GetAdminOrders1d9de514C4e149878eb90909556c7186Offers["response"]>(headers?: GetAdminOrders1d9de514C4e149878eb90909556c7186Offers["headerParams"], options: GetAdminOrders1d9de514C4e149878eb90909556c7186Offers["client"]["parameters"] = {}): SWRConfiguration<TData, GetAdminOrders1d9de514C4e149878eb90909556c7186Offers["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetAdminOrders1d9de514C4e149878eb90909556c7186Offers["error"]>({
                method: "get",
                url: `/admin/orders/1d9de514-c4e1-4987-8eb9-0909556c7186/offers`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary offers
 * @link /admin/orders/1d9de514-c4e1-4987-8eb9-0909556c7186/offers
 */
export function useGetAdminOrders1d9de514C4e149878eb90909556c7186Offers<TData = GetAdminOrders1d9de514C4e149878eb90909556c7186Offers["response"]>(headers?: GetAdminOrders1d9de514C4e149878eb90909556c7186Offers["headerParams"], options?: {
    query?: SWRConfiguration<TData, GetAdminOrders1d9de514C4e149878eb90909556c7186Offers["error"]>;
    client?: GetAdminOrders1d9de514C4e149878eb90909556c7186Offers["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetAdminOrders1d9de514C4e149878eb90909556c7186Offers["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/orders/1d9de514-c4e1-4987-8eb9-0909556c7186/offers`;
    const query = useSWR<TData, GetAdminOrders1d9de514C4e149878eb90909556c7186Offers["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getAdminOrders1d9de514C4e149878eb90909556c7186OffersQueryOptions<TData>(headers, clientOptions),
        ...queryOptions
    });
    return query;
}