import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { DeleteAdminCitiesB4a072761baf43b08068C03fdabf2626MutationResponse } from "../../types/DeleteAdminCitiesB4a072761baf43b08068C03fdabf2626";

 type DeleteAdminCitiesB4a072761baf43b08068C03fdabf2626Client = typeof client<DeleteAdminCitiesB4a072761baf43b08068C03fdabf2626MutationResponse, never, never>;
type DeleteAdminCitiesB4a072761baf43b08068C03fdabf2626 = {
    data: DeleteAdminCitiesB4a072761baf43b08068C03fdabf2626MutationResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: DeleteAdminCitiesB4a072761baf43b08068C03fdabf2626MutationResponse;
    client: {
        parameters: Partial<Parameters<DeleteAdminCitiesB4a072761baf43b08068C03fdabf2626Client>[0]>;
        return: Awaited<ReturnType<DeleteAdminCitiesB4a072761baf43b08068C03fdabf2626Client>>;
    };
};
/**
 * @summary delete
 * @link /admin/cities/b4a07276-1baf-43b0-8068-c03fdabf2626
 */
export function useDeleteAdminCitiesB4a072761baf43b08068C03fdabf2626(options?: {
    mutation?: SWRMutationConfiguration<DeleteAdminCitiesB4a072761baf43b08068C03fdabf2626["response"], DeleteAdminCitiesB4a072761baf43b08068C03fdabf2626["error"]>;
    client?: DeleteAdminCitiesB4a072761baf43b08068C03fdabf2626["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<DeleteAdminCitiesB4a072761baf43b08068C03fdabf2626["response"], DeleteAdminCitiesB4a072761baf43b08068C03fdabf2626["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/cities/b4a07276-1baf-43b0-8068-c03fdabf2626` as const;
    return useSWRMutation<DeleteAdminCitiesB4a072761baf43b08068C03fdabf2626["response"], DeleteAdminCitiesB4a072761baf43b08068C03fdabf2626["error"], typeof url | null>(shouldFetch ? url : null, async (_url) => {
        const res = await client<DeleteAdminCitiesB4a072761baf43b08068C03fdabf2626["data"], DeleteAdminCitiesB4a072761baf43b08068C03fdabf2626["error"]>({
            method: "delete",
            url,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}