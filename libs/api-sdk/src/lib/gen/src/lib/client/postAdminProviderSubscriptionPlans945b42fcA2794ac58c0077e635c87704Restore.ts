import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704RestoreMutationRequest, PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704RestoreMutationResponse } from "../../../types/PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704Restore";

 /**
 * @summary restore
 * @link /admin/provider-subscription-plans/945b42fc-a279-4ac5-8c00-77e635c87704/restore
 */
export async function postAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704Restore(data?: PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704RestoreMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704RestoreMutationResponse>["data"]> {
    const res = await client<PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704RestoreMutationResponse, PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704RestoreMutationRequest>({ method: "post", url: `/admin/provider-subscription-plans/945b42fc-a279-4ac5-8c00-77e635c87704/restore`, baseURL: "http://{{local}}", data, ...options });
    return res.data;
}