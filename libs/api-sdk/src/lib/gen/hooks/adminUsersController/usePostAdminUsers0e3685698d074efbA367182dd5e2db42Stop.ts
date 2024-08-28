import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminUsers0e3685698d074efbA367182dd5e2db42StopMutationRequest, PostAdminUsers0e3685698d074efbA367182dd5e2db42StopMutationResponse } from "../../types/PostAdminUsers0e3685698d074efbA367182dd5e2db42Stop";

 type PostAdminUsers0e3685698d074efbA367182dd5e2db42StopClient = typeof client<PostAdminUsers0e3685698d074efbA367182dd5e2db42StopMutationResponse, never, PostAdminUsers0e3685698d074efbA367182dd5e2db42StopMutationRequest>;
type PostAdminUsers0e3685698d074efbA367182dd5e2db42Stop = {
    data: PostAdminUsers0e3685698d074efbA367182dd5e2db42StopMutationResponse;
    error: never;
    request: PostAdminUsers0e3685698d074efbA367182dd5e2db42StopMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PostAdminUsers0e3685698d074efbA367182dd5e2db42StopMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminUsers0e3685698d074efbA367182dd5e2db42StopClient>[0]>;
        return: Awaited<ReturnType<PostAdminUsers0e3685698d074efbA367182dd5e2db42StopClient>>;
    };
};
/**
 * @summary stop
 * @link /admin/users/0e368569-8d07-4efb-a367-182dd5e2db42/stop
 */
export function usePostAdminUsers0e3685698d074efbA367182dd5e2db42Stop(options?: {
    mutation?: SWRMutationConfiguration<PostAdminUsers0e3685698d074efbA367182dd5e2db42Stop["response"], PostAdminUsers0e3685698d074efbA367182dd5e2db42Stop["error"]>;
    client?: PostAdminUsers0e3685698d074efbA367182dd5e2db42Stop["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminUsers0e3685698d074efbA367182dd5e2db42Stop["response"], PostAdminUsers0e3685698d074efbA367182dd5e2db42Stop["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/users/0e368569-8d07-4efb-a367-182dd5e2db42/stop` as const;
    return useSWRMutation<PostAdminUsers0e3685698d074efbA367182dd5e2db42Stop["response"], PostAdminUsers0e3685698d074efbA367182dd5e2db42Stop["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminUsers0e3685698d074efbA367182dd5e2db42Stop["data"], PostAdminUsers0e3685698d074efbA367182dd5e2db42Stop["error"], PostAdminUsers0e3685698d074efbA367182dd5e2db42Stop["request"]>({
            method: "post",
            url,
            data,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}