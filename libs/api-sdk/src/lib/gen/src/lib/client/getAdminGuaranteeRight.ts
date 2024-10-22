import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetAdminGuaranteeRightQueryResponse, GetAdminGuaranteeRightQueryParams } from "../../../types/GetAdminGuaranteeRight";

 /**
 * @summary list
 * @link /admin/guarantee_right
 */
export async function getAdminGuaranteeRight(params?: GetAdminGuaranteeRightQueryParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetAdminGuaranteeRightQueryResponse>["data"]> {
    const res = await client<GetAdminGuaranteeRightQueryResponse>({ method: "get", url: `/admin/guarantee_right`, baseURL: "http://{{local}}", params, ...options });
    return res.data;
}