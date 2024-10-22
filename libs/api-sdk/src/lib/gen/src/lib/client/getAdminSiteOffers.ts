import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetAdminSiteOffersQueryResponse, GetAdminSiteOffersQueryParams } from "../../../types/GetAdminSiteOffers";

 /**
 * @summary list
 * @link /admin/site_offers
 */
export async function getAdminSiteOffers(params?: GetAdminSiteOffersQueryParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetAdminSiteOffersQueryResponse>["data"]> {
    const res = await client<GetAdminSiteOffersQueryResponse>({ method: "get", url: `/admin/site_offers`, baseURL: "http://{{local}}", params, ...options });
    return res.data;
}