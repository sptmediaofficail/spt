import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminCityServices0e3685698d074efbA367182dd5e2db42RestoreMutationRequest, PostAdminCityServices0e3685698d074efbA367182dd5e2db42RestoreMutationResponse } from "../../../types/PostAdminCityServices0e3685698d074efbA367182dd5e2db42Restore";

 /**
 * @summary restore
 * @link /admin/city-services/0e368569-8d07-4efb-a367-182dd5e2db42/restore
 */
export async function postAdminCityServices0e3685698d074efbA367182dd5e2db42Restore(data?: PostAdminCityServices0e3685698d074efbA367182dd5e2db42RestoreMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminCityServices0e3685698d074efbA367182dd5e2db42RestoreMutationResponse>["data"]> {
    const res = await client<PostAdminCityServices0e3685698d074efbA367182dd5e2db42RestoreMutationResponse, PostAdminCityServices0e3685698d074efbA367182dd5e2db42RestoreMutationRequest>({ method: "post", url: `/admin/city-services/0e368569-8d07-4efb-a367-182dd5e2db42/restore`, baseURL: "http://{{local}}", data, ...options });
    return res.data;
}