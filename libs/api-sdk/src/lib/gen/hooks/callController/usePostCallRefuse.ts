import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostCallRefuseMutationRequest, PostCallRefuseMutationResponse, PostCallRefuseHeaderParams } from "../../types/PostCallRefuse";

 type PostCallRefuseClient = typeof client<PostCallRefuseMutationResponse, never, PostCallRefuseMutationRequest>;
type PostCallRefuse = {
    data: PostCallRefuseMutationResponse;
    error: never;
    request: PostCallRefuseMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostCallRefuseHeaderParams;
    response: PostCallRefuseMutationResponse;
    client: {
        parameters: Partial<Parameters<PostCallRefuseClient>[0]>;
        return: Awaited<ReturnType<PostCallRefuseClient>>;
    };
};
/**
 * @summary refuse
 * @link /call/refuse
 */
export function usePostCallRefuse(headers?: PostCallRefuse["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostCallRefuse["response"], PostCallRefuse["error"]>;
    client?: PostCallRefuse["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostCallRefuse["response"], PostCallRefuse["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/call/refuse` as const;
    return useSWRMutation<PostCallRefuse["response"], PostCallRefuse["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostCallRefuse["data"], PostCallRefuse["error"], PostCallRefuse["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}