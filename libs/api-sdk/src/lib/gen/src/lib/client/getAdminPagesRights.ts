import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetAdminPagesRightsQueryResponse } from "../../../types/GetAdminPagesRights";

 /**
 * @summary get page by type
 * @link /admin/pages/rights
 */
export async function getAdminPagesRights(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetAdminPagesRightsQueryResponse>["data"]> {
    const res = await client<GetAdminPagesRightsQueryResponse>({ method: "get", url: `/admin/pages/rights`, baseURL: "http://{{local}}", ...options });
    return res.data;
}