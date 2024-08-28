import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminProviderProfilesRestore02b915a75a5647118b4aEb110408a090MutationRequest, PostAdminProviderProfilesRestore02b915a75a5647118b4aEb110408a090MutationResponse } from "../../types/PostAdminProviderProfilesRestore02b915a75a5647118b4aEb110408a090";

 type PostAdminProviderProfilesRestore02b915a75a5647118b4aEb110408a090Client = typeof client<PostAdminProviderProfilesRestore02b915a75a5647118b4aEb110408a090MutationResponse, never, PostAdminProviderProfilesRestore02b915a75a5647118b4aEb110408a090MutationRequest>;
type PostAdminProviderProfilesRestore02b915a75a5647118b4aEb110408a090 = {
    data: PostAdminProviderProfilesRestore02b915a75a5647118b4aEb110408a090MutationResponse;
    error: never;
    request: PostAdminProviderProfilesRestore02b915a75a5647118b4aEb110408a090MutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PostAdminProviderProfilesRestore02b915a75a5647118b4aEb110408a090MutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminProviderProfilesRestore02b915a75a5647118b4aEb110408a090Client>[0]>;
        return: Awaited<ReturnType<PostAdminProviderProfilesRestore02b915a75a5647118b4aEb110408a090Client>>;
    };
};
/**
 * @summary restore
 * @link /admin/provider-profiles/restore/02b915a7-5a56-4711-8b4a-eb110408a090
 */
export function usePostAdminProviderProfilesRestore02b915a75a5647118b4aEb110408a090(options?: {
    mutation?: SWRMutationConfiguration<PostAdminProviderProfilesRestore02b915a75a5647118b4aEb110408a090["response"], PostAdminProviderProfilesRestore02b915a75a5647118b4aEb110408a090["error"]>;
    client?: PostAdminProviderProfilesRestore02b915a75a5647118b4aEb110408a090["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminProviderProfilesRestore02b915a75a5647118b4aEb110408a090["response"], PostAdminProviderProfilesRestore02b915a75a5647118b4aEb110408a090["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/provider-profiles/restore/02b915a7-5a56-4711-8b4a-eb110408a090` as const;
    return useSWRMutation<PostAdminProviderProfilesRestore02b915a75a5647118b4aEb110408a090["response"], PostAdminProviderProfilesRestore02b915a75a5647118b4aEb110408a090["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminProviderProfilesRestore02b915a75a5647118b4aEb110408a090["data"], PostAdminProviderProfilesRestore02b915a75a5647118b4aEb110408a090["error"], PostAdminProviderProfilesRestore02b915a75a5647118b4aEb110408a090["request"]>({
            method: "post",
            url,
            data,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}