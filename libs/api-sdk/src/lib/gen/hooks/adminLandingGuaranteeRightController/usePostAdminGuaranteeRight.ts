import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminGuaranteeRightMutationRequest, PostAdminGuaranteeRightMutationResponse, PostAdminGuaranteeRightHeaderParams } from "../../types/PostAdminGuaranteeRight";

 type PostAdminGuaranteeRightClient = typeof client<PostAdminGuaranteeRightMutationResponse, never, PostAdminGuaranteeRightMutationRequest>;
type PostAdminGuaranteeRight = {
    data: PostAdminGuaranteeRightMutationResponse;
    error: never;
    request: PostAdminGuaranteeRightMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostAdminGuaranteeRightHeaderParams;
    response: PostAdminGuaranteeRightMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminGuaranteeRightClient>[0]>;
        return: Awaited<ReturnType<PostAdminGuaranteeRightClient>>;
    };
};
/**
 * @summary create
 * @link /admin/guarantee_right
 */
export function usePostAdminGuaranteeRight(headers?: PostAdminGuaranteeRight["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostAdminGuaranteeRight["response"], PostAdminGuaranteeRight["error"]>;
    client?: PostAdminGuaranteeRight["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminGuaranteeRight["response"], PostAdminGuaranteeRight["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/guarantee_right` as const;
    return useSWRMutation<PostAdminGuaranteeRight["response"], PostAdminGuaranteeRight["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminGuaranteeRight["data"], PostAdminGuaranteeRight["error"], PostAdminGuaranteeRight["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}