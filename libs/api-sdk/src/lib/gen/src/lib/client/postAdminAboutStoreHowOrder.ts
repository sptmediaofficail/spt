import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminAboutStoreHowOrderMutationRequest, PostAdminAboutStoreHowOrderMutationResponse, PostAdminAboutStoreHowOrderHeaderParams } from "../../../types/PostAdminAboutStoreHowOrder";

 /**
 * @summary create or update how order
 * @link /admin/about/store_how_order
 */
export async function postAdminAboutStoreHowOrder(data?: PostAdminAboutStoreHowOrderMutationRequest, headers?: PostAdminAboutStoreHowOrderHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminAboutStoreHowOrderMutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostAdminAboutStoreHowOrderMutationResponse, PostAdminAboutStoreHowOrderMutationRequest>({ method: "post", url: `/admin/about/store_how_order`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...headers, ...options.headers }, ...options });
    return res.data;
}