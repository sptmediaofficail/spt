import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetAdminDownloadSectionQueryResponse } from "../../../types/GetAdminDownloadSection";

 /**
 * @summary list
 * @link /admin/download_section
 */
export async function getAdminDownloadSection(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetAdminDownloadSectionQueryResponse>["data"]> {
    const res = await client<GetAdminDownloadSectionQueryResponse>({ method: "get", url: `/admin/download_section`, baseURL: "http://{{local}}", ...options });
    return res.data;
}