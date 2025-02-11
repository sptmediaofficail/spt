import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetTermsCommissionPaginatedQueryResponse, GetTermsCommissionPaginatedQueryParams } from "../../types/GetTermsCommissionPaginated";

 type GetTermsCommissionPaginatedClient = typeof client<GetTermsCommissionPaginatedQueryResponse, never, never>;
type GetTermsCommissionPaginated = {
    data: GetTermsCommissionPaginatedQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: GetTermsCommissionPaginatedQueryParams;
    headerParams: never;
    response: GetTermsCommissionPaginatedQueryResponse;
    client: {
        parameters: Partial<Parameters<GetTermsCommissionPaginatedClient>[0]>;
        return: Awaited<ReturnType<GetTermsCommissionPaginatedClient>>;
    };
};
export function getTermsCommissionPaginatedQueryOptions<TData = GetTermsCommissionPaginated["response"]>(params?: GetTermsCommissionPaginated["queryParams"], options: GetTermsCommissionPaginated["client"]["parameters"] = {}): SWRConfiguration<TData, GetTermsCommissionPaginated["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetTermsCommissionPaginated["error"]>({
                method: "get",
                url: `/terms/commission/paginated`,
                params,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary get term by type paginated
 * @link /terms/commission/paginated
 */
export function useGetTermsCommissionPaginated<TData = GetTermsCommissionPaginated["response"]>(params?: GetTermsCommissionPaginated["queryParams"], options?: {
    query?: SWRConfiguration<TData, GetTermsCommissionPaginated["error"]>;
    client?: GetTermsCommissionPaginated["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetTermsCommissionPaginated["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/terms/commission/paginated`;
    const query = useSWR<TData, GetTermsCommissionPaginated["error"], [
        typeof url,
        typeof params
    ] | null>(shouldFetch ? [url, params] : null, {
        ...getTermsCommissionPaginatedQueryOptions<TData>(params, clientOptions),
        ...queryOptions
    });
    return query;
}