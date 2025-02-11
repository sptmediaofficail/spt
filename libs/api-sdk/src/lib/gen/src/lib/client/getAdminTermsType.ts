import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetAdminTermsTypeQueryResponse, GetAdminTermsTypePathParams, GetAdminTermsTypeQueryParams } from "../../../types/GetAdminTermsType";

 /**
 * @summary get terms by type
 * @link /admin/terms/:type
 */
export async function getAdminTermsType(type: GetAdminTermsTypePathParams["type"], params?: GetAdminTermsTypeQueryParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetAdminTermsTypeQueryResponse>["data"]> {
    const res = await client<GetAdminTermsTypeQueryResponse>({ method: "get", url: `/admin/terms/${type}`, baseURL: "http://{{local}}", params, ...options });
    return res.data;
}