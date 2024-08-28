import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7RestoreMutationRequest, PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7RestoreMutationResponse } from "../../types/PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7Restore";

 type PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7RestoreClient = typeof client<PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7RestoreMutationResponse, never, PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7RestoreMutationRequest>;
type PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7Restore = {
    data: PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7RestoreMutationResponse;
    error: never;
    request: PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7RestoreMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7RestoreMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7RestoreClient>[0]>;
        return: Awaited<ReturnType<PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7RestoreClient>>;
    };
};
/**
 * @summary restore
 * @link /admin/partners/862cfc1a-4563-4ac3-8bb8-5f75eeddd6e7/restore
 */
export function usePostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7Restore(options?: {
    mutation?: SWRMutationConfiguration<PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7Restore["response"], PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7Restore["error"]>;
    client?: PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7Restore["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7Restore["response"], PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7Restore["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/partners/862cfc1a-4563-4ac3-8bb8-5f75eeddd6e7/restore` as const;
    return useSWRMutation<PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7Restore["response"], PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7Restore["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7Restore["data"], PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7Restore["error"], PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7Restore["request"]>({
            method: "post",
            url,
            data,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}