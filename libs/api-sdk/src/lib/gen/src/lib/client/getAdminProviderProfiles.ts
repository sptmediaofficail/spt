import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetAdminProviderProfilesQueryResponse, GetAdminProviderProfilesQueryParams } from "../../../types/GetAdminProviderProfiles";

 /**
 * @summary index
 * @link /admin/provider-profiles
 */
export async function getAdminProviderProfiles(params?: GetAdminProviderProfilesQueryParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetAdminProviderProfilesQueryResponse>["data"]> {
    const res = await client<GetAdminProviderProfilesQueryResponse>({ method: "get", url: `/admin/provider-profiles`, baseURL: "http://{{local}}", params, ...options });
    return res.data;
}