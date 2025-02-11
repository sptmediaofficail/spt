import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetTermsTypeQueryResponse, GetTermsTypePathParams } from "../../../types/GetTermsType";

 /**
 * @summary get term by type
 * @link /terms/:type
 */
export async function getTermsType(type: GetTermsTypePathParams["type"], options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetTermsTypeQueryResponse>["data"]> {
    const res = await client<GetTermsTypeQueryResponse>({ method: "get", url: `/terms/${type}`, baseURL: "http://{{local}}", ...options });
    return res.data;
}