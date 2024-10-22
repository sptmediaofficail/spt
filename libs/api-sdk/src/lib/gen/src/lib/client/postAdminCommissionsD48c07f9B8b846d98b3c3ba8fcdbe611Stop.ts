import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611StopMutationRequest, PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611StopMutationResponse } from "../../../types/PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611Stop";

 /**
 * @summary stop
 * @link /admin/commissions/d48c07f9-b8b8-46d9-8b3c-3ba8fcdbe611/stop
 */
export async function postAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611Stop(data?: PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611StopMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611StopMutationResponse>["data"]> {
    const res = await client<PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611StopMutationResponse, PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611StopMutationRequest>({ method: "post", url: `/admin/commissions/d48c07f9-b8b8-46d9-8b3c-3ba8fcdbe611/stop`, baseURL: "http://{{local}}", data, ...options });
    return res.data;
}