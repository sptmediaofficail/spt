import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetAdminUsersQueryResponse, GetAdminUsersQueryParams, GetAdminUsersHeaderParams } from "../../../types/GetAdminUsers";

 /**
 * @summary index
 * @link /admin/users
 */
export async function getAdminUsers(params?: GetAdminUsersQueryParams, headers?: GetAdminUsersHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetAdminUsersQueryResponse>["data"]> {
    const res = await client<GetAdminUsersQueryResponse>({ method: "get", url: `/admin/users`, baseURL: "http://{{local}}", params, headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}