import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetBrandsAlfaRomeoModelsQueryResponse, GetBrandsAlfaRomeoModelsHeaderParams } from "../../../types/GetBrandsAlfaRomeoModels";

 /**
 * @summary index
 * @link /brands/Alfa_Romeo/models
 */
export async function getBrandsAlfaRomeoModels(headers?: GetBrandsAlfaRomeoModelsHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetBrandsAlfaRomeoModelsQueryResponse>["data"]> {
    const res = await client<GetBrandsAlfaRomeoModelsQueryResponse>({ method: "get", url: `/brands/Alfa_Romeo/models`, baseURL: "http://{{local}}", headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}