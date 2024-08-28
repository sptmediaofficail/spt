import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminCityServicesAttachMutationRequest, PostAdminCityServicesAttachMutationResponse, PostAdminCityServicesAttachHeaderParams } from "../../types/PostAdminCityServicesAttach";

 type PostAdminCityServicesAttachClient = typeof client<PostAdminCityServicesAttachMutationResponse, never, PostAdminCityServicesAttachMutationRequest>;
type PostAdminCityServicesAttach = {
    data: PostAdminCityServicesAttachMutationResponse;
    error: never;
    request: PostAdminCityServicesAttachMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostAdminCityServicesAttachHeaderParams;
    response: PostAdminCityServicesAttachMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminCityServicesAttachClient>[0]>;
        return: Awaited<ReturnType<PostAdminCityServicesAttachClient>>;
    };
};
/**
 * @summary attach-service
 * @link /admin/city-services/attach
 */
export function usePostAdminCityServicesAttach(headers?: PostAdminCityServicesAttach["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostAdminCityServicesAttach["response"], PostAdminCityServicesAttach["error"]>;
    client?: PostAdminCityServicesAttach["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminCityServicesAttach["response"], PostAdminCityServicesAttach["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/city-services/attach` as const;
    return useSWRMutation<PostAdminCityServicesAttach["response"], PostAdminCityServicesAttach["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminCityServicesAttach["data"], PostAdminCityServicesAttach["error"], PostAdminCityServicesAttach["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}