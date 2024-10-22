import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetAdminTicketsQueryResponse, GetAdminTicketsQueryParams } from "../../../types/GetAdminTickets";

 /**
 * @summary index
 * @link /admin/tickets
 */
export async function getAdminTickets(params?: GetAdminTicketsQueryParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetAdminTicketsQueryResponse>["data"]> {
    const res = await client<GetAdminTicketsQueryResponse>({ method: "get", url: `/admin/tickets`, baseURL: "http://{{local}}", params, ...options });
    return res.data;
}