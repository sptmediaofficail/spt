import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostCallAcceptMutationRequest, PostCallAcceptMutationResponse, PostCallAcceptHeaderParams } from "../../types/PostCallAccept";

 type PostCallAcceptClient = typeof client<PostCallAcceptMutationResponse, never, PostCallAcceptMutationRequest>;
type PostCallAccept = {
    data: PostCallAcceptMutationResponse;
    error: never;
    request: PostCallAcceptMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostCallAcceptHeaderParams;
    response: PostCallAcceptMutationResponse;
    client: {
        parameters: Partial<Parameters<PostCallAcceptClient>[0]>;
        return: Awaited<ReturnType<PostCallAcceptClient>>;
    };
};
/**
 * @summary accept
 * @link /call/accept
 */
export function usePostCallAccept(headers?: PostCallAccept["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostCallAccept["response"], PostCallAccept["error"]>;
    client?: PostCallAccept["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostCallAccept["response"], PostCallAccept["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/call/accept` as const;
    return useSWRMutation<PostCallAccept["response"], PostCallAccept["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostCallAccept["data"], PostCallAccept["error"], PostCallAccept["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}