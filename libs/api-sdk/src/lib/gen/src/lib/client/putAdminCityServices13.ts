import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PutAdminCityServices13MutationRequest, PutAdminCityServices13MutationResponse, PutAdminCityServices13HeaderParams } from "../../../types/PutAdminCityServices13";

 /**
 * @summary update
 * @link /admin/city-services/13
 */
export async function putAdminCityServices13(data?: PutAdminCityServices13MutationRequest, headers?: PutAdminCityServices13HeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PutAdminCityServices13MutationResponse>["data"]> {
    const res = await client<PutAdminCityServices13MutationResponse, PutAdminCityServices13MutationRequest>({ method: "put", url: `/admin/city-services/13`, baseURL: "http://{{local}}", data, headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}