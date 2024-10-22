import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminUsers0e3685698d074efbA367182dd5e2db42StopMutationRequest, PostAdminUsers0e3685698d074efbA367182dd5e2db42StopMutationResponse } from "../../../types/PostAdminUsers0e3685698d074efbA367182dd5e2db42Stop";

 /**
 * @summary stop
 * @link /admin/users/0e368569-8d07-4efb-a367-182dd5e2db42/stop
 */
export async function postAdminUsers0e3685698d074efbA367182dd5e2db42Stop(data?: PostAdminUsers0e3685698d074efbA367182dd5e2db42StopMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminUsers0e3685698d074efbA367182dd5e2db42StopMutationResponse>["data"]> {
    const res = await client<PostAdminUsers0e3685698d074efbA367182dd5e2db42StopMutationResponse, PostAdminUsers0e3685698d074efbA367182dd5e2db42StopMutationRequest>({ method: "post", url: `/admin/users/0e368569-8d07-4efb-a367-182dd5e2db42/stop`, baseURL: "http://{{local}}", data, ...options });
    return res.data;
}