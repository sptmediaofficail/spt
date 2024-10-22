import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminAboutStoreAboutMutationRequest, PostAdminAboutStoreAboutMutationResponse, PostAdminAboutStoreAboutHeaderParams } from "../../../types/PostAdminAboutStoreAbout";

 /**
 * @summary create or update about
 * @link /admin/about/store_about
 */
export async function postAdminAboutStoreAbout(data?: PostAdminAboutStoreAboutMutationRequest, headers?: PostAdminAboutStoreAboutHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminAboutStoreAboutMutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostAdminAboutStoreAboutMutationResponse, PostAdminAboutStoreAboutMutationRequest>({ method: "post", url: `/admin/about/store_about`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...headers, ...options.headers }, ...options });
    return res.data;
}