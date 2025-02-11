import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetAdminTermsTermsPaginatedQueryResponse, GetAdminTermsTermsPaginatedQueryParams } from "../../types/GetAdminTermsTermsPaginated";

 type GetAdminTermsTermsPaginatedClient = typeof client<GetAdminTermsTermsPaginatedQueryResponse, never, never>;
type GetAdminTermsTermsPaginated = {
    data: GetAdminTermsTermsPaginatedQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: GetAdminTermsTermsPaginatedQueryParams;
    headerParams: never;
    response: GetAdminTermsTermsPaginatedQueryResponse;
    client: {
        parameters: Partial<Parameters<GetAdminTermsTermsPaginatedClient>[0]>;
        return: Awaited<ReturnType<GetAdminTermsTermsPaginatedClient>>;
    };
};
export function getAdminTermsTermsPaginatedQueryOptions<TData = GetAdminTermsTermsPaginated["response"]>(params?: GetAdminTermsTermsPaginated["queryParams"], options: GetAdminTermsTermsPaginated["client"]["parameters"] = {}): SWRConfiguration<TData, GetAdminTermsTermsPaginated["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetAdminTermsTermsPaginated["error"]>({
                method: "get",
                url: `/admin/terms/terms/paginated`,
                params,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary get terms by type paginated
 * @link /admin/terms/terms/paginated
 */
export function useGetAdminTermsTermsPaginated<TData = GetAdminTermsTermsPaginated["response"]>(params?: GetAdminTermsTermsPaginated["queryParams"], options?: {
    query?: SWRConfiguration<TData, GetAdminTermsTermsPaginated["error"]>;
    client?: GetAdminTermsTermsPaginated["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetAdminTermsTermsPaginated["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/terms/terms/paginated`;
    const query = useSWR<TData, GetAdminTermsTermsPaginated["error"], [
        typeof url,
        typeof params
    ] | null>(shouldFetch ? [url, params] : null, {
        ...getAdminTermsTermsPaginatedQueryOptions<TData>(params, clientOptions),
        ...queryOptions
    });
    return query;
}