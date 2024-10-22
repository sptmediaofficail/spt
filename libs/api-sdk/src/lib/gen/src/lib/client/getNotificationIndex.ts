import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetNotificationIndexQueryResponse, GetNotificationIndexQueryParams, GetNotificationIndexHeaderParams } from "../../../types/GetNotificationIndex";

 /**
 * @summary index
 * @link /notification/index
 */
export async function getNotificationIndex(params?: GetNotificationIndexQueryParams, headers?: GetNotificationIndexHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetNotificationIndexQueryResponse>["data"]> {
    const res = await client<GetNotificationIndexQueryResponse>({ method: "get", url: `/notification/index`, baseURL: "http://{{local}}", params, headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}