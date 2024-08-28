import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetProviderSubscriptionCheckQueryResponse, GetProviderSubscriptionCheckHeaderParams } from "../../types/GetProviderSubscriptionCheck";

 type GetProviderSubscriptionCheckClient = typeof client<GetProviderSubscriptionCheckQueryResponse, never, never>;
type GetProviderSubscriptionCheck = {
    data: GetProviderSubscriptionCheckQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: GetProviderSubscriptionCheckHeaderParams;
    response: GetProviderSubscriptionCheckQueryResponse;
    client: {
        parameters: Partial<Parameters<GetProviderSubscriptionCheckClient>[0]>;
        return: Awaited<ReturnType<GetProviderSubscriptionCheckClient>>;
    };
};
export function getProviderSubscriptionCheckQueryOptions<TData = GetProviderSubscriptionCheck["response"]>(headers?: GetProviderSubscriptionCheck["headerParams"], options: GetProviderSubscriptionCheck["client"]["parameters"] = {}): SWRConfiguration<TData, GetProviderSubscriptionCheck["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetProviderSubscriptionCheck["error"]>({
                method: "get",
                url: `/provider/subscription/check`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary check
 * @link /provider/subscription/check
 */
export function useGetProviderSubscriptionCheck<TData = GetProviderSubscriptionCheck["response"]>(headers?: GetProviderSubscriptionCheck["headerParams"], options?: {
    query?: SWRConfiguration<TData, GetProviderSubscriptionCheck["error"]>;
    client?: GetProviderSubscriptionCheck["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetProviderSubscriptionCheck["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/provider/subscription/check`;
    const query = useSWR<TData, GetProviderSubscriptionCheck["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getProviderSubscriptionCheckQueryOptions<TData>(headers, clientOptions),
        ...queryOptions
    });
    return query;
}