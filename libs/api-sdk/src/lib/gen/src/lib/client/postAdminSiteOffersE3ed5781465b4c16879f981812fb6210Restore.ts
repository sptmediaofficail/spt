import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210RestoreMutationRequest, PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210RestoreMutationResponse } from "../../../types/PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210Restore";

 /**
 * @summary restore
 * @link /admin/site_offers/e3ed5781-465b-4c16-879f-981812fb6210/restore
 */
export async function postAdminSiteOffersE3ed5781465b4c16879f981812fb6210Restore(data?: PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210RestoreMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210RestoreMutationResponse>["data"]> {
    const res = await client<PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210RestoreMutationResponse, PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210RestoreMutationRequest>({ method: "post", url: `/admin/site_offers/e3ed5781-465b-4c16-879f-981812fb6210/restore`, baseURL: "http://{{local}}", data, ...options });
    return res.data;
}