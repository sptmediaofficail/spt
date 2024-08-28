import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { DeleteAdminSiteOffersE3ed5781465b4c16879f981812fb6210MutationResponse } from "../../types/DeleteAdminSiteOffersE3ed5781465b4c16879f981812fb6210";

 type DeleteAdminSiteOffersE3ed5781465b4c16879f981812fb6210Client = typeof client<DeleteAdminSiteOffersE3ed5781465b4c16879f981812fb6210MutationResponse, never, never>;
type DeleteAdminSiteOffersE3ed5781465b4c16879f981812fb6210 = {
    data: DeleteAdminSiteOffersE3ed5781465b4c16879f981812fb6210MutationResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: DeleteAdminSiteOffersE3ed5781465b4c16879f981812fb6210MutationResponse;
    client: {
        parameters: Partial<Parameters<DeleteAdminSiteOffersE3ed5781465b4c16879f981812fb6210Client>[0]>;
        return: Awaited<ReturnType<DeleteAdminSiteOffersE3ed5781465b4c16879f981812fb6210Client>>;
    };
};
/**
 * @summary delete
 * @link /admin/site_offers/e3ed5781-465b-4c16-879f-981812fb6210
 */
export function useDeleteAdminSiteOffersE3ed5781465b4c16879f981812fb6210(options?: {
    mutation?: SWRMutationConfiguration<DeleteAdminSiteOffersE3ed5781465b4c16879f981812fb6210["response"], DeleteAdminSiteOffersE3ed5781465b4c16879f981812fb6210["error"]>;
    client?: DeleteAdminSiteOffersE3ed5781465b4c16879f981812fb6210["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<DeleteAdminSiteOffersE3ed5781465b4c16879f981812fb6210["response"], DeleteAdminSiteOffersE3ed5781465b4c16879f981812fb6210["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/site_offers/e3ed5781-465b-4c16-879f-981812fb6210` as const;
    return useSWRMutation<DeleteAdminSiteOffersE3ed5781465b4c16879f981812fb6210["response"], DeleteAdminSiteOffersE3ed5781465b4c16879f981812fb6210["error"], typeof url | null>(shouldFetch ? url : null, async (_url) => {
        const res = await client<DeleteAdminSiteOffersE3ed5781465b4c16879f981812fb6210["data"], DeleteAdminSiteOffersE3ed5781465b4c16879f981812fb6210["error"]>({
            method: "delete",
            url,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}