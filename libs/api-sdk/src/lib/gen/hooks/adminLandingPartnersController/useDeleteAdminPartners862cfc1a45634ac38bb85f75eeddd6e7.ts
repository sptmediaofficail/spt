import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { DeleteAdminPartners862cfc1a45634ac38bb85f75eeddd6e7MutationResponse } from "../../types/DeleteAdminPartners862cfc1a45634ac38bb85f75eeddd6e7";

 type DeleteAdminPartners862cfc1a45634ac38bb85f75eeddd6e7Client = typeof client<DeleteAdminPartners862cfc1a45634ac38bb85f75eeddd6e7MutationResponse, never, never>;
type DeleteAdminPartners862cfc1a45634ac38bb85f75eeddd6e7 = {
    data: DeleteAdminPartners862cfc1a45634ac38bb85f75eeddd6e7MutationResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: DeleteAdminPartners862cfc1a45634ac38bb85f75eeddd6e7MutationResponse;
    client: {
        parameters: Partial<Parameters<DeleteAdminPartners862cfc1a45634ac38bb85f75eeddd6e7Client>[0]>;
        return: Awaited<ReturnType<DeleteAdminPartners862cfc1a45634ac38bb85f75eeddd6e7Client>>;
    };
};
/**
 * @summary delete
 * @link /admin/partners/862cfc1a-4563-4ac3-8bb8-5f75eeddd6e7
 */
export function useDeleteAdminPartners862cfc1a45634ac38bb85f75eeddd6e7(options?: {
    mutation?: SWRMutationConfiguration<DeleteAdminPartners862cfc1a45634ac38bb85f75eeddd6e7["response"], DeleteAdminPartners862cfc1a45634ac38bb85f75eeddd6e7["error"]>;
    client?: DeleteAdminPartners862cfc1a45634ac38bb85f75eeddd6e7["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<DeleteAdminPartners862cfc1a45634ac38bb85f75eeddd6e7["response"], DeleteAdminPartners862cfc1a45634ac38bb85f75eeddd6e7["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/partners/862cfc1a-4563-4ac3-8bb8-5f75eeddd6e7` as const;
    return useSWRMutation<DeleteAdminPartners862cfc1a45634ac38bb85f75eeddd6e7["response"], DeleteAdminPartners862cfc1a45634ac38bb85f75eeddd6e7["error"], typeof url | null>(shouldFetch ? url : null, async (_url) => {
        const res = await client<DeleteAdminPartners862cfc1a45634ac38bb85f75eeddd6e7["data"], DeleteAdminPartners862cfc1a45634ac38bb85f75eeddd6e7["error"]>({
            method: "delete",
            url,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}