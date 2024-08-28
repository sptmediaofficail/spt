import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33StopMutationRequest, PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33StopMutationResponse } from "../../types/PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33Stop";

 type PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33StopClient = typeof client<PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33StopMutationResponse, never, PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33StopMutationRequest>;
type PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33Stop = {
    data: PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33StopMutationResponse;
    error: never;
    request: PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33StopMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33StopMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33StopClient>[0]>;
        return: Awaited<ReturnType<PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33StopClient>>;
    };
};
/**
 * @summary stop
 * @link /admin/guarantee_right/716ae479-a414-4e1a-80a9-de253b560d33/stop
 */
export function usePostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33Stop(options?: {
    mutation?: SWRMutationConfiguration<PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33Stop["response"], PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33Stop["error"]>;
    client?: PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33Stop["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33Stop["response"], PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33Stop["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/guarantee_right/716ae479-a414-4e1a-80a9-de253b560d33/stop` as const;
    return useSWRMutation<PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33Stop["response"], PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33Stop["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33Stop["data"], PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33Stop["error"], PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33Stop["request"]>({
            method: "post",
            url,
            data,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}