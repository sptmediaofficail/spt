import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetLandingPlatformReviewsQueryResponse } from "../../../types/GetLandingPlatformReviews";

 /**
 * @summary platform_reviews
 * @link /landing/platform_reviews
 */
export async function getLandingPlatformReviews(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetLandingPlatformReviewsQueryResponse>["data"]> {
    const res = await client<GetLandingPlatformReviewsQueryResponse>({ method: "get", url: `/landing/platform_reviews`, baseURL: "http://{{local}}", ...options });
    return res.data;
}