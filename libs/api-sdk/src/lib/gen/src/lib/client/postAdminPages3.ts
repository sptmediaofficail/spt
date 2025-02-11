import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminPages3MutationRequest, PostAdminPages3MutationResponse, PostAdminPages3HeaderParams } from "../../../types/PostAdminPages3";

 /**
 * @summary update
 * @link /admin/pages/3
 */
export async function postAdminPages3(data?: PostAdminPages3MutationRequest, headers?: PostAdminPages3HeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminPages3MutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostAdminPages3MutationResponse, PostAdminPages3MutationRequest>({ method: "post", url: `/admin/pages/3`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...headers, ...options.headers }, ...options });
    return res.data;
}