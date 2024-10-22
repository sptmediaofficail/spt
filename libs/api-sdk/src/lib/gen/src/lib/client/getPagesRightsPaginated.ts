import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetPagesRightsPaginatedQueryResponse, GetPagesRightsPaginatedQueryParams } from "../../../types/GetPagesRightsPaginated";

 /**
 * @summary get page by type paginated
 * @link /pages/rights/paginated
 */
export async function getPagesRightsPaginated(params?: GetPagesRightsPaginatedQueryParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetPagesRightsPaginatedQueryResponse>["data"]> {
    const res = await client<GetPagesRightsPaginatedQueryResponse>({ method: "get", url: `/pages/rights/paginated`, baseURL: "http://{{local}}", params, ...options });
    return res.data;
}