import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5RestoreMutationRequest, PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5RestoreMutationResponse } from "../../../types/PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5Restore";

 /**
 * @summary restore
 * @link /admin/about/7ad421cd-9075-4a74-b2e1-e4298a1dc2b5/restore
 */
export async function postAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5Restore(data?: PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5RestoreMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5RestoreMutationResponse>["data"]> {
    const res = await client<PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5RestoreMutationResponse, PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5RestoreMutationRequest>({ method: "post", url: `/admin/about/7ad421cd-9075-4a74-b2e1-e4298a1dc2b5/restore`, baseURL: "http://{{local}}", data, ...options });
    return res.data;
}