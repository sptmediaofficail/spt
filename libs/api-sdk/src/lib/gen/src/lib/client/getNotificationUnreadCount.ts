import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetNotificationUnreadCountQueryResponse, GetNotificationUnreadCountHeaderParams } from "../../../types/GetNotificationUnreadCount";

 /**
 * @summary unReadCount
 * @link /notification/unread_count
 */
export async function getNotificationUnreadCount(headers?: GetNotificationUnreadCountHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetNotificationUnreadCountQueryResponse>["data"]> {
    const res = await client<GetNotificationUnreadCountQueryResponse>({ method: "get", url: `/notification/unread_count`, baseURL: "http://{{local}}", headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}