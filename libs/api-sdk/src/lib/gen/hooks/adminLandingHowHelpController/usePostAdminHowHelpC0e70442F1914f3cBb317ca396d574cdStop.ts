import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdStopMutationRequest, PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdStopMutationResponse } from "../../types/PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdStop";

 type PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdStopClient = typeof client<PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdStopMutationResponse, never, PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdStopMutationRequest>;
type PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdStop = {
    data: PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdStopMutationResponse;
    error: never;
    request: PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdStopMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdStopMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdStopClient>[0]>;
        return: Awaited<ReturnType<PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdStopClient>>;
    };
};
/**
 * @summary stop
 * @link /admin/how_help/c0e70442-f191-4f3c-bb31-7ca396d574cd/stop
 */
export function usePostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdStop(options?: {
    mutation?: SWRMutationConfiguration<PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdStop["response"], PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdStop["error"]>;
    client?: PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdStop["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdStop["response"], PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdStop["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/how_help/c0e70442-f191-4f3c-bb31-7ca396d574cd/stop` as const;
    return useSWRMutation<PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdStop["response"], PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdStop["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdStop["data"], PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdStop["error"], PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdStop["request"]>({
            method: "post",
            url,
            data,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}