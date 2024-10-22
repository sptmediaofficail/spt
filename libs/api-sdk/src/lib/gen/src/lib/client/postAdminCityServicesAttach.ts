import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminCityServicesAttachMutationRequest, PostAdminCityServicesAttachMutationResponse, PostAdminCityServicesAttachHeaderParams } from "../../../types/PostAdminCityServicesAttach";

 /**
 * @summary attach-service
 * @link /admin/city-services/attach
 */
export async function postAdminCityServicesAttach(data?: PostAdminCityServicesAttachMutationRequest, headers?: PostAdminCityServicesAttachHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminCityServicesAttachMutationResponse>["data"]> {
    const res = await client<PostAdminCityServicesAttachMutationResponse, PostAdminCityServicesAttachMutationRequest>({ method: "post", url: `/admin/city-services/attach`, baseURL: "http://{{local}}", data, headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}