import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetTicketsQueryResponse, GetTicketsQueryParams, GetTicketsHeaderParams } from "../../../types/GetTickets";

 /**
 * @summary index
 * @link /tickets
 */
export async function getTickets(params?: GetTicketsQueryParams, headers?: GetTicketsHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetTicketsQueryResponse>["data"]> {
    const res = await client<GetTicketsQueryResponse>({ method: "get", url: `/tickets`, baseURL: "http://{{local}}", params, headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}