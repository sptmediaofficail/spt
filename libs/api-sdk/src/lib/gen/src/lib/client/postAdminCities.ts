import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminCitiesMutationRequest, PostAdminCitiesMutationResponse, PostAdminCitiesHeaderParams } from "../../../types/PostAdminCities";

 /**
 * @summary create
 * @link /admin/cities
 */
export async function postAdminCities(data?: PostAdminCitiesMutationRequest, headers?: PostAdminCitiesHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminCitiesMutationResponse>["data"]> {
    const res = await client<PostAdminCitiesMutationResponse, PostAdminCitiesMutationRequest>({ method: "post", url: `/admin/cities`, baseURL: "http://{{local}}", data, headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}