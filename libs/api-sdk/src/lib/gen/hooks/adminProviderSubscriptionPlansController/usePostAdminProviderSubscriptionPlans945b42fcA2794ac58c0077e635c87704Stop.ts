import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704StopMutationRequest, PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704StopMutationResponse } from "../../types/PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704Stop";

 type PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704StopClient = typeof client<PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704StopMutationResponse, never, PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704StopMutationRequest>;
type PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704Stop = {
    data: PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704StopMutationResponse;
    error: never;
    request: PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704StopMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704StopMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704StopClient>[0]>;
        return: Awaited<ReturnType<PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704StopClient>>;
    };
};
/**
 * @summary stop
 * @link /admin/provider-subscription-plans/945b42fc-a279-4ac5-8c00-77e635c87704/stop
 */
export function usePostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704Stop(options?: {
    mutation?: SWRMutationConfiguration<PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704Stop["response"], PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704Stop["error"]>;
    client?: PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704Stop["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704Stop["response"], PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704Stop["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/provider-subscription-plans/945b42fc-a279-4ac5-8c00-77e635c87704/stop` as const;
    return useSWRMutation<PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704Stop["response"], PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704Stop["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704Stop["data"], PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704Stop["error"], PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704Stop["request"]>({
            method: "post",
            url,
            data,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}