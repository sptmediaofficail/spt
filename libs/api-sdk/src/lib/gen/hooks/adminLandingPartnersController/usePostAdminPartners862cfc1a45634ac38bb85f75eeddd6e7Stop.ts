import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7StopMutationRequest, PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7StopMutationResponse } from "../../types/PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7Stop";

 type PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7StopClient = typeof client<PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7StopMutationResponse, never, PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7StopMutationRequest>;
type PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7Stop = {
    data: PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7StopMutationResponse;
    error: never;
    request: PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7StopMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7StopMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7StopClient>[0]>;
        return: Awaited<ReturnType<PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7StopClient>>;
    };
};
/**
 * @summary stop
 * @link /admin/partners/862cfc1a-4563-4ac3-8bb8-5f75eeddd6e7/stop
 */
export function usePostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7Stop(options?: {
    mutation?: SWRMutationConfiguration<PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7Stop["response"], PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7Stop["error"]>;
    client?: PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7Stop["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7Stop["response"], PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7Stop["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/partners/862cfc1a-4563-4ac3-8bb8-5f75eeddd6e7/stop` as const;
    return useSWRMutation<PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7Stop["response"], PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7Stop["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7Stop["data"], PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7Stop["error"], PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7Stop["request"]>({
            method: "post",
            url,
            data,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}