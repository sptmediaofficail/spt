import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminUsers0e3685698d074efbA367182dd5e2db42RestoreMutationRequest, PostAdminUsers0e3685698d074efbA367182dd5e2db42RestoreMutationResponse } from "../../../types/PostAdminUsers0e3685698d074efbA367182dd5e2db42Restore";

 /**
 * @summary restore
 * @link /admin/users/0e368569-8d07-4efb-a367-182dd5e2db42/restore
 */
export async function postAdminUsers0e3685698d074efbA367182dd5e2db42Restore(data?: PostAdminUsers0e3685698d074efbA367182dd5e2db42RestoreMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminUsers0e3685698d074efbA367182dd5e2db42RestoreMutationResponse>["data"]> {
    const res = await client<PostAdminUsers0e3685698d074efbA367182dd5e2db42RestoreMutationResponse, PostAdminUsers0e3685698d074efbA367182dd5e2db42RestoreMutationRequest>({ method: "post", url: `/admin/users/0e368569-8d07-4efb-a367-182dd5e2db42/restore`, baseURL: "http://{{local}}", data, ...options });
    return res.data;
}