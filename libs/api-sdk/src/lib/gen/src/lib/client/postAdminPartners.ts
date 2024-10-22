import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminPartnersMutationRequest, PostAdminPartnersMutationResponse, PostAdminPartnersHeaderParams } from "../../../types/PostAdminPartners";

 /**
 * @summary create
 * @link /admin/partners
 */
export async function postAdminPartners(data?: PostAdminPartnersMutationRequest, headers?: PostAdminPartnersHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminPartnersMutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostAdminPartnersMutationResponse, PostAdminPartnersMutationRequest>({ method: "post", url: `/admin/partners`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...headers, ...options.headers }, ...options });
    return res.data;
}