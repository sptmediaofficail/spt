import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetProviderIdsQueryResponse, GetProviderIdsHeaderParams } from "../../types/GetProviderIds";

 type GetProviderIdsClient = typeof client<GetProviderIdsQueryResponse, never, never>;
type GetProviderIds = {
    data: GetProviderIdsQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: GetProviderIdsHeaderParams;
    response: GetProviderIdsQueryResponse;
    client: {
        parameters: Partial<Parameters<GetProviderIdsClient>[0]>;
        return: Awaited<ReturnType<GetProviderIdsClient>>;
    };
};
export function getProviderIdsQueryOptions<TData = GetProviderIds["response"]>(headers?: GetProviderIds["headerParams"], options: GetProviderIds["client"]["parameters"] = {}): SWRConfiguration<TData, GetProviderIds["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetProviderIds["error"]>({
                method: "get",
                url: `/provider/ids`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary ids
 * @link /provider/ids
 */
export function useGetProviderIds<TData = GetProviderIds["response"]>(headers?: GetProviderIds["headerParams"], options?: {
    query?: SWRConfiguration<TData, GetProviderIds["error"]>;
    client?: GetProviderIds["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetProviderIds["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/provider/ids`;
    const query = useSWR<TData, GetProviderIds["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getProviderIdsQueryOptions<TData>(headers, clientOptions),
        ...queryOptions
    });
    return query;
}