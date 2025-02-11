import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetClientOrdersIdQueryResponse, GetClientOrdersIdPathParams, GetClientOrdersIdHeaderParams } from "../../../types/GetClientOrdersId";

 /**
 * @summary details
 * @link /client/orders/:id
 */
export async function getClientOrdersId(id: GetClientOrdersIdPathParams["id"], headers?: GetClientOrdersIdHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetClientOrdersIdQueryResponse>["data"]> {
    const res = await client<GetClientOrdersIdQueryResponse>({ method: "get", url: `/client/orders/${id}`, baseURL: "http://{{local}}", headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}