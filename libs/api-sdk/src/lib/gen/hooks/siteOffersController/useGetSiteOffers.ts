import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetSiteOffersQueryResponse, GetSiteOffersQueryParams, GetSiteOffersHeaderParams } from "../../types/GetSiteOffers";

 type GetSiteOffersClient = typeof client<GetSiteOffersQueryResponse, never, never>;
type GetSiteOffers = {
    data: GetSiteOffersQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: GetSiteOffersQueryParams;
    headerParams: GetSiteOffersHeaderParams;
    response: GetSiteOffersQueryResponse;
    client: {
        parameters: Partial<Parameters<GetSiteOffersClient>[0]>;
        return: Awaited<ReturnType<GetSiteOffersClient>>;
    };
};
export function getSiteOffersQueryOptions<TData = GetSiteOffers["response"]>(params?: GetSiteOffers["queryParams"], headers?: GetSiteOffers["headerParams"], options: GetSiteOffers["client"]["parameters"] = {}): SWRConfiguration<TData, GetSiteOffers["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetSiteOffers["error"]>({
                method: "get",
                url: `/site_offers`,
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
 * @link /site_offers
 */
export function useGetSiteOffers<TData = GetSiteOffers["response"]>(params?: GetSiteOffers["queryParams"], headers?: GetSiteOffers["headerParams"], options?: {
    query?: SWRConfiguration<TData, GetSiteOffers["error"]>;
    client?: GetSiteOffers["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetSiteOffers["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/site_offers`;
    const query = useSWR<TData, GetSiteOffers["error"], [
        typeof url,
        typeof params
    ] | null>(shouldFetch ? [url, params] : null, {
        ...getSiteOffersQueryOptions<TData>(params, headers, clientOptions),
        ...queryOptions
    });
    return query;
}