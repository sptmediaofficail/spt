import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetLandingContactQueryResponse } from "../../../types/GetLandingContact";

 /**
 * @summary contact
 * @link /landing/contact
 */
export async function getLandingContact(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetLandingContactQueryResponse>["data"]> {
    const res = await client<GetLandingContactQueryResponse>({ method: "get", url: `/landing/contact`, baseURL: "http://{{local}}", ...options });
    return res.data;
}