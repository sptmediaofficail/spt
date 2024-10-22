import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetLandingHowHelpQueryResponse } from "../../../types/GetLandingHowHelp";

 /**
 * @summary how_help
 * @link /landing/how_help
 */
export async function getLandingHowHelp(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetLandingHowHelpQueryResponse>["data"]> {
    const res = await client<GetLandingHowHelpQueryResponse>({ method: "get", url: `/landing/how_help`, baseURL: "http://{{local}}", ...options });
    return res.data;
}