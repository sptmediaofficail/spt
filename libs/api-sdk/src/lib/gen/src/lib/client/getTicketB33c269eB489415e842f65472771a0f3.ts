import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetTicketB33c269eB489415e842f65472771a0f3QueryResponse, GetTicketB33c269eB489415e842f65472771a0f3HeaderParams } from "../../../types/GetTicketB33c269eB489415e842f65472771a0f3";

 /**
 * @summary details
 * @link /ticket/b33c269e-b489-415e-842f-65472771a0f3
 */
export async function getTicketB33c269eB489415e842f65472771a0f3(headers?: GetTicketB33c269eB489415e842f65472771a0f3HeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetTicketB33c269eB489415e842f65472771a0f3QueryResponse>["data"]> {
    const res = await client<GetTicketB33c269eB489415e842f65472771a0f3QueryResponse>({ method: "get", url: `/ticket/b33c269e-b489-415e-842f-65472771a0f3`, baseURL: "http://{{local}}", headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}