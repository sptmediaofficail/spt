import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704MutationRequest, PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704MutationResponse, PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704HeaderParams } from "../../types/PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704";

 type PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704Client = typeof client<PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704MutationResponse, never, PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704MutationRequest>;
type PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704 = {
    data: PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704MutationResponse;
    error: never;
    request: PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704MutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704HeaderParams;
    response: PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704MutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704Client>[0]>;
        return: Awaited<ReturnType<PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704Client>>;
    };
};
/**
 * @summary update
 * @link /admin/provider-subscription-plans/945b42fc-a279-4ac5-8c00-77e635c87704
 */
export function usePostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704(headers?: PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704["response"], PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704["error"]>;
    client?: PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704["response"], PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/provider-subscription-plans/945b42fc-a279-4ac5-8c00-77e635c87704` as const;
    return useSWRMutation<PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704["response"], PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704["data"], PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704["error"], PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}