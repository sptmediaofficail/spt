import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetTermsCommissionPaginatedQueryResponse, GetTermsCommissionPaginatedQueryParams } from "../../../types/GetTermsCommissionPaginated";

 /**
 * @summary get term by type paginated
 * @link /terms/commission/paginated
 */
export async function getTermsCommissionPaginated(params?: GetTermsCommissionPaginatedQueryParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetTermsCommissionPaginatedQueryResponse>["data"]> {
    const res = await client<GetTermsCommissionPaginatedQueryResponse>({ method: "get", url: `/terms/commission/paginated`, baseURL: "http://{{local}}", params, ...options });
    return res.data;
}