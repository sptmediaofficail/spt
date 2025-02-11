import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminTermsMutationRequest, PostAdminTermsMutationResponse, PostAdminTermsHeaderParams } from "../../../types/PostAdminTerms";

 /**
 * @summary create
 * @link /admin/terms
 */
export async function postAdminTerms(data?: PostAdminTermsMutationRequest, headers?: PostAdminTermsHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminTermsMutationResponse>["data"]> {
    const res = await client<PostAdminTermsMutationResponse, PostAdminTermsMutationRequest>({ method: "post", url: `/admin/terms`, baseURL: "http://{{local}}", data, headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}