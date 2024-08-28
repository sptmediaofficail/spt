import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { DeleteAdminPages51a7447f3bfd4e89A7f31969c8fb9330MutationResponse } from "../../types/DeleteAdminPages51a7447f3bfd4e89A7f31969c8fb9330";

 type DeleteAdminPages51a7447f3bfd4e89A7f31969c8fb9330Client = typeof client<DeleteAdminPages51a7447f3bfd4e89A7f31969c8fb9330MutationResponse, never, never>;
type DeleteAdminPages51a7447f3bfd4e89A7f31969c8fb9330 = {
    data: DeleteAdminPages51a7447f3bfd4e89A7f31969c8fb9330MutationResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: DeleteAdminPages51a7447f3bfd4e89A7f31969c8fb9330MutationResponse;
    client: {
        parameters: Partial<Parameters<DeleteAdminPages51a7447f3bfd4e89A7f31969c8fb9330Client>[0]>;
        return: Awaited<ReturnType<DeleteAdminPages51a7447f3bfd4e89A7f31969c8fb9330Client>>;
    };
};
/**
 * @summary delete
 * @link /admin/pages/51a7447f-3bfd-4e89-a7f3-1969c8fb9330
 */
export function useDeleteAdminPages51a7447f3bfd4e89A7f31969c8fb9330(options?: {
    mutation?: SWRMutationConfiguration<DeleteAdminPages51a7447f3bfd4e89A7f31969c8fb9330["response"], DeleteAdminPages51a7447f3bfd4e89A7f31969c8fb9330["error"]>;
    client?: DeleteAdminPages51a7447f3bfd4e89A7f31969c8fb9330["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<DeleteAdminPages51a7447f3bfd4e89A7f31969c8fb9330["response"], DeleteAdminPages51a7447f3bfd4e89A7f31969c8fb9330["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/pages/51a7447f-3bfd-4e89-a7f3-1969c8fb9330` as const;
    return useSWRMutation<DeleteAdminPages51a7447f3bfd4e89A7f31969c8fb9330["response"], DeleteAdminPages51a7447f3bfd4e89A7f31969c8fb9330["error"], typeof url | null>(shouldFetch ? url : null, async (_url) => {
        const res = await client<DeleteAdminPages51a7447f3bfd4e89A7f31969c8fb9330["data"], DeleteAdminPages51a7447f3bfd4e89A7f31969c8fb9330["error"]>({
            method: "delete",
            url,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}