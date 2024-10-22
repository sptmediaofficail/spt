import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminServicesMutationRequest, PostAdminServicesMutationResponse } from "../../../types/PostAdminServices";

 /**
 * @summary create
 * @link /admin/services
 */
export async function postAdminServices(data?: PostAdminServicesMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminServicesMutationResponse>["data"]> {
    const res = await client<PostAdminServicesMutationResponse, PostAdminServicesMutationRequest>({ method: "post", url: `/admin/services`, baseURL: "http://{{local}}", data, ...options });
    return res.data;
}