import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminCommissionsMutationRequest, PostAdminCommissionsMutationResponse, PostAdminCommissionsQueryParams, PostAdminCommissionsHeaderParams } from "../../../types/PostAdminCommissions";

 /**
 * @summary create
 * @link /admin/commissions
 */
export async function postAdminCommissions(data?: PostAdminCommissionsMutationRequest, params?: PostAdminCommissionsQueryParams, headers?: PostAdminCommissionsHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminCommissionsMutationResponse>["data"]> {
    const res = await client<PostAdminCommissionsMutationResponse, PostAdminCommissionsMutationRequest>({ method: "post", url: `/admin/commissions`, baseURL: "http://{{local}}", params, data, headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}