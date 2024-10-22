import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostSharedAuthEditProfileMutationRequest, PostSharedAuthEditProfileMutationResponse, PostSharedAuthEditProfileHeaderParams } from "../../../types/PostSharedAuthEditProfile";

 /**
 * @summary Edit profile
 * @link /shared/auth/edit-profile
 */
export async function postSharedAuthEditProfile(data?: PostSharedAuthEditProfileMutationRequest, headers?: PostSharedAuthEditProfileHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostSharedAuthEditProfileMutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostSharedAuthEditProfileMutationResponse, PostSharedAuthEditProfileMutationRequest>({ method: "post", url: `/shared/auth/edit-profile`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...headers, ...options.headers }, ...options });
    return res.data;
}