import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminPagesMutationRequest, PostAdminPagesMutationResponse, PostAdminPagesHeaderParams } from "../../../types/PostAdminPages";

 /**
 * @summary create
 * @link /admin/pages
 */
export async function postAdminPages(data?: PostAdminPagesMutationRequest, headers?: PostAdminPagesHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminPagesMutationResponse>["data"]> {
    const res = await client<PostAdminPagesMutationResponse, PostAdminPagesMutationRequest>({ method: "post", url: `/admin/pages`, baseURL: "http://{{local}}", data, headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}