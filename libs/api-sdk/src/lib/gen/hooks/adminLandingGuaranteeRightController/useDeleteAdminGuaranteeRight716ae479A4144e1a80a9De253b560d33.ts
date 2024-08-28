import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { DeleteAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33MutationResponse } from "../../types/DeleteAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33";

 type DeleteAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33Client = typeof client<DeleteAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33MutationResponse, never, never>;
type DeleteAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33 = {
    data: DeleteAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33MutationResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: DeleteAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33MutationResponse;
    client: {
        parameters: Partial<Parameters<DeleteAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33Client>[0]>;
        return: Awaited<ReturnType<DeleteAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33Client>>;
    };
};
/**
 * @summary delete
 * @link /admin/guarantee_right/716ae479-a414-4e1a-80a9-de253b560d33
 */
export function useDeleteAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33(options?: {
    mutation?: SWRMutationConfiguration<DeleteAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33["response"], DeleteAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33["error"]>;
    client?: DeleteAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<DeleteAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33["response"], DeleteAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/guarantee_right/716ae479-a414-4e1a-80a9-de253b560d33` as const;
    return useSWRMutation<DeleteAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33["response"], DeleteAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33["error"], typeof url | null>(shouldFetch ? url : null, async (_url) => {
        const res = await client<DeleteAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33["data"], DeleteAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33["error"]>({
            method: "delete",
            url,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}