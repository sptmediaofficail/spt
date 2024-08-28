import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostClientOffer96be9e84956a429889bd9bd3c58e251eAcceptMutationRequest, PostClientOffer96be9e84956a429889bd9bd3c58e251eAcceptMutationResponse, PostClientOffer96be9e84956a429889bd9bd3c58e251eAcceptHeaderParams } from "../../types/PostClientOffer96be9e84956a429889bd9bd3c58e251eAccept";

 type PostClientOffer96be9e84956a429889bd9bd3c58e251eAcceptClient = typeof client<PostClientOffer96be9e84956a429889bd9bd3c58e251eAcceptMutationResponse, never, PostClientOffer96be9e84956a429889bd9bd3c58e251eAcceptMutationRequest>;
type PostClientOffer96be9e84956a429889bd9bd3c58e251eAccept = {
    data: PostClientOffer96be9e84956a429889bd9bd3c58e251eAcceptMutationResponse;
    error: never;
    request: PostClientOffer96be9e84956a429889bd9bd3c58e251eAcceptMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostClientOffer96be9e84956a429889bd9bd3c58e251eAcceptHeaderParams;
    response: PostClientOffer96be9e84956a429889bd9bd3c58e251eAcceptMutationResponse;
    client: {
        parameters: Partial<Parameters<PostClientOffer96be9e84956a429889bd9bd3c58e251eAcceptClient>[0]>;
        return: Awaited<ReturnType<PostClientOffer96be9e84956a429889bd9bd3c58e251eAcceptClient>>;
    };
};
/**
 * @summary Accept
 * @link /client/offer/96be9e84-956a-4298-89bd-9bd3c58e251e/accept
 */
export function usePostClientOffer96be9e84956a429889bd9bd3c58e251eAccept(headers?: PostClientOffer96be9e84956a429889bd9bd3c58e251eAccept["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostClientOffer96be9e84956a429889bd9bd3c58e251eAccept["response"], PostClientOffer96be9e84956a429889bd9bd3c58e251eAccept["error"]>;
    client?: PostClientOffer96be9e84956a429889bd9bd3c58e251eAccept["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostClientOffer96be9e84956a429889bd9bd3c58e251eAccept["response"], PostClientOffer96be9e84956a429889bd9bd3c58e251eAccept["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/client/offer/96be9e84-956a-4298-89bd-9bd3c58e251e/accept` as const;
    return useSWRMutation<PostClientOffer96be9e84956a429889bd9bd3c58e251eAccept["response"], PostClientOffer96be9e84956a429889bd9bd3c58e251eAccept["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostClientOffer96be9e84956a429889bd9bd3c58e251eAccept["data"], PostClientOffer96be9e84956a429889bd9bd3c58e251eAccept["error"], PostClientOffer96be9e84956a429889bd9bd3c58e251eAccept["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}