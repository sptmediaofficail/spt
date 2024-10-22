import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PutProviderProfileMutationRequest, PutProviderProfileMutationResponse, PutProviderProfileHeaderParams } from "../../../types/PutProviderProfile";

 /**
 * @summary update
 * @link /provider/profile
 */
export async function putProviderProfile(data?: PutProviderProfileMutationRequest, headers?: PutProviderProfileHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PutProviderProfileMutationResponse>["data"]> {
    const res = await client<PutProviderProfileMutationResponse, PutProviderProfileMutationRequest>({ method: "put", url: `/provider/profile`, baseURL: "http://{{local}}", data, headers: { "Content-Type": "application/x-www-form-urlencoded", ...headers, ...options.headers }, ...options });
    return res.data;
}