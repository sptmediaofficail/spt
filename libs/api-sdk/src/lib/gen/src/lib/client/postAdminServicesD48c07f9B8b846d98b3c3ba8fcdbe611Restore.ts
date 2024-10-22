import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611RestoreMutationRequest, PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611RestoreMutationResponse } from "../../../types/PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611Restore";

 /**
 * @summary restore
 * @link /admin/services/d48c07f9-b8b8-46d9-8b3c-3ba8fcdbe611/restore
 */
export async function postAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611Restore(data?: PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611RestoreMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611RestoreMutationResponse>["data"]> {
    const res = await client<PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611RestoreMutationResponse, PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611RestoreMutationRequest>({ method: "post", url: `/admin/services/d48c07f9-b8b8-46d9-8b3c-3ba8fcdbe611/restore`, baseURL: "http://{{local}}", data, ...options });
    return res.data;
}