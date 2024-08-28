import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611RestoreMutationRequest, PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611RestoreMutationResponse } from "../../types/PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611Restore";

 type PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611RestoreClient = typeof client<PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611RestoreMutationResponse, never, PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611RestoreMutationRequest>;
type PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611Restore = {
    data: PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611RestoreMutationResponse;
    error: never;
    request: PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611RestoreMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611RestoreMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611RestoreClient>[0]>;
        return: Awaited<ReturnType<PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611RestoreClient>>;
    };
};
/**
 * @summary restore
 * @link /admin/commissions/d48c07f9-b8b8-46d9-8b3c-3ba8fcdbe611/restore
 */
export function usePostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611Restore(options?: {
    mutation?: SWRMutationConfiguration<PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611Restore["response"], PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611Restore["error"]>;
    client?: PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611Restore["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611Restore["response"], PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611Restore["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/commissions/d48c07f9-b8b8-46d9-8b3c-3ba8fcdbe611/restore` as const;
    return useSWRMutation<PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611Restore["response"], PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611Restore["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611Restore["data"], PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611Restore["error"], PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611Restore["request"]>({
            method: "post",
            url,
            data,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}