import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42StopMutationRequest, PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42StopMutationResponse } from "../../../types/PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42Stop";

 /**
 * @summary stop
 * @link /admin/permission-groups/0e368569-8d07-4efb-a367-182dd5e2db42/stop
 */
export async function postAdminPermissionGroups0e3685698d074efbA367182dd5e2db42Stop(data?: PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42StopMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42StopMutationResponse>["data"]> {
    const res = await client<PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42StopMutationResponse, PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42StopMutationRequest>({ method: "post", url: `/admin/permission-groups/0e368569-8d07-4efb-a367-182dd5e2db42/stop`, baseURL: "http://{{local}}", data, ...options });
    return res.data;
}