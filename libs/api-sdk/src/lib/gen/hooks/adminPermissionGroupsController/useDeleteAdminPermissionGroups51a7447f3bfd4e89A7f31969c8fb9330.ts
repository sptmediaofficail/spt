import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { DeleteAdminPermissionGroups51a7447f3bfd4e89A7f31969c8fb9330MutationResponse } from "../../types/DeleteAdminPermissionGroups51a7447f3bfd4e89A7f31969c8fb9330";

 type DeleteAdminPermissionGroups51a7447f3bfd4e89A7f31969c8fb9330Client = typeof client<DeleteAdminPermissionGroups51a7447f3bfd4e89A7f31969c8fb9330MutationResponse, never, never>;
type DeleteAdminPermissionGroups51a7447f3bfd4e89A7f31969c8fb9330 = {
    data: DeleteAdminPermissionGroups51a7447f3bfd4e89A7f31969c8fb9330MutationResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: DeleteAdminPermissionGroups51a7447f3bfd4e89A7f31969c8fb9330MutationResponse;
    client: {
        parameters: Partial<Parameters<DeleteAdminPermissionGroups51a7447f3bfd4e89A7f31969c8fb9330Client>[0]>;
        return: Awaited<ReturnType<DeleteAdminPermissionGroups51a7447f3bfd4e89A7f31969c8fb9330Client>>;
    };
};
/**
 * @summary delete
 * @link /admin/permission-groups/51a7447f-3bfd-4e89-a7f3-1969c8fb9330
 */
export function useDeleteAdminPermissionGroups51a7447f3bfd4e89A7f31969c8fb9330(options?: {
    mutation?: SWRMutationConfiguration<DeleteAdminPermissionGroups51a7447f3bfd4e89A7f31969c8fb9330["response"], DeleteAdminPermissionGroups51a7447f3bfd4e89A7f31969c8fb9330["error"]>;
    client?: DeleteAdminPermissionGroups51a7447f3bfd4e89A7f31969c8fb9330["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<DeleteAdminPermissionGroups51a7447f3bfd4e89A7f31969c8fb9330["response"], DeleteAdminPermissionGroups51a7447f3bfd4e89A7f31969c8fb9330["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/permission-groups/51a7447f-3bfd-4e89-a7f3-1969c8fb9330` as const;
    return useSWRMutation<DeleteAdminPermissionGroups51a7447f3bfd4e89A7f31969c8fb9330["response"], DeleteAdminPermissionGroups51a7447f3bfd4e89A7f31969c8fb9330["error"], typeof url | null>(shouldFetch ? url : null, async (_url) => {
        const res = await client<DeleteAdminPermissionGroups51a7447f3bfd4e89A7f31969c8fb9330["data"], DeleteAdminPermissionGroups51a7447f3bfd4e89A7f31969c8fb9330["error"]>({
            method: "delete",
            url,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}