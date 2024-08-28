import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostClientOrderRateMutationRequest, PostClientOrderRateMutationResponse, PostClientOrderRateHeaderParams } from "../../types/PostClientOrderRate";

 type PostClientOrderRateClient = typeof client<PostClientOrderRateMutationResponse, never, PostClientOrderRateMutationRequest>;
type PostClientOrderRate = {
    data: PostClientOrderRateMutationResponse;
    error: never;
    request: PostClientOrderRateMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostClientOrderRateHeaderParams;
    response: PostClientOrderRateMutationResponse;
    client: {
        parameters: Partial<Parameters<PostClientOrderRateClient>[0]>;
        return: Awaited<ReturnType<PostClientOrderRateClient>>;
    };
};
/**
 * @summary rate
 * @link /client/order/rate
 */
export function usePostClientOrderRate(headers?: PostClientOrderRate["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostClientOrderRate["response"], PostClientOrderRate["error"]>;
    client?: PostClientOrderRate["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostClientOrderRate["response"], PostClientOrderRate["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/client/order/rate` as const;
    return useSWRMutation<PostClientOrderRate["response"], PostClientOrderRate["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostClientOrderRate["data"], PostClientOrderRate["error"], PostClientOrderRate["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}