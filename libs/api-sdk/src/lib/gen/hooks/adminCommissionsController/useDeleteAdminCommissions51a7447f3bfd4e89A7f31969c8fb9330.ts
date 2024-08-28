import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { DeleteAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330MutationResponse } from "../../types/DeleteAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330";

 type DeleteAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330Client = typeof client<DeleteAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330MutationResponse, never, never>;
type DeleteAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330 = {
    data: DeleteAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330MutationResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: DeleteAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330MutationResponse;
    client: {
        parameters: Partial<Parameters<DeleteAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330Client>[0]>;
        return: Awaited<ReturnType<DeleteAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330Client>>;
    };
};
/**
 * @summary delete
 * @link /admin/commissions/51a7447f-3bfd-4e89-a7f3-1969c8fb9330
 */
export function useDeleteAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330(options?: {
    mutation?: SWRMutationConfiguration<DeleteAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330["response"], DeleteAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330["error"]>;
    client?: DeleteAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<DeleteAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330["response"], DeleteAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/commissions/51a7447f-3bfd-4e89-a7f3-1969c8fb9330` as const;
    return useSWRMutation<DeleteAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330["response"], DeleteAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330["error"], typeof url | null>(shouldFetch ? url : null, async (_url) => {
        const res = await client<DeleteAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330["data"], DeleteAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330["error"]>({
            method: "delete",
            url,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}