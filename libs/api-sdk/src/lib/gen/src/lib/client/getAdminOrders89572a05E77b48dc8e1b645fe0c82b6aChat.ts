import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetAdminOrders89572a05E77b48dc8e1b645fe0c82b6aChatQueryResponse, GetAdminOrders89572a05E77b48dc8e1b645fe0c82b6aChatHeaderParams } from "../../../types/GetAdminOrders89572a05E77b48dc8e1b645fe0c82b6aChat";

 /**
 * @summary chat
 * @link /admin/orders/89572a05-e77b-48dc-8e1b-645fe0c82b6a/chat
 */
export async function getAdminOrders89572a05E77b48dc8e1b645fe0c82b6aChat(headers?: GetAdminOrders89572a05E77b48dc8e1b645fe0c82b6aChatHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetAdminOrders89572a05E77b48dc8e1b645fe0c82b6aChatQueryResponse>["data"]> {
    const res = await client<GetAdminOrders89572a05E77b48dc8e1b645fe0c82b6aChatQueryResponse>({ method: "get", url: `/admin/orders/89572a05-e77b-48dc-8e1b-645fe0c82b6a/chat`, baseURL: "http://{{local}}", headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}