import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetBrandsBrandidModelsQueryResponse, GetBrandsBrandidModelsPathParams, GetBrandsBrandidModelsQueryParams, GetBrandsBrandidModelsHeaderParams } from "../../../types/GetBrandsBrandidModels";

 /**
 * @summary index
 * @link /brands/:brandId/models
 */
export async function getBrandsBrandidModels(brandId: GetBrandsBrandidModelsPathParams["brandId"], params?: GetBrandsBrandidModelsQueryParams, headers?: GetBrandsBrandidModelsHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetBrandsBrandidModelsQueryResponse>["data"]> {
    const res = await client<GetBrandsBrandidModelsQueryResponse>({ method: "get", url: `/brands/${brandId}/models`, baseURL: "http://{{local}}", params, headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}