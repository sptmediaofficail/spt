import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210RestoreMutationRequest, PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210RestoreMutationResponse } from "../../types/PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210Restore";

 type PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210RestoreClient = typeof client<PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210RestoreMutationResponse, never, PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210RestoreMutationRequest>;
type PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210Restore = {
    data: PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210RestoreMutationResponse;
    error: never;
    request: PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210RestoreMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210RestoreMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210RestoreClient>[0]>;
        return: Awaited<ReturnType<PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210RestoreClient>>;
    };
};
/**
 * @summary restore
 * @link /admin/site_offers/e3ed5781-465b-4c16-879f-981812fb6210/restore
 */
export function usePostAdminSiteOffersE3ed5781465b4c16879f981812fb6210Restore(options?: {
    mutation?: SWRMutationConfiguration<PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210Restore["response"], PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210Restore["error"]>;
    client?: PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210Restore["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210Restore["response"], PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210Restore["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/site_offers/e3ed5781-465b-4c16-879f-981812fb6210/restore` as const;
    return useSWRMutation<PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210Restore["response"], PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210Restore["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210Restore["data"], PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210Restore["error"], PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210Restore["request"]>({
            method: "post",
            url,
            data,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}