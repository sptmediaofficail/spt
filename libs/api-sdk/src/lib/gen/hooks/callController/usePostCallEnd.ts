import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostCallEndMutationRequest, PostCallEndMutationResponse, PostCallEndHeaderParams } from "../../types/PostCallEnd";

 type PostCallEndClient = typeof client<PostCallEndMutationResponse, never, PostCallEndMutationRequest>;
type PostCallEnd = {
    data: PostCallEndMutationResponse;
    error: never;
    request: PostCallEndMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostCallEndHeaderParams;
    response: PostCallEndMutationResponse;
    client: {
        parameters: Partial<Parameters<PostCallEndClient>[0]>;
        return: Awaited<ReturnType<PostCallEndClient>>;
    };
};
/**
 * @summary end
 * @link /call/end
 */
export function usePostCallEnd(headers?: PostCallEnd["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostCallEnd["response"], PostCallEnd["error"]>;
    client?: PostCallEnd["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostCallEnd["response"], PostCallEnd["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/call/end` as const;
    return useSWRMutation<PostCallEnd["response"], PostCallEnd["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostCallEnd["data"], PostCallEnd["error"], PostCallEnd["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}