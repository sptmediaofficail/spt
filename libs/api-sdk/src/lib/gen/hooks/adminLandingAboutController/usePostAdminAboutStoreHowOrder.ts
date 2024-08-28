import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminAboutStoreHowOrderMutationRequest, PostAdminAboutStoreHowOrderMutationResponse, PostAdminAboutStoreHowOrderHeaderParams } from "../../types/PostAdminAboutStoreHowOrder";

 type PostAdminAboutStoreHowOrderClient = typeof client<PostAdminAboutStoreHowOrderMutationResponse, never, PostAdminAboutStoreHowOrderMutationRequest>;
type PostAdminAboutStoreHowOrder = {
    data: PostAdminAboutStoreHowOrderMutationResponse;
    error: never;
    request: PostAdminAboutStoreHowOrderMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostAdminAboutStoreHowOrderHeaderParams;
    response: PostAdminAboutStoreHowOrderMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminAboutStoreHowOrderClient>[0]>;
        return: Awaited<ReturnType<PostAdminAboutStoreHowOrderClient>>;
    };
};
/**
 * @summary create or update how order
 * @link /admin/about/store_how_order
 */
export function usePostAdminAboutStoreHowOrder(headers?: PostAdminAboutStoreHowOrder["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostAdminAboutStoreHowOrder["response"], PostAdminAboutStoreHowOrder["error"]>;
    client?: PostAdminAboutStoreHowOrder["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminAboutStoreHowOrder["response"], PostAdminAboutStoreHowOrder["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/about/store_how_order` as const;
    return useSWRMutation<PostAdminAboutStoreHowOrder["response"], PostAdminAboutStoreHowOrder["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminAboutStoreHowOrder["data"], PostAdminAboutStoreHowOrder["error"], PostAdminAboutStoreHowOrder["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}