import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetVinJn8at3mm3pw009894QueryResponse, GetVinJn8at3mm3pw009894HeaderParams } from "../../../types/GetVinJn8at3mm3pw009894";

 /**
 * @summary Get Data
 * @link /vin/JN8AT3MM3PW009894
 */
export async function getVinJn8at3mm3pw009894(headers?: GetVinJn8at3mm3pw009894HeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetVinJn8at3mm3pw009894QueryResponse>["data"]> {
    const res = await client<GetVinJn8at3mm3pw009894QueryResponse>({ method: "get", url: `/vin/JN8AT3MM3PW009894`, baseURL: "http://{{local}}", headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}