import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetProviderMeQueryResponse, GetProviderMeHeaderParams } from "../../../types/GetProviderMe";

 /**
 * @summary me
 * @link /provider/me
 */
export async function getProviderMe(headers?: GetProviderMeHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetProviderMeQueryResponse>["data"]> {
    const res = await client<GetProviderMeQueryResponse>({ method: "get", url: `/provider/me`, baseURL: "http://{{local}}", headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}