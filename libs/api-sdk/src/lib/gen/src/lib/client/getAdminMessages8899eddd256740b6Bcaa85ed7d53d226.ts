import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetAdminMessages8899eddd256740b6Bcaa85ed7d53d226QueryResponse, GetAdminMessages8899eddd256740b6Bcaa85ed7d53d226HeaderParams } from "../../../types/GetAdminMessages8899eddd256740b6Bcaa85ed7d53d226";

 /**
 * @summary Get a specific Unreplied Messages
 * @link /admin/messages/8899eddd-2567-40b6-bcaa-85ed7d53d226
 */
export async function getAdminMessages8899eddd256740b6Bcaa85ed7d53d226(headers?: GetAdminMessages8899eddd256740b6Bcaa85ed7d53d226HeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetAdminMessages8899eddd256740b6Bcaa85ed7d53d226QueryResponse>["data"]> {
    const res = await client<GetAdminMessages8899eddd256740b6Bcaa85ed7d53d226QueryResponse>({ method: "get", url: `/admin/messages/8899eddd-2567-40b6-bcaa-85ed7d53d226`, baseURL: "http://{{local}}", headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}