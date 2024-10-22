import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33StopMutationRequest, PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33StopMutationResponse } from "../../../types/PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33Stop";

 /**
 * @summary stop
 * @link /admin/guarantee_right/716ae479-a414-4e1a-80a9-de253b560d33/stop
 */
export async function postAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33Stop(data?: PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33StopMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33StopMutationResponse>["data"]> {
    const res = await client<PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33StopMutationResponse, PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33StopMutationRequest>({ method: "post", url: `/admin/guarantee_right/716ae479-a414-4e1a-80a9-de253b560d33/stop`, baseURL: "http://{{local}}", data, ...options });
    return res.data;
}