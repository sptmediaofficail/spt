import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetAdminAboutQueryResponse, GetAdminAboutQueryParams } from "../../../types/GetAdminAbout";

 /**
 * @summary list
 * @link /admin/about
 */
export async function getAdminAbout(params?: GetAdminAboutQueryParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetAdminAboutQueryResponse>["data"]> {
    const res = await client<GetAdminAboutQueryResponse>({ method: "get", url: `/admin/about`, baseURL: "http://{{local}}", params, ...options });
    return res.data;
}