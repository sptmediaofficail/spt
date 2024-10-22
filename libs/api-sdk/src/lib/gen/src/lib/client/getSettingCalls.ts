import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetSettingCallsQueryResponse } from "../../../types/GetSettingCalls";

 /**
 * @summary calls
 * @link /setting/calls
 */
export async function getSettingCalls(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetSettingCallsQueryResponse>["data"]> {
    const res = await client<GetSettingCallsQueryResponse>({ method: "get", url: `/setting/calls`, baseURL: "http://{{local}}", ...options });
    return res.data;
}