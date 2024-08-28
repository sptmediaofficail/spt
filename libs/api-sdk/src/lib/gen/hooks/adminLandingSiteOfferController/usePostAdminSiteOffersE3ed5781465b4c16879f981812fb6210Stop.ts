import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210StopMutationRequest, PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210StopMutationResponse } from "../../types/PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210Stop";

 type PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210StopClient = typeof client<PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210StopMutationResponse, never, PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210StopMutationRequest>;
type PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210Stop = {
    data: PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210StopMutationResponse;
    error: never;
    request: PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210StopMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210StopMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210StopClient>[0]>;
        return: Awaited<ReturnType<PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210StopClient>>;
    };
};
/**
 * @summary stop
 * @link /admin/site_offers/e3ed5781-465b-4c16-879f-981812fb6210/stop
 */
export function usePostAdminSiteOffersE3ed5781465b4c16879f981812fb6210Stop(options?: {
    mutation?: SWRMutationConfiguration<PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210Stop["response"], PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210Stop["error"]>;
    client?: PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210Stop["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210Stop["response"], PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210Stop["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/site_offers/e3ed5781-465b-4c16-879f-981812fb6210/stop` as const;
    return useSWRMutation<PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210Stop["response"], PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210Stop["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210Stop["data"], PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210Stop["error"], PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210Stop["request"]>({
            method: "post",
            url,
            data,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}