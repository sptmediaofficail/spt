import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330RestoreMutationRequest, PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330RestoreMutationResponse } from "../../types/PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330Restore";

 type PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330RestoreClient = typeof client<PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330RestoreMutationResponse, never, PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330RestoreMutationRequest>;
type PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330Restore = {
    data: PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330RestoreMutationResponse;
    error: never;
    request: PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330RestoreMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330RestoreMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330RestoreClient>[0]>;
        return: Awaited<ReturnType<PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330RestoreClient>>;
    };
};
/**
 * @summary restore
 * @link /admin/platform-reviews/51a7447f-3bfd-4e89-a7f3-1969c8fb9330/restore
 */
export function usePostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330Restore(options?: {
    mutation?: SWRMutationConfiguration<PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330Restore["response"], PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330Restore["error"]>;
    client?: PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330Restore["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330Restore["response"], PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330Restore["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/platform-reviews/51a7447f-3bfd-4e89-a7f3-1969c8fb9330/restore` as const;
    return useSWRMutation<PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330Restore["response"], PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330Restore["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330Restore["data"], PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330Restore["error"], PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330Restore["request"]>({
            method: "post",
            url,
            data,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}