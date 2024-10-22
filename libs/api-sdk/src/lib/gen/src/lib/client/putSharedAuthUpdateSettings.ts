import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PutSharedAuthUpdateSettingsMutationRequest, PutSharedAuthUpdateSettingsMutationResponse, PutSharedAuthUpdateSettingsHeaderParams } from "../../../types/PutSharedAuthUpdateSettings";

 /**
 * @summary Update Settings
 * @link /shared/auth/update-settings
 */
export async function putSharedAuthUpdateSettings(data?: PutSharedAuthUpdateSettingsMutationRequest, headers?: PutSharedAuthUpdateSettingsHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PutSharedAuthUpdateSettingsMutationResponse>["data"]> {
    const res = await client<PutSharedAuthUpdateSettingsMutationResponse, PutSharedAuthUpdateSettingsMutationRequest>({ method: "put", url: `/shared/auth/update-settings`, baseURL: "http://{{local}}", data, headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}