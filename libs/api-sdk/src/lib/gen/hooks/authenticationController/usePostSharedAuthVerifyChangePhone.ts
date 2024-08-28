import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostSharedAuthVerifyChangePhoneMutationRequest, PostSharedAuthVerifyChangePhoneMutationResponse, PostSharedAuthVerifyChangePhoneHeaderParams } from "../../types/PostSharedAuthVerifyChangePhone";

 type PostSharedAuthVerifyChangePhoneClient = typeof client<PostSharedAuthVerifyChangePhoneMutationResponse, never, PostSharedAuthVerifyChangePhoneMutationRequest>;
type PostSharedAuthVerifyChangePhone = {
    data: PostSharedAuthVerifyChangePhoneMutationResponse;
    error: never;
    request: PostSharedAuthVerifyChangePhoneMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostSharedAuthVerifyChangePhoneHeaderParams;
    response: PostSharedAuthVerifyChangePhoneMutationResponse;
    client: {
        parameters: Partial<Parameters<PostSharedAuthVerifyChangePhoneClient>[0]>;
        return: Awaited<ReturnType<PostSharedAuthVerifyChangePhoneClient>>;
    };
};
/**
 * @summary Verify Change phone
 * @link /shared/auth/verify-change-phone
 */
export function usePostSharedAuthVerifyChangePhone(headers?: PostSharedAuthVerifyChangePhone["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostSharedAuthVerifyChangePhone["response"], PostSharedAuthVerifyChangePhone["error"]>;
    client?: PostSharedAuthVerifyChangePhone["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostSharedAuthVerifyChangePhone["response"], PostSharedAuthVerifyChangePhone["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/shared/auth/verify-change-phone` as const;
    return useSWRMutation<PostSharedAuthVerifyChangePhone["response"], PostSharedAuthVerifyChangePhone["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostSharedAuthVerifyChangePhone["data"], PostSharedAuthVerifyChangePhone["error"], PostSharedAuthVerifyChangePhone["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}