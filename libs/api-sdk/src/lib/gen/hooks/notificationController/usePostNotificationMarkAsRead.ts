import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostNotificationMarkAsReadMutationRequest, PostNotificationMarkAsReadMutationResponse, PostNotificationMarkAsReadHeaderParams } from "../../types/PostNotificationMarkAsRead";

 type PostNotificationMarkAsReadClient = typeof client<PostNotificationMarkAsReadMutationResponse, never, PostNotificationMarkAsReadMutationRequest>;
type PostNotificationMarkAsRead = {
    data: PostNotificationMarkAsReadMutationResponse;
    error: never;
    request: PostNotificationMarkAsReadMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostNotificationMarkAsReadHeaderParams;
    response: PostNotificationMarkAsReadMutationResponse;
    client: {
        parameters: Partial<Parameters<PostNotificationMarkAsReadClient>[0]>;
        return: Awaited<ReturnType<PostNotificationMarkAsReadClient>>;
    };
};
/**
 * @summary mark as read
 * @link /notification/mark_as_read
 */
export function usePostNotificationMarkAsRead(headers?: PostNotificationMarkAsRead["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostNotificationMarkAsRead["response"], PostNotificationMarkAsRead["error"]>;
    client?: PostNotificationMarkAsRead["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostNotificationMarkAsRead["response"], PostNotificationMarkAsRead["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/notification/mark_as_read` as const;
    return useSWRMutation<PostNotificationMarkAsRead["response"], PostNotificationMarkAsRead["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostNotificationMarkAsRead["data"], PostNotificationMarkAsRead["error"], PostNotificationMarkAsRead["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}