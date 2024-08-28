import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostProviderOfferMutationRequest, PostProviderOfferMutationResponse, PostProviderOfferHeaderParams } from "../../types/PostProviderOffer";

 type PostProviderOfferClient = typeof client<PostProviderOfferMutationResponse, never, PostProviderOfferMutationRequest>;
type PostProviderOffer = {
    data: PostProviderOfferMutationResponse;
    error: never;
    request: PostProviderOfferMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostProviderOfferHeaderParams;
    response: PostProviderOfferMutationResponse;
    client: {
        parameters: Partial<Parameters<PostProviderOfferClient>[0]>;
        return: Awaited<ReturnType<PostProviderOfferClient>>;
    };
};
/**
 * @summary store
 * @link /provider/offer
 */
export function usePostProviderOffer(headers?: PostProviderOffer["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostProviderOffer["response"], PostProviderOffer["error"]>;
    client?: PostProviderOffer["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostProviderOffer["response"], PostProviderOffer["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/provider/offer` as const;
    return useSWRMutation<PostProviderOffer["response"], PostProviderOffer["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostProviderOffer["data"], PostProviderOffer["error"], PostProviderOffer["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}