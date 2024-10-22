import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { DeleteAdminSiteOffersE3ed5781465b4c16879f981812fb6210MutationResponse } from "../../../types/DeleteAdminSiteOffersE3ed5781465b4c16879f981812fb6210";

 /**
 * @summary delete
 * @link /admin/site_offers/e3ed5781-465b-4c16-879f-981812fb6210
 */
export async function deleteAdminSiteOffersE3ed5781465b4c16879f981812fb6210(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<DeleteAdminSiteOffersE3ed5781465b4c16879f981812fb6210MutationResponse>["data"]> {
    const res = await client<DeleteAdminSiteOffersE3ed5781465b4c16879f981812fb6210MutationResponse>({ method: "delete", url: `/admin/site_offers/e3ed5781-465b-4c16-879f-981812fb6210`, baseURL: "http://{{local}}", ...options });
    return res.data;
}