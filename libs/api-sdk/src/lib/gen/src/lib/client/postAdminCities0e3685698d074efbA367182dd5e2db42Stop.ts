import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminCities0e3685698d074efbA367182dd5e2db42StopMutationRequest, PostAdminCities0e3685698d074efbA367182dd5e2db42StopMutationResponse } from "../../../types/PostAdminCities0e3685698d074efbA367182dd5e2db42Stop";

 /**
 * @summary stop
 * @link /admin/cities/0e368569-8d07-4efb-a367-182dd5e2db42/stop
 */
export async function postAdminCities0e3685698d074efbA367182dd5e2db42Stop(data?: PostAdminCities0e3685698d074efbA367182dd5e2db42StopMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminCities0e3685698d074efbA367182dd5e2db42StopMutationResponse>["data"]> {
    const res = await client<PostAdminCities0e3685698d074efbA367182dd5e2db42StopMutationResponse, PostAdminCities0e3685698d074efbA367182dd5e2db42StopMutationRequest>({ method: "post", url: `/admin/cities/0e368569-8d07-4efb-a367-182dd5e2db42/stop`, baseURL: "http://{{local}}", data, ...options });
    return res.data;
}