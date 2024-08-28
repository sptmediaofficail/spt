import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminPermissionGroupsD814419d755547108e26Efeb66fc8fc2MutationRequest, PostAdminPermissionGroupsD814419d755547108e26Efeb66fc8fc2MutationResponse, PostAdminPermissionGroupsD814419d755547108e26Efeb66fc8fc2HeaderParams } from "../../types/PostAdminPermissionGroupsD814419d755547108e26Efeb66fc8fc2";

 type PostAdminPermissionGroupsD814419d755547108e26Efeb66fc8fc2Client = typeof client<PostAdminPermissionGroupsD814419d755547108e26Efeb66fc8fc2MutationResponse, never, PostAdminPermissionGroupsD814419d755547108e26Efeb66fc8fc2MutationRequest>;
type PostAdminPermissionGroupsD814419d755547108e26Efeb66fc8fc2 = {
    data: PostAdminPermissionGroupsD814419d755547108e26Efeb66fc8fc2MutationResponse;
    error: never;
    request: PostAdminPermissionGroupsD814419d755547108e26Efeb66fc8fc2MutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostAdminPermissionGroupsD814419d755547108e26Efeb66fc8fc2HeaderParams;
    response: PostAdminPermissionGroupsD814419d755547108e26Efeb66fc8fc2MutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminPermissionGroupsD814419d755547108e26Efeb66fc8fc2Client>[0]>;
        return: Awaited<ReturnType<PostAdminPermissionGroupsD814419d755547108e26Efeb66fc8fc2Client>>;
    };
};
/**
 * @summary update
 * @link /admin/permission-groups/d814419d-7555-4710-8e26-efeb66fc8fc2
 */
export function usePostAdminPermissionGroupsD814419d755547108e26Efeb66fc8fc2(headers?: PostAdminPermissionGroupsD814419d755547108e26Efeb66fc8fc2["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostAdminPermissionGroupsD814419d755547108e26Efeb66fc8fc2["response"], PostAdminPermissionGroupsD814419d755547108e26Efeb66fc8fc2["error"]>;
    client?: PostAdminPermissionGroupsD814419d755547108e26Efeb66fc8fc2["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminPermissionGroupsD814419d755547108e26Efeb66fc8fc2["response"], PostAdminPermissionGroupsD814419d755547108e26Efeb66fc8fc2["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/permission-groups/d814419d-7555-4710-8e26-efeb66fc8fc2` as const;
    return useSWRMutation<PostAdminPermissionGroupsD814419d755547108e26Efeb66fc8fc2["response"], PostAdminPermissionGroupsD814419d755547108e26Efeb66fc8fc2["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminPermissionGroupsD814419d755547108e26Efeb66fc8fc2["data"], PostAdminPermissionGroupsD814419d755547108e26Efeb66fc8fc2["error"], PostAdminPermissionGroupsD814419d755547108e26Efeb66fc8fc2["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}