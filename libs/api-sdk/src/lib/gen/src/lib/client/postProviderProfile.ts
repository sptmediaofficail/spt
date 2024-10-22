import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostProviderProfileMutationRequest, PostProviderProfileMutationResponse, PostProviderProfileHeaderParams } from "../../../types/PostProviderProfile";

 /**
 * @summary store
 * @link /provider/profile
 */
export async function postProviderProfile(data?: PostProviderProfileMutationRequest, headers?: PostProviderProfileHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostProviderProfileMutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostProviderProfileMutationResponse, PostProviderProfileMutationRequest>({ method: "post", url: `/provider/profile`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...headers, ...options.headers }, ...options });
    return res.data;
}