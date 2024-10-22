import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetAdminPlatformReviewsQueryResponse, GetAdminPlatformReviewsQueryParams } from "../../../types/GetAdminPlatformReviews";

 /**
 * @summary list
 * @link /admin/platform-reviews
 */
export async function getAdminPlatformReviews(params?: GetAdminPlatformReviewsQueryParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetAdminPlatformReviewsQueryResponse>["data"]> {
    const res = await client<GetAdminPlatformReviewsQueryResponse>({ method: "get", url: `/admin/platform-reviews`, baseURL: "http://{{local}}", params, ...options });
    return res.data;
}