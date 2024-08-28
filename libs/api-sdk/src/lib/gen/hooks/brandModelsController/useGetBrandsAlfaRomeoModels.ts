import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetBrandsAlfaRomeoModelsQueryResponse, GetBrandsAlfaRomeoModelsHeaderParams } from "../../types/GetBrandsAlfaRomeoModels";

 type GetBrandsAlfaRomeoModelsClient = typeof client<GetBrandsAlfaRomeoModelsQueryResponse, never, never>;
type GetBrandsAlfaRomeoModels = {
    data: GetBrandsAlfaRomeoModelsQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: GetBrandsAlfaRomeoModelsHeaderParams;
    response: GetBrandsAlfaRomeoModelsQueryResponse;
    client: {
        parameters: Partial<Parameters<GetBrandsAlfaRomeoModelsClient>[0]>;
        return: Awaited<ReturnType<GetBrandsAlfaRomeoModelsClient>>;
    };
};
export function getBrandsAlfaRomeoModelsQueryOptions<TData = GetBrandsAlfaRomeoModels["response"]>(headers?: GetBrandsAlfaRomeoModels["headerParams"], options: GetBrandsAlfaRomeoModels["client"]["parameters"] = {}): SWRConfiguration<TData, GetBrandsAlfaRomeoModels["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetBrandsAlfaRomeoModels["error"]>({
                method: "get",
                url: `/brands/Alfa_Romeo/models`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary index
 * @link /brands/Alfa_Romeo/models
 */
export function useGetBrandsAlfaRomeoModels<TData = GetBrandsAlfaRomeoModels["response"]>(headers?: GetBrandsAlfaRomeoModels["headerParams"], options?: {
    query?: SWRConfiguration<TData, GetBrandsAlfaRomeoModels["error"]>;
    client?: GetBrandsAlfaRomeoModels["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetBrandsAlfaRomeoModels["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/brands/Alfa_Romeo/models`;
    const query = useSWR<TData, GetBrandsAlfaRomeoModels["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getBrandsAlfaRomeoModelsQueryOptions<TData>(headers, clientOptions),
        ...queryOptions
    });
    return query;
}