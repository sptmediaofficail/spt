import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetProviderSearchQueryResponse, GetProviderSearchQueryParams, GetProviderSearchHeaderParams } from "../../types/GetProviderSearch";

 type GetProviderSearchClient = typeof client<GetProviderSearchQueryResponse, never, never>;
type GetProviderSearch = {
    data: GetProviderSearchQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: GetProviderSearchQueryParams;
    headerParams: GetProviderSearchHeaderParams;
    response: GetProviderSearchQueryResponse;
    client: {
        parameters: Partial<Parameters<GetProviderSearchClient>[0]>;
        return: Awaited<ReturnType<GetProviderSearchClient>>;
    };
};
export function getProviderSearchQueryOptions<TData = GetProviderSearch["response"]>(params?: GetProviderSearch["queryParams"], headers?: GetProviderSearch["headerParams"], options: GetProviderSearch["client"]["parameters"] = {}): SWRConfiguration<TData, GetProviderSearch["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetProviderSearch["error"]>({
                method: "get",
                url: `/provider/search`,
                params,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary search
 * @link /provider/search
 */
export function useGetProviderSearch<TData = GetProviderSearch["response"]>(params?: GetProviderSearch["queryParams"], headers?: GetProviderSearch["headerParams"], options?: {
    query?: SWRConfiguration<TData, GetProviderSearch["error"]>;
    client?: GetProviderSearch["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetProviderSearch["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/provider/search`;
    const query = useSWR<TData, GetProviderSearch["error"], [
        typeof url,
        typeof params
    ] | null>(shouldFetch ? [url, params] : null, {
        ...getProviderSearchQueryOptions<TData>(params, headers, clientOptions),
        ...queryOptions
    });
    return query;
}