import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminSettingMutationRequest, PostAdminSettingMutationResponse, PostAdminSettingHeaderParams } from "../../../types/PostAdminSetting";

 /**
 * @summary update
 * @link /admin/setting
 */
export async function postAdminSetting(data?: PostAdminSettingMutationRequest, headers?: PostAdminSettingHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminSettingMutationResponse>["data"]> {
    const res = await client<PostAdminSettingMutationResponse, PostAdminSettingMutationRequest>({ method: "post", url: `/admin/setting`, baseURL: "http://{{local}}", data, headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}