import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostSharedAuthChangePhoneMutationRequest, PostSharedAuthChangePhoneMutationResponse, PostSharedAuthChangePhoneHeaderParams } from "../../types/PostSharedAuthChangePhone";

 type PostSharedAuthChangePhoneClient = typeof client<PostSharedAuthChangePhoneMutationResponse, never, PostSharedAuthChangePhoneMutationRequest>;
type PostSharedAuthChangePhone = {
    data: PostSharedAuthChangePhoneMutationResponse;
    error: never;
    request: PostSharedAuthChangePhoneMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostSharedAuthChangePhoneHeaderParams;
    response: PostSharedAuthChangePhoneMutationResponse;
    client: {
        parameters: Partial<Parameters<PostSharedAuthChangePhoneClient>[0]>;
        return: Awaited<ReturnType<PostSharedAuthChangePhoneClient>>;
    };
};
/**
 * @summary Change phone
 * @link /shared/auth/change-phone
 */
export function usePostSharedAuthChangePhone(headers?: PostSharedAuthChangePhone["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostSharedAuthChangePhone["response"], PostSharedAuthChangePhone["error"]>;
    client?: PostSharedAuthChangePhone["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostSharedAuthChangePhone["response"], PostSharedAuthChangePhone["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/shared/auth/change-phone` as const;
    return useSWRMutation<PostSharedAuthChangePhone["response"], PostSharedAuthChangePhone["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostSharedAuthChangePhone["data"], PostSharedAuthChangePhone["error"], PostSharedAuthChangePhone["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}