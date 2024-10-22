import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminServicesB11d171dEec14474A3d26ef6881023aeMutationRequest, PostAdminServicesB11d171dEec14474A3d26ef6881023aeMutationResponse, PostAdminServicesB11d171dEec14474A3d26ef6881023aeHeaderParams } from "../../../types/PostAdminServicesB11d171dEec14474A3d26ef6881023ae";

 /**
 * @summary update
 * @link /admin/services/b11d171d-eec1-4474-a3d2-6ef6881023ae
 */
export async function postAdminServicesB11d171dEec14474A3d26ef6881023ae(data?: PostAdminServicesB11d171dEec14474A3d26ef6881023aeMutationRequest, headers?: PostAdminServicesB11d171dEec14474A3d26ef6881023aeHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminServicesB11d171dEec14474A3d26ef6881023aeMutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostAdminServicesB11d171dEec14474A3d26ef6881023aeMutationResponse, PostAdminServicesB11d171dEec14474A3d26ef6881023aeMutationRequest>({ method: "post", url: `/admin/services/b11d171d-eec1-4474-a3d2-6ef6881023ae`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...headers, ...options.headers }, ...options });
    return res.data;
}