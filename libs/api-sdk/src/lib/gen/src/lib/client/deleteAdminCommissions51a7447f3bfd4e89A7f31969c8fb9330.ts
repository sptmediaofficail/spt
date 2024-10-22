import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { DeleteAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330MutationResponse } from "../../../types/DeleteAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330";

 /**
 * @summary delete
 * @link /admin/commissions/51a7447f-3bfd-4e89-a7f3-1969c8fb9330
 */
export async function deleteAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<DeleteAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330MutationResponse>["data"]> {
    const res = await client<DeleteAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330MutationResponse>({ method: "delete", url: `/admin/commissions/51a7447f-3bfd-4e89-a7f3-1969c8fb9330`, baseURL: "http://{{local}}", ...options });
    return res.data;
}