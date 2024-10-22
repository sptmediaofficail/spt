import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42RestoreMutationRequest, PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42RestoreMutationResponse } from "../../../types/PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42Restore";

 /**
 * @summary restore
 * @link /admin/permission-groups/0e368569-8d07-4efb-a367-182dd5e2db42/restore
 */
export async function postAdminPermissionGroups0e3685698d074efbA367182dd5e2db42Restore(data?: PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42RestoreMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42RestoreMutationResponse>["data"]> {
    const res = await client<PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42RestoreMutationResponse, PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42RestoreMutationRequest>({ method: "post", url: `/admin/permission-groups/0e368569-8d07-4efb-a367-182dd5e2db42/restore`, baseURL: "http://{{local}}", data, ...options });
    return res.data;
}