import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminAuthLoginMutationRequest, PostAdminAuthLoginMutationResponse } from "../../types/PostAdminAuthLogin";

 type PostAdminAuthLoginClient = typeof client<PostAdminAuthLoginMutationResponse, never, PostAdminAuthLoginMutationRequest>;
type PostAdminAuthLogin = {
    data: PostAdminAuthLoginMutationResponse;
    error: never;
    request: PostAdminAuthLoginMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PostAdminAuthLoginMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminAuthLoginClient>[0]>;
        return: Awaited<ReturnType<PostAdminAuthLoginClient>>;
    };
};
/**
 * @summary Login
 * @link /admin/auth/login
 */
export function usePostAdminAuthLogin(options?: {
    mutation?: SWRMutationConfiguration<PostAdminAuthLogin["response"], PostAdminAuthLogin["error"]>;
    client?: PostAdminAuthLogin["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminAuthLogin["response"], PostAdminAuthLogin["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/auth/login` as const;
    return useSWRMutation<PostAdminAuthLogin["response"], PostAdminAuthLogin["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminAuthLogin["data"], PostAdminAuthLogin["error"], PostAdminAuthLogin["request"]>({
            method: "post",
            url,
            data,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}