import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostClientOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDeliveryMutationRequest, PostClientOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDeliveryMutationResponse, PostClientOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDeliveryHeaderParams } from "../../types/PostClientOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDelivery";

 type PostClientOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDeliveryClient = typeof client<PostClientOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDeliveryMutationResponse, never, PostClientOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDeliveryMutationRequest>;
type PostClientOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDelivery = {
    data: PostClientOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDeliveryMutationResponse;
    error: never;
    request: PostClientOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDeliveryMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostClientOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDeliveryHeaderParams;
    response: PostClientOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDeliveryMutationResponse;
    client: {
        parameters: Partial<Parameters<PostClientOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDeliveryClient>[0]>;
        return: Awaited<ReturnType<PostClientOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDeliveryClient>>;
    };
};
/**
 * @summary confirm delivery
 * @link /client/orders/c5ad5169-f88d-4acc-8d4f-6c985706b224/confirm-delivery
 */
export function usePostClientOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDelivery(headers?: PostClientOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDelivery["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostClientOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDelivery["response"], PostClientOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDelivery["error"]>;
    client?: PostClientOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDelivery["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostClientOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDelivery["response"], PostClientOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDelivery["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/client/orders/c5ad5169-f88d-4acc-8d4f-6c985706b224/confirm-delivery` as const;
    return useSWRMutation<PostClientOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDelivery["response"], PostClientOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDelivery["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostClientOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDelivery["data"], PostClientOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDelivery["error"], PostClientOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDelivery["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}