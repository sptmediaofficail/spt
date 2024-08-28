import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminCityServices0e3685698d074efbA367182dd5e2db42RestoreMutationRequest, PostAdminCityServices0e3685698d074efbA367182dd5e2db42RestoreMutationResponse } from "../../types/PostAdminCityServices0e3685698d074efbA367182dd5e2db42Restore";

 type PostAdminCityServices0e3685698d074efbA367182dd5e2db42RestoreClient = typeof client<PostAdminCityServices0e3685698d074efbA367182dd5e2db42RestoreMutationResponse, never, PostAdminCityServices0e3685698d074efbA367182dd5e2db42RestoreMutationRequest>;
type PostAdminCityServices0e3685698d074efbA367182dd5e2db42Restore = {
    data: PostAdminCityServices0e3685698d074efbA367182dd5e2db42RestoreMutationResponse;
    error: never;
    request: PostAdminCityServices0e3685698d074efbA367182dd5e2db42RestoreMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PostAdminCityServices0e3685698d074efbA367182dd5e2db42RestoreMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminCityServices0e3685698d074efbA367182dd5e2db42RestoreClient>[0]>;
        return: Awaited<ReturnType<PostAdminCityServices0e3685698d074efbA367182dd5e2db42RestoreClient>>;
    };
};
/**
 * @summary restore
 * @link /admin/city-services/0e368569-8d07-4efb-a367-182dd5e2db42/restore
 */
export function usePostAdminCityServices0e3685698d074efbA367182dd5e2db42Restore(options?: {
    mutation?: SWRMutationConfiguration<PostAdminCityServices0e3685698d074efbA367182dd5e2db42Restore["response"], PostAdminCityServices0e3685698d074efbA367182dd5e2db42Restore["error"]>;
    client?: PostAdminCityServices0e3685698d074efbA367182dd5e2db42Restore["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminCityServices0e3685698d074efbA367182dd5e2db42Restore["response"], PostAdminCityServices0e3685698d074efbA367182dd5e2db42Restore["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/city-services/0e368569-8d07-4efb-a367-182dd5e2db42/restore` as const;
    return useSWRMutation<PostAdminCityServices0e3685698d074efbA367182dd5e2db42Restore["response"], PostAdminCityServices0e3685698d074efbA367182dd5e2db42Restore["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminCityServices0e3685698d074efbA367182dd5e2db42Restore["data"], PostAdminCityServices0e3685698d074efbA367182dd5e2db42Restore["error"], PostAdminCityServices0e3685698d074efbA367182dd5e2db42Restore["request"]>({
            method: "post",
            url,
            data,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}