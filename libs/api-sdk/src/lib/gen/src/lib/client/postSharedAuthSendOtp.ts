import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostSharedAuthSendOtpMutationRequest, PostSharedAuthSendOtpMutationResponse, PostSharedAuthSendOtpHeaderParams } from "../../../types/PostSharedAuthSendOtp";

 /**
 * @summary Send OTP
 * @link /shared/auth/send-otp
 */
export async function postSharedAuthSendOtp(data?: PostSharedAuthSendOtpMutationRequest, headers?: PostSharedAuthSendOtpHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostSharedAuthSendOtpMutationResponse>["data"]> {
    const res = await client<PostSharedAuthSendOtpMutationResponse, PostSharedAuthSendOtpMutationRequest>({ method: "post", url: `/shared/auth/send-otp`, baseURL: "http://{{local}}", data, headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}