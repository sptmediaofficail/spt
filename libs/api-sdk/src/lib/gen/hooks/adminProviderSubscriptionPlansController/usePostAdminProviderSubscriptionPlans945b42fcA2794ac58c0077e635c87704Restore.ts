import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704RestoreMutationRequest, PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704RestoreMutationResponse } from "../../types/PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704Restore";

 type PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704RestoreClient = typeof client<PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704RestoreMutationResponse, never, PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704RestoreMutationRequest>;
type PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704Restore = {
    data: PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704RestoreMutationResponse;
    error: never;
    request: PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704RestoreMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704RestoreMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704RestoreClient>[0]>;
        return: Awaited<ReturnType<PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704RestoreClient>>;
    };
};
/**
 * @summary restore
 * @link /admin/provider-subscription-plans/945b42fc-a279-4ac5-8c00-77e635c87704/restore
 */
export function usePostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704Restore(options?: {
    mutation?: SWRMutationConfiguration<PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704Restore["response"], PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704Restore["error"]>;
    client?: PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704Restore["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704Restore["response"], PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704Restore["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/provider-subscription-plans/945b42fc-a279-4ac5-8c00-77e635c87704/restore` as const;
    return useSWRMutation<PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704Restore["response"], PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704Restore["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704Restore["data"], PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704Restore["error"], PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704Restore["request"]>({
            method: "post",
            url,
            data,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}