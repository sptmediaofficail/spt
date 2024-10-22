import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PutAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330MutationRequest, PutAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330MutationResponse, PutAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330HeaderParams } from "../../../types/PutAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330";

 /**
 * @summary update
 * @link /admin/commissions/51a7447f-3bfd-4e89-a7f3-1969c8fb9330
 */
export async function putAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330(data?: PutAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330MutationRequest, headers?: PutAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330HeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PutAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330MutationResponse>["data"]> {
    const res = await client<PutAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330MutationResponse, PutAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330MutationRequest>({ method: "put", url: `/admin/commissions/51a7447f-3bfd-4e89-a7f3-1969c8fb9330`, baseURL: "http://{{local}}", data, headers: { "Content-Type": "*/*", ...headers, ...options.headers }, ...options });
    return res.data;
}