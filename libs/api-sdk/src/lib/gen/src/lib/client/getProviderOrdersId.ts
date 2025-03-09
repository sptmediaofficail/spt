import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetProviderOrdersIdQueryResponse, GetProviderOrdersIdPathParams, GetProviderOrdersIdHeaderParams } from "../../../types/GetProviderOrdersId";

 /**
 * @summary details
 * @link /provider/orders/:id
 */
export async function getProviderOrdersId(id: GetProviderOrdersIdPathParams["id"], headers?: GetProviderOrdersIdHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetProviderOrdersIdQueryResponse>["data"]> {
    const res = await client<GetProviderOrdersIdQueryResponse>({ method: "get", url: `/provider/orders/${id}`, baseURL: "http://{{local}}", headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}