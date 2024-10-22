import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostNotificationMarkAsReadMutationRequest, PostNotificationMarkAsReadMutationResponse, PostNotificationMarkAsReadHeaderParams } from "../../../types/PostNotificationMarkAsRead";

 /**
 * @summary mark as read
 * @link /notification/mark_as_read
 */
export async function postNotificationMarkAsRead(data?: PostNotificationMarkAsReadMutationRequest, headers?: PostNotificationMarkAsReadHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostNotificationMarkAsReadMutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostNotificationMarkAsReadMutationResponse, PostNotificationMarkAsReadMutationRequest>({ method: "post", url: `/notification/mark_as_read`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...headers, ...options.headers }, ...options });
    return res.data;
}