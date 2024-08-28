import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetAdminSiteOffersQueryResponse, GetAdminSiteOffersQueryParams } from "../../types/GetAdminSiteOffers";

 type GetAdminSiteOffersClient = typeof client<GetAdminSiteOffersQueryResponse, never, never>;
type GetAdminSiteOffers = {
    data: GetAdminSiteOffersQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: GetAdminSiteOffersQueryParams;
    headerParams: never;
    response: GetAdminSiteOffersQueryResponse;
    client: {
        parameters: Partial<Parameters<GetAdminSiteOffersClient>[0]>;
        return: Awaited<ReturnType<GetAdminSiteOffersClient>>;
    };
};
export function getAdminSiteOffersQueryOptions<TData = GetAdminSiteOffers["response"]>(params?: GetAdminSiteOffers["queryParams"], options: GetAdminSiteOffers["client"]["parameters"] = {}): SWRConfiguration<TData, GetAdminSiteOffers["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetAdminSiteOffers["error"]>({
                method: "get",
                url: `/admin/site_offers`,
                params,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary list
 * @link /admin/site_offers
 */
export function useGetAdminSiteOffers<TData = GetAdminSiteOffers["response"]>(params?: GetAdminSiteOffers["queryParams"], options?: {
    query?: SWRConfiguration<TData, GetAdminSiteOffers["error"]>;
    client?: GetAdminSiteOffers["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetAdminSiteOffers["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/site_offers`;
    const query = useSWR<TData, GetAdminSiteOffers["error"], [
        typeof url,
        typeof params
    ] | null>(shouldFetch ? [url, params] : null, {
        ...getAdminSiteOffersQueryOptions<TData>(params, clientOptions),
        ...queryOptions
    });
    return query;
}