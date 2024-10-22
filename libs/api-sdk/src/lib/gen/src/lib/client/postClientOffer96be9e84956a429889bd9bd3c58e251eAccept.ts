import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostClientOffer96be9e84956a429889bd9bd3c58e251eAcceptMutationRequest, PostClientOffer96be9e84956a429889bd9bd3c58e251eAcceptMutationResponse, PostClientOffer96be9e84956a429889bd9bd3c58e251eAcceptHeaderParams } from "../../../types/PostClientOffer96be9e84956a429889bd9bd3c58e251eAccept";

 /**
 * @summary Accept
 * @link /client/offer/96be9e84-956a-4298-89bd-9bd3c58e251e/accept
 */
export async function postClientOffer96be9e84956a429889bd9bd3c58e251eAccept(data?: PostClientOffer96be9e84956a429889bd9bd3c58e251eAcceptMutationRequest, headers?: PostClientOffer96be9e84956a429889bd9bd3c58e251eAcceptHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostClientOffer96be9e84956a429889bd9bd3c58e251eAcceptMutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostClientOffer96be9e84956a429889bd9bd3c58e251eAcceptMutationResponse, PostClientOffer96be9e84956a429889bd9bd3c58e251eAcceptMutationRequest>({ method: "post", url: `/client/offer/96be9e84-956a-4298-89bd-9bd3c58e251e/accept`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...headers, ...options.headers }, ...options });
    return res.data;
}