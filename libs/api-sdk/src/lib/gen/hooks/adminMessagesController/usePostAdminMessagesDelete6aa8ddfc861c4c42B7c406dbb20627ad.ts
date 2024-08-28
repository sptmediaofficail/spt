import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminMessagesDelete6aa8ddfc861c4c42B7c406dbb20627adMutationRequest, PostAdminMessagesDelete6aa8ddfc861c4c42B7c406dbb20627adMutationResponse, PostAdminMessagesDelete6aa8ddfc861c4c42B7c406dbb20627adHeaderParams } from "../../types/PostAdminMessagesDelete6aa8ddfc861c4c42B7c406dbb20627ad";

 type PostAdminMessagesDelete6aa8ddfc861c4c42B7c406dbb20627adClient = typeof client<PostAdminMessagesDelete6aa8ddfc861c4c42B7c406dbb20627adMutationResponse, never, PostAdminMessagesDelete6aa8ddfc861c4c42B7c406dbb20627adMutationRequest>;
type PostAdminMessagesDelete6aa8ddfc861c4c42B7c406dbb20627ad = {
    data: PostAdminMessagesDelete6aa8ddfc861c4c42B7c406dbb20627adMutationResponse;
    error: never;
    request: PostAdminMessagesDelete6aa8ddfc861c4c42B7c406dbb20627adMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostAdminMessagesDelete6aa8ddfc861c4c42B7c406dbb20627adHeaderParams;
    response: PostAdminMessagesDelete6aa8ddfc861c4c42B7c406dbb20627adMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminMessagesDelete6aa8ddfc861c4c42B7c406dbb20627adClient>[0]>;
        return: Awaited<ReturnType<PostAdminMessagesDelete6aa8ddfc861c4c42B7c406dbb20627adClient>>;
    };
};
/**
 * @summary Delete a specific message
 * @link /admin/messages/delete/6aa8ddfc-861c-4c42-b7c4-06dbb20627ad
 */
export function usePostAdminMessagesDelete6aa8ddfc861c4c42B7c406dbb20627ad(headers?: PostAdminMessagesDelete6aa8ddfc861c4c42B7c406dbb20627ad["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostAdminMessagesDelete6aa8ddfc861c4c42B7c406dbb20627ad["response"], PostAdminMessagesDelete6aa8ddfc861c4c42B7c406dbb20627ad["error"]>;
    client?: PostAdminMessagesDelete6aa8ddfc861c4c42B7c406dbb20627ad["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminMessagesDelete6aa8ddfc861c4c42B7c406dbb20627ad["response"], PostAdminMessagesDelete6aa8ddfc861c4c42B7c406dbb20627ad["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/messages/delete/6aa8ddfc-861c-4c42-b7c4-06dbb20627ad` as const;
    return useSWRMutation<PostAdminMessagesDelete6aa8ddfc861c4c42B7c406dbb20627ad["response"], PostAdminMessagesDelete6aa8ddfc861c4c42B7c406dbb20627ad["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminMessagesDelete6aa8ddfc861c4c42B7c406dbb20627ad["data"], PostAdminMessagesDelete6aa8ddfc861c4c42B7c406dbb20627ad["error"], PostAdminMessagesDelete6aa8ddfc861c4c42B7c406dbb20627ad["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}