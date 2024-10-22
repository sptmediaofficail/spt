import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostSharedAuthVerifyOtpMutationRequest, PostSharedAuthVerifyOtpMutationResponse, PostSharedAuthVerifyOtpHeaderParams } from "../../../types/PostSharedAuthVerifyOtp";

 /**
 * @summary Verify OTP
 * @link /shared/auth/verify-otp
 */
export async function postSharedAuthVerifyOtp(data?: PostSharedAuthVerifyOtpMutationRequest, headers?: PostSharedAuthVerifyOtpHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostSharedAuthVerifyOtpMutationResponse>["data"]> {
    const res = await client<PostSharedAuthVerifyOtpMutationResponse, PostSharedAuthVerifyOtpMutationRequest>({ method: "post", url: `/shared/auth/verify-otp`, baseURL: "http://{{local}}", data, headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}