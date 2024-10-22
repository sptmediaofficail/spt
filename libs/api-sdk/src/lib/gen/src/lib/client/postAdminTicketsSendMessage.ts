import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminTicketsSendMessageMutationRequest, PostAdminTicketsSendMessageMutationResponse } from "../../../types/PostAdminTicketsSendMessage";

 /**
 * @summary send messages
 * @link /admin/tickets/send_message
 */
export async function postAdminTicketsSendMessage(data?: PostAdminTicketsSendMessageMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminTicketsSendMessageMutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostAdminTicketsSendMessageMutationResponse, PostAdminTicketsSendMessageMutationRequest>({ method: "post", url: `/admin/tickets/send_message`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...options.headers }, ...options });
    return res.data;
}