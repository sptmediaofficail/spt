import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminPermissionGroupsMutationRequest, PostAdminPermissionGroupsMutationResponse, PostAdminPermissionGroupsHeaderParams } from "../../../types/PostAdminPermissionGroups";

 /**
 * @summary create
 * @link /admin/permission-groups
 */
export async function postAdminPermissionGroups(data?: PostAdminPermissionGroupsMutationRequest, headers?: PostAdminPermissionGroupsHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminPermissionGroupsMutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostAdminPermissionGroupsMutationResponse, PostAdminPermissionGroupsMutationRequest>({ method: "post", url: `/admin/permission-groups`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...headers, ...options.headers }, ...options });
    return res.data;
}