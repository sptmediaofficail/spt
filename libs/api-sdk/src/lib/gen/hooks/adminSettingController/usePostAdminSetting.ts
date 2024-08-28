import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminSettingMutationRequest, PostAdminSettingMutationResponse, PostAdminSettingHeaderParams } from "../../types/PostAdminSetting";

 type PostAdminSettingClient = typeof client<PostAdminSettingMutationResponse, never, PostAdminSettingMutationRequest>;
type PostAdminSetting = {
    data: PostAdminSettingMutationResponse;
    error: never;
    request: PostAdminSettingMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostAdminSettingHeaderParams;
    response: PostAdminSettingMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminSettingClient>[0]>;
        return: Awaited<ReturnType<PostAdminSettingClient>>;
    };
};
/**
 * @summary update
 * @link /admin/setting
 */
export function usePostAdminSetting(headers?: PostAdminSetting["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostAdminSetting["response"], PostAdminSetting["error"]>;
    client?: PostAdminSetting["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminSetting["response"], PostAdminSetting["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/setting` as const;
    return useSWRMutation<PostAdminSetting["response"], PostAdminSetting["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminSetting["data"], PostAdminSetting["error"], PostAdminSetting["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}