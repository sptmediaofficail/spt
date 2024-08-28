import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostSharedAuthSendOtpMutationRequest, PostSharedAuthSendOtpMutationResponse, PostSharedAuthSendOtpHeaderParams } from "../../types/PostSharedAuthSendOtp";

 type PostSharedAuthSendOtpClient = typeof client<PostSharedAuthSendOtpMutationResponse, never, PostSharedAuthSendOtpMutationRequest>;
type PostSharedAuthSendOtp = {
    data: PostSharedAuthSendOtpMutationResponse;
    error: never;
    request: PostSharedAuthSendOtpMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostSharedAuthSendOtpHeaderParams;
    response: PostSharedAuthSendOtpMutationResponse;
    client: {
        parameters: Partial<Parameters<PostSharedAuthSendOtpClient>[0]>;
        return: Awaited<ReturnType<PostSharedAuthSendOtpClient>>;
    };
};
/**
 * @summary Send OTP
 * @link /shared/auth/send-otp
 */
export function usePostSharedAuthSendOtp(headers?: PostSharedAuthSendOtp["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostSharedAuthSendOtp["response"], PostSharedAuthSendOtp["error"]>;
    client?: PostSharedAuthSendOtp["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostSharedAuthSendOtp["response"], PostSharedAuthSendOtp["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/shared/auth/send-otp` as const;
    return useSWRMutation<PostSharedAuthSendOtp["response"], PostSharedAuthSendOtp["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostSharedAuthSendOtp["data"], PostSharedAuthSendOtp["error"], PostSharedAuthSendOtp["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}