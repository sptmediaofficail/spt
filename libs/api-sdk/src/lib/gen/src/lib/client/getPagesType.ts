import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetPagesTypeQueryResponse, GetPagesTypePathParams } from "../../../types/GetPagesType";

 /**
 * @summary get page by type
 * @link /pages/:type
 */
export async function getPagesType(type: GetPagesTypePathParams["type"], options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetPagesTypeQueryResponse>["data"]> {
    const res = await client<GetPagesTypeQueryResponse>({ method: "get", url: `/pages/${type}`, baseURL: "http://{{local}}", ...options });
    return res.data;
}