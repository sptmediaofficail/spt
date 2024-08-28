import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5RestoreMutationRequest, PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5RestoreMutationResponse } from "../../types/PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5Restore";

 type PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5RestoreClient = typeof client<PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5RestoreMutationResponse, never, PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5RestoreMutationRequest>;
type PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5Restore = {
    data: PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5RestoreMutationResponse;
    error: never;
    request: PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5RestoreMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5RestoreMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5RestoreClient>[0]>;
        return: Awaited<ReturnType<PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5RestoreClient>>;
    };
};
/**
 * @summary restore
 * @link /admin/about/7ad421cd-9075-4a74-b2e1-e4298a1dc2b5/restore
 */
export function usePostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5Restore(options?: {
    mutation?: SWRMutationConfiguration<PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5Restore["response"], PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5Restore["error"]>;
    client?: PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5Restore["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5Restore["response"], PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5Restore["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/about/7ad421cd-9075-4a74-b2e1-e4298a1dc2b5/restore` as const;
    return useSWRMutation<PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5Restore["response"], PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5Restore["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5Restore["data"], PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5Restore["error"], PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5Restore["request"]>({
            method: "post",
            url,
            data,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}