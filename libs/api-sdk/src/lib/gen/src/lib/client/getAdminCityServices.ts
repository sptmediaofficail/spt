import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetAdminCityServicesQueryResponse, GetAdminCityServicesQueryParams } from "../../../types/GetAdminCityServices";

 /**
 * @summary city-services
 * @link /admin/city-services
 */
export async function getAdminCityServices(params?: GetAdminCityServicesQueryParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetAdminCityServicesQueryResponse>["data"]> {
    const res = await client<GetAdminCityServicesQueryResponse>({ method: "get", url: `/admin/city-services`, baseURL: "http://{{local}}", params, ...options });
    return res.data;
}