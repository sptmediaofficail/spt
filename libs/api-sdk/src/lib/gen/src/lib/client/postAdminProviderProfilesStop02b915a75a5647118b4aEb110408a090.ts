import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminProviderProfilesStop02b915a75a5647118b4aEb110408a090MutationRequest, PostAdminProviderProfilesStop02b915a75a5647118b4aEb110408a090MutationResponse } from "../../../types/PostAdminProviderProfilesStop02b915a75a5647118b4aEb110408a090";

 /**
 * @summary stop
 * @link /admin/provider-profiles/stop/02b915a7-5a56-4711-8b4a-eb110408a090
 */
export async function postAdminProviderProfilesStop02b915a75a5647118b4aEb110408a090(data?: PostAdminProviderProfilesStop02b915a75a5647118b4aEb110408a090MutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminProviderProfilesStop02b915a75a5647118b4aEb110408a090MutationResponse>["data"]> {
    const res = await client<PostAdminProviderProfilesStop02b915a75a5647118b4aEb110408a090MutationResponse, PostAdminProviderProfilesStop02b915a75a5647118b4aEb110408a090MutationRequest>({ method: "post", url: `/admin/provider-profiles/stop/02b915a7-5a56-4711-8b4a-eb110408a090`, baseURL: "http://{{local}}", data, ...options });
    return res.data;
}