import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetSiteOffersQueryResponse, GetSiteOffersQueryParams, GetSiteOffersHeaderParams } from "../../../types/GetSiteOffers";

 /**
 * @summary index
 * @link /site_offers
 */
export async function getSiteOffers(params?: GetSiteOffersQueryParams, headers?: GetSiteOffersHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetSiteOffersQueryResponse>["data"]> {
    const res = await client<GetSiteOffersQueryResponse>({ method: "get", url: `/site_offers`, baseURL: "http://{{local}}", params, headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}