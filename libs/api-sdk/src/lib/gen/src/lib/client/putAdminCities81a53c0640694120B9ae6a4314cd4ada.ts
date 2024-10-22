import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PutAdminCities81a53c0640694120B9ae6a4314cd4adaMutationRequest, PutAdminCities81a53c0640694120B9ae6a4314cd4adaMutationResponse, PutAdminCities81a53c0640694120B9ae6a4314cd4adaHeaderParams } from "../../../types/PutAdminCities81a53c0640694120B9ae6a4314cd4ada";

 /**
 * @summary update
 * @link /admin/cities/81a53c06-4069-4120-b9ae-6a4314cd4ada
 */
export async function putAdminCities81a53c0640694120B9ae6a4314cd4ada(data?: PutAdminCities81a53c0640694120B9ae6a4314cd4adaMutationRequest, headers?: PutAdminCities81a53c0640694120B9ae6a4314cd4adaHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PutAdminCities81a53c0640694120B9ae6a4314cd4adaMutationResponse>["data"]> {
    const res = await client<PutAdminCities81a53c0640694120B9ae6a4314cd4adaMutationResponse, PutAdminCities81a53c0640694120B9ae6a4314cd4adaMutationRequest>({ method: "put", url: `/admin/cities/81a53c06-4069-4120-b9ae-6a4314cd4ada`, baseURL: "http://{{local}}", data, headers: { "Content-Type": "application/x-www-form-urlencoded", ...headers, ...options.headers }, ...options });
    return res.data;
}