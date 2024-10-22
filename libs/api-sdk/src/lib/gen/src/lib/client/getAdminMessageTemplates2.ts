import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetAdminMessageTemplates2QueryResponse, GetAdminMessageTemplates2HeaderParams } from "../../../types/GetAdminMessageTemplates2";

 /**
 * @summary GET Specific Message Template
 * @link /admin/message-templates/2
 */
export async function getAdminMessageTemplates2(headers?: GetAdminMessageTemplates2HeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetAdminMessageTemplates2QueryResponse>["data"]> {
    const res = await client<GetAdminMessageTemplates2QueryResponse>({ method: "get", url: `/admin/message-templates/2`, baseURL: "http://{{local}}", headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}