import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { DeleteAdminTerms5MutationResponse } from "../../../types/DeleteAdminTerms5";

 /**
 * @summary delete
 * @link /admin/terms/5
 */
export async function deleteAdminTerms5(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<DeleteAdminTerms5MutationResponse>["data"]> {
    const res = await client<DeleteAdminTerms5MutationResponse>({ method: "delete", url: `/admin/terms/5`, baseURL: "http://{{local}}", ...options });
    return res.data;
}