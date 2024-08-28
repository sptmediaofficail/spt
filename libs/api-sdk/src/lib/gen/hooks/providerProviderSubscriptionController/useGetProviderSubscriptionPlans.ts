import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetProviderSubscriptionPlansQueryResponse, GetProviderSubscriptionPlansQueryParams, GetProviderSubscriptionPlansHeaderParams } from "../../types/GetProviderSubscriptionPlans";

 type GetProviderSubscriptionPlansClient = typeof client<GetProviderSubscriptionPlansQueryResponse, never, never>;
type GetProviderSubscriptionPlans = {
    data: GetProviderSubscriptionPlansQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: GetProviderSubscriptionPlansQueryParams;
    headerParams: GetProviderSubscriptionPlansHeaderParams;
    response: GetProviderSubscriptionPlansQueryResponse;
    client: {
        parameters: Partial<Parameters<GetProviderSubscriptionPlansClient>[0]>;
        return: Awaited<ReturnType<GetProviderSubscriptionPlansClient>>;
    };
};
export function getProviderSubscriptionPlansQueryOptions<TData = GetProviderSubscriptionPlans["response"]>(params?: GetProviderSubscriptionPlans["queryParams"], headers?: GetProviderSubscriptionPlans["headerParams"], options: GetProviderSubscriptionPlans["client"]["parameters"] = {}): SWRConfiguration<TData, GetProviderSubscriptionPlans["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetProviderSubscriptionPlans["error"]>({
                method: "get",
                url: `/provider/subscription/plans`,
                params,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary plans
 * @link /provider/subscription/plans
 */
export function useGetProviderSubscriptionPlans<TData = GetProviderSubscriptionPlans["response"]>(params?: GetProviderSubscriptionPlans["queryParams"], headers?: GetProviderSubscriptionPlans["headerParams"], options?: {
    query?: SWRConfiguration<TData, GetProviderSubscriptionPlans["error"]>;
    client?: GetProviderSubscriptionPlans["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetProviderSubscriptionPlans["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/provider/subscription/plans`;
    const query = useSWR<TData, GetProviderSubscriptionPlans["error"], [
        typeof url,
        typeof params
    ] | null>(shouldFetch ? [url, params] : null, {
        ...getProviderSubscriptionPlansQueryOptions<TData>(params, headers, clientOptions),
        ...queryOptions
    });
    return query;
}