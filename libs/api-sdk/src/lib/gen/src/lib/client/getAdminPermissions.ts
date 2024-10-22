import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetAdminPermissionsQueryResponse } from "../../../types/GetAdminPermissions";

 /**
 * @summary index
 * @link /admin/permissions
 */
export async function getAdminPermissions(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetAdminPermissionsQueryResponse>["data"]> {
    const res = await client<GetAdminPermissionsQueryResponse>({ method: "get", url: `/admin/permissions`, baseURL: "http://{{local}}", ...options });
    return res.data;
}