import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetAdminMessageTemplatesQueryResponse, GetAdminMessageTemplatesQueryParams, GetAdminMessageTemplatesHeaderParams } from "../../../types/GetAdminMessageTemplates";

 /**
 * @summary GET All Message Templates
 * @link /admin/message-templates
 */
export async function getAdminMessageTemplates(params?: GetAdminMessageTemplatesQueryParams, headers?: GetAdminMessageTemplatesHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetAdminMessageTemplatesQueryResponse>["data"]> {
    const res = await client<GetAdminMessageTemplatesQueryResponse>({ method: "get", url: `/admin/message-templates`, baseURL: "http://{{local}}", params, headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}