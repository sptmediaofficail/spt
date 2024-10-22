import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611RestoreMutationRequest, PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611RestoreMutationResponse } from "../../../types/PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611Restore";

 /**
 * @summary restore
 * @link /admin/commissions/d48c07f9-b8b8-46d9-8b3c-3ba8fcdbe611/restore
 */
export async function postAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611Restore(data?: PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611RestoreMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611RestoreMutationResponse>["data"]> {
    const res = await client<PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611RestoreMutationResponse, PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611RestoreMutationRequest>({ method: "post", url: `/admin/commissions/d48c07f9-b8b8-46d9-8b3c-3ba8fcdbe611/restore`, baseURL: "http://{{local}}", data, ...options });
    return res.data;
}