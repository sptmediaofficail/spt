import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetAdminSlidersQueryResponse, GetAdminSlidersQueryParams } from "../../types/GetAdminSliders";

 type GetAdminSlidersClient = typeof client<GetAdminSlidersQueryResponse, never, never>;
type GetAdminSliders = {
    data: GetAdminSlidersQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: GetAdminSlidersQueryParams;
    headerParams: never;
    response: GetAdminSlidersQueryResponse;
    client: {
        parameters: Partial<Parameters<GetAdminSlidersClient>[0]>;
        return: Awaited<ReturnType<GetAdminSlidersClient>>;
    };
};
export function getAdminSlidersQueryOptions<TData = GetAdminSliders["response"]>(params?: GetAdminSliders["queryParams"], options: GetAdminSliders["client"]["parameters"] = {}): SWRConfiguration<TData, GetAdminSliders["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetAdminSliders["error"]>({
                method: "get",
                url: `/admin/sliders`,
                params,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary list
 * @link /admin/sliders
 */
export function useGetAdminSliders<TData = GetAdminSliders["response"]>(params?: GetAdminSliders["queryParams"], options?: {
    query?: SWRConfiguration<TData, GetAdminSliders["error"]>;
    client?: GetAdminSliders["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetAdminSliders["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/sliders`;
    const query = useSWR<TData, GetAdminSliders["error"], [
        typeof url,
        typeof params
    ] | null>(shouldFetch ? [url, params] : null, {
        ...getAdminSlidersQueryOptions<TData>(params, clientOptions),
        ...queryOptions
    });
    return query;
}