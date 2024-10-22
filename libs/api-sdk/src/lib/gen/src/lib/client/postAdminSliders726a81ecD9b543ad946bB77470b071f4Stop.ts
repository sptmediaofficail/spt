import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminSliders726a81ecD9b543ad946bB77470b071f4StopMutationRequest, PostAdminSliders726a81ecD9b543ad946bB77470b071f4StopMutationResponse } from "../../../types/PostAdminSliders726a81ecD9b543ad946bB77470b071f4Stop";

 /**
 * @summary stop
 * @link /admin/sliders/726a81ec-d9b5-43ad-946b-b77470b071f4/stop
 */
export async function postAdminSliders726a81ecD9b543ad946bB77470b071f4Stop(data?: PostAdminSliders726a81ecD9b543ad946bB77470b071f4StopMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminSliders726a81ecD9b543ad946bB77470b071f4StopMutationResponse>["data"]> {
    const res = await client<PostAdminSliders726a81ecD9b543ad946bB77470b071f4StopMutationResponse, PostAdminSliders726a81ecD9b543ad946bB77470b071f4StopMutationRequest>({ method: "post", url: `/admin/sliders/726a81ec-d9b5-43ad-946b-b77470b071f4/stop`, baseURL: "http://{{local}}", data, ...options });
    return res.data;
}