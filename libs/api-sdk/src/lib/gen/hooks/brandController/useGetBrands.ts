import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetBrandsQueryResponse, GetBrandsQueryParams, GetBrandsHeaderParams } from "../../types/GetBrands";

 type GetBrandsClient = typeof client<GetBrandsQueryResponse, never, never>;
type GetBrands = {
    data: GetBrandsQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: GetBrandsQueryParams;
    headerParams: GetBrandsHeaderParams;
    response: GetBrandsQueryResponse;
    client: {
        parameters: Partial<Parameters<GetBrandsClient>[0]>;
        return: Awaited<ReturnType<GetBrandsClient>>;
    };
};
export function getBrandsQueryOptions<TData = GetBrands["response"]>(params?: GetBrands["queryParams"], headers?: GetBrands["headerParams"], options: GetBrands["client"]["parameters"] = {}): SWRConfiguration<TData, GetBrands["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetBrands["error"]>({
                method: "get",
                url: `/brands`,
                params,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary index
 * @link /brands
 */
export function useGetBrands<TData = GetBrands["response"]>(params?: GetBrands["queryParams"], headers?: GetBrands["headerParams"], options?: {
    query?: SWRConfiguration<TData, GetBrands["error"]>;
    client?: GetBrands["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetBrands["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/brands`;
    const query = useSWR<TData, GetBrands["error"], [
        typeof url,
        typeof params
    ] | null>(shouldFetch ? [url, params] : null, {
        ...getBrandsQueryOptions<TData>(params, headers, clientOptions),
        ...queryOptions
    });
    return query;
}