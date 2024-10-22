import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetClientOrdersC5ad5169F88d4acc8d4f6c985706b224QueryResponse, GetClientOrdersC5ad5169F88d4acc8d4f6c985706b224HeaderParams } from "../../../types/GetClientOrdersC5ad5169F88d4acc8d4f6c985706b224";

 /**
 * @summary details
 * @link /client/orders/c5ad5169-f88d-4acc-8d4f-6c985706b224
 */
export async function getClientOrdersC5ad5169F88d4acc8d4f6c985706b224(headers?: GetClientOrdersC5ad5169F88d4acc8d4f6c985706b224HeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetClientOrdersC5ad5169F88d4acc8d4f6c985706b224QueryResponse>["data"]> {
    const res = await client<GetClientOrdersC5ad5169F88d4acc8d4f6c985706b224QueryResponse>({ method: "get", url: `/client/orders/c5ad5169-f88d-4acc-8d4f-6c985706b224`, baseURL: "http://{{local}}", headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}