import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminCities0e3685698d074efbA367182dd5e2db42StopMutationRequest, PostAdminCities0e3685698d074efbA367182dd5e2db42StopMutationResponse } from "../../types/PostAdminCities0e3685698d074efbA367182dd5e2db42Stop";

 type PostAdminCities0e3685698d074efbA367182dd5e2db42StopClient = typeof client<PostAdminCities0e3685698d074efbA367182dd5e2db42StopMutationResponse, never, PostAdminCities0e3685698d074efbA367182dd5e2db42StopMutationRequest>;
type PostAdminCities0e3685698d074efbA367182dd5e2db42Stop = {
    data: PostAdminCities0e3685698d074efbA367182dd5e2db42StopMutationResponse;
    error: never;
    request: PostAdminCities0e3685698d074efbA367182dd5e2db42StopMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PostAdminCities0e3685698d074efbA367182dd5e2db42StopMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminCities0e3685698d074efbA367182dd5e2db42StopClient>[0]>;
        return: Awaited<ReturnType<PostAdminCities0e3685698d074efbA367182dd5e2db42StopClient>>;
    };
};
/**
 * @summary stop
 * @link /admin/cities/0e368569-8d07-4efb-a367-182dd5e2db42/stop
 */
export function usePostAdminCities0e3685698d074efbA367182dd5e2db42Stop(options?: {
    mutation?: SWRMutationConfiguration<PostAdminCities0e3685698d074efbA367182dd5e2db42Stop["response"], PostAdminCities0e3685698d074efbA367182dd5e2db42Stop["error"]>;
    client?: PostAdminCities0e3685698d074efbA367182dd5e2db42Stop["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminCities0e3685698d074efbA367182dd5e2db42Stop["response"], PostAdminCities0e3685698d074efbA367182dd5e2db42Stop["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/cities/0e368569-8d07-4efb-a367-182dd5e2db42/stop` as const;
    return useSWRMutation<PostAdminCities0e3685698d074efbA367182dd5e2db42Stop["response"], PostAdminCities0e3685698d074efbA367182dd5e2db42Stop["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminCities0e3685698d074efbA367182dd5e2db42Stop["data"], PostAdminCities0e3685698d074efbA367182dd5e2db42Stop["error"], PostAdminCities0e3685698d074efbA367182dd5e2db42Stop["request"]>({
            method: "post",
            url,
            data,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}