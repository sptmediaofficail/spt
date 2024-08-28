import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330StopMutationRequest, PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330StopMutationResponse } from "../../types/PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330Stop";

 type PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330StopClient = typeof client<PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330StopMutationResponse, never, PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330StopMutationRequest>;
type PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330Stop = {
    data: PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330StopMutationResponse;
    error: never;
    request: PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330StopMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330StopMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330StopClient>[0]>;
        return: Awaited<ReturnType<PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330StopClient>>;
    };
};
/**
 * @summary stop
 * @link /admin/platform-reviews/51a7447f-3bfd-4e89-a7f3-1969c8fb9330/stop
 */
export function usePostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330Stop(options?: {
    mutation?: SWRMutationConfiguration<PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330Stop["response"], PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330Stop["error"]>;
    client?: PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330Stop["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330Stop["response"], PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330Stop["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/platform-reviews/51a7447f-3bfd-4e89-a7f3-1969c8fb9330/stop` as const;
    return useSWRMutation<PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330Stop["response"], PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330Stop["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330Stop["data"], PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330Stop["error"], PostAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330Stop["request"]>({
            method: "post",
            url,
            data,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}