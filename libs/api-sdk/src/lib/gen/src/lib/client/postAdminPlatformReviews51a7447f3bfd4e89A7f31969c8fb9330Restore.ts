import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330RestoreMutationRequest, PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330RestoreMutationResponse } from "../../../types/PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330Restore";

 /**
 * @summary restore
 * @link /admin/platform-reviews/51a7447f-3bfd-4e89-a7f3-1969c8fb9330/restore
 */
export async function postAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330Restore(data?: PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330RestoreMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330RestoreMutationResponse>["data"]> {
    const res = await client<PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330RestoreMutationResponse, PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330RestoreMutationRequest>({ method: "post", url: `/admin/platform-reviews/51a7447f-3bfd-4e89-a7f3-1969c8fb9330/restore`, baseURL: "http://{{local}}", data, ...options });
    return res.data;
}