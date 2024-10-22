import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostTicketMessageMutationRequest, PostTicketMessageMutationResponse, PostTicketMessageHeaderParams } from "../../../types/PostTicketMessage";

 /**
 * @summary message
 * @link /ticket/message
 */
export async function postTicketMessage(data?: PostTicketMessageMutationRequest, headers?: PostTicketMessageHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostTicketMessageMutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostTicketMessageMutationResponse, PostTicketMessageMutationRequest>({ method: "post", url: `/ticket/message`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...headers, ...options.headers }, ...options });
    return res.data;
}