import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminMessageTemplates5MutationRequest, PostAdminMessageTemplates5MutationResponse, PostAdminMessageTemplates5HeaderParams } from "../../types/PostAdminMessageTemplates5";

 type PostAdminMessageTemplates5Client = typeof client<PostAdminMessageTemplates5MutationResponse, never, PostAdminMessageTemplates5MutationRequest>;
type PostAdminMessageTemplates5 = {
    data: PostAdminMessageTemplates5MutationResponse;
    error: never;
    request: PostAdminMessageTemplates5MutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostAdminMessageTemplates5HeaderParams;
    response: PostAdminMessageTemplates5MutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminMessageTemplates5Client>[0]>;
        return: Awaited<ReturnType<PostAdminMessageTemplates5Client>>;
    };
};
/**
 * @summary Update Exist Message Template
 * @link /admin/message-templates/5
 */
export function usePostAdminMessageTemplates5(headers?: PostAdminMessageTemplates5["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostAdminMessageTemplates5["response"], PostAdminMessageTemplates5["error"]>;
    client?: PostAdminMessageTemplates5["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminMessageTemplates5["response"], PostAdminMessageTemplates5["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/message-templates/5` as const;
    return useSWRMutation<PostAdminMessageTemplates5["response"], PostAdminMessageTemplates5["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminMessageTemplates5["data"], PostAdminMessageTemplates5["error"], PostAdminMessageTemplates5["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}