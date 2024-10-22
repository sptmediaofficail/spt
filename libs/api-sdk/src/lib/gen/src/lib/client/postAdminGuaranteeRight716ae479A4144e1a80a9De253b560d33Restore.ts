import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33RestoreMutationRequest, PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33RestoreMutationResponse } from "../../../types/PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33Restore";

 /**
 * @summary restore
 * @link /admin/guarantee_right/716ae479-a414-4e1a-80a9-de253b560d33/restore
 */
export async function postAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33Restore(data?: PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33RestoreMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33RestoreMutationResponse>["data"]> {
    const res = await client<PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33RestoreMutationResponse, PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33RestoreMutationRequest>({ method: "post", url: `/admin/guarantee_right/716ae479-a414-4e1a-80a9-de253b560d33/restore`, baseURL: "http://{{local}}", data, ...options });
    return res.data;
}