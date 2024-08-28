import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminPermissionGroupsMutationRequest, PostAdminPermissionGroupsMutationResponse, PostAdminPermissionGroupsHeaderParams } from "../../types/PostAdminPermissionGroups";

 type PostAdminPermissionGroupsClient = typeof client<PostAdminPermissionGroupsMutationResponse, never, PostAdminPermissionGroupsMutationRequest>;
type PostAdminPermissionGroups = {
    data: PostAdminPermissionGroupsMutationResponse;
    error: never;
    request: PostAdminPermissionGroupsMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostAdminPermissionGroupsHeaderParams;
    response: PostAdminPermissionGroupsMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminPermissionGroupsClient>[0]>;
        return: Awaited<ReturnType<PostAdminPermissionGroupsClient>>;
    };
};
/**
 * @summary create
 * @link /admin/permission-groups
 */
export function usePostAdminPermissionGroups(headers?: PostAdminPermissionGroups["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostAdminPermissionGroups["response"], PostAdminPermissionGroups["error"]>;
    client?: PostAdminPermissionGroups["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminPermissionGroups["response"], PostAdminPermissionGroups["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/permission-groups` as const;
    return useSWRMutation<PostAdminPermissionGroups["response"], PostAdminPermissionGroups["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminPermissionGroups["data"], PostAdminPermissionGroups["error"], PostAdminPermissionGroups["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}