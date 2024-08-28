import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminCities0e3685698d074efbA367182dd5e2db42RestoreMutationRequest, PostAdminCities0e3685698d074efbA367182dd5e2db42RestoreMutationResponse } from "../../types/PostAdminCities0e3685698d074efbA367182dd5e2db42Restore";

 type PostAdminCities0e3685698d074efbA367182dd5e2db42RestoreClient = typeof client<PostAdminCities0e3685698d074efbA367182dd5e2db42RestoreMutationResponse, never, PostAdminCities0e3685698d074efbA367182dd5e2db42RestoreMutationRequest>;
type PostAdminCities0e3685698d074efbA367182dd5e2db42Restore = {
    data: PostAdminCities0e3685698d074efbA367182dd5e2db42RestoreMutationResponse;
    error: never;
    request: PostAdminCities0e3685698d074efbA367182dd5e2db42RestoreMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PostAdminCities0e3685698d074efbA367182dd5e2db42RestoreMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminCities0e3685698d074efbA367182dd5e2db42RestoreClient>[0]>;
        return: Awaited<ReturnType<PostAdminCities0e3685698d074efbA367182dd5e2db42RestoreClient>>;
    };
};
/**
 * @summary restore
 * @link /admin/cities/0e368569-8d07-4efb-a367-182dd5e2db42/restore
 */
export function usePostAdminCities0e3685698d074efbA367182dd5e2db42Restore(options?: {
    mutation?: SWRMutationConfiguration<PostAdminCities0e3685698d074efbA367182dd5e2db42Restore["response"], PostAdminCities0e3685698d074efbA367182dd5e2db42Restore["error"]>;
    client?: PostAdminCities0e3685698d074efbA367182dd5e2db42Restore["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminCities0e3685698d074efbA367182dd5e2db42Restore["response"], PostAdminCities0e3685698d074efbA367182dd5e2db42Restore["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/cities/0e368569-8d07-4efb-a367-182dd5e2db42/restore` as const;
    return useSWRMutation<PostAdminCities0e3685698d074efbA367182dd5e2db42Restore["response"], PostAdminCities0e3685698d074efbA367182dd5e2db42Restore["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminCities0e3685698d074efbA367182dd5e2db42Restore["data"], PostAdminCities0e3685698d074efbA367182dd5e2db42Restore["error"], PostAdminCities0e3685698d074efbA367182dd5e2db42Restore["request"]>({
            method: "post",
            url,
            data,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}