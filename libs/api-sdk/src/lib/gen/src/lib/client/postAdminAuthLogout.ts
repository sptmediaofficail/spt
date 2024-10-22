import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminAuthLogoutMutationRequest, PostAdminAuthLogoutMutationResponse } from "../../../types/PostAdminAuthLogout";

 /**
 * @summary Logout
 * @link /admin/auth/logout
 */
export async function postAdminAuthLogout(data?: PostAdminAuthLogoutMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminAuthLogoutMutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostAdminAuthLogoutMutationResponse, PostAdminAuthLogoutMutationRequest>({ method: "post", url: `/admin/auth/logout`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...options.headers }, ...options });
    return res.data;
}