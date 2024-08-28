import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42StopMutationRequest, PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42StopMutationResponse } from "../../types/PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42Stop";

 type PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42StopClient = typeof client<PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42StopMutationResponse, never, PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42StopMutationRequest>;
type PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42Stop = {
    data: PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42StopMutationResponse;
    error: never;
    request: PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42StopMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42StopMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42StopClient>[0]>;
        return: Awaited<ReturnType<PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42StopClient>>;
    };
};
/**
 * @summary stop
 * @link /admin/permission-groups/0e368569-8d07-4efb-a367-182dd5e2db42/stop
 */
export function usePostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42Stop(options?: {
    mutation?: SWRMutationConfiguration<PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42Stop["response"], PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42Stop["error"]>;
    client?: PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42Stop["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42Stop["response"], PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42Stop["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/permission-groups/0e368569-8d07-4efb-a367-182dd5e2db42/stop` as const;
    return useSWRMutation<PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42Stop["response"], PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42Stop["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42Stop["data"], PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42Stop["error"], PostAdminPermissionGroups0e3685698d074efbA367182dd5e2db42Stop["request"]>({
            method: "post",
            url,
            data,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}