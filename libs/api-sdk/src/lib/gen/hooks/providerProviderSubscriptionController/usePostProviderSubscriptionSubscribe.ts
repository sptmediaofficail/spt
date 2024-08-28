import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostProviderSubscriptionSubscribeMutationRequest, PostProviderSubscriptionSubscribeMutationResponse, PostProviderSubscriptionSubscribeHeaderParams } from "../../types/PostProviderSubscriptionSubscribe";

 type PostProviderSubscriptionSubscribeClient = typeof client<PostProviderSubscriptionSubscribeMutationResponse, never, PostProviderSubscriptionSubscribeMutationRequest>;
type PostProviderSubscriptionSubscribe = {
    data: PostProviderSubscriptionSubscribeMutationResponse;
    error: never;
    request: PostProviderSubscriptionSubscribeMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostProviderSubscriptionSubscribeHeaderParams;
    response: PostProviderSubscriptionSubscribeMutationResponse;
    client: {
        parameters: Partial<Parameters<PostProviderSubscriptionSubscribeClient>[0]>;
        return: Awaited<ReturnType<PostProviderSubscriptionSubscribeClient>>;
    };
};
/**
 * @summary subscribe
 * @link /provider/subscription/subscribe
 */
export function usePostProviderSubscriptionSubscribe(headers?: PostProviderSubscriptionSubscribe["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostProviderSubscriptionSubscribe["response"], PostProviderSubscriptionSubscribe["error"]>;
    client?: PostProviderSubscriptionSubscribe["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostProviderSubscriptionSubscribe["response"], PostProviderSubscriptionSubscribe["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/provider/subscription/subscribe` as const;
    return useSWRMutation<PostProviderSubscriptionSubscribe["response"], PostProviderSubscriptionSubscribe["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostProviderSubscriptionSubscribe["data"], PostProviderSubscriptionSubscribe["error"], PostProviderSubscriptionSubscribe["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}