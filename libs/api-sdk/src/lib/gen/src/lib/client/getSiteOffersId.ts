import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetSiteOffersIdQueryResponse, GetSiteOffersIdPathParams, GetSiteOffersIdHeaderParams } from "../../../types/GetSiteOffersId";

 /**
 * @summary single
 * @link /site_offers/:id
 */
export async function getSiteOffersId(id: GetSiteOffersIdPathParams["id"], headers?: GetSiteOffersIdHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetSiteOffersIdQueryResponse>["data"]> {
    const res = await client<GetSiteOffersIdQueryResponse>({ method: "get", url: `/site_offers/${id}`, baseURL: "http://{{local}}", headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}