import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminSliders726a81ecD9b543ad946bB77470b071f4MutationRequest, PostAdminSliders726a81ecD9b543ad946bB77470b071f4MutationResponse, PostAdminSliders726a81ecD9b543ad946bB77470b071f4HeaderParams } from "../../../types/PostAdminSliders726a81ecD9b543ad946bB77470b071f4";

 /**
 * @summary update
 * @link /admin/sliders/726a81ec-d9b5-43ad-946b-b77470b071f4
 */
export async function postAdminSliders726a81ecD9b543ad946bB77470b071f4(data?: PostAdminSliders726a81ecD9b543ad946bB77470b071f4MutationRequest, headers?: PostAdminSliders726a81ecD9b543ad946bB77470b071f4HeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminSliders726a81ecD9b543ad946bB77470b071f4MutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostAdminSliders726a81ecD9b543ad946bB77470b071f4MutationResponse, PostAdminSliders726a81ecD9b543ad946bB77470b071f4MutationRequest>({ method: "post", url: `/admin/sliders/726a81ec-d9b5-43ad-946b-b77470b071f4`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...headers, ...options.headers }, ...options });
    return res.data;
}