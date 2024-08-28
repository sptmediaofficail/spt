import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminPagesMutationRequest, PostAdminPagesMutationResponse, PostAdminPagesHeaderParams } from "../../types/PostAdminPages";

 type PostAdminPagesClient = typeof client<PostAdminPagesMutationResponse, never, PostAdminPagesMutationRequest>;
type PostAdminPages = {
    data: PostAdminPagesMutationResponse;
    error: never;
    request: PostAdminPagesMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostAdminPagesHeaderParams;
    response: PostAdminPagesMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminPagesClient>[0]>;
        return: Awaited<ReturnType<PostAdminPagesClient>>;
    };
};
/**
 * @summary create
 * @link /admin/pages
 */
export function usePostAdminPages(headers?: PostAdminPages["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostAdminPages["response"], PostAdminPages["error"]>;
    client?: PostAdminPages["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminPages["response"], PostAdminPages["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/pages` as const;
    return useSWRMutation<PostAdminPages["response"], PostAdminPages["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminPages["data"], PostAdminPages["error"], PostAdminPages["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}