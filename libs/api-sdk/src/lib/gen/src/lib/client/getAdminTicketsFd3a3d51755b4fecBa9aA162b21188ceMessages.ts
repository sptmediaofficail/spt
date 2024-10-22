import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetAdminTicketsFd3a3d51755b4fecBa9aA162b21188ceMessagesQueryResponse, GetAdminTicketsFd3a3d51755b4fecBa9aA162b21188ceMessagesQueryParams } from "../../../types/GetAdminTicketsFd3a3d51755b4fecBa9aA162b21188ceMessages";

 /**
 * @summary messages
 * @link /admin/tickets/fd3a3d51-755b-4fec-ba9a-a162b21188ce/messages
 */
export async function getAdminTicketsFd3a3d51755b4fecBa9aA162b21188ceMessages(params?: GetAdminTicketsFd3a3d51755b4fecBa9aA162b21188ceMessagesQueryParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetAdminTicketsFd3a3d51755b4fecBa9aA162b21188ceMessagesQueryResponse>["data"]> {
    const res = await client<GetAdminTicketsFd3a3d51755b4fecBa9aA162b21188ceMessagesQueryResponse>({ method: "get", url: `/admin/tickets/fd3a3d51-755b-4fec-ba9a-a162b21188ce/messages`, baseURL: "http://{{local}}", params, ...options });
    return res.data;
}