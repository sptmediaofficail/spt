import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetProviderF84fd31930e54ea49c2881b822045ebcQueryResponse, GetProviderF84fd31930e54ea49c2881b822045ebcHeaderParams } from "../../../types/GetProviderF84fd31930e54ea49c2881b822045ebc";

 /**
 * @summary single provider
 * @link /provider/f84fd319-30e5-4ea4-9c28-81b822045ebc
 */
export async function getProviderF84fd31930e54ea49c2881b822045ebc(headers?: GetProviderF84fd31930e54ea49c2881b822045ebcHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetProviderF84fd31930e54ea49c2881b822045ebcQueryResponse>["data"]> {
    const res = await client<GetProviderF84fd31930e54ea49c2881b822045ebcQueryResponse>({ method: "get", url: `/provider/f84fd319-30e5-4ea4-9c28-81b822045ebc`, baseURL: "http://{{local}}", headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}