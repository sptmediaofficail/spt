import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdMutationRequest, PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdMutationResponse, PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdHeaderParams } from "../../types/PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cd";

 type PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdClient = typeof client<PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdMutationResponse, never, PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdMutationRequest>;
type PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cd = {
    data: PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdMutationResponse;
    error: never;
    request: PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdHeaderParams;
    response: PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdClient>[0]>;
        return: Awaited<ReturnType<PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdClient>>;
    };
};
/**
 * @summary update
 * @link /admin/how_help/c0e70442-f191-4f3c-bb31-7ca396d574cd
 */
export function usePostAdminHowHelpC0e70442F1914f3cBb317ca396d574cd(headers?: PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cd["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cd["response"], PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cd["error"]>;
    client?: PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cd["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cd["response"], PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cd["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/how_help/c0e70442-f191-4f3c-bb31-7ca396d574cd` as const;
    return useSWRMutation<PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cd["response"], PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cd["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cd["data"], PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cd["error"], PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cd["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}