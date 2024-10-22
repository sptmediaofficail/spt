import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostSharedAuthChangePhoneMutationRequest, PostSharedAuthChangePhoneMutationResponse, PostSharedAuthChangePhoneHeaderParams } from "../../../types/PostSharedAuthChangePhone";

 /**
 * @summary Change phone
 * @link /shared/auth/change-phone
 */
export async function postSharedAuthChangePhone(data?: PostSharedAuthChangePhoneMutationRequest, headers?: PostSharedAuthChangePhoneHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostSharedAuthChangePhoneMutationResponse>["data"]> {
    const res = await client<PostSharedAuthChangePhoneMutationResponse, PostSharedAuthChangePhoneMutationRequest>({ method: "post", url: `/shared/auth/change-phone`, baseURL: "http://{{local}}", data, headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}