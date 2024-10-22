import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetAdminUsers72d5778fB67b4e97B4e2F98f695162a7QueryResponse, GetAdminUsers72d5778fB67b4e97B4e2F98f695162a7HeaderParams } from "../../../types/GetAdminUsers72d5778fB67b4e97B4e2F98f695162a7";

 /**
 * @summary single
 * @link /admin/users/72d5778f-b67b-4e97-b4e2-f98f695162a7
 */
export async function getAdminUsers72d5778fB67b4e97B4e2F98f695162a7(headers?: GetAdminUsers72d5778fB67b4e97B4e2F98f695162a7HeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetAdminUsers72d5778fB67b4e97B4e2F98f695162a7QueryResponse>["data"]> {
    const res = await client<GetAdminUsers72d5778fB67b4e97B4e2F98f695162a7QueryResponse>({ method: "get", url: `/admin/users/72d5778f-b67b-4e97-b4e2-f98f695162a7`, baseURL: "http://{{local}}", headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}