import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetAdminMessagesQueryResponse, GetAdminMessagesHeaderParams } from "../../../types/GetAdminMessages";

 /**
 * @summary Get All Unreplied Messages
 * @link /admin/messages
 */
export async function getAdminMessages(headers?: GetAdminMessagesHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetAdminMessagesQueryResponse>["data"]> {
    const res = await client<GetAdminMessagesQueryResponse>({ method: "get", url: `/admin/messages`, baseURL: "http://{{local}}", headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}