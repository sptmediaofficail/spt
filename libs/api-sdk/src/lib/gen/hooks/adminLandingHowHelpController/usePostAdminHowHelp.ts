import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminHowHelpMutationRequest, PostAdminHowHelpMutationResponse, PostAdminHowHelpHeaderParams } from "../../types/PostAdminHowHelp";

 type PostAdminHowHelpClient = typeof client<PostAdminHowHelpMutationResponse, never, PostAdminHowHelpMutationRequest>;
type PostAdminHowHelp = {
    data: PostAdminHowHelpMutationResponse;
    error: never;
    request: PostAdminHowHelpMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostAdminHowHelpHeaderParams;
    response: PostAdminHowHelpMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminHowHelpClient>[0]>;
        return: Awaited<ReturnType<PostAdminHowHelpClient>>;
    };
};
/**
 * @summary create
 * @link /admin/how_help
 */
export function usePostAdminHowHelp(headers?: PostAdminHowHelp["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostAdminHowHelp["response"], PostAdminHowHelp["error"]>;
    client?: PostAdminHowHelp["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminHowHelp["response"], PostAdminHowHelp["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/how_help` as const;
    return useSWRMutation<PostAdminHowHelp["response"], PostAdminHowHelp["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminHowHelp["data"], PostAdminHowHelp["error"], PostAdminHowHelp["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}