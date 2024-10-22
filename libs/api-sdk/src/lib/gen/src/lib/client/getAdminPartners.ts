import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetAdminPartnersQueryResponse, GetAdminPartnersQueryParams } from "../../../types/GetAdminPartners";

 /**
 * @summary list
 * @link /admin/partners
 */
export async function getAdminPartners(params?: GetAdminPartnersQueryParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetAdminPartnersQueryResponse>["data"]> {
    const res = await client<GetAdminPartnersQueryResponse>({ method: "get", url: `/admin/partners`, baseURL: "http://{{local}}", params, ...options });
    return res.data;
}