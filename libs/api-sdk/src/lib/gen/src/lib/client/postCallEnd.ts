import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostCallEndMutationRequest, PostCallEndMutationResponse, PostCallEndHeaderParams } from "../../../types/PostCallEnd";

 /**
 * @summary end
 * @link /call/end
 */
export async function postCallEnd(data?: PostCallEndMutationRequest, headers?: PostCallEndHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostCallEndMutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostCallEndMutationResponse, PostCallEndMutationRequest>({ method: "post", url: `/call/end`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...headers, ...options.headers }, ...options });
    return res.data;
}