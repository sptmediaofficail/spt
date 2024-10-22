import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostClientOrderRateMutationRequest, PostClientOrderRateMutationResponse, PostClientOrderRateHeaderParams } from "../../../types/PostClientOrderRate";

 /**
 * @summary rate
 * @link /client/order/rate
 */
export async function postClientOrderRate(data?: PostClientOrderRateMutationRequest, headers?: PostClientOrderRateHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostClientOrderRateMutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostClientOrderRateMutationResponse, PostClientOrderRateMutationRequest>({ method: "post", url: `/client/order/rate`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...headers, ...options.headers }, ...options });
    return res.data;
}