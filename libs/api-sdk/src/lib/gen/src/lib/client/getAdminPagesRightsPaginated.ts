import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetAdminPagesRightsPaginatedQueryResponse, GetAdminPagesRightsPaginatedQueryParams } from "../../../types/GetAdminPagesRightsPaginated";

 /**
 * @summary get page by type paginated
 * @link /admin/pages/rights/paginated
 */
export async function getAdminPagesRightsPaginated(params?: GetAdminPagesRightsPaginatedQueryParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetAdminPagesRightsPaginatedQueryResponse>["data"]> {
    const res = await client<GetAdminPagesRightsPaginatedQueryResponse>({ method: "get", url: `/admin/pages/rights/paginated`, baseURL: "http://{{local}}", params, ...options });
    return res.data;
}