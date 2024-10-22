import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminMessagesReply8899eddd256740b6Bcaa85ed7d53d226MutationRequest, PostAdminMessagesReply8899eddd256740b6Bcaa85ed7d53d226MutationResponse, PostAdminMessagesReply8899eddd256740b6Bcaa85ed7d53d226HeaderParams } from "../../../types/PostAdminMessagesReply8899eddd256740b6Bcaa85ed7d53d226";

 /**
 * @summary Reply to a specific message
 * @link /admin/messages/reply/8899eddd-2567-40b6-bcaa-85ed7d53d226
 */
export async function postAdminMessagesReply8899eddd256740b6Bcaa85ed7d53d226(data?: PostAdminMessagesReply8899eddd256740b6Bcaa85ed7d53d226MutationRequest, headers?: PostAdminMessagesReply8899eddd256740b6Bcaa85ed7d53d226HeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminMessagesReply8899eddd256740b6Bcaa85ed7d53d226MutationResponse>["data"]> {
    const res = await client<PostAdminMessagesReply8899eddd256740b6Bcaa85ed7d53d226MutationResponse, PostAdminMessagesReply8899eddd256740b6Bcaa85ed7d53d226MutationRequest>({ method: "post", url: `/admin/messages/reply/8899eddd-2567-40b6-bcaa-85ed7d53d226`, baseURL: "http://{{local}}", data, headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}