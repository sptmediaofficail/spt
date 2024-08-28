import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetAdminPagesRightsPaginatedQueryResponse, GetAdminPagesRightsPaginatedQueryParams } from "../../types/GetAdminPagesRightsPaginated";

 type GetAdminPagesRightsPaginatedClient = typeof client<GetAdminPagesRightsPaginatedQueryResponse, never, never>;
type GetAdminPagesRightsPaginated = {
    data: GetAdminPagesRightsPaginatedQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: GetAdminPagesRightsPaginatedQueryParams;
    headerParams: never;
    response: GetAdminPagesRightsPaginatedQueryResponse;
    client: {
        parameters: Partial<Parameters<GetAdminPagesRightsPaginatedClient>[0]>;
        return: Awaited<ReturnType<GetAdminPagesRightsPaginatedClient>>;
    };
};
export function getAdminPagesRightsPaginatedQueryOptions<TData = GetAdminPagesRightsPaginated["response"]>(params?: GetAdminPagesRightsPaginated["queryParams"], options: GetAdminPagesRightsPaginated["client"]["parameters"] = {}): SWRConfiguration<TData, GetAdminPagesRightsPaginated["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetAdminPagesRightsPaginated["error"]>({
                method: "get",
                url: `/admin/pages/rights/paginated`,
                params,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary get page by type paginated
 * @link /admin/pages/rights/paginated
 */
export function useGetAdminPagesRightsPaginated<TData = GetAdminPagesRightsPaginated["response"]>(params?: GetAdminPagesRightsPaginated["queryParams"], options?: {
    query?: SWRConfiguration<TData, GetAdminPagesRightsPaginated["error"]>;
    client?: GetAdminPagesRightsPaginated["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetAdminPagesRightsPaginated["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/pages/rights/paginated`;
    const query = useSWR<TData, GetAdminPagesRightsPaginated["error"], [
        typeof url,
        typeof params
    ] | null>(shouldFetch ? [url, params] : null, {
        ...getAdminPagesRightsPaginatedQueryOptions<TData>(params, clientOptions),
        ...queryOptions
    });
    return query;
}