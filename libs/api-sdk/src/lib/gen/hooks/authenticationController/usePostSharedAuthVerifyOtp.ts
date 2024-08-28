import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostSharedAuthVerifyOtpMutationRequest, PostSharedAuthVerifyOtpMutationResponse, PostSharedAuthVerifyOtpHeaderParams } from "../../types/PostSharedAuthVerifyOtp";

 type PostSharedAuthVerifyOtpClient = typeof client<PostSharedAuthVerifyOtpMutationResponse, never, PostSharedAuthVerifyOtpMutationRequest>;
type PostSharedAuthVerifyOtp = {
    data: PostSharedAuthVerifyOtpMutationResponse;
    error: never;
    request: PostSharedAuthVerifyOtpMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostSharedAuthVerifyOtpHeaderParams;
    response: PostSharedAuthVerifyOtpMutationResponse;
    client: {
        parameters: Partial<Parameters<PostSharedAuthVerifyOtpClient>[0]>;
        return: Awaited<ReturnType<PostSharedAuthVerifyOtpClient>>;
    };
};
/**
 * @summary Verify OTP
 * @link /shared/auth/verify-otp
 */
export function usePostSharedAuthVerifyOtp(headers?: PostSharedAuthVerifyOtp["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostSharedAuthVerifyOtp["response"], PostSharedAuthVerifyOtp["error"]>;
    client?: PostSharedAuthVerifyOtp["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostSharedAuthVerifyOtp["response"], PostSharedAuthVerifyOtp["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/shared/auth/verify-otp` as const;
    return useSWRMutation<PostSharedAuthVerifyOtp["response"], PostSharedAuthVerifyOtp["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostSharedAuthVerifyOtp["data"], PostSharedAuthVerifyOtp["error"], PostSharedAuthVerifyOtp["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}