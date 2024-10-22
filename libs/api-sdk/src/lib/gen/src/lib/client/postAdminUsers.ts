import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminUsersMutationRequest, PostAdminUsersMutationResponse, PostAdminUsersHeaderParams } from "../../../types/PostAdminUsers";

 /**
 * @summary create
 * @link /admin/users
 */
export async function postAdminUsers(data?: PostAdminUsersMutationRequest, headers?: PostAdminUsersHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminUsersMutationResponse>["data"]> {
    const res = await client<PostAdminUsersMutationResponse, PostAdminUsersMutationRequest>({ method: "post", url: `/admin/users`, baseURL: "http://{{local}}", data, headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}