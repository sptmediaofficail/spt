import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminTermsIdMutationRequest, PostAdminTermsIdMutationResponse, PostAdminTermsIdPathParams, PostAdminTermsIdHeaderParams } from "../../../types/PostAdminTermsId";

 /**
 * @summary update
 * @link /admin/terms/:id
 */
export async function postAdminTermsId(id: PostAdminTermsIdPathParams["id"], data?: PostAdminTermsIdMutationRequest, headers?: PostAdminTermsIdHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminTermsIdMutationResponse>["data"]> {
    const res = await client<PostAdminTermsIdMutationResponse, PostAdminTermsIdMutationRequest>({ method: "post", url: `/admin/terms/${id}`, baseURL: "http://{{local}}", data, headers: { "Content-Type": "*/*", ...headers, ...options.headers }, ...options });
    return res.data;
}