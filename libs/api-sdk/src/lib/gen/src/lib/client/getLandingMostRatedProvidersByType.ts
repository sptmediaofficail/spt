import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetLandingMostRatedProvidersByTypeQueryResponse, GetLandingMostRatedProvidersByTypeQueryParams } from "../../../types/GetLandingMostRatedProvidersByType";

 /**
 * @summary most_rated_providers_by_type Copy
 * @link /landing/most_rated_providers_by_type
 */
export async function getLandingMostRatedProvidersByType(params?: GetLandingMostRatedProvidersByTypeQueryParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetLandingMostRatedProvidersByTypeQueryResponse>["data"]> {
    const res = await client<GetLandingMostRatedProvidersByTypeQueryResponse>({ method: "get", url: `/landing/most_rated_providers_by_type`, baseURL: "http://{{local}}", params, ...options });
    return res.data;
}