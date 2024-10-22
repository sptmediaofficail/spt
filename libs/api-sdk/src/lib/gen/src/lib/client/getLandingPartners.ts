import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetLandingPartnersQueryResponse } from "../../../types/GetLandingPartners";

 /**
 * @summary partners
 * @link /landing/partners
 */
export async function getLandingPartners(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetLandingPartnersQueryResponse>["data"]> {
    const res = await client<GetLandingPartnersQueryResponse>({ method: "get", url: `/landing/partners`, baseURL: "http://{{local}}", ...options });
    return res.data;
}