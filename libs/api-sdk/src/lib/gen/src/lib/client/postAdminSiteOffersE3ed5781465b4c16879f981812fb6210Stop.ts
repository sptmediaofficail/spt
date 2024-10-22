import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210StopMutationRequest, PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210StopMutationResponse } from "../../../types/PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210Stop";

 /**
 * @summary stop
 * @link /admin/site_offers/e3ed5781-465b-4c16-879f-981812fb6210/stop
 */
export async function postAdminSiteOffersE3ed5781465b4c16879f981812fb6210Stop(data?: PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210StopMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210StopMutationResponse>["data"]> {
    const res = await client<PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210StopMutationResponse, PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210StopMutationRequest>({ method: "post", url: `/admin/site_offers/e3ed5781-465b-4c16-879f-981812fb6210/stop`, baseURL: "http://{{local}}", data, ...options });
    return res.data;
}