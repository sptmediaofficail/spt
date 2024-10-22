import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostSharedAuthLogoutMutationRequest, PostSharedAuthLogoutMutationResponse, PostSharedAuthLogoutHeaderParams } from "../../../types/PostSharedAuthLogout";

 /**
 * @summary logout
 * @link /shared/auth/logout
 */
export async function postSharedAuthLogout(data?: PostSharedAuthLogoutMutationRequest, headers?: PostSharedAuthLogoutHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostSharedAuthLogoutMutationResponse>["data"]> {
    const res = await client<PostSharedAuthLogoutMutationResponse, PostSharedAuthLogoutMutationRequest>({ method: "post", url: `/shared/auth/logout`, baseURL: "http://{{local}}", data, headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}