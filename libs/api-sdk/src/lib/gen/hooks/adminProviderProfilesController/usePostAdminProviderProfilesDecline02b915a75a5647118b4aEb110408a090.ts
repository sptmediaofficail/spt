import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminProviderProfilesDecline02b915a75a5647118b4aEb110408a090MutationRequest, PostAdminProviderProfilesDecline02b915a75a5647118b4aEb110408a090MutationResponse, PostAdminProviderProfilesDecline02b915a75a5647118b4aEb110408a090HeaderParams } from "../../types/PostAdminProviderProfilesDecline02b915a75a5647118b4aEb110408a090";

 type PostAdminProviderProfilesDecline02b915a75a5647118b4aEb110408a090Client = typeof client<PostAdminProviderProfilesDecline02b915a75a5647118b4aEb110408a090MutationResponse, never, PostAdminProviderProfilesDecline02b915a75a5647118b4aEb110408a090MutationRequest>;
type PostAdminProviderProfilesDecline02b915a75a5647118b4aEb110408a090 = {
    data: PostAdminProviderProfilesDecline02b915a75a5647118b4aEb110408a090MutationResponse;
    error: never;
    request: PostAdminProviderProfilesDecline02b915a75a5647118b4aEb110408a090MutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostAdminProviderProfilesDecline02b915a75a5647118b4aEb110408a090HeaderParams;
    response: PostAdminProviderProfilesDecline02b915a75a5647118b4aEb110408a090MutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminProviderProfilesDecline02b915a75a5647118b4aEb110408a090Client>[0]>;
        return: Awaited<ReturnType<PostAdminProviderProfilesDecline02b915a75a5647118b4aEb110408a090Client>>;
    };
};
/**
 * @summary decline
 * @link /admin/provider-profiles/decline/02b915a7-5a56-4711-8b4a-eb110408a090
 */
export function usePostAdminProviderProfilesDecline02b915a75a5647118b4aEb110408a090(headers?: PostAdminProviderProfilesDecline02b915a75a5647118b4aEb110408a090["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostAdminProviderProfilesDecline02b915a75a5647118b4aEb110408a090["response"], PostAdminProviderProfilesDecline02b915a75a5647118b4aEb110408a090["error"]>;
    client?: PostAdminProviderProfilesDecline02b915a75a5647118b4aEb110408a090["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminProviderProfilesDecline02b915a75a5647118b4aEb110408a090["response"], PostAdminProviderProfilesDecline02b915a75a5647118b4aEb110408a090["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/provider-profiles/decline/02b915a7-5a56-4711-8b4a-eb110408a090` as const;
    return useSWRMutation<PostAdminProviderProfilesDecline02b915a75a5647118b4aEb110408a090["response"], PostAdminProviderProfilesDecline02b915a75a5647118b4aEb110408a090["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminProviderProfilesDecline02b915a75a5647118b4aEb110408a090["data"], PostAdminProviderProfilesDecline02b915a75a5647118b4aEb110408a090["error"], PostAdminProviderProfilesDecline02b915a75a5647118b4aEb110408a090["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}