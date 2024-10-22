import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetAdminProviderSubscriptionPlansQueryResponse, GetAdminProviderSubscriptionPlansQueryParams } from "../../../types/GetAdminProviderSubscriptionPlans";

 /**
 * @summary index
 * @link /admin/provider-subscription-plans
 */
export async function getAdminProviderSubscriptionPlans(params?: GetAdminProviderSubscriptionPlansQueryParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetAdminProviderSubscriptionPlansQueryResponse>["data"]> {
    const res = await client<GetAdminProviderSubscriptionPlansQueryResponse>({ method: "get", url: `/admin/provider-subscription-plans`, baseURL: "http://{{local}}", params, ...options });
    return res.data;
}