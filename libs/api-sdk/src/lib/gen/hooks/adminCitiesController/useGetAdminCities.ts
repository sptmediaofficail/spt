import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetAdminCitiesQueryResponse, GetAdminCitiesQueryParams } from "../../types/GetAdminCities";

 type GetAdminCitiesClient = typeof client<GetAdminCitiesQueryResponse, never, never>;
type GetAdminCities = {
    data: GetAdminCitiesQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: GetAdminCitiesQueryParams;
    headerParams: never;
    response: GetAdminCitiesQueryResponse;
    client: {
        parameters: Partial<Parameters<GetAdminCitiesClient>[0]>;
        return: Awaited<ReturnType<GetAdminCitiesClient>>;
    };
};
export function getAdminCitiesQueryOptions<TData = GetAdminCities["response"]>(params?: GetAdminCities["queryParams"], options: GetAdminCities["client"]["parameters"] = {}): SWRConfiguration<TData, GetAdminCities["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetAdminCities["error"]>({
                method: "get",
                url: `/admin/cities`,
                params,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary index
 * @link /admin/cities
 */
export function useGetAdminCities<TData = GetAdminCities["response"]>(params?: GetAdminCities["queryParams"], options?: {
    query?: SWRConfiguration<TData, GetAdminCities["error"]>;
    client?: GetAdminCities["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetAdminCities["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/cities`;
    const query = useSWR<TData, GetAdminCities["error"], [
        typeof url,
        typeof params
    ] | null>(shouldFetch ? [url, params] : null, {
        ...getAdminCitiesQueryOptions<TData>(params, clientOptions),
        ...queryOptions
    });
    return query;
}