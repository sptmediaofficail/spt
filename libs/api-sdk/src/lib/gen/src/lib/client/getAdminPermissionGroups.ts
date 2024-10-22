import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetAdminPermissionGroupsQueryResponse, GetAdminPermissionGroupsQueryParams } from "../../../types/GetAdminPermissionGroups";

 /**
 * @summary index
 * @link /admin/permission-groups
 */
export async function getAdminPermissionGroups(params?: GetAdminPermissionGroupsQueryParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetAdminPermissionGroupsQueryResponse>["data"]> {
    const res = await client<GetAdminPermissionGroupsQueryResponse>({ method: "get", url: `/admin/permission-groups`, baseURL: "http://{{local}}", params, ...options });
    return res.data;
}