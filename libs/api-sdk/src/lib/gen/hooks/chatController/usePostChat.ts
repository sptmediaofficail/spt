import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostChatMutationRequest, PostChatMutationResponse, PostChatHeaderParams } from "../../types/PostChat";

 type PostChatClient = typeof client<PostChatMutationResponse, never, PostChatMutationRequest>;
type PostChat = {
    data: PostChatMutationResponse;
    error: never;
    request: PostChatMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostChatHeaderParams;
    response: PostChatMutationResponse;
    client: {
        parameters: Partial<Parameters<PostChatClient>[0]>;
        return: Awaited<ReturnType<PostChatClient>>;
    };
};
/**
 * @summary Chat
 * @link /chat
 */
export function usePostChat(headers?: PostChat["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostChat["response"], PostChat["error"]>;
    client?: PostChat["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostChat["response"], PostChat["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/chat` as const;
    return useSWRMutation<PostChat["response"], PostChat["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostChat["data"], PostChat["error"], PostChat["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}