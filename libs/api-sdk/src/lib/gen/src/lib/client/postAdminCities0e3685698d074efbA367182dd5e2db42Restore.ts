import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminCities0e3685698d074efbA367182dd5e2db42RestoreMutationRequest, PostAdminCities0e3685698d074efbA367182dd5e2db42RestoreMutationResponse } from "../../../types/PostAdminCities0e3685698d074efbA367182dd5e2db42Restore";

 /**
 * @summary restore
 * @link /admin/cities/0e368569-8d07-4efb-a367-182dd5e2db42/restore
 */
export async function postAdminCities0e3685698d074efbA367182dd5e2db42Restore(data?: PostAdminCities0e3685698d074efbA367182dd5e2db42RestoreMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminCities0e3685698d074efbA367182dd5e2db42RestoreMutationResponse>["data"]> {
    const res = await client<PostAdminCities0e3685698d074efbA367182dd5e2db42RestoreMutationResponse, PostAdminCities0e3685698d074efbA367182dd5e2db42RestoreMutationRequest>({ method: "post", url: `/admin/cities/0e368569-8d07-4efb-a367-182dd5e2db42/restore`, baseURL: "http://{{local}}", data, ...options });
    return res.data;
}