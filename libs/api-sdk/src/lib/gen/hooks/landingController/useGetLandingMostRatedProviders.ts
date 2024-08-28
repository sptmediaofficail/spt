import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetLandingMostRatedProvidersQueryResponse } from "../../types/GetLandingMostRatedProviders";

 type GetLandingMostRatedProvidersClient = typeof client<GetLandingMostRatedProvidersQueryResponse, never, never>;
type GetLandingMostRatedProviders = {
    data: GetLandingMostRatedProvidersQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: GetLandingMostRatedProvidersQueryResponse;
    client: {
        parameters: Partial<Parameters<GetLandingMostRatedProvidersClient>[0]>;
        return: Awaited<ReturnType<GetLandingMostRatedProvidersClient>>;
    };
};
export function getLandingMostRatedProvidersQueryOptions<TData = GetLandingMostRatedProviders["response"]>(options: GetLandingMostRatedProviders["client"]["parameters"] = {}): SWRConfiguration<TData, GetLandingMostRatedProviders["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetLandingMostRatedProviders["error"]>({
                method: "get",
                url: `/landing/most_rated_providers`,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary most_rated_providers
 * @link /landing/most_rated_providers
 */
export function useGetLandingMostRatedProviders<TData = GetLandingMostRatedProviders["response"]>(options?: {
    query?: SWRConfiguration<TData, GetLandingMostRatedProviders["error"]>;
    client?: GetLandingMostRatedProviders["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetLandingMostRatedProviders["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/landing/most_rated_providers`;
    const query = useSWR<TData, GetLandingMostRatedProviders["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getLandingMostRatedProvidersQueryOptions<TData>(clientOptions),
        ...queryOptions
    });
    return query;
}