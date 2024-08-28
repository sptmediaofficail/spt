import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetCitiesQueryResponse, GetCitiesQueryParams, GetCitiesHeaderParams } from "../../types/GetCities";

 type GetCitiesClient = typeof client<GetCitiesQueryResponse, never, never>;
type GetCities = {
    data: GetCitiesQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: GetCitiesQueryParams;
    headerParams: GetCitiesHeaderParams;
    response: GetCitiesQueryResponse;
    client: {
        parameters: Partial<Parameters<GetCitiesClient>[0]>;
        return: Awaited<ReturnType<GetCitiesClient>>;
    };
};
export function getCitiesQueryOptions<TData = GetCities["response"]>(params?: GetCities["queryParams"], headers?: GetCities["headerParams"], options: GetCities["client"]["parameters"] = {}): SWRConfiguration<TData, GetCities["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetCities["error"]>({
                method: "get",
                url: `/cities`,
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
 * @link /cities
 */
export function useGetCities<TData = GetCities["response"]>(params?: GetCities["queryParams"], headers?: GetCities["headerParams"], options?: {
    query?: SWRConfiguration<TData, GetCities["error"]>;
    client?: GetCities["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetCities["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/cities`;
    const query = useSWR<TData, GetCities["error"], [
        typeof url,
        typeof params
    ] | null>(shouldFetch ? [url, params] : null, {
        ...getCitiesQueryOptions<TData>(params, headers, clientOptions),
        ...queryOptions
    });
    return query;
}