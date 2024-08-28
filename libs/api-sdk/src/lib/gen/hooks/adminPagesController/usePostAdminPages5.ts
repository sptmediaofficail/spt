import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminPages5MutationRequest, PostAdminPages5MutationResponse, PostAdminPages5HeaderParams } from "../../types/PostAdminPages5";

 type PostAdminPages5Client = typeof client<PostAdminPages5MutationResponse, never, PostAdminPages5MutationRequest>;
type PostAdminPages5 = {
    data: PostAdminPages5MutationResponse;
    error: never;
    request: PostAdminPages5MutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostAdminPages5HeaderParams;
    response: PostAdminPages5MutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminPages5Client>[0]>;
        return: Awaited<ReturnType<PostAdminPages5Client>>;
    };
};
/**
 * @summary update
 * @link /admin/pages/5
 */
export function usePostAdminPages5(headers?: PostAdminPages5["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostAdminPages5["response"], PostAdminPages5["error"]>;
    client?: PostAdminPages5["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminPages5["response"], PostAdminPages5["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/pages/5` as const;
    return useSWRMutation<PostAdminPages5["response"], PostAdminPages5["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminPages5["data"], PostAdminPages5["error"], PostAdminPages5["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}