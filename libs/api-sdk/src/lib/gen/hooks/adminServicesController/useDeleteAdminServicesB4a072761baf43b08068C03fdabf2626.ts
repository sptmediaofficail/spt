import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { DeleteAdminServicesB4a072761baf43b08068C03fdabf2626MutationResponse } from "../../types/DeleteAdminServicesB4a072761baf43b08068C03fdabf2626";

 type DeleteAdminServicesB4a072761baf43b08068C03fdabf2626Client = typeof client<DeleteAdminServicesB4a072761baf43b08068C03fdabf2626MutationResponse, never, never>;
type DeleteAdminServicesB4a072761baf43b08068C03fdabf2626 = {
    data: DeleteAdminServicesB4a072761baf43b08068C03fdabf2626MutationResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: DeleteAdminServicesB4a072761baf43b08068C03fdabf2626MutationResponse;
    client: {
        parameters: Partial<Parameters<DeleteAdminServicesB4a072761baf43b08068C03fdabf2626Client>[0]>;
        return: Awaited<ReturnType<DeleteAdminServicesB4a072761baf43b08068C03fdabf2626Client>>;
    };
};
/**
 * @summary delete
 * @link /admin/services/b4a07276-1baf-43b0-8068-c03fdabf2626
 */
export function useDeleteAdminServicesB4a072761baf43b08068C03fdabf2626(options?: {
    mutation?: SWRMutationConfiguration<DeleteAdminServicesB4a072761baf43b08068C03fdabf2626["response"], DeleteAdminServicesB4a072761baf43b08068C03fdabf2626["error"]>;
    client?: DeleteAdminServicesB4a072761baf43b08068C03fdabf2626["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<DeleteAdminServicesB4a072761baf43b08068C03fdabf2626["response"], DeleteAdminServicesB4a072761baf43b08068C03fdabf2626["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/services/b4a07276-1baf-43b0-8068-c03fdabf2626` as const;
    return useSWRMutation<DeleteAdminServicesB4a072761baf43b08068C03fdabf2626["response"], DeleteAdminServicesB4a072761baf43b08068C03fdabf2626["error"], typeof url | null>(shouldFetch ? url : null, async (_url) => {
        const res = await client<DeleteAdminServicesB4a072761baf43b08068C03fdabf2626["data"], DeleteAdminServicesB4a072761baf43b08068C03fdabf2626["error"]>({
            method: "delete",
            url,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}