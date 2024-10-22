import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminCityServicesDetachMutationRequest, PostAdminCityServicesDetachMutationResponse } from "../../../types/PostAdminCityServicesDetach";

 /**
 * @summary detach-service
 * @link /admin/city-services/detach
 */
export async function postAdminCityServicesDetach(data?: PostAdminCityServicesDetachMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminCityServicesDetachMutationResponse>["data"]> {
    const res = await client<PostAdminCityServicesDetachMutationResponse, PostAdminCityServicesDetachMutationRequest>({ method: "post", url: `/admin/city-services/detach`, baseURL: "http://{{local}}", data, ...options });
    return res.data;
}