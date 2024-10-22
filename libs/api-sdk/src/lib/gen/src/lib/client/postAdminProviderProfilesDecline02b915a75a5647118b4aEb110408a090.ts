import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminProviderProfilesDecline02b915a75a5647118b4aEb110408a090MutationRequest, PostAdminProviderProfilesDecline02b915a75a5647118b4aEb110408a090MutationResponse, PostAdminProviderProfilesDecline02b915a75a5647118b4aEb110408a090HeaderParams } from "../../../types/PostAdminProviderProfilesDecline02b915a75a5647118b4aEb110408a090";

 /**
 * @summary decline
 * @link /admin/provider-profiles/decline/02b915a7-5a56-4711-8b4a-eb110408a090
 */
export async function postAdminProviderProfilesDecline02b915a75a5647118b4aEb110408a090(data?: PostAdminProviderProfilesDecline02b915a75a5647118b4aEb110408a090MutationRequest, headers?: PostAdminProviderProfilesDecline02b915a75a5647118b4aEb110408a090HeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminProviderProfilesDecline02b915a75a5647118b4aEb110408a090MutationResponse>["data"]> {
    const res = await client<PostAdminProviderProfilesDecline02b915a75a5647118b4aEb110408a090MutationResponse, PostAdminProviderProfilesDecline02b915a75a5647118b4aEb110408a090MutationRequest>({ method: "post", url: `/admin/provider-profiles/decline/02b915a7-5a56-4711-8b4a-eb110408a090`, baseURL: "http://{{local}}", data, headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}