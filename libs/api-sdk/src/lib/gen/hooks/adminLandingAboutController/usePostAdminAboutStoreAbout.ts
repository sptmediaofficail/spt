import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminAboutStoreAboutMutationRequest, PostAdminAboutStoreAboutMutationResponse, PostAdminAboutStoreAboutHeaderParams } from "../../types/PostAdminAboutStoreAbout";

 type PostAdminAboutStoreAboutClient = typeof client<PostAdminAboutStoreAboutMutationResponse, never, PostAdminAboutStoreAboutMutationRequest>;
type PostAdminAboutStoreAbout = {
    data: PostAdminAboutStoreAboutMutationResponse;
    error: never;
    request: PostAdminAboutStoreAboutMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostAdminAboutStoreAboutHeaderParams;
    response: PostAdminAboutStoreAboutMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminAboutStoreAboutClient>[0]>;
        return: Awaited<ReturnType<PostAdminAboutStoreAboutClient>>;
    };
};
/**
 * @summary create or update about
 * @link /admin/about/store_about
 */
export function usePostAdminAboutStoreAbout(headers?: PostAdminAboutStoreAbout["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostAdminAboutStoreAbout["response"], PostAdminAboutStoreAbout["error"]>;
    client?: PostAdminAboutStoreAbout["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminAboutStoreAbout["response"], PostAdminAboutStoreAbout["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/about/store_about` as const;
    return useSWRMutation<PostAdminAboutStoreAbout["response"], PostAdminAboutStoreAbout["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminAboutStoreAbout["data"], PostAdminAboutStoreAbout["error"], PostAdminAboutStoreAbout["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}