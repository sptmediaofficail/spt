import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetBrandsQueryResponse, GetBrandsQueryParams, GetBrandsHeaderParams } from "../../../types/GetBrands";

 /**
 * @summary index
 * @link /brands
 */
export async function getBrands(params?: GetBrandsQueryParams, headers?: GetBrandsHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetBrandsQueryResponse>["data"]> {
    const res = await client<GetBrandsQueryResponse>({ method: "get", url: `/brands`, baseURL: "http://{{local}}", params, headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}