import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetLandingServicesQueryResponse } from "../../../types/GetLandingServices";

 /**
 * @summary services
 * @link /landing/services
 */
export async function getLandingServices(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetLandingServicesQueryResponse>["data"]> {
    const res = await client<GetLandingServicesQueryResponse>({ method: "get", url: `/landing/services`, baseURL: "http://{{local}}", ...options });
    return res.data;
}