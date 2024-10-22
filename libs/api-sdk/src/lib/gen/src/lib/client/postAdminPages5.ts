import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminPages5MutationRequest, PostAdminPages5MutationResponse, PostAdminPages5HeaderParams } from "../../../types/PostAdminPages5";

 /**
 * @summary update
 * @link /admin/pages/5
 */
export async function postAdminPages5(data?: PostAdminPages5MutationRequest, headers?: PostAdminPages5HeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminPages5MutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostAdminPages5MutationResponse, PostAdminPages5MutationRequest>({ method: "post", url: `/admin/pages/5`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...headers, ...options.headers }, ...options });
    return res.data;
}