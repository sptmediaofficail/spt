import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostCallAcceptMutationRequest, PostCallAcceptMutationResponse, PostCallAcceptHeaderParams } from "../../../types/PostCallAccept";

 /**
 * @summary accept
 * @link /call/accept
 */
export async function postCallAccept(data?: PostCallAcceptMutationRequest, headers?: PostCallAcceptHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostCallAcceptMutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostCallAcceptMutationResponse, PostCallAcceptMutationRequest>({ method: "post", url: `/call/accept`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...headers, ...options.headers }, ...options });
    return res.data;
}