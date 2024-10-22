import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostSharedAuthRegisterMutationRequest, PostSharedAuthRegisterMutationResponse, PostSharedAuthRegisterHeaderParams } from "../../../types/PostSharedAuthRegister";

 /**
 * @summary Register
 * @link /shared/auth/register
 */
export async function postSharedAuthRegister(data?: PostSharedAuthRegisterMutationRequest, headers?: PostSharedAuthRegisterHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostSharedAuthRegisterMutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostSharedAuthRegisterMutationResponse, PostSharedAuthRegisterMutationRequest>({ method: "post", url: `/shared/auth/register`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...headers, ...options.headers }, ...options });
    return res.data;
}