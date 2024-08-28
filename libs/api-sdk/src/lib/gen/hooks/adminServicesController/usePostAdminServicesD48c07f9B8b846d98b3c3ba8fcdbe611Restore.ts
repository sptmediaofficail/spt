import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611RestoreMutationRequest, PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611RestoreMutationResponse } from "../../types/PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611Restore";

 type PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611RestoreClient = typeof client<PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611RestoreMutationResponse, never, PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611RestoreMutationRequest>;
type PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611Restore = {
    data: PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611RestoreMutationResponse;
    error: never;
    request: PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611RestoreMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611RestoreMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611RestoreClient>[0]>;
        return: Awaited<ReturnType<PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611RestoreClient>>;
    };
};
/**
 * @summary restore
 * @link /admin/services/d48c07f9-b8b8-46d9-8b3c-3ba8fcdbe611/restore
 */
export function usePostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611Restore(options?: {
    mutation?: SWRMutationConfiguration<PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611Restore["response"], PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611Restore["error"]>;
    client?: PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611Restore["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611Restore["response"], PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611Restore["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/services/d48c07f9-b8b8-46d9-8b3c-3ba8fcdbe611/restore` as const;
    return useSWRMutation<PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611Restore["response"], PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611Restore["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611Restore["data"], PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611Restore["error"], PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611Restore["request"]>({
            method: "post",
            url,
            data,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}