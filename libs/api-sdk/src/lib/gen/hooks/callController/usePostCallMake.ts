import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostCallMakeMutationRequest, PostCallMakeMutationResponse, PostCallMakeHeaderParams } from "../../types/PostCallMake";

 type PostCallMakeClient = typeof client<PostCallMakeMutationResponse, never, PostCallMakeMutationRequest>;
type PostCallMake = {
    data: PostCallMakeMutationResponse;
    error: never;
    request: PostCallMakeMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostCallMakeHeaderParams;
    response: PostCallMakeMutationResponse;
    client: {
        parameters: Partial<Parameters<PostCallMakeClient>[0]>;
        return: Awaited<ReturnType<PostCallMakeClient>>;
    };
};
/**
 * @summary make a call
 * @link /call/make
 */
export function usePostCallMake(headers?: PostCallMake["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostCallMake["response"], PostCallMake["error"]>;
    client?: PostCallMake["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostCallMake["response"], PostCallMake["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/call/make` as const;
    return useSWRMutation<PostCallMake["response"], PostCallMake["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostCallMake["data"], PostCallMake["error"], PostCallMake["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}