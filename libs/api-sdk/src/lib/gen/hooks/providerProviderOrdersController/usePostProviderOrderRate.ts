import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostProviderOrderRateMutationRequest, PostProviderOrderRateMutationResponse, PostProviderOrderRateHeaderParams } from "../../types/PostProviderOrderRate";

 type PostProviderOrderRateClient = typeof client<PostProviderOrderRateMutationResponse, never, PostProviderOrderRateMutationRequest>;
type PostProviderOrderRate = {
    data: PostProviderOrderRateMutationResponse;
    error: never;
    request: PostProviderOrderRateMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostProviderOrderRateHeaderParams;
    response: PostProviderOrderRateMutationResponse;
    client: {
        parameters: Partial<Parameters<PostProviderOrderRateClient>[0]>;
        return: Awaited<ReturnType<PostProviderOrderRateClient>>;
    };
};
/**
 * @summary rate
 * @link /provider/order/rate
 */
export function usePostProviderOrderRate(headers?: PostProviderOrderRate["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostProviderOrderRate["response"], PostProviderOrderRate["error"]>;
    client?: PostProviderOrderRate["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostProviderOrderRate["response"], PostProviderOrderRate["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/provider/order/rate` as const;
    return useSWRMutation<PostProviderOrderRate["response"], PostProviderOrderRate["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostProviderOrderRate["data"], PostProviderOrderRate["error"], PostProviderOrderRate["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}