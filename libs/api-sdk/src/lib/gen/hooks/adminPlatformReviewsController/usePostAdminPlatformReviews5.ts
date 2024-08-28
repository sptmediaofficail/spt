import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminPlatformReviews5MutationRequest, PostAdminPlatformReviews5MutationResponse, PostAdminPlatformReviews5HeaderParams } from "../../types/PostAdminPlatformReviews5";

 type PostAdminPlatformReviews5Client = typeof client<PostAdminPlatformReviews5MutationResponse, never, PostAdminPlatformReviews5MutationRequest>;
type PostAdminPlatformReviews5 = {
    data: PostAdminPlatformReviews5MutationResponse;
    error: never;
    request: PostAdminPlatformReviews5MutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostAdminPlatformReviews5HeaderParams;
    response: PostAdminPlatformReviews5MutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminPlatformReviews5Client>[0]>;
        return: Awaited<ReturnType<PostAdminPlatformReviews5Client>>;
    };
};
/**
 * @summary update
 * @link /admin/platform-reviews/5
 */
export function usePostAdminPlatformReviews5(headers?: PostAdminPlatformReviews5["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostAdminPlatformReviews5["response"], PostAdminPlatformReviews5["error"]>;
    client?: PostAdminPlatformReviews5["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminPlatformReviews5["response"], PostAdminPlatformReviews5["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/platform-reviews/5` as const;
    return useSWRMutation<PostAdminPlatformReviews5["response"], PostAdminPlatformReviews5["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminPlatformReviews5["data"], PostAdminPlatformReviews5["error"], PostAdminPlatformReviews5["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}