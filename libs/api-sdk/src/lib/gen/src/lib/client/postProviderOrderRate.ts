import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostProviderOrderRateMutationRequest, PostProviderOrderRateMutationResponse, PostProviderOrderRateHeaderParams } from "../../../types/PostProviderOrderRate";

 /**
 * @summary rate
 * @link /provider/order/rate
 */
export async function postProviderOrderRate(data?: PostProviderOrderRateMutationRequest, headers?: PostProviderOrderRateHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostProviderOrderRateMutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostProviderOrderRateMutationResponse, PostProviderOrderRateMutationRequest>({ method: "post", url: `/provider/order/rate`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...headers, ...options.headers }, ...options });
    return res.data;
}