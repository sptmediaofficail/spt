import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminSiteOffersMutationRequest, PostAdminSiteOffersMutationResponse, PostAdminSiteOffersHeaderParams } from "../../../types/PostAdminSiteOffers";

 /**
 * @summary create
 * @link /admin/site_offers
 */
export async function postAdminSiteOffers(data?: PostAdminSiteOffersMutationRequest, headers?: PostAdminSiteOffersHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminSiteOffersMutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostAdminSiteOffersMutationResponse, PostAdminSiteOffersMutationRequest>({ method: "post", url: `/admin/site_offers`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...headers, ...options.headers }, ...options });
    return res.data;
}