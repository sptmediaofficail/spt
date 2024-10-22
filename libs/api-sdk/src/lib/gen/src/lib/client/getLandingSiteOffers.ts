import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetLandingSiteOffersQueryResponse } from "../../../types/GetLandingSiteOffers";

 /**
 * @summary site_offers
 * @link /landing/site_offers
 */
export async function getLandingSiteOffers(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetLandingSiteOffersQueryResponse>["data"]> {
    const res = await client<GetLandingSiteOffersQueryResponse>({ method: "get", url: `/landing/site_offers`, baseURL: "http://{{local}}", ...options });
    return res.data;
}