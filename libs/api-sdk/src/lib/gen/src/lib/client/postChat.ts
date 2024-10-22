import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostChatMutationRequest, PostChatMutationResponse, PostChatHeaderParams } from "../../../types/PostChat";

 /**
 * @summary Chat
 * @link /chat
 */
export async function postChat(data?: PostChatMutationRequest, headers?: PostChatHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostChatMutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostChatMutationResponse, PostChatMutationRequest>({ method: "post", url: `/chat`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...headers, ...options.headers }, ...options });
    return res.data;
}