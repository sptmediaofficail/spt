import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetMessagesQueryResponse, GetMessagesHeaderParams } from "../../../types/GetMessages";

 /**
 * @summary Get All Messages of the Logged In User
 * @link /messages/
 */
export async function getMessages(headers?: GetMessagesHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetMessagesQueryResponse>["data"]> {
    const res = await client<GetMessagesQueryResponse>({ method: "get", url: `/messages/`, baseURL: "http://{{local}}", headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}