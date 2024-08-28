import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostTicketMutationRequest, PostTicketMutationResponse, PostTicketHeaderParams } from "../../types/PostTicket";

 type PostTicketClient = typeof client<PostTicketMutationResponse, never, PostTicketMutationRequest>;
type PostTicket = {
    data: PostTicketMutationResponse;
    error: never;
    request: PostTicketMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostTicketHeaderParams;
    response: PostTicketMutationResponse;
    client: {
        parameters: Partial<Parameters<PostTicketClient>[0]>;
        return: Awaited<ReturnType<PostTicketClient>>;
    };
};
/**
 * @summary ticket
 * @link /ticket
 */
export function usePostTicket(headers?: PostTicket["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostTicket["response"], PostTicket["error"]>;
    client?: PostTicket["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostTicket["response"], PostTicket["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/ticket` as const;
    return useSWRMutation<PostTicket["response"], PostTicket["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostTicket["data"], PostTicket["error"], PostTicket["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}