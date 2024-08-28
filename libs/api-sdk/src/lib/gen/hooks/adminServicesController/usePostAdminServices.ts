import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminServicesMutationRequest, PostAdminServicesMutationResponse } from "../../types/PostAdminServices";

 type PostAdminServicesClient = typeof client<PostAdminServicesMutationResponse, never, PostAdminServicesMutationRequest>;
type PostAdminServices = {
    data: PostAdminServicesMutationResponse;
    error: never;
    request: PostAdminServicesMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PostAdminServicesMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminServicesClient>[0]>;
        return: Awaited<ReturnType<PostAdminServicesClient>>;
    };
};
/**
 * @summary create
 * @link /admin/services
 */
export function usePostAdminServices(options?: {
    mutation?: SWRMutationConfiguration<PostAdminServices["response"], PostAdminServices["error"]>;
    client?: PostAdminServices["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminServices["response"], PostAdminServices["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/services` as const;
    return useSWRMutation<PostAdminServices["response"], PostAdminServices["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminServices["data"], PostAdminServices["error"], PostAdminServices["request"]>({
            method: "post",
            url,
            data,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}