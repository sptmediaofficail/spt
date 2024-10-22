import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7RestoreMutationRequest, PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7RestoreMutationResponse } from "../../../types/PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7Restore";

 /**
 * @summary restore
 * @link /admin/partners/862cfc1a-4563-4ac3-8bb8-5f75eeddd6e7/restore
 */
export async function postAdminPartners862cfc1a45634ac38bb85f75eeddd6e7Restore(data?: PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7RestoreMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7RestoreMutationResponse>["data"]> {
    const res = await client<PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7RestoreMutationResponse, PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7RestoreMutationRequest>({ method: "post", url: `/admin/partners/862cfc1a-4563-4ac3-8bb8-5f75eeddd6e7/restore`, baseURL: "http://{{local}}", data, ...options });
    return res.data;
}