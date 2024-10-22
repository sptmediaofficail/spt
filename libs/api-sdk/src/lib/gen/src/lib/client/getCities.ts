import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetCitiesQueryResponse, GetCitiesQueryParams, GetCitiesHeaderParams } from "../../../types/GetCities";

 /**
 * @summary index
 * @link /cities
 */
export async function getCities(params?: GetCitiesQueryParams, headers?: GetCitiesHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetCitiesQueryResponse>["data"]> {
    const res = await client<GetCitiesQueryResponse>({ method: "get", url: `/cities`, baseURL: "http://{{local}}", params, headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}