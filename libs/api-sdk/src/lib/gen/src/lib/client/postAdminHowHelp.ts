import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminHowHelpMutationRequest, PostAdminHowHelpMutationResponse, PostAdminHowHelpHeaderParams } from "../../../types/PostAdminHowHelp";

 /**
 * @summary create
 * @link /admin/how_help
 */
export async function postAdminHowHelp(data?: PostAdminHowHelpMutationRequest, headers?: PostAdminHowHelpHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminHowHelpMutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostAdminHowHelpMutationResponse, PostAdminHowHelpMutationRequest>({ method: "post", url: `/admin/how_help`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...headers, ...options.headers }, ...options });
    return res.data;
}