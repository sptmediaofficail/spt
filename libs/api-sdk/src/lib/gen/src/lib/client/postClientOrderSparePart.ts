import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostClientOrderSparePartMutationRequest, PostClientOrderSparePartMutationResponse, PostClientOrderSparePartHeaderParams } from "../../../types/PostClientOrderSparePart";

 /**
 * @summary store
 * @link /client/order_spare_part
 */
export async function postClientOrderSparePart(data?: PostClientOrderSparePartMutationRequest, headers?: PostClientOrderSparePartHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostClientOrderSparePartMutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostClientOrderSparePartMutationResponse, PostClientOrderSparePartMutationRequest>({ method: "post", url: `/client/order_spare_part`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...headers, ...options.headers }, ...options });
    return res.data;
}