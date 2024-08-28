import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetSharedAuthMeQueryResponse, GetSharedAuthMeHeaderParams } from "../../types/GetSharedAuthMe";

 type GetSharedAuthMeClient = typeof client<GetSharedAuthMeQueryResponse, never, never>;
type GetSharedAuthMe = {
    data: GetSharedAuthMeQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: GetSharedAuthMeHeaderParams;
    response: GetSharedAuthMeQueryResponse;
    client: {
        parameters: Partial<Parameters<GetSharedAuthMeClient>[0]>;
        return: Awaited<ReturnType<GetSharedAuthMeClient>>;
    };
};
export function getSharedAuthMeQueryOptions<TData = GetSharedAuthMe["response"]>(headers?: GetSharedAuthMe["headerParams"], options: GetSharedAuthMe["client"]["parameters"] = {}): SWRConfiguration<TData, GetSharedAuthMe["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetSharedAuthMe["error"]>({
                method: "get",
                url: `/shared/auth/me`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary me
 * @link /shared/auth/me
 */
export function useGetSharedAuthMe<TData = GetSharedAuthMe["response"]>(headers?: GetSharedAuthMe["headerParams"], options?: {
    query?: SWRConfiguration<TData, GetSharedAuthMe["error"]>;
    client?: GetSharedAuthMe["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetSharedAuthMe["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/shared/auth/me`;
    const query = useSWR<TData, GetSharedAuthMe["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getSharedAuthMeQueryOptions<TData>(headers, clientOptions),
        ...queryOptions
    });
    return query;
}