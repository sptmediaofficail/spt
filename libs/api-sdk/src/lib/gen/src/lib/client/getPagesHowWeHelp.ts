import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetPagesHowWeHelpQueryResponse } from "../../../types/GetPagesHowWeHelp";

 /**
 * @summary get page by type
 * @link /pages/how_we_help
 */
export async function getPagesHowWeHelp(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetPagesHowWeHelpQueryResponse>["data"]> {
    const res = await client<GetPagesHowWeHelpQueryResponse>({ method: "get", url: `/pages/how_we_help`, baseURL: "http://{{local}}", ...options });
    return res.data;
}