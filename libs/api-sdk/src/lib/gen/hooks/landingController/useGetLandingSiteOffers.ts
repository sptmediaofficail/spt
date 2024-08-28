import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetLandingSiteOffersQueryResponse } from "../../types/GetLandingSiteOffers";

 type GetLandingSiteOffersClient = typeof client<GetLandingSiteOffersQueryResponse, never, never>;
type GetLandingSiteOffers = {
    data: GetLandingSiteOffersQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: GetLandingSiteOffersQueryResponse;
    client: {
        parameters: Partial<Parameters<GetLandingSiteOffersClient>[0]>;
        return: Awaited<ReturnType<GetLandingSiteOffersClient>>;
    };
};
export function getLandingSiteOffersQueryOptions<TData = GetLandingSiteOffers["response"]>(options: GetLandingSiteOffers["client"]["parameters"] = {}): SWRConfiguration<TData, GetLandingSiteOffers["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetLandingSiteOffers["error"]>({
                method: "get",
                url: `/landing/site_offers`,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary site_offers
 * @link /landing/site_offers
 */
export function useGetLandingSiteOffers<TData = GetLandingSiteOffers["response"]>(options?: {
    query?: SWRConfiguration<TData, GetLandingSiteOffers["error"]>;
    client?: GetLandingSiteOffers["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetLandingSiteOffers["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/landing/site_offers`;
    const query = useSWR<TData, GetLandingSiteOffers["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getLandingSiteOffersQueryOptions<TData>(clientOptions),
        ...queryOptions
    });
    return query;
}