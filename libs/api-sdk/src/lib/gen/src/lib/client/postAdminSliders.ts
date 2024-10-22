import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminSlidersMutationRequest, PostAdminSlidersMutationResponse, PostAdminSlidersHeaderParams } from "../../../types/PostAdminSliders";

 /**
 * @summary create
 * @link /admin/sliders
 */
export async function postAdminSliders(data?: PostAdminSlidersMutationRequest, headers?: PostAdminSlidersHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminSlidersMutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostAdminSlidersMutationResponse, PostAdminSlidersMutationRequest>({ method: "post", url: `/admin/sliders`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...headers, ...options.headers }, ...options });
    return res.data;
}