import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetAdminAboutQueryResponse, GetAdminAboutQueryParams } from "../../types/GetAdminAbout";

 type GetAdminAboutClient = typeof client<GetAdminAboutQueryResponse, never, never>;
type GetAdminAbout = {
    data: GetAdminAboutQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: GetAdminAboutQueryParams;
    headerParams: never;
    response: GetAdminAboutQueryResponse;
    client: {
        parameters: Partial<Parameters<GetAdminAboutClient>[0]>;
        return: Awaited<ReturnType<GetAdminAboutClient>>;
    };
};
export function getAdminAboutQueryOptions<TData = GetAdminAbout["response"]>(params?: GetAdminAbout["queryParams"], options: GetAdminAbout["client"]["parameters"] = {}): SWRConfiguration<TData, GetAdminAbout["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetAdminAbout["error"]>({
                method: "get",
                url: `/admin/about`,
                params,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary list
 * @link /admin/about
 */
export function useGetAdminAbout<TData = GetAdminAbout["response"]>(params?: GetAdminAbout["queryParams"], options?: {
    query?: SWRConfiguration<TData, GetAdminAbout["error"]>;
    client?: GetAdminAbout["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetAdminAbout["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/about`;
    const query = useSWR<TData, GetAdminAbout["error"], [
        typeof url,
        typeof params
    ] | null>(shouldFetch ? [url, params] : null, {
        ...getAdminAboutQueryOptions<TData>(params, clientOptions),
        ...queryOptions
    });
    return query;
}