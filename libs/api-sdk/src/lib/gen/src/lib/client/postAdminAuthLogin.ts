import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminAuthLoginMutationRequest, PostAdminAuthLoginMutationResponse } from "../../../types/PostAdminAuthLogin";

 /**
 * @summary Login
 * @link /admin/auth/login
 */
export async function postAdminAuthLogin(data?: PostAdminAuthLoginMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminAuthLoginMutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostAdminAuthLoginMutationResponse, PostAdminAuthLoginMutationRequest>({ method: "post", url: `/admin/auth/login`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...options.headers }, ...options });
    return res.data;
}