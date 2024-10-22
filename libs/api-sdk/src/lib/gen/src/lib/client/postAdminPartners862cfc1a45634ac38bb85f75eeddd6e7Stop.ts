import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7StopMutationRequest, PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7StopMutationResponse } from "../../../types/PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7Stop";

 /**
 * @summary stop
 * @link /admin/partners/862cfc1a-4563-4ac3-8bb8-5f75eeddd6e7/stop
 */
export async function postAdminPartners862cfc1a45634ac38bb85f75eeddd6e7Stop(data?: PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7StopMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7StopMutationResponse>["data"]> {
    const res = await client<PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7StopMutationResponse, PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7StopMutationRequest>({ method: "post", url: `/admin/partners/862cfc1a-4563-4ac3-8bb8-5f75eeddd6e7/stop`, baseURL: "http://{{local}}", data, ...options });
    return res.data;
}