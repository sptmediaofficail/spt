import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetLandingSlidersQueryResponse } from "../../../types/GetLandingSliders";

 /**
 * @summary sliders
 * @link /landing/sliders
 */
export async function getLandingSliders(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetLandingSlidersQueryResponse>["data"]> {
    const res = await client<GetLandingSlidersQueryResponse>({ method: "get", url: `/landing/sliders`, baseURL: "http://{{local}}", ...options });
    return res.data;
}