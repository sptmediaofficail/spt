import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostProviderProfileMutationRequest, PostProviderProfileMutationResponse, PostProviderProfileHeaderParams } from "../../types/PostProviderProfile";

 type PostProviderProfileClient = typeof client<PostProviderProfileMutationResponse, never, PostProviderProfileMutationRequest>;
type PostProviderProfile = {
    data: PostProviderProfileMutationResponse;
    error: never;
    request: PostProviderProfileMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostProviderProfileHeaderParams;
    response: PostProviderProfileMutationResponse;
    client: {
        parameters: Partial<Parameters<PostProviderProfileClient>[0]>;
        return: Awaited<ReturnType<PostProviderProfileClient>>;
    };
};
/**
 * @summary store
 * @link /provider/profile
 */
export function usePostProviderProfile(headers?: PostProviderProfile["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostProviderProfile["response"], PostProviderProfile["error"]>;
    client?: PostProviderProfile["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostProviderProfile["response"], PostProviderProfile["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/provider/profile` as const;
    return useSWRMutation<PostProviderProfile["response"], PostProviderProfile["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostProviderProfile["data"], PostProviderProfile["error"], PostProviderProfile["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}