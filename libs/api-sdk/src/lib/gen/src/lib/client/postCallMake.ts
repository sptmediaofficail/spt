import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostCallMakeMutationRequest, PostCallMakeMutationResponse, PostCallMakeHeaderParams } from "../../../types/PostCallMake";

 /**
 * @summary make a call
 * @link /call/make
 */
export async function postCallMake(data?: PostCallMakeMutationRequest, headers?: PostCallMakeHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostCallMakeMutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostCallMakeMutationResponse, PostCallMakeMutationRequest>({ method: "post", url: `/call/make`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...headers, ...options.headers }, ...options });
    return res.data;
}