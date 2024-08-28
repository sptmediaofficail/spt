import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminMessagesReply8899eddd256740b6Bcaa85ed7d53d226MutationRequest, PostAdminMessagesReply8899eddd256740b6Bcaa85ed7d53d226MutationResponse, PostAdminMessagesReply8899eddd256740b6Bcaa85ed7d53d226HeaderParams } from "../../types/PostAdminMessagesReply8899eddd256740b6Bcaa85ed7d53d226";

 type PostAdminMessagesReply8899eddd256740b6Bcaa85ed7d53d226Client = typeof client<PostAdminMessagesReply8899eddd256740b6Bcaa85ed7d53d226MutationResponse, never, PostAdminMessagesReply8899eddd256740b6Bcaa85ed7d53d226MutationRequest>;
type PostAdminMessagesReply8899eddd256740b6Bcaa85ed7d53d226 = {
    data: PostAdminMessagesReply8899eddd256740b6Bcaa85ed7d53d226MutationResponse;
    error: never;
    request: PostAdminMessagesReply8899eddd256740b6Bcaa85ed7d53d226MutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostAdminMessagesReply8899eddd256740b6Bcaa85ed7d53d226HeaderParams;
    response: PostAdminMessagesReply8899eddd256740b6Bcaa85ed7d53d226MutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminMessagesReply8899eddd256740b6Bcaa85ed7d53d226Client>[0]>;
        return: Awaited<ReturnType<PostAdminMessagesReply8899eddd256740b6Bcaa85ed7d53d226Client>>;
    };
};
/**
 * @summary Reply to a specific message
 * @link /admin/messages/reply/8899eddd-2567-40b6-bcaa-85ed7d53d226
 */
export function usePostAdminMessagesReply8899eddd256740b6Bcaa85ed7d53d226(headers?: PostAdminMessagesReply8899eddd256740b6Bcaa85ed7d53d226["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostAdminMessagesReply8899eddd256740b6Bcaa85ed7d53d226["response"], PostAdminMessagesReply8899eddd256740b6Bcaa85ed7d53d226["error"]>;
    client?: PostAdminMessagesReply8899eddd256740b6Bcaa85ed7d53d226["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminMessagesReply8899eddd256740b6Bcaa85ed7d53d226["response"], PostAdminMessagesReply8899eddd256740b6Bcaa85ed7d53d226["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/messages/reply/8899eddd-2567-40b6-bcaa-85ed7d53d226` as const;
    return useSWRMutation<PostAdminMessagesReply8899eddd256740b6Bcaa85ed7d53d226["response"], PostAdminMessagesReply8899eddd256740b6Bcaa85ed7d53d226["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminMessagesReply8899eddd256740b6Bcaa85ed7d53d226["data"], PostAdminMessagesReply8899eddd256740b6Bcaa85ed7d53d226["error"], PostAdminMessagesReply8899eddd256740b6Bcaa85ed7d53d226["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}