import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostSharedAuthVerifyChangePhoneMutationRequest, PostSharedAuthVerifyChangePhoneMutationResponse, PostSharedAuthVerifyChangePhoneHeaderParams } from "../../../types/PostSharedAuthVerifyChangePhone";

 /**
 * @summary Verify Change phone
 * @link /shared/auth/verify-change-phone
 */
export async function postSharedAuthVerifyChangePhone(data?: PostSharedAuthVerifyChangePhoneMutationRequest, headers?: PostSharedAuthVerifyChangePhoneHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostSharedAuthVerifyChangePhoneMutationResponse>["data"]> {
    const res = await client<PostSharedAuthVerifyChangePhoneMutationResponse, PostSharedAuthVerifyChangePhoneMutationRequest>({ method: "post", url: `/shared/auth/verify-change-phone`, baseURL: "http://{{local}}", data, headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}