import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { DeleteAdminCitiesB4a072761baf43b08068C03fdabf2626MutationResponse } from "../../../types/DeleteAdminCitiesB4a072761baf43b08068C03fdabf2626";

 /**
 * @summary delete
 * @link /admin/cities/b4a07276-1baf-43b0-8068-c03fdabf2626
 */
export async function deleteAdminCitiesB4a072761baf43b08068C03fdabf2626(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<DeleteAdminCitiesB4a072761baf43b08068C03fdabf2626MutationResponse>["data"]> {
    const res = await client<DeleteAdminCitiesB4a072761baf43b08068C03fdabf2626MutationResponse>({ method: "delete", url: `/admin/cities/b4a07276-1baf-43b0-8068-c03fdabf2626`, baseURL: "http://{{local}}", ...options });
    return res.data;
}