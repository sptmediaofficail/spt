import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostClientOrderSparePartMutationRequest, PostClientOrderSparePartMutationResponse, PostClientOrderSparePartHeaderParams } from "../../types/PostClientOrderSparePart";

 type PostClientOrderSparePartClient = typeof client<PostClientOrderSparePartMutationResponse, never, PostClientOrderSparePartMutationRequest>;
type PostClientOrderSparePart = {
    data: PostClientOrderSparePartMutationResponse;
    error: never;
    request: PostClientOrderSparePartMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostClientOrderSparePartHeaderParams;
    response: PostClientOrderSparePartMutationResponse;
    client: {
        parameters: Partial<Parameters<PostClientOrderSparePartClient>[0]>;
        return: Awaited<ReturnType<PostClientOrderSparePartClient>>;
    };
};
/**
 * @summary store
 * @link /client/order_spare_part
 */
export function usePostClientOrderSparePart(headers?: PostClientOrderSparePart["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostClientOrderSparePart["response"], PostClientOrderSparePart["error"]>;
    client?: PostClientOrderSparePart["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostClientOrderSparePart["response"], PostClientOrderSparePart["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/client/order_spare_part` as const;
    return useSWRMutation<PostClientOrderSparePart["response"], PostClientOrderSparePart["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostClientOrderSparePart["data"], PostClientOrderSparePart["error"], PostClientOrderSparePart["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}