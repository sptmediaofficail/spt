import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { DeleteAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5MutationResponse } from "../../../types/DeleteAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5";

 /**
 * @summary delete
 * @link /admin/about/7ad421cd-9075-4a74-b2e1-e4298a1dc2b5
 */
export async function deleteAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<DeleteAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5MutationResponse>["data"]> {
    const res = await client<DeleteAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5MutationResponse>({ method: "delete", url: `/admin/about/7ad421cd-9075-4a74-b2e1-e4298a1dc2b5`, baseURL: "http://{{local}}", ...options });
    return res.data;
}