import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetSiteOffersIdsQueryResponse, GetSiteOffersIdsHeaderParams } from "../../types/GetSiteOffersIds";

 type GetSiteOffersIdsClient = typeof client<GetSiteOffersIdsQueryResponse, never, never>;
type GetSiteOffersIds = {
    data: GetSiteOffersIdsQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: GetSiteOffersIdsHeaderParams;
    response: GetSiteOffersIdsQueryResponse;
    client: {
        parameters: Partial<Parameters<GetSiteOffersIdsClient>[0]>;
        return: Awaited<ReturnType<GetSiteOffersIdsClient>>;
    };
};
export function getSiteOffersIdsQueryOptions<TData = GetSiteOffersIds["response"]>(headers?: GetSiteOffersIds["headerParams"], options: GetSiteOffersIds["client"]["parameters"] = {}): SWRConfiguration<TData, GetSiteOffersIds["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetSiteOffersIds["error"]>({
                method: "get",
                url: `/site_offers/ids`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary ids
 * @link /site_offers/ids
 */
export function useGetSiteOffersIds<TData = GetSiteOffersIds["response"]>(headers?: GetSiteOffersIds["headerParams"], options?: {
    query?: SWRConfiguration<TData, GetSiteOffersIds["error"]>;
    client?: GetSiteOffersIds["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetSiteOffersIds["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/site_offers/ids`;
    const query = useSWR<TData, GetSiteOffersIds["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getSiteOffersIdsQueryOptions<TData>(headers, clientOptions),
        ...queryOptions
    });
    return query;
}