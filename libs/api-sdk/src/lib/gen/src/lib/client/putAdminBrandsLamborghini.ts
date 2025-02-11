import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PutAdminBrandsLamborghiniMutationRequest, PutAdminBrandsLamborghiniMutationResponse, PutAdminBrandsLamborghiniHeaderParams } from "../../../types/PutAdminBrandsLamborghini";

 /**
 * @summary update
 * @link /admin/brands/Lamborghini
 */
export async function putAdminBrandsLamborghini(data?: PutAdminBrandsLamborghiniMutationRequest, headers?: PutAdminBrandsLamborghiniHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PutAdminBrandsLamborghiniMutationResponse>["data"]> {
    const res = await client<PutAdminBrandsLamborghiniMutationResponse, PutAdminBrandsLamborghiniMutationRequest>({ method: "put", url: `/admin/brands/Lamborghini`, baseURL: "http://{{local}}", data, headers: { "Content-Type": "application/x-www-form-urlencoded", ...headers, ...options.headers }, ...options });
    return res.data;
}