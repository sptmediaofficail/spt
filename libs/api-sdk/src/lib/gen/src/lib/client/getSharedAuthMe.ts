import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetSharedAuthMeQueryResponse, GetSharedAuthMeHeaderParams } from "../../../types/GetSharedAuthMe";

 /**
 * @summary me
 * @link /shared/auth/me
 */
export async function getSharedAuthMe(headers?: GetSharedAuthMeHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetSharedAuthMeQueryResponse>["data"]> {
    const res = await client<GetSharedAuthMeQueryResponse>({ method: "get", url: `/shared/auth/me`, baseURL: "http://{{local}}", headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}