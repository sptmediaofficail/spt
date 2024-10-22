import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminProviderProfilesRestore02b915a75a5647118b4aEb110408a090MutationRequest, PostAdminProviderProfilesRestore02b915a75a5647118b4aEb110408a090MutationResponse } from "../../../types/PostAdminProviderProfilesRestore02b915a75a5647118b4aEb110408a090";

 /**
 * @summary restore
 * @link /admin/provider-profiles/restore/02b915a7-5a56-4711-8b4a-eb110408a090
 */
export async function postAdminProviderProfilesRestore02b915a75a5647118b4aEb110408a090(data?: PostAdminProviderProfilesRestore02b915a75a5647118b4aEb110408a090MutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminProviderProfilesRestore02b915a75a5647118b4aEb110408a090MutationResponse>["data"]> {
    const res = await client<PostAdminProviderProfilesRestore02b915a75a5647118b4aEb110408a090MutationResponse, PostAdminProviderProfilesRestore02b915a75a5647118b4aEb110408a090MutationRequest>({ method: "post", url: `/admin/provider-profiles/restore/02b915a7-5a56-4711-8b4a-eb110408a090`, baseURL: "http://{{local}}", data, ...options });
    return res.data;
}