import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetLandingDownloadSectionQueryResponse } from "../../../types/GetLandingDownloadSection";

 /**
 * @summary download section
 * @link /landing/download_section
 */
export async function getLandingDownloadSection(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetLandingDownloadSectionQueryResponse>["data"]> {
    const res = await client<GetLandingDownloadSectionQueryResponse>({ method: "get", url: `/landing/download_section`, baseURL: "http://{{local}}", ...options });
    return res.data;
}