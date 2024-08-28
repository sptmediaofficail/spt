import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostProviderOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDeliveryMutationRequest, PostProviderOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDeliveryMutationResponse, PostProviderOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDeliveryHeaderParams } from "../../types/PostProviderOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDelivery";

 type PostProviderOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDeliveryClient = typeof client<PostProviderOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDeliveryMutationResponse, never, PostProviderOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDeliveryMutationRequest>;
type PostProviderOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDelivery = {
    data: PostProviderOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDeliveryMutationResponse;
    error: never;
    request: PostProviderOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDeliveryMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostProviderOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDeliveryHeaderParams;
    response: PostProviderOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDeliveryMutationResponse;
    client: {
        parameters: Partial<Parameters<PostProviderOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDeliveryClient>[0]>;
        return: Awaited<ReturnType<PostProviderOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDeliveryClient>>;
    };
};
/**
 * @summary confirm delivery
 * @link /provider/orders/c5ad5169-f88d-4acc-8d4f-6c985706b224/confirm-delivery
 */
export function usePostProviderOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDelivery(headers?: PostProviderOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDelivery["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostProviderOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDelivery["response"], PostProviderOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDelivery["error"]>;
    client?: PostProviderOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDelivery["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostProviderOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDelivery["response"], PostProviderOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDelivery["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/provider/orders/c5ad5169-f88d-4acc-8d4f-6c985706b224/confirm-delivery` as const;
    return useSWRMutation<PostProviderOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDelivery["response"], PostProviderOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDelivery["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostProviderOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDelivery["data"], PostProviderOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDelivery["error"], PostProviderOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDelivery["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}