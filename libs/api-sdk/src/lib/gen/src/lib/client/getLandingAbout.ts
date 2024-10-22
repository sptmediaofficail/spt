import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetLandingAboutQueryResponse } from "../../../types/GetLandingAbout";

 /**
 * @summary about
 * @link /landing/about
 */
export async function getLandingAbout(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetLandingAboutQueryResponse>["data"]> {
    const res = await client<GetLandingAboutQueryResponse>({ method: "get", url: `/landing/about`, baseURL: "http://{{local}}", ...options });
    return res.data;
}