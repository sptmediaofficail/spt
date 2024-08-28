import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminDownloadSectionMutationRequest, PostAdminDownloadSectionMutationResponse, PostAdminDownloadSectionHeaderParams } from "../../types/PostAdminDownloadSection";

 type PostAdminDownloadSectionClient = typeof client<PostAdminDownloadSectionMutationResponse, never, PostAdminDownloadSectionMutationRequest>;
type PostAdminDownloadSection = {
    data: PostAdminDownloadSectionMutationResponse;
    error: never;
    request: PostAdminDownloadSectionMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostAdminDownloadSectionHeaderParams;
    response: PostAdminDownloadSectionMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminDownloadSectionClient>[0]>;
        return: Awaited<ReturnType<PostAdminDownloadSectionClient>>;
    };
};
/**
 * @summary update
 * @link /admin/download_section
 */
export function usePostAdminDownloadSection(headers?: PostAdminDownloadSection["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostAdminDownloadSection["response"], PostAdminDownloadSection["error"]>;
    client?: PostAdminDownloadSection["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminDownloadSection["response"], PostAdminDownloadSection["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/download_section` as const;
    return useSWRMutation<PostAdminDownloadSection["response"], PostAdminDownloadSection["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminDownloadSection["data"], PostAdminDownloadSection["error"], PostAdminDownloadSection["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}