import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostSharedAuthRegisterMutationRequest, PostSharedAuthRegisterMutationResponse, PostSharedAuthRegisterHeaderParams } from "../../types/PostSharedAuthRegister";

 type PostSharedAuthRegisterClient = typeof client<PostSharedAuthRegisterMutationResponse, never, PostSharedAuthRegisterMutationRequest>;
type PostSharedAuthRegister = {
    data: PostSharedAuthRegisterMutationResponse;
    error: never;
    request: PostSharedAuthRegisterMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostSharedAuthRegisterHeaderParams;
    response: PostSharedAuthRegisterMutationResponse;
    client: {
        parameters: Partial<Parameters<PostSharedAuthRegisterClient>[0]>;
        return: Awaited<ReturnType<PostSharedAuthRegisterClient>>;
    };
};
/**
 * @summary Register
 * @link /shared/auth/register
 */
export function usePostSharedAuthRegister(headers?: PostSharedAuthRegister["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostSharedAuthRegister["response"], PostSharedAuthRegister["error"]>;
    client?: PostSharedAuthRegister["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostSharedAuthRegister["response"], PostSharedAuthRegister["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/shared/auth/register` as const;
    return useSWRMutation<PostSharedAuthRegister["response"], PostSharedAuthRegister["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostSharedAuthRegister["data"], PostSharedAuthRegister["error"], PostSharedAuthRegister["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}