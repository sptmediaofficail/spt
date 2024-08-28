import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33RestoreMutationRequest, PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33RestoreMutationResponse } from "../../types/PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33Restore";

 type PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33RestoreClient = typeof client<PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33RestoreMutationResponse, never, PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33RestoreMutationRequest>;
type PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33Restore = {
    data: PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33RestoreMutationResponse;
    error: never;
    request: PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33RestoreMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33RestoreMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33RestoreClient>[0]>;
        return: Awaited<ReturnType<PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33RestoreClient>>;
    };
};
/**
 * @summary restore
 * @link /admin/guarantee_right/716ae479-a414-4e1a-80a9-de253b560d33/restore
 */
export function usePostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33Restore(options?: {
    mutation?: SWRMutationConfiguration<PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33Restore["response"], PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33Restore["error"]>;
    client?: PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33Restore["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33Restore["response"], PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33Restore["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/guarantee_right/716ae479-a414-4e1a-80a9-de253b560d33/restore` as const;
    return useSWRMutation<PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33Restore["response"], PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33Restore["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33Restore["data"], PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33Restore["error"], PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33Restore["request"]>({
            method: "post",
            url,
            data,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}