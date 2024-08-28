import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611StopMutationRequest, PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611StopMutationResponse } from "../../types/PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611Stop";

 type PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611StopClient = typeof client<PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611StopMutationResponse, never, PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611StopMutationRequest>;
type PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611Stop = {
    data: PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611StopMutationResponse;
    error: never;
    request: PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611StopMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611StopMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611StopClient>[0]>;
        return: Awaited<ReturnType<PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611StopClient>>;
    };
};
/**
 * @summary stop
 * @link /admin/commissions/d48c07f9-b8b8-46d9-8b3c-3ba8fcdbe611/stop
 */
export function usePostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611Stop(options?: {
    mutation?: SWRMutationConfiguration<PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611Stop["response"], PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611Stop["error"]>;
    client?: PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611Stop["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611Stop["response"], PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611Stop["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/commissions/d48c07f9-b8b8-46d9-8b3c-3ba8fcdbe611/stop` as const;
    return useSWRMutation<PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611Stop["response"], PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611Stop["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611Stop["data"], PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611Stop["error"], PostAdminCommissionsD48c07f9B8b846d98b3c3ba8fcdbe611Stop["request"]>({
            method: "post",
            url,
            data,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}