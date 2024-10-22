import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetAdminCitiesQueryResponse, GetAdminCitiesQueryParams } from "../../../types/GetAdminCities";

 /**
 * @summary index
 * @link /admin/cities
 */
export async function getAdminCities(params?: GetAdminCitiesQueryParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetAdminCitiesQueryResponse>["data"]> {
    const res = await client<GetAdminCitiesQueryResponse>({ method: "get", url: `/admin/cities`, baseURL: "http://{{local}}", params, ...options });
    return res.data;
}