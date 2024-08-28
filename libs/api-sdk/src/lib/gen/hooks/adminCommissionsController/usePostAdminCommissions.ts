import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminCommissionsMutationRequest, PostAdminCommissionsMutationResponse, PostAdminCommissionsQueryParams, PostAdminCommissionsHeaderParams } from "../../types/PostAdminCommissions";

 type PostAdminCommissionsClient = typeof client<PostAdminCommissionsMutationResponse, never, PostAdminCommissionsMutationRequest>;
type PostAdminCommissions = {
    data: PostAdminCommissionsMutationResponse;
    error: never;
    request: PostAdminCommissionsMutationRequest;
    pathParams: never;
    queryParams: PostAdminCommissionsQueryParams;
    headerParams: PostAdminCommissionsHeaderParams;
    response: PostAdminCommissionsMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminCommissionsClient>[0]>;
        return: Awaited<ReturnType<PostAdminCommissionsClient>>;
    };
};
/**
 * @summary create
 * @link /admin/commissions
 */
export function usePostAdminCommissions(params?: PostAdminCommissions["queryParams"], headers?: PostAdminCommissions["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostAdminCommissions["response"], PostAdminCommissions["error"]>;
    client?: PostAdminCommissions["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminCommissions["response"], PostAdminCommissions["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/commissions` as const;
    return useSWRMutation<PostAdminCommissions["response"], PostAdminCommissions["error"], [
        typeof url,
        typeof params
    ] | null>(shouldFetch ? [url, params] : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminCommissions["data"], PostAdminCommissions["error"], PostAdminCommissions["request"]>({
            method: "post",
            url,
            params,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}