import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminProviderProfilesVerify09d88c1dFd8a424d9e7cA5d2391cdbd3MutationRequest, PostAdminProviderProfilesVerify09d88c1dFd8a424d9e7cA5d2391cdbd3MutationResponse, PostAdminProviderProfilesVerify09d88c1dFd8a424d9e7cA5d2391cdbd3HeaderParams } from "../../types/PostAdminProviderProfilesVerify09d88c1dFd8a424d9e7cA5d2391cdbd3";

 type PostAdminProviderProfilesVerify09d88c1dFd8a424d9e7cA5d2391cdbd3Client = typeof client<PostAdminProviderProfilesVerify09d88c1dFd8a424d9e7cA5d2391cdbd3MutationResponse, never, PostAdminProviderProfilesVerify09d88c1dFd8a424d9e7cA5d2391cdbd3MutationRequest>;
type PostAdminProviderProfilesVerify09d88c1dFd8a424d9e7cA5d2391cdbd3 = {
    data: PostAdminProviderProfilesVerify09d88c1dFd8a424d9e7cA5d2391cdbd3MutationResponse;
    error: never;
    request: PostAdminProviderProfilesVerify09d88c1dFd8a424d9e7cA5d2391cdbd3MutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostAdminProviderProfilesVerify09d88c1dFd8a424d9e7cA5d2391cdbd3HeaderParams;
    response: PostAdminProviderProfilesVerify09d88c1dFd8a424d9e7cA5d2391cdbd3MutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminProviderProfilesVerify09d88c1dFd8a424d9e7cA5d2391cdbd3Client>[0]>;
        return: Awaited<ReturnType<PostAdminProviderProfilesVerify09d88c1dFd8a424d9e7cA5d2391cdbd3Client>>;
    };
};
/**
 * @summary verify
 * @link /admin/provider-profiles/verify/09d88c1d-fd8a-424d-9e7c-a5d2391cdbd3
 */
export function usePostAdminProviderProfilesVerify09d88c1dFd8a424d9e7cA5d2391cdbd3(headers?: PostAdminProviderProfilesVerify09d88c1dFd8a424d9e7cA5d2391cdbd3["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostAdminProviderProfilesVerify09d88c1dFd8a424d9e7cA5d2391cdbd3["response"], PostAdminProviderProfilesVerify09d88c1dFd8a424d9e7cA5d2391cdbd3["error"]>;
    client?: PostAdminProviderProfilesVerify09d88c1dFd8a424d9e7cA5d2391cdbd3["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminProviderProfilesVerify09d88c1dFd8a424d9e7cA5d2391cdbd3["response"], PostAdminProviderProfilesVerify09d88c1dFd8a424d9e7cA5d2391cdbd3["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/provider-profiles/verify/09d88c1d-fd8a-424d-9e7c-a5d2391cdbd3` as const;
    return useSWRMutation<PostAdminProviderProfilesVerify09d88c1dFd8a424d9e7cA5d2391cdbd3["response"], PostAdminProviderProfilesVerify09d88c1dFd8a424d9e7cA5d2391cdbd3["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminProviderProfilesVerify09d88c1dFd8a424d9e7cA5d2391cdbd3["data"], PostAdminProviderProfilesVerify09d88c1dFd8a424d9e7cA5d2391cdbd3["error"], PostAdminProviderProfilesVerify09d88c1dFd8a424d9e7cA5d2391cdbd3["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}