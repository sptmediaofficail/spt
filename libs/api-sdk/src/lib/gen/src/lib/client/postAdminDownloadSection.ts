import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminDownloadSectionMutationRequest, PostAdminDownloadSectionMutationResponse, PostAdminDownloadSectionHeaderParams } from "../../../types/PostAdminDownloadSection";

 /**
 * @summary update
 * @link /admin/download_section
 */
export async function postAdminDownloadSection(data?: PostAdminDownloadSectionMutationRequest, headers?: PostAdminDownloadSectionHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminDownloadSectionMutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostAdminDownloadSectionMutationResponse, PostAdminDownloadSectionMutationRequest>({ method: "post", url: `/admin/download_section`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...headers, ...options.headers }, ...options });
    return res.data;
}