import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetSettingQueryResponse, GetSettingQueryParams } from "../../../types/GetSetting";

 /**
 * @summary get by section
 * @link /setting
 */
export async function getSetting(params?: GetSettingQueryParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetSettingQueryResponse>["data"]> {
    const res = await client<GetSettingQueryResponse>({ method: "get", url: `/setting`, baseURL: "http://{{local}}", params, ...options });
    return res.data;
}