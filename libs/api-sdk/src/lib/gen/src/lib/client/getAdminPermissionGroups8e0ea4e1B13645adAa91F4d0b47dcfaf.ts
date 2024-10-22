import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetAdminPermissionGroups8e0ea4e1B13645adAa91F4d0b47dcfafQueryResponse } from "../../../types/GetAdminPermissionGroups8e0ea4e1B13645adAa91F4d0b47dcfaf";

 /**
 * @summary single
 * @link /admin/permission-groups/8e0ea4e1-b136-45ad-aa91-f4d0b47dcfaf
 */
export async function getAdminPermissionGroups8e0ea4e1B13645adAa91F4d0b47dcfaf(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetAdminPermissionGroups8e0ea4e1B13645adAa91F4d0b47dcfafQueryResponse>["data"]> {
    const res = await client<GetAdminPermissionGroups8e0ea4e1B13645adAa91F4d0b47dcfafQueryResponse>({ method: "get", url: `/admin/permission-groups/8e0ea4e1-b136-45ad-aa91-f4d0b47dcfaf`, baseURL: "http://{{local}}", ...options });
    return res.data;
}