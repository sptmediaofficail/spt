import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminPartnersMutationRequest, PostAdminPartnersMutationResponse, PostAdminPartnersHeaderParams } from "../../types/PostAdminPartners";

 type PostAdminPartnersClient = typeof client<PostAdminPartnersMutationResponse, never, PostAdminPartnersMutationRequest>;
type PostAdminPartners = {
    data: PostAdminPartnersMutationResponse;
    error: never;
    request: PostAdminPartnersMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostAdminPartnersHeaderParams;
    response: PostAdminPartnersMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminPartnersClient>[0]>;
        return: Awaited<ReturnType<PostAdminPartnersClient>>;
    };
};
/**
 * @summary create
 * @link /admin/partners
 */
export function usePostAdminPartners(headers?: PostAdminPartners["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostAdminPartners["response"], PostAdminPartners["error"]>;
    client?: PostAdminPartners["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminPartners["response"], PostAdminPartners["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/partners` as const;
    return useSWRMutation<PostAdminPartners["response"], PostAdminPartners["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminPartners["data"], PostAdminPartners["error"], PostAdminPartners["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}