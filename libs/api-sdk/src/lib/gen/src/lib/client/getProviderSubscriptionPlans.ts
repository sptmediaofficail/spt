import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetProviderSubscriptionPlansQueryResponse, GetProviderSubscriptionPlansQueryParams, GetProviderSubscriptionPlansHeaderParams } from "../../../types/GetProviderSubscriptionPlans";

 /**
 * @summary plans
 * @link /provider/subscription/plans
 */
export async function getProviderSubscriptionPlans(params?: GetProviderSubscriptionPlansQueryParams, headers?: GetProviderSubscriptionPlansHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetProviderSubscriptionPlansQueryResponse>["data"]> {
    const res = await client<GetProviderSubscriptionPlansQueryResponse>({ method: "get", url: `/provider/subscription/plans`, baseURL: "http://{{local}}", params, headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}