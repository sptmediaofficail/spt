import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetAdminServicesQueryResponse, GetAdminServicesQueryParams } from "../../../types/GetAdminServices";

 /**
 * @summary index
 * @link /admin/services
 */
export async function getAdminServices(params?: GetAdminServicesQueryParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetAdminServicesQueryResponse>["data"]> {
    const res = await client<GetAdminServicesQueryResponse>({ method: "get", url: `/admin/services`, baseURL: "http://{{local}}", params, ...options });
    return res.data;
}