import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminProviderSubscriptionPlansMutationRequest, PostAdminProviderSubscriptionPlansMutationResponse, PostAdminProviderSubscriptionPlansHeaderParams } from "../../types/PostAdminProviderSubscriptionPlans";

 type PostAdminProviderSubscriptionPlansClient = typeof client<PostAdminProviderSubscriptionPlansMutationResponse, never, PostAdminProviderSubscriptionPlansMutationRequest>;
type PostAdminProviderSubscriptionPlans = {
    data: PostAdminProviderSubscriptionPlansMutationResponse;
    error: never;
    request: PostAdminProviderSubscriptionPlansMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostAdminProviderSubscriptionPlansHeaderParams;
    response: PostAdminProviderSubscriptionPlansMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminProviderSubscriptionPlansClient>[0]>;
        return: Awaited<ReturnType<PostAdminProviderSubscriptionPlansClient>>;
    };
};
/**
 * @summary create
 * @link /admin/provider-subscription-plans
 */
export function usePostAdminProviderSubscriptionPlans(headers?: PostAdminProviderSubscriptionPlans["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostAdminProviderSubscriptionPlans["response"], PostAdminProviderSubscriptionPlans["error"]>;
    client?: PostAdminProviderSubscriptionPlans["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminProviderSubscriptionPlans["response"], PostAdminProviderSubscriptionPlans["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/provider-subscription-plans` as const;
    return useSWRMutation<PostAdminProviderSubscriptionPlans["response"], PostAdminProviderSubscriptionPlans["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminProviderSubscriptionPlans["data"], PostAdminProviderSubscriptionPlans["error"], PostAdminProviderSubscriptionPlans["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}