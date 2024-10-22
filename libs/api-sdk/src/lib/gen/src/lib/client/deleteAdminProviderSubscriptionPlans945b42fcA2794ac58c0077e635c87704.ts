import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { DeleteAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704MutationResponse } from "../../../types/DeleteAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704";

 /**
 * @summary delete
 * @link /admin/provider-subscription-plans/945b42fc-a279-4ac5-8c00-77e635c87704
 */
export async function deleteAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<DeleteAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704MutationResponse>["data"]> {
    const res = await client<DeleteAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704MutationResponse>({ method: "delete", url: `/admin/provider-subscription-plans/945b42fc-a279-4ac5-8c00-77e635c87704`, baseURL: "http://{{local}}", ...options });
    return res.data;
}