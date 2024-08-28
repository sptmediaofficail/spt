import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminPlatformReviewsMutationRequest, PostAdminPlatformReviewsMutationResponse, PostAdminPlatformReviewsHeaderParams } from "../../types/PostAdminPlatformReviews";

 type PostAdminPlatformReviewsClient = typeof client<PostAdminPlatformReviewsMutationResponse, never, PostAdminPlatformReviewsMutationRequest>;
type PostAdminPlatformReviews = {
    data: PostAdminPlatformReviewsMutationResponse;
    error: never;
    request: PostAdminPlatformReviewsMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostAdminPlatformReviewsHeaderParams;
    response: PostAdminPlatformReviewsMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminPlatformReviewsClient>[0]>;
        return: Awaited<ReturnType<PostAdminPlatformReviewsClient>>;
    };
};
/**
 * @summary create
 * @link /admin/platform-reviews
 */
export function usePostAdminPlatformReviews(headers?: PostAdminPlatformReviews["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostAdminPlatformReviews["response"], PostAdminPlatformReviews["error"]>;
    client?: PostAdminPlatformReviews["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminPlatformReviews["response"], PostAdminPlatformReviews["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/platform-reviews` as const;
    return useSWRMutation<PostAdminPlatformReviews["response"], PostAdminPlatformReviews["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminPlatformReviews["data"], PostAdminPlatformReviews["error"], PostAdminPlatformReviews["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}