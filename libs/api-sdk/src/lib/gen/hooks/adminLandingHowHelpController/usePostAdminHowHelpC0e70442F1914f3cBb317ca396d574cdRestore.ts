import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdRestoreMutationRequest, PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdRestoreMutationResponse } from "../../types/PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdRestore";

 type PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdRestoreClient = typeof client<PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdRestoreMutationResponse, never, PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdRestoreMutationRequest>;
type PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdRestore = {
    data: PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdRestoreMutationResponse;
    error: never;
    request: PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdRestoreMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdRestoreMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdRestoreClient>[0]>;
        return: Awaited<ReturnType<PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdRestoreClient>>;
    };
};
/**
 * @summary restore
 * @link /admin/how_help/c0e70442-f191-4f3c-bb31-7ca396d574cd/restore
 */
export function usePostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdRestore(options?: {
    mutation?: SWRMutationConfiguration<PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdRestore["response"], PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdRestore["error"]>;
    client?: PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdRestore["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdRestore["response"], PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdRestore["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/how_help/c0e70442-f191-4f3c-bb31-7ca396d574cd/restore` as const;
    return useSWRMutation<PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdRestore["response"], PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdRestore["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdRestore["data"], PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdRestore["error"], PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdRestore["request"]>({
            method: "post",
            url,
            data,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}