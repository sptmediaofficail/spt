import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetAdminBrandsQueryResponse, GetAdminBrandsQueryParams } from "../../types/GetAdminBrands";

 type GetAdminBrandsClient = typeof client<GetAdminBrandsQueryResponse, never, never>;
type GetAdminBrands = {
    data: GetAdminBrandsQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: GetAdminBrandsQueryParams;
    headerParams: never;
    response: GetAdminBrandsQueryResponse;
    client: {
        parameters: Partial<Parameters<GetAdminBrandsClient>[0]>;
        return: Awaited<ReturnType<GetAdminBrandsClient>>;
    };
};
export function getAdminBrandsQueryOptions<TData = GetAdminBrands["response"]>(params?: GetAdminBrands["queryParams"], options: GetAdminBrands["client"]["parameters"] = {}): SWRConfiguration<TData, GetAdminBrands["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetAdminBrands["error"]>({
                method: "get",
                url: `/admin/brands`,
                params,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary index
 * @link /admin/brands
 */
export function useGetAdminBrands<TData = GetAdminBrands["response"]>(params?: GetAdminBrands["queryParams"], options?: {
    query?: SWRConfiguration<TData, GetAdminBrands["error"]>;
    client?: GetAdminBrands["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetAdminBrands["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/brands`;
    const query = useSWR<TData, GetAdminBrands["error"], [
        typeof url,
        typeof params
    ] | null>(shouldFetch ? [url, params] : null, {
        ...getAdminBrandsQueryOptions<TData>(params, clientOptions),
        ...queryOptions
    });
    return query;
}