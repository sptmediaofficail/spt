import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetAdminProviderProfilesQueryResponse, GetAdminProviderProfilesQueryParams } from "../../types/GetAdminProviderProfiles";

 type GetAdminProviderProfilesClient = typeof client<GetAdminProviderProfilesQueryResponse, never, never>;
type GetAdminProviderProfiles = {
    data: GetAdminProviderProfilesQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: GetAdminProviderProfilesQueryParams;
    headerParams: never;
    response: GetAdminProviderProfilesQueryResponse;
    client: {
        parameters: Partial<Parameters<GetAdminProviderProfilesClient>[0]>;
        return: Awaited<ReturnType<GetAdminProviderProfilesClient>>;
    };
};
export function getAdminProviderProfilesQueryOptions<TData = GetAdminProviderProfiles["response"]>(params?: GetAdminProviderProfiles["queryParams"], options: GetAdminProviderProfiles["client"]["parameters"] = {}): SWRConfiguration<TData, GetAdminProviderProfiles["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetAdminProviderProfiles["error"]>({
                method: "get",
                url: `/admin/provider-profiles`,
                params,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary index
 * @link /admin/provider-profiles
 */
export function useGetAdminProviderProfiles<TData = GetAdminProviderProfiles["response"]>(params?: GetAdminProviderProfiles["queryParams"], options?: {
    query?: SWRConfiguration<TData, GetAdminProviderProfiles["error"]>;
    client?: GetAdminProviderProfiles["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetAdminProviderProfiles["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/provider-profiles`;
    const query = useSWR<TData, GetAdminProviderProfiles["error"], [
        typeof url,
        typeof params
    ] | null>(shouldFetch ? [url, params] : null, {
        ...getAdminProviderProfilesQueryOptions<TData>(params, clientOptions),
        ...queryOptions
    });
    return query;
}