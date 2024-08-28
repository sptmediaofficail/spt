import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210MutationRequest, PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210MutationResponse, PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210HeaderParams } from "../../types/PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210";

 type PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210Client = typeof client<PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210MutationResponse, never, PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210MutationRequest>;
type PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210 = {
    data: PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210MutationResponse;
    error: never;
    request: PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210MutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210HeaderParams;
    response: PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210MutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210Client>[0]>;
        return: Awaited<ReturnType<PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210Client>>;
    };
};
/**
 * @summary update
 * @link /admin/site_offers/e3ed5781-465b-4c16-879f-981812fb6210
 */
export function usePostAdminSiteOffersE3ed5781465b4c16879f981812fb6210(headers?: PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210["response"], PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210["error"]>;
    client?: PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210["response"], PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/site_offers/e3ed5781-465b-4c16-879f-981812fb6210` as const;
    return useSWRMutation<PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210["response"], PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210["data"], PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210["error"], PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}