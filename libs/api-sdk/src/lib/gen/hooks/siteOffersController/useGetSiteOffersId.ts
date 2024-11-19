import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetSiteOffersIdQueryResponse, GetSiteOffersIdPathParams, GetSiteOffersIdHeaderParams } from "../../types/GetSiteOffersId";

 type GetSiteOffersIdClient = typeof client<GetSiteOffersIdQueryResponse, never, never>;
type GetSiteOffersId = {
    data: GetSiteOffersIdQueryResponse;
    error: never;
    request: never;
    pathParams: GetSiteOffersIdPathParams;
    queryParams: never;
    headerParams: GetSiteOffersIdHeaderParams;
    response: GetSiteOffersIdQueryResponse;
    client: {
        parameters: Partial<Parameters<GetSiteOffersIdClient>[0]>;
        return: Awaited<ReturnType<GetSiteOffersIdClient>>;
    };
};
export function getSiteOffersIdQueryOptions<TData = GetSiteOffersId["response"]>(id: GetSiteOffersIdPathParams["id"], headers?: GetSiteOffersId["headerParams"], options: GetSiteOffersId["client"]["parameters"] = {}): SWRConfiguration<TData, GetSiteOffersId["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetSiteOffersId["error"]>({
                method: "get",
                url: `/site_offers/${id}`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary single
 * @link /site_offers/:id
 */
export function useGetSiteOffersId<TData = GetSiteOffersId["response"]>(id: GetSiteOffersIdPathParams["id"], headers?: GetSiteOffersId["headerParams"], options?: {
    query?: SWRConfiguration<TData, GetSiteOffersId["error"]>;
    client?: GetSiteOffersId["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetSiteOffersId["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/site_offers/${id}`;
    const query = useSWR<TData, GetSiteOffersId["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getSiteOffersIdQueryOptions<TData>(id, headers, clientOptions),
        ...queryOptions
    });
    return query;
}