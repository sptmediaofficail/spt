import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminAuthLogoutMutationRequest, PostAdminAuthLogoutMutationResponse } from "../../types/PostAdminAuthLogout";

 type PostAdminAuthLogoutClient = typeof client<PostAdminAuthLogoutMutationResponse, never, PostAdminAuthLogoutMutationRequest>;
type PostAdminAuthLogout = {
    data: PostAdminAuthLogoutMutationResponse;
    error: never;
    request: PostAdminAuthLogoutMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PostAdminAuthLogoutMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminAuthLogoutClient>[0]>;
        return: Awaited<ReturnType<PostAdminAuthLogoutClient>>;
    };
};
/**
 * @summary Logout
 * @link /admin/auth/logout
 */
export function usePostAdminAuthLogout(options?: {
    mutation?: SWRMutationConfiguration<PostAdminAuthLogout["response"], PostAdminAuthLogout["error"]>;
    client?: PostAdminAuthLogout["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminAuthLogout["response"], PostAdminAuthLogout["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/auth/logout` as const;
    return useSWRMutation<PostAdminAuthLogout["response"], PostAdminAuthLogout["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminAuthLogout["data"], PostAdminAuthLogout["error"], PostAdminAuthLogout["request"]>({
            method: "post",
            url,
            data,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}