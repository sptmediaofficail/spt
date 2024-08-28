import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611StopMutationRequest, PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611StopMutationResponse } from "../../types/PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611Stop";

 type PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611StopClient = typeof client<PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611StopMutationResponse, never, PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611StopMutationRequest>;
type PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611Stop = {
    data: PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611StopMutationResponse;
    error: never;
    request: PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611StopMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611StopMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611StopClient>[0]>;
        return: Awaited<ReturnType<PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611StopClient>>;
    };
};
/**
 * @summary stop
 * @link /admin/services/d48c07f9-b8b8-46d9-8b3c-3ba8fcdbe611/stop
 */
export function usePostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611Stop(options?: {
    mutation?: SWRMutationConfiguration<PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611Stop["response"], PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611Stop["error"]>;
    client?: PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611Stop["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611Stop["response"], PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611Stop["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/services/d48c07f9-b8b8-46d9-8b3c-3ba8fcdbe611/stop` as const;
    return useSWRMutation<PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611Stop["response"], PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611Stop["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611Stop["data"], PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611Stop["error"], PostAdminServicesD48c07f9B8b846d98b3c3ba8fcdbe611Stop["request"]>({
            method: "post",
            url,
            data,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}