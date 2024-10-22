import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210MutationRequest, PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210MutationResponse, PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210HeaderParams } from "../../../types/PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210";

 /**
 * @summary update
 * @link /admin/site_offers/e3ed5781-465b-4c16-879f-981812fb6210
 */
export async function postAdminSiteOffersE3ed5781465b4c16879f981812fb6210(data?: PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210MutationRequest, headers?: PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210HeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210MutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210MutationResponse, PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210MutationRequest>({ method: "post", url: `/admin/site_offers/e3ed5781-465b-4c16-879f-981812fb6210`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...headers, ...options.headers }, ...options });
    return res.data;
}