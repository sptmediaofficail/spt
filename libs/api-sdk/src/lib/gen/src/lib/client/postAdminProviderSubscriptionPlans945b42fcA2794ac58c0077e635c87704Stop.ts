import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704StopMutationRequest, PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704StopMutationResponse } from "../../../types/PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704Stop";

 /**
 * @summary stop
 * @link /admin/provider-subscription-plans/945b42fc-a279-4ac5-8c00-77e635c87704/stop
 */
export async function postAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704Stop(data?: PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704StopMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704StopMutationResponse>["data"]> {
    const res = await client<PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704StopMutationResponse, PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704StopMutationRequest>({ method: "post", url: `/admin/provider-subscription-plans/945b42fc-a279-4ac5-8c00-77e635c87704/stop`, baseURL: "http://{{local}}", data, ...options });
    return res.data;
}