import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminCitiesMutationRequest, PostAdminCitiesMutationResponse, PostAdminCitiesHeaderParams } from "../../types/PostAdminCities";

 type PostAdminCitiesClient = typeof client<PostAdminCitiesMutationResponse, never, PostAdminCitiesMutationRequest>;
type PostAdminCities = {
    data: PostAdminCitiesMutationResponse;
    error: never;
    request: PostAdminCitiesMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostAdminCitiesHeaderParams;
    response: PostAdminCitiesMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminCitiesClient>[0]>;
        return: Awaited<ReturnType<PostAdminCitiesClient>>;
    };
};
/**
 * @summary create
 * @link /admin/cities
 */
export function usePostAdminCities(headers?: PostAdminCities["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostAdminCities["response"], PostAdminCities["error"]>;
    client?: PostAdminCities["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminCities["response"], PostAdminCities["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/cities` as const;
    return useSWRMutation<PostAdminCities["response"], PostAdminCities["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminCities["data"], PostAdminCities["error"], PostAdminCities["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}