import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminTermsIdMutationRequest, PostAdminTermsIdMutationResponse, PostAdminTermsIdPathParams, PostAdminTermsIdHeaderParams } from "../../types/PostAdminTermsId";

 type PostAdminTermsIdClient = typeof client<PostAdminTermsIdMutationResponse, never, PostAdminTermsIdMutationRequest>;
type PostAdminTermsId = {
    data: PostAdminTermsIdMutationResponse;
    error: never;
    request: PostAdminTermsIdMutationRequest;
    pathParams: PostAdminTermsIdPathParams;
    queryParams: never;
    headerParams: PostAdminTermsIdHeaderParams;
    response: PostAdminTermsIdMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminTermsIdClient>[0]>;
        return: Awaited<ReturnType<PostAdminTermsIdClient>>;
    };
};
/**
 * @summary update
 * @link /admin/terms/:id
 */
export function usePostAdminTermsId(id: PostAdminTermsIdPathParams["id"], headers?: PostAdminTermsId["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostAdminTermsId["response"], PostAdminTermsId["error"]>;
    client?: PostAdminTermsId["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminTermsId["response"], PostAdminTermsId["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/terms/${id}` as const;
    return useSWRMutation<PostAdminTermsId["response"], PostAdminTermsId["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminTermsId["data"], PostAdminTermsId["error"], PostAdminTermsId["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}