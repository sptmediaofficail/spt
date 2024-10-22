import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostTicketMutationRequest, PostTicketMutationResponse, PostTicketHeaderParams } from "../../../types/PostTicket";

 /**
 * @summary ticket
 * @link /ticket
 */
export async function postTicket(data?: PostTicketMutationRequest, headers?: PostTicketHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostTicketMutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostTicketMutationResponse, PostTicketMutationRequest>({ method: "post", url: `/ticket`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...headers, ...options.headers }, ...options });
    return res.data;
}