import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704MutationRequest, PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704MutationResponse, PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704HeaderParams } from "../../../types/PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704";

 /**
 * @summary update
 * @link /admin/provider-subscription-plans/945b42fc-a279-4ac5-8c00-77e635c87704
 */
export async function postAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704(data?: PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704MutationRequest, headers?: PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704HeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704MutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704MutationResponse, PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704MutationRequest>({ method: "post", url: `/admin/provider-subscription-plans/945b42fc-a279-4ac5-8c00-77e635c87704`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...headers, ...options.headers }, ...options });
    return res.data;
}