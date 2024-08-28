import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminCityServicesDetachMutationRequest, PostAdminCityServicesDetachMutationResponse } from "../../types/PostAdminCityServicesDetach";

 type PostAdminCityServicesDetachClient = typeof client<PostAdminCityServicesDetachMutationResponse, never, PostAdminCityServicesDetachMutationRequest>;
type PostAdminCityServicesDetach = {
    data: PostAdminCityServicesDetachMutationResponse;
    error: never;
    request: PostAdminCityServicesDetachMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PostAdminCityServicesDetachMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminCityServicesDetachClient>[0]>;
        return: Awaited<ReturnType<PostAdminCityServicesDetachClient>>;
    };
};
/**
 * @summary detach-service
 * @link /admin/city-services/detach
 */
export function usePostAdminCityServicesDetach(options?: {
    mutation?: SWRMutationConfiguration<PostAdminCityServicesDetach["response"], PostAdminCityServicesDetach["error"]>;
    client?: PostAdminCityServicesDetach["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminCityServicesDetach["response"], PostAdminCityServicesDetach["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/city-services/detach` as const;
    return useSWRMutation<PostAdminCityServicesDetach["response"], PostAdminCityServicesDetach["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminCityServicesDetach["data"], PostAdminCityServicesDetach["error"], PostAdminCityServicesDetach["request"]>({
            method: "post",
            url,
            data,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}