import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostProviderOrdersIdConfirmDeliveryMutationRequest, PostProviderOrdersIdConfirmDeliveryMutationResponse, PostProviderOrdersIdConfirmDeliveryPathParams, PostProviderOrdersIdConfirmDeliveryHeaderParams } from "../../../types/PostProviderOrdersIdConfirmDelivery";

 /**
 * @summary confirm delivery
 * @link /provider/orders/:id/confirm-delivery
 */
export async function postProviderOrdersIdConfirmDelivery(id: PostProviderOrdersIdConfirmDeliveryPathParams["id"], data?: PostProviderOrdersIdConfirmDeliveryMutationRequest, headers?: PostProviderOrdersIdConfirmDeliveryHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostProviderOrdersIdConfirmDeliveryMutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostProviderOrdersIdConfirmDeliveryMutationResponse, PostProviderOrdersIdConfirmDeliveryMutationRequest>({ method: "post", url: `/provider/orders/${id}/confirm-delivery`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...headers, ...options.headers }, ...options });
    return res.data;
}