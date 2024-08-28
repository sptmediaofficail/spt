import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminCityServices0e3685698d074efbA367182dd5e2db42StopMutationRequest, PostAdminCityServices0e3685698d074efbA367182dd5e2db42StopMutationResponse } from "../../types/PostAdminCityServices0e3685698d074efbA367182dd5e2db42Stop";

 type PostAdminCityServices0e3685698d074efbA367182dd5e2db42StopClient = typeof client<PostAdminCityServices0e3685698d074efbA367182dd5e2db42StopMutationResponse, never, PostAdminCityServices0e3685698d074efbA367182dd5e2db42StopMutationRequest>;
type PostAdminCityServices0e3685698d074efbA367182dd5e2db42Stop = {
    data: PostAdminCityServices0e3685698d074efbA367182dd5e2db42StopMutationResponse;
    error: never;
    request: PostAdminCityServices0e3685698d074efbA367182dd5e2db42StopMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PostAdminCityServices0e3685698d074efbA367182dd5e2db42StopMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminCityServices0e3685698d074efbA367182dd5e2db42StopClient>[0]>;
        return: Awaited<ReturnType<PostAdminCityServices0e3685698d074efbA367182dd5e2db42StopClient>>;
    };
};
/**
 * @summary stop
 * @link /admin/city-services/0e368569-8d07-4efb-a367-182dd5e2db42/stop
 */
export function usePostAdminCityServices0e3685698d074efbA367182dd5e2db42Stop(options?: {
    mutation?: SWRMutationConfiguration<PostAdminCityServices0e3685698d074efbA367182dd5e2db42Stop["response"], PostAdminCityServices0e3685698d074efbA367182dd5e2db42Stop["error"]>;
    client?: PostAdminCityServices0e3685698d074efbA367182dd5e2db42Stop["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminCityServices0e3685698d074efbA367182dd5e2db42Stop["response"], PostAdminCityServices0e3685698d074efbA367182dd5e2db42Stop["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/city-services/0e368569-8d07-4efb-a367-182dd5e2db42/stop` as const;
    return useSWRMutation<PostAdminCityServices0e3685698d074efbA367182dd5e2db42Stop["response"], PostAdminCityServices0e3685698d074efbA367182dd5e2db42Stop["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminCityServices0e3685698d074efbA367182dd5e2db42Stop["data"], PostAdminCityServices0e3685698d074efbA367182dd5e2db42Stop["error"], PostAdminCityServices0e3685698d074efbA367182dd5e2db42Stop["request"]>({
            method: "post",
            url,
            data,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}