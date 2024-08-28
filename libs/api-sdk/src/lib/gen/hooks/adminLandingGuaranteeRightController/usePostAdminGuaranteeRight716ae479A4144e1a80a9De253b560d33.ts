import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33MutationRequest, PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33MutationResponse, PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33HeaderParams } from "../../types/PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33";

 type PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33Client = typeof client<PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33MutationResponse, never, PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33MutationRequest>;
type PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33 = {
    data: PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33MutationResponse;
    error: never;
    request: PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33MutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33HeaderParams;
    response: PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33MutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33Client>[0]>;
        return: Awaited<ReturnType<PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33Client>>;
    };
};
/**
 * @summary update
 * @link /admin/guarantee_right/716ae479-a414-4e1a-80a9-de253b560d33
 */
export function usePostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33(headers?: PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33["response"], PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33["error"]>;
    client?: PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33["response"], PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/guarantee_right/716ae479-a414-4e1a-80a9-de253b560d33` as const;
    return useSWRMutation<PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33["response"], PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33["data"], PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33["error"], PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}