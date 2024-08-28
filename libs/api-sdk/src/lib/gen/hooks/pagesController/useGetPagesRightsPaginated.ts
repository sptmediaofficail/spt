import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetPagesRightsPaginatedQueryResponse, GetPagesRightsPaginatedQueryParams } from "../../types/GetPagesRightsPaginated";

 type GetPagesRightsPaginatedClient = typeof client<GetPagesRightsPaginatedQueryResponse, never, never>;
type GetPagesRightsPaginated = {
    data: GetPagesRightsPaginatedQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: GetPagesRightsPaginatedQueryParams;
    headerParams: never;
    response: GetPagesRightsPaginatedQueryResponse;
    client: {
        parameters: Partial<Parameters<GetPagesRightsPaginatedClient>[0]>;
        return: Awaited<ReturnType<GetPagesRightsPaginatedClient>>;
    };
};
export function getPagesRightsPaginatedQueryOptions<TData = GetPagesRightsPaginated["response"]>(params?: GetPagesRightsPaginated["queryParams"], options: GetPagesRightsPaginated["client"]["parameters"] = {}): SWRConfiguration<TData, GetPagesRightsPaginated["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetPagesRightsPaginated["error"]>({
                method: "get",
                url: `/pages/rights/paginated`,
                params,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary get page by type paginated
 * @link /pages/rights/paginated
 */
export function useGetPagesRightsPaginated<TData = GetPagesRightsPaginated["response"]>(params?: GetPagesRightsPaginated["queryParams"], options?: {
    query?: SWRConfiguration<TData, GetPagesRightsPaginated["error"]>;
    client?: GetPagesRightsPaginated["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetPagesRightsPaginated["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/pages/rights/paginated`;
    const query = useSWR<TData, GetPagesRightsPaginated["error"], [
        typeof url,
        typeof params
    ] | null>(shouldFetch ? [url, params] : null, {
        ...getPagesRightsPaginatedQueryOptions<TData>(params, clientOptions),
        ...queryOptions
    });
    return query;
}