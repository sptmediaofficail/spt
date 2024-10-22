import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostProviderOfferMutationRequest, PostProviderOfferMutationResponse, PostProviderOfferHeaderParams } from "../../../types/PostProviderOffer";

 /**
 * @summary store
 * @link /provider/offer
 */
export async function postProviderOffer(data?: PostProviderOfferMutationRequest, headers?: PostProviderOfferHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostProviderOfferMutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostProviderOfferMutationResponse, PostProviderOfferMutationRequest>({ method: "post", url: `/provider/offer`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...headers, ...options.headers }, ...options });
    return res.data;
}