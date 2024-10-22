import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminSliders726a81ecD9b543ad946bB77470b071f4RestoreMutationRequest, PostAdminSliders726a81ecD9b543ad946bB77470b071f4RestoreMutationResponse } from "../../../types/PostAdminSliders726a81ecD9b543ad946bB77470b071f4Restore";

 /**
 * @summary restore
 * @link /admin/sliders/726a81ec-d9b5-43ad-946b-b77470b071f4/restore
 */
export async function postAdminSliders726a81ecD9b543ad946bB77470b071f4Restore(data?: PostAdminSliders726a81ecD9b543ad946bB77470b071f4RestoreMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminSliders726a81ecD9b543ad946bB77470b071f4RestoreMutationResponse>["data"]> {
    const res = await client<PostAdminSliders726a81ecD9b543ad946bB77470b071f4RestoreMutationResponse, PostAdminSliders726a81ecD9b543ad946bB77470b071f4RestoreMutationRequest>({ method: "post", url: `/admin/sliders/726a81ec-d9b5-43ad-946b-b77470b071f4/restore`, baseURL: "http://{{local}}", data, ...options });
    return res.data;
}