import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminSiteOffersMutationRequest, PostAdminSiteOffersMutationResponse, PostAdminSiteOffersHeaderParams } from "../../types/PostAdminSiteOffers";

 type PostAdminSiteOffersClient = typeof client<PostAdminSiteOffersMutationResponse, never, PostAdminSiteOffersMutationRequest>;
type PostAdminSiteOffers = {
    data: PostAdminSiteOffersMutationResponse;
    error: never;
    request: PostAdminSiteOffersMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostAdminSiteOffersHeaderParams;
    response: PostAdminSiteOffersMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminSiteOffersClient>[0]>;
        return: Awaited<ReturnType<PostAdminSiteOffersClient>>;
    };
};
/**
 * @summary create
 * @link /admin/site_offers
 */
export function usePostAdminSiteOffers(headers?: PostAdminSiteOffers["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostAdminSiteOffers["response"], PostAdminSiteOffers["error"]>;
    client?: PostAdminSiteOffers["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminSiteOffers["response"], PostAdminSiteOffers["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/site_offers` as const;
    return useSWRMutation<PostAdminSiteOffers["response"], PostAdminSiteOffers["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminSiteOffers["data"], PostAdminSiteOffers["error"], PostAdminSiteOffers["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}