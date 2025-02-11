import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetAdminTermsTermsPaginatedQueryResponse, GetAdminTermsTermsPaginatedQueryParams } from "../../../types/GetAdminTermsTermsPaginated";

 /**
 * @summary get terms by type paginated
 * @link /admin/terms/terms/paginated
 */
export async function getAdminTermsTermsPaginated(params?: GetAdminTermsTermsPaginatedQueryParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetAdminTermsTermsPaginatedQueryResponse>["data"]> {
    const res = await client<GetAdminTermsTermsPaginatedQueryResponse>({ method: "get", url: `/admin/terms/terms/paginated`, baseURL: "http://{{local}}", params, ...options });
    return res.data;
}