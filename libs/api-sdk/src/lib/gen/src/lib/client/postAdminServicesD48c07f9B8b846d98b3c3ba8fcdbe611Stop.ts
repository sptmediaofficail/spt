import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611StopMutationRequest, PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611StopMutationResponse } from "../../../types/PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611Stop";

 /**
 * @summary stop
 * @link /admin/services/d48c07f9-b8b8-46d9-8b3c-3ba8fcdbe611/stop
 */
export async function postAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611Stop(data?: PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611StopMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611StopMutationResponse>["data"]> {
    const res = await client<PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611StopMutationResponse, PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611StopMutationRequest>({ method: "post", url: `/admin/services/d48c07f9-b8b8-46d9-8b3c-3ba8fcdbe611/stop`, baseURL: "http://{{local}}", data, ...options });
    return res.data;
}