import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetPlatformReviewsQueryResponse, GetPlatformReviewsQueryParams } from "../../../types/GetPlatformReviews";

 /**
 * @summary list
 * @link /platform-reviews
 */
export async function getPlatformReviews(params?: GetPlatformReviewsQueryParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetPlatformReviewsQueryResponse>["data"]> {
    const res = await client<GetPlatformReviewsQueryResponse>({ method: "get", url: `/platform-reviews`, baseURL: "http://{{local}}", params, ...options });
    return res.data;
}