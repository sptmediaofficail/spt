import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminTermsMutationRequest, PostAdminTermsMutationResponse, PostAdminTermsHeaderParams } from "../../types/PostAdminTerms";

 type PostAdminTermsClient = typeof client<PostAdminTermsMutationResponse, never, PostAdminTermsMutationRequest>;
type PostAdminTerms = {
    data: PostAdminTermsMutationResponse;
    error: never;
    request: PostAdminTermsMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostAdminTermsHeaderParams;
    response: PostAdminTermsMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminTermsClient>[0]>;
        return: Awaited<ReturnType<PostAdminTermsClient>>;
    };
};
/**
 * @summary create
 * @link /admin/terms
 */
export function usePostAdminTerms(headers?: PostAdminTerms["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostAdminTerms["response"], PostAdminTerms["error"]>;
    client?: PostAdminTerms["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminTerms["response"], PostAdminTerms["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/terms` as const;
    return useSWRMutation<PostAdminTerms["response"], PostAdminTerms["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminTerms["data"], PostAdminTerms["error"], PostAdminTerms["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}