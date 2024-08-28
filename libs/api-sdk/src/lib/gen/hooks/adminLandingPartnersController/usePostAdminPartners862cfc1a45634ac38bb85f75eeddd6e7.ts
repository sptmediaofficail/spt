import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7MutationRequest, PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7MutationResponse, PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7HeaderParams } from "../../types/PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7";

 type PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7Client = typeof client<PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7MutationResponse, never, PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7MutationRequest>;
type PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7 = {
    data: PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7MutationResponse;
    error: never;
    request: PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7MutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7HeaderParams;
    response: PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7MutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7Client>[0]>;
        return: Awaited<ReturnType<PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7Client>>;
    };
};
/**
 * @summary update
 * @link /admin/partners/862cfc1a-4563-4ac3-8bb8-5f75eeddd6e7
 */
export function usePostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7(headers?: PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7["response"], PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7["error"]>;
    client?: PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7["response"], PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/partners/862cfc1a-4563-4ac3-8bb8-5f75eeddd6e7` as const;
    return useSWRMutation<PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7["response"], PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7["data"], PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7["error"], PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}