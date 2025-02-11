import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetAdminPagesTypeQueryResponse, GetAdminPagesTypePathParams } from "../../../types/GetAdminPagesType";

 /**
 * @summary get page by type
 * @link /admin/pages/:type
 */
export async function getAdminPagesType(type: GetAdminPagesTypePathParams["type"], options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetAdminPagesTypeQueryResponse>["data"]> {
    const res = await client<GetAdminPagesTypeQueryResponse>({ method: "get", url: `/admin/pages/${type}`, baseURL: "http://{{local}}", ...options });
    return res.data;
}