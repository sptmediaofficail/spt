import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5StopMutationRequest, PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5StopMutationResponse } from "../../../types/PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5Stop";

 /**
 * @summary stop
 * @link /admin/about/7ad421cd-9075-4a74-b2e1-e4298a1dc2b5/stop
 */
export async function postAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5Stop(data?: PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5StopMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5StopMutationResponse>["data"]> {
    const res = await client<PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5StopMutationResponse, PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5StopMutationRequest>({ method: "post", url: `/admin/about/7ad421cd-9075-4a74-b2e1-e4298a1dc2b5/stop`, baseURL: "http://{{local}}", data, ...options });
    return res.data;
}