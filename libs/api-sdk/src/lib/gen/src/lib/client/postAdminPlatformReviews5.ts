import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminPlatformReviews5MutationRequest, PostAdminPlatformReviews5MutationResponse, PostAdminPlatformReviews5HeaderParams } from "../../../types/PostAdminPlatformReviews5";

 /**
 * @summary update
 * @link /admin/platform-reviews/5
 */
export async function postAdminPlatformReviews5(data?: PostAdminPlatformReviews5MutationRequest, headers?: PostAdminPlatformReviews5HeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminPlatformReviews5MutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostAdminPlatformReviews5MutationResponse, PostAdminPlatformReviews5MutationRequest>({ method: "post", url: `/admin/platform-reviews/5`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...headers, ...options.headers }, ...options });
    return res.data;
}