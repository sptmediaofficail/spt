import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetProviderIdQueryResponse, GetProviderIdPathParams, GetProviderIdHeaderParams } from "../../types/GetProviderId";

 type GetProviderIdClient = typeof client<GetProviderIdQueryResponse, never, never>;
type GetProviderId = {
    data: GetProviderIdQueryResponse;
    error: never;
    request: never;
    pathParams: GetProviderIdPathParams;
    queryParams: never;
    headerParams: GetProviderIdHeaderParams;
    response: GetProviderIdQueryResponse;
    client: {
        parameters: Partial<Parameters<GetProviderIdClient>[0]>;
        return: Awaited<ReturnType<GetProviderIdClient>>;
    };
};
export function getProviderIdQueryOptions<TData = GetProviderId["response"]>(id: GetProviderIdPathParams["id"], headers?: GetProviderId["headerParams"], options: GetProviderId["client"]["parameters"] = {}): SWRConfiguration<TData, GetProviderId["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetProviderId["error"]>({
                method: "get",
                url: `/provider/${id}`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary single provider
 * @link /provider/:id
 */
export function useGetProviderId<TData = GetProviderId["response"]>(id: GetProviderIdPathParams["id"], headers?: GetProviderId["headerParams"], options?: {
    query?: SWRConfiguration<TData, GetProviderId["error"]>;
    client?: GetProviderId["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetProviderId["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/provider/${id}`;
    const query = useSWR<TData, GetProviderId["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getProviderIdQueryOptions<TData>(id, headers, clientOptions),
        ...queryOptions
    });
    return query;
}