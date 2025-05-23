import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostCallRefuseMutationRequest, PostCallRefuseMutationResponse, PostCallRefuseHeaderParams } from "../../../types/PostCallRefuse";

 /**
 * @summary refuse
 * @link /call/refuse
 */
export async function postCallRefuse(data?: PostCallRefuseMutationRequest, headers?: PostCallRefuseHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostCallRefuseMutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostCallRefuseMutationResponse, PostCallRefuseMutationRequest>({ method: "post", url: `/call/refuse`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...headers, ...options.headers }, ...options });
    return res.data;
}