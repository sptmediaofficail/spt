import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetLandingOrdersNumbersQueryResponse } from "../../../types/GetLandingOrdersNumbers";

 /**
 * @summary orders_numbers
 * @link /landing/orders_numbers
 */
export async function getLandingOrdersNumbers(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetLandingOrdersNumbersQueryResponse>["data"]> {
    const res = await client<GetLandingOrdersNumbersQueryResponse>({ method: "get", url: `/landing/orders_numbers`, baseURL: "http://{{local}}", ...options });
    return res.data;
}