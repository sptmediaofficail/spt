import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetProviderMeQueryResponse, GetProviderMeHeaderParams } from "../../types/GetProviderMe";

 type GetProviderMeClient = typeof client<GetProviderMeQueryResponse, never, never>;
type GetProviderMe = {
    data: GetProviderMeQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: GetProviderMeHeaderParams;
    response: GetProviderMeQueryResponse;
    client: {
        parameters: Partial<Parameters<GetProviderMeClient>[0]>;
        return: Awaited<ReturnType<GetProviderMeClient>>;
    };
};
export function getProviderMeQueryOptions<TData = GetProviderMe["response"]>(headers?: GetProviderMe["headerParams"], options: GetProviderMe["client"]["parameters"] = {}): SWRConfiguration<TData, GetProviderMe["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetProviderMe["error"]>({
                method: "get",
                url: `/provider/me`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary me
 * @link /provider/me
 */
export function useGetProviderMe<TData = GetProviderMe["response"]>(headers?: GetProviderMe["headerParams"], options?: {
    query?: SWRConfiguration<TData, GetProviderMe["error"]>;
    client?: GetProviderMe["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetProviderMe["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/provider/me`;
    const query = useSWR<TData, GetProviderMe["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getProviderMeQueryOptions<TData>(headers, clientOptions),
        ...queryOptions
    });
    return query;
}