import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetProviderProfileQueryResponse, GetProviderProfileHeaderParams } from "../../types/GetProviderProfile";

 type GetProviderProfileClient = typeof client<GetProviderProfileQueryResponse, never, never>;
type GetProviderProfile = {
    data: GetProviderProfileQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: GetProviderProfileHeaderParams;
    response: GetProviderProfileQueryResponse;
    client: {
        parameters: Partial<Parameters<GetProviderProfileClient>[0]>;
        return: Awaited<ReturnType<GetProviderProfileClient>>;
    };
};
export function getProviderProfileQueryOptions<TData = GetProviderProfile["response"]>(headers?: GetProviderProfile["headerParams"], options: GetProviderProfile["client"]["parameters"] = {}): SWRConfiguration<TData, GetProviderProfile["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetProviderProfile["error"]>({
                method: "get",
                url: `/provider/profile`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary show
 * @link /provider/profile
 */
export function useGetProviderProfile<TData = GetProviderProfile["response"]>(headers?: GetProviderProfile["headerParams"], options?: {
    query?: SWRConfiguration<TData, GetProviderProfile["error"]>;
    client?: GetProviderProfile["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetProviderProfile["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/provider/profile`;
    const query = useSWR<TData, GetProviderProfile["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getProviderProfileQueryOptions<TData>(headers, clientOptions),
        ...queryOptions
    });
    return query;
}