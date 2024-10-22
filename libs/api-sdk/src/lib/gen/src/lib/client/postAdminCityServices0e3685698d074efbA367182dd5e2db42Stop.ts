import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminCityServices0e3685698d074efbA367182dd5e2db42StopMutationRequest, PostAdminCityServices0e3685698d074efbA367182dd5e2db42StopMutationResponse } from "../../../types/PostAdminCityServices0e3685698d074efbA367182dd5e2db42Stop";

 /**
 * @summary stop
 * @link /admin/city-services/0e368569-8d07-4efb-a367-182dd5e2db42/stop
 */
export async function postAdminCityServices0e3685698d074efbA367182dd5e2db42Stop(data?: PostAdminCityServices0e3685698d074efbA367182dd5e2db42StopMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminCityServices0e3685698d074efbA367182dd5e2db42StopMutationResponse>["data"]> {
    const res = await client<PostAdminCityServices0e3685698d074efbA367182dd5e2db42StopMutationResponse, PostAdminCityServices0e3685698d074efbA367182dd5e2db42StopMutationRequest>({ method: "post", url: `/admin/city-services/0e368569-8d07-4efb-a367-182dd5e2db42/stop`, baseURL: "http://{{local}}", data, ...options });
    return res.data;
}