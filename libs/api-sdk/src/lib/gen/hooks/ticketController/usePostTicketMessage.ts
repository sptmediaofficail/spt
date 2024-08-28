import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostTicketMessageMutationRequest, PostTicketMessageMutationResponse, PostTicketMessageHeaderParams } from "../../types/PostTicketMessage";

 type PostTicketMessageClient = typeof client<PostTicketMessageMutationResponse, never, PostTicketMessageMutationRequest>;
type PostTicketMessage = {
    data: PostTicketMessageMutationResponse;
    error: never;
    request: PostTicketMessageMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostTicketMessageHeaderParams;
    response: PostTicketMessageMutationResponse;
    client: {
        parameters: Partial<Parameters<PostTicketMessageClient>[0]>;
        return: Awaited<ReturnType<PostTicketMessageClient>>;
    };
};
/**
 * @summary message
 * @link /ticket/message
 */
export function usePostTicketMessage(headers?: PostTicketMessage["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostTicketMessage["response"], PostTicketMessage["error"]>;
    client?: PostTicketMessage["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostTicketMessage["response"], PostTicketMessage["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/ticket/message` as const;
    return useSWRMutation<PostTicketMessage["response"], PostTicketMessage["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostTicketMessage["data"], PostTicketMessage["error"], PostTicketMessage["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}