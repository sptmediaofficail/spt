import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33MutationRequest, PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33MutationResponse, PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33HeaderParams } from "../../../types/PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33";

 /**
 * @summary update
 * @link /admin/guarantee_right/716ae479-a414-4e1a-80a9-de253b560d33
 */
export async function postAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33(data?: PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33MutationRequest, headers?: PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33HeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33MutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33MutationResponse, PostAdminGuaranteeRight716ae479A4144e1a80a9De253b560d33MutationRequest>({ method: "post", url: `/admin/guarantee_right/716ae479-a414-4e1a-80a9-de253b560d33`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...headers, ...options.headers }, ...options });
    return res.data;
}