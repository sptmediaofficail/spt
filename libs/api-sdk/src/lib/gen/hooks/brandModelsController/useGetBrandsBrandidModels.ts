import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetBrandsBrandidModelsQueryResponse, GetBrandsBrandidModelsPathParams, GetBrandsBrandidModelsQueryParams, GetBrandsBrandidModelsHeaderParams } from "../../types/GetBrandsBrandidModels";

 type GetBrandsBrandidModelsClient = typeof client<GetBrandsBrandidModelsQueryResponse, never, never>;
type GetBrandsBrandidModels = {
    data: GetBrandsBrandidModelsQueryResponse;
    error: never;
    request: never;
    pathParams: GetBrandsBrandidModelsPathParams;
    queryParams: GetBrandsBrandidModelsQueryParams;
    headerParams: GetBrandsBrandidModelsHeaderParams;
    response: GetBrandsBrandidModelsQueryResponse;
    client: {
        parameters: Partial<Parameters<GetBrandsBrandidModelsClient>[0]>;
        return: Awaited<ReturnType<GetBrandsBrandidModelsClient>>;
    };
};
export function getBrandsBrandidModelsQueryOptions<TData = GetBrandsBrandidModels["response"]>(brandId: GetBrandsBrandidModelsPathParams["brandId"], params?: GetBrandsBrandidModels["queryParams"], headers?: GetBrandsBrandidModels["headerParams"], options: GetBrandsBrandidModels["client"]["parameters"] = {}): SWRConfiguration<TData, GetBrandsBrandidModels["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetBrandsBrandidModels["error"]>({
                method: "get",
                url: `/brands/${brandId}/models`,
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
 * @link /brands/:brandId/models
 */
export function useGetBrandsBrandidModels<TData = GetBrandsBrandidModels["response"]>(brandId: GetBrandsBrandidModelsPathParams["brandId"], params?: GetBrandsBrandidModels["queryParams"], headers?: GetBrandsBrandidModels["headerParams"], options?: {
    query?: SWRConfiguration<TData, GetBrandsBrandidModels["error"]>;
    client?: GetBrandsBrandidModels["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetBrandsBrandidModels["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/brands/${brandId}/models`;
    const query = useSWR<TData, GetBrandsBrandidModels["error"], [
        typeof url,
        typeof params
    ] | null>(shouldFetch ? [url, params] : null, {
        ...getBrandsBrandidModelsQueryOptions<TData>(brandId, params, headers, clientOptions),
        ...queryOptions
    });
    return query;
}