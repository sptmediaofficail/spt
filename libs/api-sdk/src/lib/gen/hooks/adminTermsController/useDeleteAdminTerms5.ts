import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { DeleteAdminTerms5MutationResponse } from "../../types/DeleteAdminTerms5";

 type DeleteAdminTerms5Client = typeof client<DeleteAdminTerms5MutationResponse, never, never>;
type DeleteAdminTerms5 = {
    data: DeleteAdminTerms5MutationResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: DeleteAdminTerms5MutationResponse;
    client: {
        parameters: Partial<Parameters<DeleteAdminTerms5Client>[0]>;
        return: Awaited<ReturnType<DeleteAdminTerms5Client>>;
    };
};
/**
 * @summary delete
 * @link /admin/terms/5
 */
export function useDeleteAdminTerms5(options?: {
    mutation?: SWRMutationConfiguration<DeleteAdminTerms5["response"], DeleteAdminTerms5["error"]>;
    client?: DeleteAdminTerms5["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<DeleteAdminTerms5["response"], DeleteAdminTerms5["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/terms/5` as const;
    return useSWRMutation<DeleteAdminTerms5["response"], DeleteAdminTerms5["error"], typeof url | null>(shouldFetch ? url : null, async (_url) => {
        const res = await client<DeleteAdminTerms5["data"], DeleteAdminTerms5["error"]>({
            method: "delete",
            url,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}