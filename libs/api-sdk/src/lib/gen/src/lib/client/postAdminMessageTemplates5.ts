import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminMessageTemplates5MutationRequest, PostAdminMessageTemplates5MutationResponse, PostAdminMessageTemplates5HeaderParams } from "../../../types/PostAdminMessageTemplates5";

 /**
 * @summary Update Exist Message Template
 * @link /admin/message-templates/5
 */
export async function postAdminMessageTemplates5(data?: PostAdminMessageTemplates5MutationRequest, headers?: PostAdminMessageTemplates5HeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminMessageTemplates5MutationResponse>["data"]> {
    const res = await client<PostAdminMessageTemplates5MutationResponse, PostAdminMessageTemplates5MutationRequest>({ method: "post", url: `/admin/message-templates/5`, baseURL: "http://{{local}}", data, headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}