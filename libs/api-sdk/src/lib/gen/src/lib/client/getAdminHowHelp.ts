import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetAdminHowHelpQueryResponse, GetAdminHowHelpQueryParams } from "../../../types/GetAdminHowHelp";

 /**
 * @summary list
 * @link /admin/how_help
 */
export async function getAdminHowHelp(params?: GetAdminHowHelpQueryParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetAdminHowHelpQueryResponse>["data"]> {
    const res = await client<GetAdminHowHelpQueryResponse>({ method: "get", url: `/admin/how_help`, baseURL: "http://{{local}}", params, ...options });
    return res.data;
}