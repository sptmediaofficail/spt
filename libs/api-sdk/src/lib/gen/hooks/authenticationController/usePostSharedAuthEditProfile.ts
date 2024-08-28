import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostSharedAuthEditProfileMutationRequest, PostSharedAuthEditProfileMutationResponse, PostSharedAuthEditProfileHeaderParams } from "../../types/PostSharedAuthEditProfile";

 type PostSharedAuthEditProfileClient = typeof client<PostSharedAuthEditProfileMutationResponse, never, PostSharedAuthEditProfileMutationRequest>;
type PostSharedAuthEditProfile = {
    data: PostSharedAuthEditProfileMutationResponse;
    error: never;
    request: PostSharedAuthEditProfileMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostSharedAuthEditProfileHeaderParams;
    response: PostSharedAuthEditProfileMutationResponse;
    client: {
        parameters: Partial<Parameters<PostSharedAuthEditProfileClient>[0]>;
        return: Awaited<ReturnType<PostSharedAuthEditProfileClient>>;
    };
};
/**
 * @summary Edit profile
 * @link /shared/auth/edit-profile
 */
export function usePostSharedAuthEditProfile(headers?: PostSharedAuthEditProfile["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostSharedAuthEditProfile["response"], PostSharedAuthEditProfile["error"]>;
    client?: PostSharedAuthEditProfile["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostSharedAuthEditProfile["response"], PostSharedAuthEditProfile["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/shared/auth/edit-profile` as const;
    return useSWRMutation<PostSharedAuthEditProfile["response"], PostSharedAuthEditProfile["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostSharedAuthEditProfile["data"], PostSharedAuthEditProfile["error"], PostSharedAuthEditProfile["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}