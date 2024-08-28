import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostChatMessageMutationRequest, PostChatMessageMutationResponse, PostChatMessageHeaderParams } from "../../types/PostChatMessage";

 type PostChatMessageClient = typeof client<PostChatMessageMutationResponse, never, PostChatMessageMutationRequest>;
type PostChatMessage = {
    data: PostChatMessageMutationResponse;
    error: never;
    request: PostChatMessageMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostChatMessageHeaderParams;
    response: PostChatMessageMutationResponse;
    client: {
        parameters: Partial<Parameters<PostChatMessageClient>[0]>;
        return: Awaited<ReturnType<PostChatMessageClient>>;
    };
};
/**
 * @summary message
 * @link /chat/message
 */
export function usePostChatMessage(headers?: PostChatMessage["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostChatMessage["response"], PostChatMessage["error"]>;
    client?: PostChatMessage["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostChatMessage["response"], PostChatMessage["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/chat/message` as const;
    return useSWRMutation<PostChatMessage["response"], PostChatMessage["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostChatMessage["data"], PostChatMessage["error"], PostChatMessage["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}