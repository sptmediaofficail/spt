import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { DeleteAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33MutationResponse } from "../../../types/DeleteAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33";

 /**
 * @summary delete
 * @link /admin/guarantee_right/716ae479-a414-4e1a-80a9-de253b560d33
 */
export async function deleteAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<DeleteAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33MutationResponse>["data"]> {
    const res = await client<DeleteAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33MutationResponse>({ method: "delete", url: `/admin/guarantee_right/716ae479-a414-4e1a-80a9-de253b560d33`, baseURL: "http://{{local}}", ...options });
    return res.data;
}