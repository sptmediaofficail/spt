import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330StopMutationRequest, PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330StopMutationResponse } from "../../../types/PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330Stop";

 /**
 * @summary stop
 * @link /admin/platform-reviews/51a7447f-3bfd-4e89-a7f3-1969c8fb9330/stop
 */
export async function postAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330Stop(data?: PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330StopMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330StopMutationResponse>["data"]> {
    const res = await client<PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330StopMutationResponse, PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330StopMutationRequest>({ method: "post", url: `/admin/platform-reviews/51a7447f-3bfd-4e89-a7f3-1969c8fb9330/stop`, baseURL: "http://{{local}}", data, ...options });
    return res.data;
}