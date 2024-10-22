import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetAdminSlidersQueryResponse, GetAdminSlidersQueryParams } from "../../../types/GetAdminSliders";

 /**
 * @summary list
 * @link /admin/sliders
 */
export async function getAdminSliders(params?: GetAdminSlidersQueryParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetAdminSlidersQueryResponse>["data"]> {
    const res = await client<GetAdminSlidersQueryResponse>({ method: "get", url: `/admin/sliders`, baseURL: "http://{{local}}", params, ...options });
    return res.data;
}