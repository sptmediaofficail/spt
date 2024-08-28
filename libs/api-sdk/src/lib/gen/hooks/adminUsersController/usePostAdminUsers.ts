import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminUsersMutationRequest, PostAdminUsersMutationResponse, PostAdminUsersHeaderParams } from "../../types/PostAdminUsers";

 type PostAdminUsersClient = typeof client<PostAdminUsersMutationResponse, never, PostAdminUsersMutationRequest>;
type PostAdminUsers = {
    data: PostAdminUsersMutationResponse;
    error: never;
    request: PostAdminUsersMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostAdminUsersHeaderParams;
    response: PostAdminUsersMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminUsersClient>[0]>;
        return: Awaited<ReturnType<PostAdminUsersClient>>;
    };
};
/**
 * @summary create
 * @link /admin/users
 */
export function usePostAdminUsers(headers?: PostAdminUsers["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostAdminUsers["response"], PostAdminUsers["error"]>;
    client?: PostAdminUsers["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminUsers["response"], PostAdminUsers["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/users` as const;
    return useSWRMutation<PostAdminUsers["response"], PostAdminUsers["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminUsers["data"], PostAdminUsers["error"], PostAdminUsers["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}