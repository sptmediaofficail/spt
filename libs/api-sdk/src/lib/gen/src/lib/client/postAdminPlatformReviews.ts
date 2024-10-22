import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminPlatformReviewsMutationRequest, PostAdminPlatformReviewsMutationResponse, PostAdminPlatformReviewsHeaderParams } from "../../../types/PostAdminPlatformReviews";

 /**
 * @summary create
 * @link /admin/platform-reviews
 */
export async function postAdminPlatformReviews(data?: PostAdminPlatformReviewsMutationRequest, headers?: PostAdminPlatformReviewsHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminPlatformReviewsMutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostAdminPlatformReviewsMutationResponse, PostAdminPlatformReviewsMutationRequest>({ method: "post", url: `/admin/platform-reviews`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...headers, ...options.headers }, ...options });
    return res.data;
}