import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { DeleteAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5MutationResponse } from "../../types/DeleteAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5";

 type DeleteAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5Client = typeof client<DeleteAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5MutationResponse, never, never>;
type DeleteAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5 = {
    data: DeleteAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5MutationResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: DeleteAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5MutationResponse;
    client: {
        parameters: Partial<Parameters<DeleteAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5Client>[0]>;
        return: Awaited<ReturnType<DeleteAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5Client>>;
    };
};
/**
 * @summary delete
 * @link /admin/about/7ad421cd-9075-4a74-b2e1-e4298a1dc2b5
 */
export function useDeleteAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5(options?: {
    mutation?: SWRMutationConfiguration<DeleteAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5["response"], DeleteAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5["error"]>;
    client?: DeleteAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<DeleteAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5["response"], DeleteAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/about/7ad421cd-9075-4a74-b2e1-e4298a1dc2b5` as const;
    return useSWRMutation<DeleteAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5["response"], DeleteAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5["error"], typeof url | null>(shouldFetch ? url : null, async (_url) => {
        const res = await client<DeleteAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5["data"], DeleteAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5["error"]>({
            method: "delete",
            url,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}