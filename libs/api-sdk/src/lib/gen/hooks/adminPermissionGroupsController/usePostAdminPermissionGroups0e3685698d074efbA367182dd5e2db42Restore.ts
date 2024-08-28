import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42RestoreMutationRequest, PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42RestoreMutationResponse } from "../../types/PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42Restore";

 type PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42RestoreClient = typeof client<PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42RestoreMutationResponse, never, PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42RestoreMutationRequest>;
type PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42Restore = {
    data: PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42RestoreMutationResponse;
    error: never;
    request: PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42RestoreMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42RestoreMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42RestoreClient>[0]>;
        return: Awaited<ReturnType<PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42RestoreClient>>;
    };
};
/**
 * @summary restore
 * @link /admin/permission-groups/0e368569-8d07-4efb-a367-182dd5e2db42/restore
 */
export function usePostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42Restore(options?: {
    mutation?: SWRMutationConfiguration<PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42Restore["response"], PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42Restore["error"]>;
    client?: PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42Restore["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42Restore["response"], PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42Restore["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/permission-groups/0e368569-8d07-4efb-a367-182dd5e2db42/restore` as const;
    return useSWRMutation<PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42Restore["response"], PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42Restore["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42Restore["data"], PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42Restore["error"], PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42Restore["request"]>({
            method: "post",
            url,
            data,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}