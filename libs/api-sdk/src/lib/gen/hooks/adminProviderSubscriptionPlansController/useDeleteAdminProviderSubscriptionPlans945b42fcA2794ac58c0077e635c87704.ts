import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { DeleteAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704MutationResponse } from "../../types/DeleteAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704";

 type DeleteAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704Client = typeof client<DeleteAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704MutationResponse, never, never>;
type DeleteAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704 = {
    data: DeleteAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704MutationResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: DeleteAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704MutationResponse;
    client: {
        parameters: Partial<Parameters<DeleteAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704Client>[0]>;
        return: Awaited<ReturnType<DeleteAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704Client>>;
    };
};
/**
 * @summary delete
 * @link /admin/provider-subscription-plans/945b42fc-a279-4ac5-8c00-77e635c87704
 */
export function useDeleteAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704(options?: {
    mutation?: SWRMutationConfiguration<DeleteAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704["response"], DeleteAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704["error"]>;
    client?: DeleteAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<DeleteAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704["response"], DeleteAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/provider-subscription-plans/945b42fc-a279-4ac5-8c00-77e635c87704` as const;
    return useSWRMutation<DeleteAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704["response"], DeleteAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704["error"], typeof url | null>(shouldFetch ? url : null, async (_url) => {
        const res = await client<DeleteAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704["data"], DeleteAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704["error"]>({
            method: "delete",
            url,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}