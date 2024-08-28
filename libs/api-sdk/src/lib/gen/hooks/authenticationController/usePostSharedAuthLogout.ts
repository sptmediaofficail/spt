import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostSharedAuthLogoutMutationRequest, PostSharedAuthLogoutMutationResponse, PostSharedAuthLogoutHeaderParams } from "../../types/PostSharedAuthLogout";

 type PostSharedAuthLogoutClient = typeof client<PostSharedAuthLogoutMutationResponse, never, PostSharedAuthLogoutMutationRequest>;
type PostSharedAuthLogout = {
    data: PostSharedAuthLogoutMutationResponse;
    error: never;
    request: PostSharedAuthLogoutMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostSharedAuthLogoutHeaderParams;
    response: PostSharedAuthLogoutMutationResponse;
    client: {
        parameters: Partial<Parameters<PostSharedAuthLogoutClient>[0]>;
        return: Awaited<ReturnType<PostSharedAuthLogoutClient>>;
    };
};
/**
 * @summary logout
 * @link /shared/auth/logout
 */
export function usePostSharedAuthLogout(headers?: PostSharedAuthLogout["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostSharedAuthLogout["response"], PostSharedAuthLogout["error"]>;
    client?: PostSharedAuthLogout["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostSharedAuthLogout["response"], PostSharedAuthLogout["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/shared/auth/logout` as const;
    return useSWRMutation<PostSharedAuthLogout["response"], PostSharedAuthLogout["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostSharedAuthLogout["data"], PostSharedAuthLogout["error"], PostSharedAuthLogout["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}