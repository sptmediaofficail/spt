import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminCustomNotificationMutationRequest, PostAdminCustomNotificationMutationResponse } from "../../types/PostAdminCustomNotification";

 type PostAdminCustomNotificationClient = typeof client<PostAdminCustomNotificationMutationResponse, never, PostAdminCustomNotificationMutationRequest>;
type PostAdminCustomNotification = {
    data: PostAdminCustomNotificationMutationResponse;
    error: never;
    request: PostAdminCustomNotificationMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PostAdminCustomNotificationMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminCustomNotificationClient>[0]>;
        return: Awaited<ReturnType<PostAdminCustomNotificationClient>>;
    };
};
/**
 * @summary Send
 * @link /admin/custom-notification
 */
export function usePostAdminCustomNotification(options?: {
    mutation?: SWRMutationConfiguration<PostAdminCustomNotification["response"], PostAdminCustomNotification["error"]>;
    client?: PostAdminCustomNotification["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminCustomNotification["response"], PostAdminCustomNotification["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/custom-notification` as const;
    return useSWRMutation<PostAdminCustomNotification["response"], PostAdminCustomNotification["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminCustomNotification["data"], PostAdminCustomNotification["error"], PostAdminCustomNotification["request"]>({
            method: "post",
            url,
            data,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}