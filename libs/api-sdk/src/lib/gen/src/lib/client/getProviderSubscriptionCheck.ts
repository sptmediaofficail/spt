import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetProviderSubscriptionCheckQueryResponse, GetProviderSubscriptionCheckHeaderParams } from "../../../types/GetProviderSubscriptionCheck";

 /**
 * @summary check
 * @link /provider/subscription/check
 */
export async function getProviderSubscriptionCheck(headers?: GetProviderSubscriptionCheckHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetProviderSubscriptionCheckQueryResponse>["data"]> {
    const res = await client<GetProviderSubscriptionCheckQueryResponse>({ method: "get", url: `/provider/subscription/check`, baseURL: "http://{{local}}", headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}