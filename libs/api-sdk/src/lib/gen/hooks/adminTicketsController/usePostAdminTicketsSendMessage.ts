import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminTicketsSendMessageMutationRequest, PostAdminTicketsSendMessageMutationResponse } from "../../types/PostAdminTicketsSendMessage";

 type PostAdminTicketsSendMessageClient = typeof client<PostAdminTicketsSendMessageMutationResponse, never, PostAdminTicketsSendMessageMutationRequest>;
type PostAdminTicketsSendMessage = {
    data: PostAdminTicketsSendMessageMutationResponse;
    error: never;
    request: PostAdminTicketsSendMessageMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PostAdminTicketsSendMessageMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminTicketsSendMessageClient>[0]>;
        return: Awaited<ReturnType<PostAdminTicketsSendMessageClient>>;
    };
};
/**
 * @summary send messages
 * @link /admin/tickets/send_message
 */
export function usePostAdminTicketsSendMessage(options?: {
    mutation?: SWRMutationConfiguration<PostAdminTicketsSendMessage["response"], PostAdminTicketsSendMessage["error"]>;
    client?: PostAdminTicketsSendMessage["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminTicketsSendMessage["response"], PostAdminTicketsSendMessage["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/tickets/send_message` as const;
    return useSWRMutation<PostAdminTicketsSendMessage["response"], PostAdminTicketsSendMessage["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminTicketsSendMessage["data"], PostAdminTicketsSendMessage["error"], PostAdminTicketsSendMessage["request"]>({
            method: "post",
            url,
            data,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}