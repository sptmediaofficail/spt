import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { DeleteAdminUsersB4a072761baf43b08068C03fdabf2626MutationResponse } from "../../types/DeleteAdminUsersB4a072761baf43b08068C03fdabf2626";

 type DeleteAdminUsersB4a072761baf43b08068C03fdabf2626Client = typeof client<DeleteAdminUsersB4a072761baf43b08068C03fdabf2626MutationResponse, never, never>;
type DeleteAdminUsersB4a072761baf43b08068C03fdabf2626 = {
    data: DeleteAdminUsersB4a072761baf43b08068C03fdabf2626MutationResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: DeleteAdminUsersB4a072761baf43b08068C03fdabf2626MutationResponse;
    client: {
        parameters: Partial<Parameters<DeleteAdminUsersB4a072761baf43b08068C03fdabf2626Client>[0]>;
        return: Awaited<ReturnType<DeleteAdminUsersB4a072761baf43b08068C03fdabf2626Client>>;
    };
};
/**
 * @summary delete
 * @link /admin/users/b4a07276-1baf-43b0-8068-c03fdabf2626
 */
export function useDeleteAdminUsersB4a072761baf43b08068C03fdabf2626(options?: {
    mutation?: SWRMutationConfiguration<DeleteAdminUsersB4a072761baf43b08068C03fdabf2626["response"], DeleteAdminUsersB4a072761baf43b08068C03fdabf2626["error"]>;
    client?: DeleteAdminUsersB4a072761baf43b08068C03fdabf2626["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<DeleteAdminUsersB4a072761baf43b08068C03fdabf2626["response"], DeleteAdminUsersB4a072761baf43b08068C03fdabf2626["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/users/b4a07276-1baf-43b0-8068-c03fdabf2626` as const;
    return useSWRMutation<DeleteAdminUsersB4a072761baf43b08068C03fdabf2626["response"], DeleteAdminUsersB4a072761baf43b08068C03fdabf2626["error"], typeof url | null>(shouldFetch ? url : null, async (_url) => {
        const res = await client<DeleteAdminUsersB4a072761baf43b08068C03fdabf2626["data"], DeleteAdminUsersB4a072761baf43b08068C03fdabf2626["error"]>({
            method: "delete",
            url,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}