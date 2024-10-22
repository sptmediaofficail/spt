import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { DeleteAdminPartners862cfc1a45634ac38bb85f75eeddd6e7MutationResponse } from "../../../types/DeleteAdminPartners862cfc1a45634ac38bb85f75eeddd6e7";

 /**
 * @summary delete
 * @link /admin/partners/862cfc1a-4563-4ac3-8bb8-5f75eeddd6e7
 */
export async function deleteAdminPartners862cfc1a45634ac38bb85f75eeddd6e7(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<DeleteAdminPartners862cfc1a45634ac38bb85f75eeddd6e7MutationResponse>["data"]> {
    const res = await client<DeleteAdminPartners862cfc1a45634ac38bb85f75eeddd6e7MutationResponse>({ method: "delete", url: `/admin/partners/862cfc1a-4563-4ac3-8bb8-5f75eeddd6e7`, baseURL: "http://{{local}}", ...options });
    return res.data;
}