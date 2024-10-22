import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostClientOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDeliveryMutationRequest, PostClientOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDeliveryMutationResponse, PostClientOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDeliveryHeaderParams } from "../../../types/PostClientOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDelivery";

 /**
 * @summary confirm delivery
 * @link /client/orders/c5ad5169-f88d-4acc-8d4f-6c985706b224/confirm-delivery
 */
export async function postClientOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDelivery(data?: PostClientOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDeliveryMutationRequest, headers?: PostClientOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDeliveryHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostClientOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDeliveryMutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostClientOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDeliveryMutationResponse, PostClientOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDeliveryMutationRequest>({ method: "post", url: `/client/orders/c5ad5169-f88d-4acc-8d4f-6c985706b224/confirm-delivery`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...headers, ...options.headers }, ...options });
    return res.data;
}