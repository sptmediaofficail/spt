import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminProviderProfilesVerify09d88c1dFd8a424d9e7cA5d2391cdbd3MutationRequest, PostAdminProviderProfilesVerify09d88c1dFd8a424d9e7cA5d2391cdbd3MutationResponse, PostAdminProviderProfilesVerify09d88c1dFd8a424d9e7cA5d2391cdbd3HeaderParams } from "../../../types/PostAdminProviderProfilesVerify09d88c1dFd8a424d9e7cA5d2391cdbd3";

 /**
 * @summary verify
 * @link /admin/provider-profiles/verify/09d88c1d-fd8a-424d-9e7c-a5d2391cdbd3
 */
export async function postAdminProviderProfilesVerify09d88c1dFd8a424d9e7cA5d2391cdbd3(data?: PostAdminProviderProfilesVerify09d88c1dFd8a424d9e7cA5d2391cdbd3MutationRequest, headers?: PostAdminProviderProfilesVerify09d88c1dFd8a424d9e7cA5d2391cdbd3HeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminProviderProfilesVerify09d88c1dFd8a424d9e7cA5d2391cdbd3MutationResponse>["data"]> {
    const res = await client<PostAdminProviderProfilesVerify09d88c1dFd8a424d9e7cA5d2391cdbd3MutationResponse, PostAdminProviderProfilesVerify09d88c1dFd8a424d9e7cA5d2391cdbd3MutationRequest>({ method: "post", url: `/admin/provider-profiles/verify/09d88c1d-fd8a-424d-9e7c-a5d2391cdbd3`, baseURL: "http://{{local}}", data, headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}