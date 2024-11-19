import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetLandingMostRatedProvidersByTypeQueryResponse, GetLandingMostRatedProvidersByTypeQueryParams } from "../../types/GetLandingMostRatedProvidersByType";

 type GetLandingMostRatedProvidersByTypeClient = typeof client<GetLandingMostRatedProvidersByTypeQueryResponse, never, never>;
type GetLandingMostRatedProvidersByType = {
    data: GetLandingMostRatedProvidersByTypeQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: GetLandingMostRatedProvidersByTypeQueryParams;
    headerParams: never;
    response: GetLandingMostRatedProvidersByTypeQueryResponse;
    client: {
        parameters: Partial<Parameters<GetLandingMostRatedProvidersByTypeClient>[0]>;
        return: Awaited<ReturnType<GetLandingMostRatedProvidersByTypeClient>>;
    };
};
export function getLandingMostRatedProvidersByTypeQueryOptions<TData = GetLandingMostRatedProvidersByType["response"]>(params?: GetLandingMostRatedProvidersByType["queryParams"], options: GetLandingMostRatedProvidersByType["client"]["parameters"] = {}): SWRConfiguration<TData, GetLandingMostRatedProvidersByType["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetLandingMostRatedProvidersByType["error"]>({
                method: "get",
                url: `/landing/most_rated_providers_by_type`,
                params,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary most_rated_providers_by_type Copy
 * @link /landing/most_rated_providers_by_type
 */
export function useGetLandingMostRatedProvidersByType<TData = GetLandingMostRatedProvidersByType["response"]>(params?: GetLandingMostRatedProvidersByType["queryParams"], options?: {
    query?: SWRConfiguration<TData, GetLandingMostRatedProvidersByType["error"]>;
    client?: GetLandingMostRatedProvidersByType["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetLandingMostRatedProvidersByType["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/landing/most_rated_providers_by_type`;
    const query = useSWR<TData, GetLandingMostRatedProvidersByType["error"], [
        typeof url,
        typeof params
    ] | null>(shouldFetch ? [url, params] : null, {
        ...getLandingMostRatedProvidersByTypeQueryOptions<TData>(params, clientOptions),
        ...queryOptions
    });
    return query;
}