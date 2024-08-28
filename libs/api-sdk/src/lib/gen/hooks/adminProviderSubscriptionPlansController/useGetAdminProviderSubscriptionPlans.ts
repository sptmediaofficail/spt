import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetAdminProviderSubscriptionPlansQueryResponse, GetAdminProviderSubscriptionPlansQueryParams } from "../../types/GetAdminProviderSubscriptionPlans";

 type GetAdminProviderSubscriptionPlansClient = typeof client<GetAdminProviderSubscriptionPlansQueryResponse, never, never>;
type GetAdminProviderSubscriptionPlans = {
    data: GetAdminProviderSubscriptionPlansQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: GetAdminProviderSubscriptionPlansQueryParams;
    headerParams: never;
    response: GetAdminProviderSubscriptionPlansQueryResponse;
    client: {
        parameters: Partial<Parameters<GetAdminProviderSubscriptionPlansClient>[0]>;
        return: Awaited<ReturnType<GetAdminProviderSubscriptionPlansClient>>;
    };
};
export function getAdminProviderSubscriptionPlansQueryOptions<TData = GetAdminProviderSubscriptionPlans["response"]>(params?: GetAdminProviderSubscriptionPlans["queryParams"], options: GetAdminProviderSubscriptionPlans["client"]["parameters"] = {}): SWRConfiguration<TData, GetAdminProviderSubscriptionPlans["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetAdminProviderSubscriptionPlans["error"]>({
                method: "get",
                url: `/admin/provider-subscription-plans`,
                params,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary index
 * @link /admin/provider-subscription-plans
 */
export function useGetAdminProviderSubscriptionPlans<TData = GetAdminProviderSubscriptionPlans["response"]>(params?: GetAdminProviderSubscriptionPlans["queryParams"], options?: {
    query?: SWRConfiguration<TData, GetAdminProviderSubscriptionPlans["error"]>;
    client?: GetAdminProviderSubscriptionPlans["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetAdminProviderSubscriptionPlans["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/provider-subscription-plans`;
    const query = useSWR<TData, GetAdminProviderSubscriptionPlans["error"], [
        typeof url,
        typeof params
    ] | null>(shouldFetch ? [url, params] : null, {
        ...getAdminProviderSubscriptionPlansQueryOptions<TData>(params, clientOptions),
        ...queryOptions
    });
    return query;
}