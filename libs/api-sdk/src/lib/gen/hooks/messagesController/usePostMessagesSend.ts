import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostMessagesSendMutationRequest, PostMessagesSendMutationResponse, PostMessagesSendHeaderParams } from "../../types/PostMessagesSend";

 type PostMessagesSendClient = typeof client<PostMessagesSendMutationResponse, never, PostMessagesSendMutationRequest>;
type PostMessagesSend = {
    data: PostMessagesSendMutationResponse;
    error: never;
    request: PostMessagesSendMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostMessagesSendHeaderParams;
    response: PostMessagesSendMutationResponse;
    client: {
        parameters: Partial<Parameters<PostMessagesSendClient>[0]>;
        return: Awaited<ReturnType<PostMessagesSendClient>>;
    };
};
/**
 * @summary Send Message
 * @link /messages/send
 */
export function usePostMessagesSend(headers?: PostMessagesSend["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostMessagesSend["response"], PostMessagesSend["error"]>;
    client?: PostMessagesSend["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostMessagesSend["response"], PostMessagesSend["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/messages/send` as const;
    return useSWRMutation<PostMessagesSend["response"], PostMessagesSend["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostMessagesSend["data"], PostMessagesSend["error"], PostMessagesSend["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}