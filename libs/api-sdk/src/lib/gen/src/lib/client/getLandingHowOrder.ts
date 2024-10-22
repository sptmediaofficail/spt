import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetLandingHowOrderQueryResponse } from "../../../types/GetLandingHowOrder";

 /**
 * @summary how_order
 * @link /landing/how_order
 */
export async function getLandingHowOrder(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetLandingHowOrderQueryResponse>["data"]> {
    const res = await client<GetLandingHowOrderQueryResponse>({ method: "get", url: `/landing/how_order`, baseURL: "http://{{local}}", ...options });
    return res.data;
}