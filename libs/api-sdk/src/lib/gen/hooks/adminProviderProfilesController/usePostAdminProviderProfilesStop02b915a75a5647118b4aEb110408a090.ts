import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminProviderProfilesStop02b915a75a5647118b4aEb110408a090MutationRequest, PostAdminProviderProfilesStop02b915a75a5647118b4aEb110408a090MutationResponse } from "../../types/PostAdminProviderProfilesStop02b915a75a5647118b4aEb110408a090";

 type PostAdminProviderProfilesStop02b915a75a5647118b4aEb110408a090Client = typeof client<PostAdminProviderProfilesStop02b915a75a5647118b4aEb110408a090MutationResponse, never, PostAdminProviderProfilesStop02b915a75a5647118b4aEb110408a090MutationRequest>;
type PostAdminProviderProfilesStop02b915a75a5647118b4aEb110408a090 = {
    data: PostAdminProviderProfilesStop02b915a75a5647118b4aEb110408a090MutationResponse;
    error: never;
    request: PostAdminProviderProfilesStop02b915a75a5647118b4aEb110408a090MutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PostAdminProviderProfilesStop02b915a75a5647118b4aEb110408a090MutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminProviderProfilesStop02b915a75a5647118b4aEb110408a090Client>[0]>;
        return: Awaited<ReturnType<PostAdminProviderProfilesStop02b915a75a5647118b4aEb110408a090Client>>;
    };
};
/**
 * @summary stop
 * @link /admin/provider-profiles/stop/02b915a7-5a56-4711-8b4a-eb110408a090
 */
export function usePostAdminProviderProfilesStop02b915a75a5647118b4aEb110408a090(options?: {
    mutation?: SWRMutationConfiguration<PostAdminProviderProfilesStop02b915a75a5647118b4aEb110408a090["response"], PostAdminProviderProfilesStop02b915a75a5647118b4aEb110408a090["error"]>;
    client?: PostAdminProviderProfilesStop02b915a75a5647118b4aEb110408a090["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminProviderProfilesStop02b915a75a5647118b4aEb110408a090["response"], PostAdminProviderProfilesStop02b915a75a5647118b4aEb110408a090["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/provider-profiles/stop/02b915a7-5a56-4711-8b4a-eb110408a090` as const;
    return useSWRMutation<PostAdminProviderProfilesStop02b915a75a5647118b4aEb110408a090["response"], PostAdminProviderProfilesStop02b915a75a5647118b4aEb110408a090["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminProviderProfilesStop02b915a75a5647118b4aEb110408a090["data"], PostAdminProviderProfilesStop02b915a75a5647118b4aEb110408a090["error"], PostAdminProviderProfilesStop02b915a75a5647118b4aEb110408a090["request"]>({
            method: "post",
            url,
            data,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}