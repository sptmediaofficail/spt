import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminMessagesDelete6aa8ddfc861c4c42B7c406dbb20627adMutationRequest, PostAdminMessagesDelete6aa8ddfc861c4c42B7c406dbb20627adMutationResponse, PostAdminMessagesDelete6aa8ddfc861c4c42B7c406dbb20627adHeaderParams } from "../../../types/PostAdminMessagesDelete6aa8ddfc861c4c42B7c406dbb20627ad";

 /**
 * @summary Delete a specific message
 * @link /admin/messages/delete/6aa8ddfc-861c-4c42-b7c4-06dbb20627ad
 */
export async function postAdminMessagesDelete6aa8ddfc861c4c42B7c406dbb20627ad(data?: PostAdminMessagesDelete6aa8ddfc861c4c42B7c406dbb20627adMutationRequest, headers?: PostAdminMessagesDelete6aa8ddfc861c4c42B7c406dbb20627adHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminMessagesDelete6aa8ddfc861c4c42B7c406dbb20627adMutationResponse>["data"]> {
    const res = await client<PostAdminMessagesDelete6aa8ddfc861c4c42B7c406dbb20627adMutationResponse, PostAdminMessagesDelete6aa8ddfc861c4c42B7c406dbb20627adMutationRequest>({ method: "post", url: `/admin/messages/delete/6aa8ddfc-861c-4c42-b7c4-06dbb20627ad`, baseURL: "http://{{local}}", data, headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}