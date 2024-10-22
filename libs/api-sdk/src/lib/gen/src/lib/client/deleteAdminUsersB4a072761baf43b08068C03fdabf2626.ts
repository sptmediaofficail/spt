import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { DeleteAdminUsersB4a072761baf43b08068C03fdabf2626MutationResponse } from "../../../types/DeleteAdminUsersB4a072761baf43b08068C03fdabf2626";

 /**
 * @summary delete
 * @link /admin/users/b4a07276-1baf-43b0-8068-c03fdabf2626
 */
export async function deleteAdminUsersB4a072761baf43b08068C03fdabf2626(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<DeleteAdminUsersB4a072761baf43b08068C03fdabf2626MutationResponse>["data"]> {
    const res = await client<DeleteAdminUsersB4a072761baf43b08068C03fdabf2626MutationResponse>({ method: "delete", url: `/admin/users/b4a07276-1baf-43b0-8068-c03fdabf2626`, baseURL: "http://{{local}}", ...options });
    return res.data;
}