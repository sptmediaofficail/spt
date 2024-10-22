import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetLandingGuaranteeRightsQueryResponse } from "../../../types/GetLandingGuaranteeRights";

 /**
 * @summary guarantee_rights
 * @link /landing/guarantee_rights
 */
export async function getLandingGuaranteeRights(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetLandingGuaranteeRightsQueryResponse>["data"]> {
    const res = await client<GetLandingGuaranteeRightsQueryResponse>({ method: "get", url: `/landing/guarantee_rights`, baseURL: "http://{{local}}", ...options });
    return res.data;
}