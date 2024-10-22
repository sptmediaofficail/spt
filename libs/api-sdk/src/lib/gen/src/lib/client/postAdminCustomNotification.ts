import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminCustomNotificationMutationRequest, PostAdminCustomNotificationMutationResponse } from "../../../types/PostAdminCustomNotification";

 /**
 * @summary Send
 * @link /admin/custom-notification
 */
export async function postAdminCustomNotification(data?: PostAdminCustomNotificationMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminCustomNotificationMutationResponse>["data"]> {
    const res = await client<PostAdminCustomNotificationMutationResponse, PostAdminCustomNotificationMutationRequest>({ method: "post", url: `/admin/custom-notification`, baseURL: "http://{{local}}", data, ...options });
    return res.data;
}