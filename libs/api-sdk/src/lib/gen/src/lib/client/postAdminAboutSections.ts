import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminAboutSectionsMutationRequest, PostAdminAboutSectionsMutationResponse, PostAdminAboutSectionsHeaderParams } from "../../../types/PostAdminAboutSections";

 /**
 * @summary create
 * @link /admin/about_sections
 */
export async function postAdminAboutSections(data?: PostAdminAboutSectionsMutationRequest, headers?: PostAdminAboutSectionsHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminAboutSectionsMutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostAdminAboutSectionsMutationResponse, PostAdminAboutSectionsMutationRequest>({ method: "post", url: `/admin/about_sections`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...headers, ...options.headers }, ...options });
    return res.data;
}