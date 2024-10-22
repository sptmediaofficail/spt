import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetAdminCommissionsQueryResponse, GetAdminCommissionsQueryParams } from "../../../types/GetAdminCommissions";

 /**
 * @summary index
 * @link /admin/commissions
 */
export async function getAdminCommissions(params?: GetAdminCommissionsQueryParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetAdminCommissionsQueryResponse>["data"]> {
    const res = await client<GetAdminCommissionsQueryResponse>({ method: "get", url: `/admin/commissions`, baseURL: "http://{{local}}", params, ...options });
    return res.data;
}