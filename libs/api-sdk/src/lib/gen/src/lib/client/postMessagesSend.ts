import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostMessagesSendMutationRequest, PostMessagesSendMutationResponse, PostMessagesSendHeaderParams } from "../../../types/PostMessagesSend";

 /**
 * @summary Send Message
 * @link /messages/send
 */
export async function postMessagesSend(data?: PostMessagesSendMutationRequest, headers?: PostMessagesSendHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostMessagesSendMutationResponse>["data"]> {
    const res = await client<PostMessagesSendMutationResponse, PostMessagesSendMutationRequest>({ method: "post", url: `/messages/send`, baseURL: "http://{{local}}", data, headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}