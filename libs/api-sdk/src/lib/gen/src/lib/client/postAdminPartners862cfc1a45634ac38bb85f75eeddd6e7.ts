import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7MutationRequest, PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7MutationResponse, PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7HeaderParams } from "../../../types/PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7";

 /**
 * @summary update
 * @link /admin/partners/862cfc1a-4563-4ac3-8bb8-5f75eeddd6e7
 */
export async function postAdminPartners862cfc1a45634ac38bb85f75eeddd6e7(data?: PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7MutationRequest, headers?: PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7HeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7MutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7MutationResponse, PostAdminPartners862cfc1a45634ac38bb85f75eeddd6e7MutationRequest>({ method: "post", url: `/admin/partners/862cfc1a-4563-4ac3-8bb8-5f75eeddd6e7`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...headers, ...options.headers }, ...options });
    return res.data;
}