import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminPages3MutationRequest, PostAdminPages3MutationResponse, PostAdminPages3HeaderParams } from "../../types/PostAdminPages3";

 type PostAdminPages3Client = typeof client<PostAdminPages3MutationResponse, never, PostAdminPages3MutationRequest>;
type PostAdminPages3 = {
    data: PostAdminPages3MutationResponse;
    error: never;
    request: PostAdminPages3MutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostAdminPages3HeaderParams;
    response: PostAdminPages3MutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminPages3Client>[0]>;
        return: Awaited<ReturnType<PostAdminPages3Client>>;
    };
};
/**
 * @summary update
 * @link /admin/pages/3
 */
export function usePostAdminPages3(headers?: PostAdminPages3["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostAdminPages3["response"], PostAdminPages3["error"]>;
    client?: PostAdminPages3["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminPages3["response"], PostAdminPages3["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/pages/3` as const;
    return useSWRMutation<PostAdminPages3["response"], PostAdminPages3["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminPages3["data"], PostAdminPages3["error"], PostAdminPages3["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}