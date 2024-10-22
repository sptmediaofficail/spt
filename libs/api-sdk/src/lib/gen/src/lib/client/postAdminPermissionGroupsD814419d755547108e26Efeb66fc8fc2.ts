import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminPermissionGroupsD814419d755547108e26Efeb66fc8fc2MutationRequest, PostAdminPermissionGroupsD814419d755547108e26Efeb66fc8fc2MutationResponse, PostAdminPermissionGroupsD814419d755547108e26Efeb66fc8fc2HeaderParams } from "../../../types/PostAdminPermissionGroupsD814419d755547108e26Efeb66fc8fc2";

 /**
 * @summary update
 * @link /admin/permission-groups/d814419d-7555-4710-8e26-efeb66fc8fc2
 */
export async function postAdminPermissionGroupsD814419d755547108e26Efeb66fc8fc2(data?: PostAdminPermissionGroupsD814419d755547108e26Efeb66fc8fc2MutationRequest, headers?: PostAdminPermissionGroupsD814419d755547108e26Efeb66fc8fc2HeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminPermissionGroupsD814419d755547108e26Efeb66fc8fc2MutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostAdminPermissionGroupsD814419d755547108e26Efeb66fc8fc2MutationResponse, PostAdminPermissionGroupsD814419d755547108e26Efeb66fc8fc2MutationRequest>({ method: "post", url: `/admin/permission-groups/d814419d-7555-4710-8e26-efeb66fc8fc2`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...headers, ...options.headers }, ...options });
    return res.data;
}