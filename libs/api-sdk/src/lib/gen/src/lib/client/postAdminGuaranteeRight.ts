import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminGuaranteeRightMutationRequest, PostAdminGuaranteeRightMutationResponse, PostAdminGuaranteeRightHeaderParams } from "../../../types/PostAdminGuaranteeRight";

 /**
 * @summary create
 * @link /admin/guarantee_right
 */
export async function postAdminGuaranteeRight(data?: PostAdminGuaranteeRightMutationRequest, headers?: PostAdminGuaranteeRightHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminGuaranteeRightMutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostAdminGuaranteeRightMutationResponse, PostAdminGuaranteeRightMutationRequest>({ method: "post", url: `/admin/guarantee_right`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...headers, ...options.headers }, ...options });
    return res.data;
}