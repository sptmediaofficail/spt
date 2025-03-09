import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostProviderOrdersIdConfirmDeliveryMutationRequest, PostProviderOrdersIdConfirmDeliveryMutationResponse, PostProviderOrdersIdConfirmDeliveryPathParams, PostProviderOrdersIdConfirmDeliveryHeaderParams } from "../../types/PostProviderOrdersIdConfirmDelivery";

 type PostProviderOrdersIdConfirmDeliveryClient = typeof client<PostProviderOrdersIdConfirmDeliveryMutationResponse, never, PostProviderOrdersIdConfirmDeliveryMutationRequest>;
type PostProviderOrdersIdConfirmDelivery = {
    data: PostProviderOrdersIdConfirmDeliveryMutationResponse;
    error: never;
    request: PostProviderOrdersIdConfirmDeliveryMutationRequest;
    pathParams: PostProviderOrdersIdConfirmDeliveryPathParams;
    queryParams: never;
    headerParams: PostProviderOrdersIdConfirmDeliveryHeaderParams;
    response: PostProviderOrdersIdConfirmDeliveryMutationResponse;
    client: {
        parameters: Partial<Parameters<PostProviderOrdersIdConfirmDeliveryClient>[0]>;
        return: Awaited<ReturnType<PostProviderOrdersIdConfirmDeliveryClient>>;
    };
};
/**
 * @summary confirm delivery
 * @link /provider/orders/:id/confirm-delivery
 */
export function usePostProviderOrdersIdConfirmDelivery(id: PostProviderOrdersIdConfirmDeliveryPathParams["id"], headers?: PostProviderOrdersIdConfirmDelivery["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostProviderOrdersIdConfirmDelivery["response"], PostProviderOrdersIdConfirmDelivery["error"]>;
    client?: PostProviderOrdersIdConfirmDelivery["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostProviderOrdersIdConfirmDelivery["response"], PostProviderOrdersIdConfirmDelivery["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/provider/orders/${id}/confirm-delivery` as const;
    return useSWRMutation<PostProviderOrdersIdConfirmDelivery["response"], PostProviderOrdersIdConfirmDelivery["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostProviderOrdersIdConfirmDelivery["data"], PostProviderOrdersIdConfirmDelivery["error"], PostProviderOrdersIdConfirmDelivery["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}