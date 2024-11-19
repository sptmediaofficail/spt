import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetProviderIdsQueryResponse, GetProviderIdsHeaderParams } from "../../../types/GetProviderIds";

 /**
 * @summary ids
 * @link /provider/ids
 */
export async function getProviderIds(headers?: GetProviderIdsHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetProviderIdsQueryResponse>["data"]> {
    const res = await client<GetProviderIdsQueryResponse>({ method: "get", url: `/provider/ids`, baseURL: "http://{{local}}", headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}