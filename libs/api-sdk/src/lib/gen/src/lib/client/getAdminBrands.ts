import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetAdminBrandsQueryResponse, GetAdminBrandsQueryParams } from "../../../types/GetAdminBrands";

 /**
 * @summary index
 * @link /admin/brands
 */
export async function getAdminBrands(params?: GetAdminBrandsQueryParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetAdminBrandsQueryResponse>["data"]> {
    const res = await client<GetAdminBrandsQueryResponse>({ method: "get", url: `/admin/brands`, baseURL: "http://{{local}}", params, ...options });
    return res.data;
}