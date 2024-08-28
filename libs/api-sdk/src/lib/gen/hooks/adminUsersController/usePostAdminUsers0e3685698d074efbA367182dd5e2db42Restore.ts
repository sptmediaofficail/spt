import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminUsers0e3685698d074efbA367182dd5e2db42RestoreMutationRequest, PostAdminUsers0e3685698d074efbA367182dd5e2db42RestoreMutationResponse } from "../../types/PostAdminUsers0e3685698d074efbA367182dd5e2db42Restore";

 type PostAdminUsers0e3685698d074efbA367182dd5e2db42RestoreClient = typeof client<PostAdminUsers0e3685698d074efbA367182dd5e2db42RestoreMutationResponse, never, PostAdminUsers0e3685698d074efbA367182dd5e2db42RestoreMutationRequest>;
type PostAdminUsers0e3685698d074efbA367182dd5e2db42Restore = {
    data: PostAdminUsers0e3685698d074efbA367182dd5e2db42RestoreMutationResponse;
    error: never;
    request: PostAdminUsers0e3685698d074efbA367182dd5e2db42RestoreMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PostAdminUsers0e3685698d074efbA367182dd5e2db42RestoreMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminUsers0e3685698d074efbA367182dd5e2db42RestoreClient>[0]>;
        return: Awaited<ReturnType<PostAdminUsers0e3685698d074efbA367182dd5e2db42RestoreClient>>;
    };
};
/**
 * @summary restore
 * @link /admin/users/0e368569-8d07-4efb-a367-182dd5e2db42/restore
 */
export function usePostAdminUsers0e3685698d074efbA367182dd5e2db42Restore(options?: {
    mutation?: SWRMutationConfiguration<PostAdminUsers0e3685698d074efbA367182dd5e2db42Restore["response"], PostAdminUsers0e3685698d074efbA367182dd5e2db42Restore["error"]>;
    client?: PostAdminUsers0e3685698d074efbA367182dd5e2db42Restore["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminUsers0e3685698d074efbA367182dd5e2db42Restore["response"], PostAdminUsers0e3685698d074efbA367182dd5e2db42Restore["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/users/0e368569-8d07-4efb-a367-182dd5e2db42/restore` as const;
    return useSWRMutation<PostAdminUsers0e3685698d074efbA367182dd5e2db42Restore["response"], PostAdminUsers0e3685698d074efbA367182dd5e2db42Restore["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminUsers0e3685698d074efbA367182dd5e2db42Restore["data"], PostAdminUsers0e3685698d074efbA367182dd5e2db42Restore["error"], PostAdminUsers0e3685698d074efbA367182dd5e2db42Restore["request"]>({
            method: "post",
            url,
            data,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}