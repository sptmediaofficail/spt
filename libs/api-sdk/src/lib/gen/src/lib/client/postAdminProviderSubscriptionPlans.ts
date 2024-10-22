import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminProviderSubscriptionPlansMutationRequest, PostAdminProviderSubscriptionPlansMutationResponse, PostAdminProviderSubscriptionPlansHeaderParams } from "../../../types/PostAdminProviderSubscriptionPlans";

 /**
 * @summary create
 * @link /admin/provider-subscription-plans
 */
export async function postAdminProviderSubscriptionPlans(data?: PostAdminProviderSubscriptionPlansMutationRequest, headers?: PostAdminProviderSubscriptionPlansHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminProviderSubscriptionPlansMutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostAdminProviderSubscriptionPlansMutationResponse, PostAdminProviderSubscriptionPlansMutationRequest>({ method: "post", url: `/admin/provider-subscription-plans`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...headers, ...options.headers }, ...options });
    return res.data;
}