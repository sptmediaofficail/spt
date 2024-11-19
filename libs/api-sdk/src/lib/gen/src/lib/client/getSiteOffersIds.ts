import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetSiteOffersIdsQueryResponse, GetSiteOffersIdsHeaderParams } from "../../../types/GetSiteOffersIds";

 /**
 * @summary ids
 * @link /site_offers/ids
 */
export async function getSiteOffersIds(headers?: GetSiteOffersIdsHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetSiteOffersIdsQueryResponse>["data"]> {
    const res = await client<GetSiteOffersIdsQueryResponse>({ method: "get", url: `/site_offers/ids`, baseURL: "http://{{local}}", headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}